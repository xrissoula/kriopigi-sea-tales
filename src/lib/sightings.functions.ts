import { createServerFn } from "@tanstack/react-start";

/**
 * Recent local sightings for Kriopigi.
 *
 * iNaturalist -> GitHub Actions -> kriopigi_sightings.json
 */

const SIGHTINGS_URL =
  "https://raw.githubusercontent.com/xrissoula/kriopigi-sea-tales/main/data-pipeline/kriopigi_sightings.json";

export type Sighting = {
  id: number;
  observedOn: string | null;
  place: string | null;
  scientificName: string | null;
  commonName: string | null;
  qualityGrade: string | null;
  observer: string | null;
  photoUrl: string | null;
  url: string;
};

export type SightingsFeed = {
  fetchedAt: string;
  count: number;
  sightings: Sighting[];
};

const str = (v: unknown): string | null =>
  typeof v === "string" && v.length > 0 ? v : null;

export const getRecentSightings = createServerFn({ method: "GET" }).handler(
  async (): Promise<SightingsFeed> => {
    let raw: any = null;
    try {
      const res = await fetch(SIGHTINGS_URL, {
        headers: { accept: "application/json" },
        cache: "no-store",
      });
      if (res.ok) raw = await res.json();
    } catch {
      raw = null;
    }

    const list = Array.isArray(raw?.sightings) ? raw.sightings : [];

    const sightings: Sighting[] = list
      .filter((s: any) => typeof s?.id === "number")
      .map((s: any) => ({
        id: s.id,
        observedOn: str(s.observed_on),
        place: str(s.place_guess),
        scientificName: str(s.scientific_name),
        commonName: str(s.common_name) ?? str(s.species_guess),
        qualityGrade: str(s.quality_grade),
        observer: str(s.observer),
        photoUrl: str(s.photo_url),
        url: str(s.url) ?? `https://www.inaturalist.org/observations/${s.id}`,
      }));

    return {
      fetchedAt: new Date().toISOString(),
      count: sightings.length,
      sightings,
    };
  },
);
