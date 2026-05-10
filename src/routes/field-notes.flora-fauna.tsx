import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { ArrowLeft } from "lucide-react";
import posidonia from "@/assets/posidonia.jpg";
import turtle from "@/assets/turtle.jpg";

export const Route = createFileRoute("/field-notes/flora-fauna")({
  head: () => ({
    meta: [
      { title: "Flora & Fauna — Kriopigi Shore Guide" },
      { name: "description", content: "A field catalogue of Kriopigi's species, zone by zone — from the pine-shaded dune to the deep-water meadows." },
    ],
  }),
  component: FloraFauna,
});

type Species = { sci: string; common: string; note: string; img?: string };
type Zone = { id: string; eyebrow: string; title: string; depth: string; lead: string; species: Species[] };

const zones: Zone[] = [
  {
    id: "dune",
    eyebrow: "Zone 1",
    title: "Dune & Pine Edge",
    depth: "Above the high tide line",
    lead: "The terrestrial fringe — sand-binding plants and the Aleppo pine canopy that shades the shore.",
    species: [
      { sci: "Pinus halepensis", common: "Aleppo pine", note: "Dominant overstory; resin scents the beach in summer heat." },
      { sci: "Pancratium maritimum", common: "Sea daffodil", note: "White trumpet flowers in late August; protected — do not pick." },
      { sci: "Eryngium maritimum", common: "Sea holly", note: "Spiny blue-grey rosettes stabilising the upper sand." },
      { sci: "Cakile maritima", common: "Sea rocket", note: "Pioneer succulent on the strand line; pale lilac flowers." },
      { sci: "Larus michahellis", common: "Yellow-legged gull", note: "Nests on the cliffs above the cove; vocal at dawn." },
    ],
  },
  {
    id: "shore",
    eyebrow: "Zone 2",
    title: "Beach & Wash Zone",
    depth: "0 – 0.5 m",
    lead: "The wet sand and breaking surf — turnover habitat for crabs, isopods, and shorebirds.",
    species: [
      { sci: "Ocypode cursor", common: "Tufted ghost crab", note: "Pale, fast; visible at dusk near burrow entrances on the upper beach." },
      { sci: "Tylos europaeus", common: "Beach isopod", note: "Nocturnal scavenger of stranded seaweed — a sign of a healthy strand line." },
      { sci: "Charadrius alexandrinus", common: "Kentish plover", note: "Small shorebird; nests directly on shingle. Keep clear May–July." },
      { sci: "Donax trunculus", common: "Wedge clam", note: "Filter-feeder in the swash zone; tiny triangular shells wash up after storms." },
    ],
  },
  {
    id: "shallows",
    eyebrow: "Zone 3",
    title: "Shallow Water",
    depth: "0.5 – 5 m",
    lead: "Sun-warmed sand and rocky patches — nursery ground for juveniles and the inner edge of the seagrass meadow.",
    species: [
      { sci: "Atherina hepsetus", common: "Mediterranean sand smelt", note: "Silvery shoals near the surface; often the first fish snorkellers see." },
      { sci: "Diplodus vulgaris", common: "Common two-banded sea bream", note: "Curious juveniles around rocks; two dark bands on a silver body." },
      { sci: "Sarpa salpa", common: "Salema porgy", note: "Schools of 20–60 graze seagrass tips at the meadow's edge." },
      { sci: "Hippocampus hippocampus", common: "Short-snouted seahorse", note: "Rare but resident; clings to algae among shallow rocks." },
      { sci: "Holothuria tubulosa", common: "Cotton-spinner sea cucumber", note: "Slow detritivore on sandy bottoms; do not lift from the substrate." },
    ],
  },
  {
    id: "meadow",
    eyebrow: "Zone 4",
    title: "Posidonia Meadow",
    depth: "5 – 15 m",
    lead: "The Mediterranean's lungs — endemic seagrass beds that oxygenate the bay and shelter its biodiversity.",
    species: [
      { sci: "Posidonia oceanica", common: "Neptune grass", note: "Endemic seagrass; one meter of meadow can be over 100 years old." },
      { sci: "Pinna nobilis", common: "Noble pen shell", note: "Critically endangered fan mussel anchored in the meadow; report sightings." },
      { sci: "Octopus vulgaris", common: "Common octopus", note: "Dens between rocks at the meadow's edge; shell middens betray the entrance." },
      { sci: "Symphodus tinca", common: "Peacock wrasse", note: "Males turn iridescent blue-green during spring courtship over the meadow." },
      { sci: "Sepia officinalis", common: "Common cuttlefish", note: "Lays grape-like egg clusters on Posidonia leaves in late spring." },
    ],
  },
  {
    id: "deep",
    eyebrow: "Zone 5",
    title: "Deep Water & Offshore",
    depth: "15 m and beyond",
    lead: "Beyond the meadow's outer edge — coralligenous reefs, pelagic visitors, and migratory megafauna.",
    species: [
      { sci: "Caretta caretta", common: "Loggerhead sea turtle", note: "Seen surfacing in the bay May–October; juveniles forage on the meadow." },
      { sci: "Tursiops truncatus", common: "Common bottlenose dolphin", note: "Pods of 4–10 transit the gulf; occasional inshore feeding at dawn." },
      { sci: "Thunnus thynnus", common: "Atlantic bluefin tuna", note: "Migratory; offshore boils visible from the headland on calm summer mornings." },
      { sci: "Paramuricea clavata", common: "Violescent sea-whip", note: "Coralligenous gorgonian on deeper rocky outcrops; fragile, never anchor near." },
      { sci: "Scyliorhinus canicula", common: "Small-spotted catshark", note: "Harmless benthic shark; egg cases ('mermaid's purses') wash up after storms." },
    ],
  },
];

function FloraFauna() {
  return (
    <SiteLayout>
      <div className="relative h-64 overflow-hidden">
        <img src={posidonia} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 max-w-3xl mx-auto">
          <Link to="/field-notes" className="inline-flex items-center gap-1 text-xs text-primary-foreground/80 hover:text-primary-foreground">
            <ArrowLeft size={14} /> Field Notes
          </Link>
          <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-primary-foreground/80">III · Living Shore</p>
          <h1 className="font-serif text-4xl text-primary-foreground">Flora &amp; Fauna</h1>
        </div>
      </div>
      <PageHeader eyebrow="Field Catalogue" title="From the pine line to the open sea" lead="Five zones, five ecologies — walk outward from the dune and the species change with the depth of the water." />

      {/* Zone jump nav */}
      <div className="px-5 max-w-3xl mx-auto mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {zones.map((z) => (
            <a key={z.id} href={`#${z.id}`} className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground/80 hover:bg-muted transition-colors whitespace-nowrap">
              {z.title}
            </a>
          ))}
        </div>
      </div>

      <div className="px-5 max-w-3xl mx-auto pb-8 space-y-10">
        {zones.map((z, idx) => (
          <section key={z.id} id={z.id} className="scroll-mt-20">
            <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-accent">{z.eyebrow}</p>
                <h2 className="font-serif text-3xl text-foreground">{z.title}</h2>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{z.depth}</span>
            </div>
            <p className="mt-3 text-muted-foreground leading-relaxed">{z.lead}</p>

            <ul className="mt-5 grid gap-3">
              {z.species.map((s) => (
                <li key={s.sci} className="rounded-xl bg-card border border-border p-4 shadow-soft">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h3 className="font-serif italic text-lg text-foreground">{s.sci}</h3>
                    <span className="text-xs text-accent">{s.common}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-foreground/75 leading-relaxed">{s.note}</p>
                </li>
              ))}
            </ul>

            {idx === 3 && (
              <img src={turtle} alt="" loading="lazy" className="mt-6 w-full h-40 object-cover rounded-xl opacity-90" />
            )}
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
