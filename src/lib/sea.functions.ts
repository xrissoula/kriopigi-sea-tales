import { createServerFn } from "@tanstack/react-start";

/**
 * Current marine conditions for Kriopigi Beach.
 *
 * Immediate marine conditions come from the Kriopigi data pipeline:
 *   Copernicus Marine -> GitHub Actions -> kriopigi_conditions.json
 *
 * The pipeline also stores a six-day daily outlook (Open-Meteo), because
 * calling Open-Meteo directly from the edge runtime is rate limited and
 * frequently fails in production. Direct calls remain a fallback only.
 */

const LAT = 40.046;
const LON = 23.48;

const CONDITIONS_URL =
  "https://raw.githubusercontent.com/xrissoula/kriopigi-sea-tales/main/data-pipeline/kriopigi_conditions.json";

export type SeaDay = {
  date: string;
  sst: number | null;
  waveHeight: number | null;
  windSpeed: number | null;
  windDirection: number | null;
};

export type SeaConditions = {
  source: { name: string; url: string };
  issuedAt: string | null;
  fetchedAt: string;
  current: {
    time: string | null;
    sst: number | null;
    waveHeight: number | null;
    waveDirection: number | null;
    currentVelocity: number | null;
    currentDirection: number | null;
    airTemp: number | null;
    windSpeed: number | null;
    windDirection: number | null;
    cloudCover: number | null;
    sunrise: string | null;
    sunset: string | null;
  };
  waterQuality: {
    salinity: number | null;
    chlorophyll: number | null;
  };
  days: SeaDay[];
};

const num = (v: unknown): number | null =>
  typeof v === "number" && Number.isFinite(v) ? v : null;

const str = (v: unknown): string | null =>
  typeof v === "string" && v.length > 0 ? v : null;

async function getJson(url: string): Promise<any | null> {
  try {
    const res = await fetch(url, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/** Daily outlook carried by our own pipeline JSON. */
function daysFromPipeline(live: any): SeaDay[] {
  const raw = Array.isArray(live?.daily) ? live.daily : [];
  return raw
    .filter((d: any) => str(d?.date))
    .map((d: any) => ({
      date: d.date as string,
      sst: num(d?.sea_temperature_max_c),
      waveHeight: num(d?.wave_height_max_m),
      windSpeed: num(d?.wind_speed_max_kmh),
      windDirection: num(d?.wind_direction_dominant_degrees),
    }));
}

/** Fallback: ask Open-Meteo directly (works in dev, unreliable at the edge). */
async function daysFromOpenMeteo(): Promise<{
  days: SeaDay[];
  sunrise: string | null;
  sunset: string | null;
}> {
  const weatherUrl =
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
    "&daily=sunrise,sunset,wind_speed_10m_max,wind_direction_10m_dominant" +
    "&forecast_days=6&timezone=Europe%2FAthens";

  const marineDailyUrl =
    `https://marine-api.open-meteo.com/v1/marine?latitude=${LAT}&longitude=${LON}` +
    "&daily=wave_height_max,sea_surface_temperature_max" +
    "&forecast_days=6&timezone=Europe%2FAthens";

  const [weather, marineDaily] = await Promise.all([
    getJson(weatherUrl),
    getJson(marineDailyUrl),
  ]);

  const dates: string[] =
    weather?.daily?.time ?? marineDaily?.daily?.time ?? [];

  const days: SeaDay[] = dates.map((date: string, i: number) => ({
    date,
    sst: num(marineDaily?.daily?.sea_surface_temperature_max?.[i]),
    waveHeight: num(marineDaily?.daily?.wave_height_max?.[i]),

    // Open-Meteo wind values are km/h by default, which is exactly
    // what the sea-narrative helpers expect.
    windSpeed: num(weather?.daily?.wind_speed_10m_max?.[i]),
    windDirection: num(weather?.daily?.wind_direction_10m_dominant?.[i]),
  }));

  return {
    days,
    sunrise: str(weather?.daily?.sunrise?.[0]),
    sunset: str(weather?.daily?.sunset?.[0]),
  };
}

export const getSeaConditions = createServerFn({ method: "GET" }).handler(
  async (): Promise<SeaConditions> => {
    const live = await getJson(CONDITIONS_URL);

    if (!live) {
      throw new Error("Current Kriopigi conditions unavailable");
    }

    let days = daysFromPipeline(live);
    let sunrise = str(live?.daily?.[0]?.sunrise);
    let sunset = str(live?.daily?.[0]?.sunset);

    if (days.length === 0 || sunrise == null) {
      const fallback = await daysFromOpenMeteo();
      if (days.length === 0) days = fallback.days;
      sunrise = sunrise ?? fallback.sunrise;
      sunset = sunset ?? fallback.sunset;
    }

    const currentSpeedMs = num(live?.marine?.current?.speed_m_s);
    const windSpeedMs = num(live?.weather?.wind?.speed_m_s);

    /*
     * The Conditions UI expects currentVelocity and windSpeed in km/h;
     * the pipeline JSON stores both in m/s.
     */
    const currentVelocityKmh =
      currentSpeedMs == null ? null : currentSpeedMs * 3.6;

    const windSpeedKmh = windSpeedMs == null ? null : windSpeedMs * 3.6;

    return {
      source: {
        name: "Copernicus Marine + Open-Meteo",
        url: "https://marine.copernicus.eu/",
      },

      issuedAt: live?.generated_at_utc ?? null,
      fetchedAt: new Date().toISOString(),

      current: {
        time: live?.generated_at_utc ?? null,

        sst: num(live?.marine?.sea_temperature_c),

        waveHeight: num(live?.marine?.waves?.significant_height_m),
        waveDirection: num(live?.marine?.waves?.from_degrees),

        currentVelocity: currentVelocityKmh,
        currentDirection: num(live?.marine?.current?.toward_degrees),

        airTemp: num(live?.weather?.air_temperature_c),

        windSpeed: windSpeedKmh,
        windDirection: num(live?.weather?.wind?.from_degrees),

        cloudCover: num(live?.weather?.cloud_cover_percent),

        sunrise,
        sunset,
      },

      /*
       * Not yet supplied by the Kriopigi pipeline.
       * The UI already hides null values.
       */
      waterQuality: {
        salinity: null,
        chlorophyll: null,
      },

      days,
    };
  },
);
