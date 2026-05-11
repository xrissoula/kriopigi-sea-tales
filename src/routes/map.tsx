import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Waves, TreePine, Leaf, Sprout, Droplets, Anchor, Footprints, Mountain, Compass, KeyRound } from "lucide-react";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Interactive Map — Kriopigi Shore Guide" },
      { name: "description", content: "Spatial story of Kriopigi Beach — meadows, maquis, springs, and ancient shorelines mapped along the Kassandra coast." },
      { property: "og:title", content: "Interactive Map — Kriopigi Shore Guide" },
      { property: "og:description", content: "A cinematic, mobile-first map of Kriopigi's habitats and history." },
    ],
  }),
  component: MapPage,
});

// Kriopigi Beach approximate center
const KRIOPIGI: [number, number] = [23.5106, 40.0094];

type Site = {
  id: string;
  title: string;
  coords: [number, number];
  kind: "habitat" | "hydrology" | "snorkel" | "heritage" | "geology";
  icon: React.ComponentType<{ size?: number }>;
  description: string;
  fieldNotes?: string;
  tags: string[];
};

const SITES: Site[] = [
  {
    id: "posidonia",
    title: "Posidonia oceanica meadow",
    coords: [23.5118, 40.0061],
    kind: "habitat",
    icon: Waves,
    description: "Endemic seagrass meadow oxygenating the bay, sheltering juvenile fish, and locking carbon in centuries-old root mats.",
    fieldNotes: "Visible as a dark band 30–80 m offshore on calm mornings. Avoid anchoring — chains scour the meadow.",
    tags: ["Seagrass", "Carbon sink", "Nursery"],
  },
  {
    id: "pine",
    title: "Coastal pine forest",
    coords: [23.5089, 40.0118],
    kind: "habitat",
    icon: TreePine,
    description: "Aleppo and Turkish pine canopy on the bluff above the cove — resin-scented, fire-adapted, shading the path to the shore.",
    tags: ["Pinus halepensis", "Forest"],
  },
  {
    id: "maquis",
    title: "Maquis shrubland",
    coords: [23.5072, 40.0102],
    kind: "habitat",
    icon: Leaf,
    description: "Dense evergreen scrub — kermes oak, lentisk, myrtle, wild olive — one of the defining ecosystems of the Mediterranean Basin.",
    tags: ["Shrubland", "Endemic"],
  },
  {
    id: "phrygana",
    title: "Phrygana dry-edge habitat",
    coords: [23.5061, 40.0085],
    kind: "habitat",
    icon: Sprout,
    description: "Lower, thornier, more aromatic than maquis. Thin soils and grazing pressure favour drought-adapted herbs and reptiles.",
    fieldNotes: "Watch for Hermann's tortoise on cool mornings along the rocky verges.",
    tags: ["Drought-adapted", "Reptiles"],
  },
  {
    id: "gully",
    title: "Seasonal drainage gully",
    coords: [23.5051, 40.0073],
    kind: "hydrology",
    icon: Droplets,
    description: "An erosion channel carrying winter rain off the limestone uplands to the shore — dry most of the year, alive after storms.",
    tags: ["Hydrology", "Erosion"],
  },
  {
    id: "spring",
    title: "Freshwater spring",
    coords: [23.5097, 40.0079],
    kind: "hydrology",
    icon: Droplets,
    description: "A cool karstic seep emerging where limestone meets the beach — a small but reliable freshwater input to the nearshore.",
    fieldNotes: "Local memory recalls villagers filling jugs here before piped water arrived.",
    tags: ["Karst", "Spring"],
  },
  {
    id: "snorkel",
    title: "Rocky snorkel entry",
    coords: [23.5128, 40.0083],
    kind: "snorkel",
    icon: Footprints,
    description: "Wave-cut limestone shelf on the south end of the cove — easy entry into clear water above the meadow's inner edge.",
    tags: ["Snorkel", "Rocky shore"],
  },
  {
    id: "ancient",
    title: "Ancient shoreline",
    coords: [23.5141, 40.0108],
    kind: "heritage",
    icon: Anchor,
    description: "A notch in the cliff marks a Holocene sea level — the shore once stood several metres higher than today.",
    tags: ["Archaeology", "Sea level"],
  },
  {
    id: "erosion",
    title: "Coastal erosion zone",
    coords: [23.5083, 40.0049],
    kind: "geology",
    icon: Mountain,
    description: "Slumping cliffs of soft sediment exposing buried soil horizons — a record of the bay's recent geomorphic instability.",
    tags: ["Geology", "Erosion"],
  },
];

const KIND_COLORS: Record<Site["kind"], string> = {
  habitat: "oklch(0.55 0.11 145)",
  hydrology: "oklch(0.65 0.12 220)",
  snorkel: "oklch(0.6 0.13 200)",
  heritage: "oklch(0.55 0.08 60)",
  geology: "oklch(0.5 0.06 50)",
};

function MapPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const DEFAULT_TOKEN = "pk.eyJ1IjoieHJpc3NvdWxhIiwiYSI6ImNtcDBvcnkxZTA2bDMycHBvMXBlbXE4ZWEifQ.HMMVNRbE-XEEggoyS22Jig";
  const [token, setToken] = useState<string>(DEFAULT_TOKEN);
  const [tokenInput, setTokenInput] = useState("");
  const [active, setActive] = useState<Site | null>(null);

  useEffect(() => {
    if (!token || !containerRef.current || mapRef.current) return;
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: KRIOPIGI,
      zoom: 14.4,
      pitch: 55,
      bearing: -18,
      attributionControl: true,
    });
    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");
    map.scrollZoom.disable();

    map.on("load", () => {
      // Soft Mediterranean tint over the basemap
      map.setFog({
        color: "oklch(0.92 0.03 85)",
        "high-color": "oklch(0.7 0.08 220)",
        "horizon-blend": 0.15,
        "space-color": "oklch(0.25 0.05 240)",
        "star-intensity": 0.0,
      });

      // Terrain
      if (!map.getSource("mapbox-dem")) {
        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14,
        });
        map.setTerrain({ source: "mapbox-dem", exaggeration: 1.4 });
      }

      // Animated water ripple overlay using a pulsing circle layer at the bay
      map.addSource("ripple", {
        type: "geojson",
        data: { type: "Feature", geometry: { type: "Point", coordinates: KRIOPIGI }, properties: {} },
      });
      map.addLayer({
        id: "ripple-glow",
        type: "circle",
        source: "ripple",
        paint: {
          "circle-radius": 40,
          "circle-color": "oklch(0.7 0.13 220)",
          "circle-opacity": 0.18,
          "circle-blur": 1,
        },
      });

      let t = 0;
      const animate = () => {
        if (!mapRef.current) return;
        t += 0.02;
        const r = 40 + Math.sin(t) * 22;
        const o = 0.18 + (Math.sin(t) + 1) * 0.06;
        try {
          if (map.getLayer("ripple-glow")) {
            map.setPaintProperty("ripple-glow", "circle-radius", r);
            map.setPaintProperty("ripple-glow", "circle-opacity", o);
          }
        } catch {}
        requestAnimationFrame(animate);
      };
      animate();
    });

    // Markers
    SITES.forEach((site) => {
      const el = document.createElement("button");
      el.className = "kriopigi-marker";
      el.setAttribute("aria-label", site.title);
      el.style.cssText = `
        width: 28px; height: 28px; border-radius: 9999px; border: 0; cursor: pointer;
        background: ${KIND_COLORS[site.kind]};
        box-shadow: 0 0 0 4px oklch(0.98 0.01 85 / 0.7), 0 0 18px ${KIND_COLORS[site.kind]};
        display: grid; place-items: center; color: white;
        animation: kriopigiPulse 2.6s ease-in-out infinite;
      `;
      el.innerHTML = `<span style="width:8px;height:8px;border-radius:9999px;background:white;display:block;"></span>`;
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        setActive(site);
        map.flyTo({ center: site.coords, zoom: 15.6, pitch: 60, speed: 0.7, curve: 1.6 });
      });
      new mapboxgl.Marker({ element: el }).setLngLat(site.coords).addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [token]);

  function saveToken(e: React.FormEvent) {
    e.preventDefault();
    if (!tokenInput.trim()) return;
    localStorage.setItem("mapbox_token", tokenInput.trim());
    setToken(tokenInput.trim());
  }

  return (
    <SiteLayout>
      <style>{`
        @keyframes kriopigiPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .mapboxgl-popup-content {
          background: oklch(0.98 0.01 85);
          border: 1px solid oklch(0.85 0.04 85);
          border-radius: 14px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 20px 50px -20px oklch(0.3 0.05 240 / 0.4);
        }
        .mapboxgl-popup-tip { border-top-color: oklch(0.98 0.01 85) !important; }
        .mapboxgl-ctrl-attrib { background: oklch(0.98 0.01 85 / 0.7) !important; }
      `}</style>

      <div className="px-5 max-w-5xl mx-auto pt-4">
        <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Spatial story</p>
        <h1 className="font-serif text-3xl text-foreground">The Cove, Mapped</h1>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          A field map of Kriopigi where geology, water, vegetation, marine life, and human history meet. Tap a marker to read its story.
        </p>
      </div>

      <div className="px-5 max-w-5xl mx-auto mt-5">
        <div className="relative h-[70vh] min-h-[480px] rounded-2xl overflow-hidden shadow-deep border border-border bg-gradient-sea">
          {!token ? (
            <div className="absolute inset-0 grid place-items-center p-6">
              <form onSubmit={saveToken} className="max-w-sm w-full bg-card/95 backdrop-blur border border-border rounded-2xl p-5 shadow-deep">
                <div className="flex items-center gap-2 text-accent">
                  <KeyRound size={16} />
                  <p className="text-[10px] uppercase tracking-[0.25em]">Mapbox token</p>
                </div>
                <h2 className="mt-1 font-serif text-xl text-foreground">Enter a public Mapbox token</h2>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Get a free public token at{" "}
                  <a className="underline decoration-accent/40 underline-offset-2" href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer">
                    account.mapbox.com
                  </a>
                  . Stored only in your browser.
                </p>
                <input
                  type="text"
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  placeholder="pk.eyJ1Ijoi..."
                  className="mt-3 w-full text-xs px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                />
                <button type="submit" className="mt-3 w-full rounded-lg bg-accent text-accent-foreground text-sm py-2 font-medium hover:opacity-90 transition">
                  Load map
                </button>
              </form>
            </div>
          ) : (
            <div ref={containerRef} className="absolute inset-0" />
          )}

          {active && (
            <div className="absolute left-3 right-3 bottom-3 sm:left-auto sm:right-3 sm:bottom-3 sm:max-w-sm animate-fade-in">
              <article className="rounded-2xl bg-card/95 backdrop-blur border border-border shadow-deep overflow-hidden">
                <div className="h-32 bg-gradient-sea relative">
                  <div className="absolute inset-0 grid place-items-center text-primary-foreground/80">
                    <active.icon size={36} />
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 text-foreground grid place-items-center text-sm shadow-soft"
                  >
                    ×
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent">{active.kind}</p>
                  <h3 className="font-serif text-xl text-foreground leading-tight">{active.title}</h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{active.description}</p>
                  {active.fieldNotes && (
                    <div className="mt-3 rounded-lg bg-muted/50 border border-border p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Field notes</p>
                      <p className="text-xs text-foreground/75 mt-1 leading-relaxed">{active.fieldNotes}</p>
                    </div>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {active.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-border bg-background text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          )}

          {token && (
            <button
              onClick={() => {
                localStorage.removeItem("mapbox_token");
                setToken("");
                setTokenInput("");
              }}
              className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-background/85 text-foreground/70 border border-border hover:text-foreground transition"
            >
              Reset token
            </button>
          )}
        </div>

        {/* Legend */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SITES.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActive(s);
                  mapRef.current?.flyTo({ center: s.coords, zoom: 15.6, pitch: 60, speed: 0.7, curve: 1.6 });
                }}
                className="flex items-start gap-2 text-left rounded-xl border border-border bg-card p-3 shadow-soft hover:shadow-deep transition"
              >
                <span
                  className="w-7 h-7 rounded-full grid place-items-center text-white shrink-0"
                  style={{ background: KIND_COLORS[s.kind] }}
                >
                  <Icon size={13} />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{s.kind}</p>
                  <p className="font-serif text-sm text-foreground leading-tight truncate">{s.title}</p>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-4 mb-2 text-[11px] text-muted-foreground flex items-center gap-1.5">
          <Compass size={12} /> Coordinates and stories are placeholders — refine as field notes are collected.
        </p>
      </div>
    </SiteLayout>
  );
}
