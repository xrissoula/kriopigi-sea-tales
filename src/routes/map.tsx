import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { MapPin, Anchor, Droplets, TreePine, Waves } from "lucide-react";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Map — Kriopigi Shore Guide" },
      { name: "description", content: "Interactive map of Kriopigi Beach with snorkeling sites, springs, trails, and points of interest." },
    ],
  }),
  component: MapPage,
});

const points = [
  { x: 28, y: 38, label: "Cold Spring", icon: Droplets, kind: "Hydrology" },
  { x: 52, y: 55, label: "North Cove", icon: Waves, kind: "Snorkel" },
  { x: 65, y: 70, label: "Pine Trail", icon: TreePine, kind: "Walk" },
  { x: 78, y: 42, label: "Old Harbor", icon: Anchor, kind: "Heritage" },
  { x: 42, y: 75, label: "Posidonia Bed", icon: MapPin, kind: "Habitat" },
];

function MapPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Geospatial" title="The Cove, Mapped" lead="Tap a marker to learn what lives, flows, or remembers there. A real basemap will be wired up next." />
      <div className="px-5 max-w-5xl mx-auto">
        <div className="relative aspect-[4/5] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-deep border border-border bg-gradient-sea">
          {/* Stylized coastline placeholder */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="land" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.05 85)" />
                <stop offset="100%" stopColor="oklch(0.7 0.07 95)" />
              </linearGradient>
            </defs>
            <path d="M0,0 L100,0 L100,30 Q70,35 55,55 Q40,75 20,80 Q5,82 0,75 Z" fill="url(#land)" opacity="0.95" />
            <path d="M0,75 Q5,82 20,80 Q40,75 55,55 Q70,35 100,30" fill="none" stroke="oklch(0.95 0.02 85)" strokeWidth="0.4" />
          </svg>
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <button key={p.label} style={{ left: `${p.x}%`, top: `${p.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2 group">
                <span className="block w-9 h-9 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-deep ring-4 ring-background/40 animate-drift">
                  <Icon size={16} />
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-background/90 text-foreground shadow-soft opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition">
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>

        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <span className="w-9 h-9 rounded-full bg-secondary grid place-items-center text-accent shrink-0"><Icon size={16} /></span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.kind}</p>
                  <p className="font-serif text-lg text-foreground leading-tight">{p.label}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Sample interpretive note will appear here once curated.</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </SiteLayout>
  );
}
