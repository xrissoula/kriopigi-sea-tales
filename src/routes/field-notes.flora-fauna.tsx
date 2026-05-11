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

      {/* Ecosystem context */}
      <div className="px-5 max-w-3xl mx-auto mb-10 space-y-8">
        <section>
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent">The bigger picture</p>
          <h2 className="mt-1 font-serif text-2xl text-foreground">A Mediterranean mosaic</h2>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            Kassandra — ancient Pallene — is a coastal ecosystem mosaic shaped by limestone geology, dry hot summers, mild wet winters, salt spray, fire, erosion, and thousands of years of human use. Around Kriopigi the landscape switches in just a few hundred metres: upland pine forest, Mediterranean shrubland, rocky coastal slopes, freshwater microhabitats, sandy and pebbled shore, and the shallow marine world beyond.
          </p>
        </section>

        <section className="rounded-2xl bg-card border border-border p-5 shadow-soft">
          <h3 className="font-serif text-xl text-foreground">The forest above the shore</h3>
          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
            Primarily Mediterranean conifer forest, dominated by <em>Aleppo pine (Pinus halepensis)</em>, locally mixed with <em>Turkish pine (Pinus brutia)</em>. Classic eastern-Mediterranean fire-adapted pines: resinous, drought-tolerant, fast colonisers of poor rocky soils.
          </p>
          <h3 className="mt-5 font-serif text-xl text-foreground">Maquis underneath</h3>
          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
            Dense evergreen <em>maquis</em> shrubland fills the understory — kermes oak, lentisk, arbutus, wild olive, myrtle, phillyrea, rosemary, thyme, sage. One of the defining ecosystems of the Mediterranean Basin.
          </p>
          <h3 className="mt-5 font-serif text-xl text-foreground">Phrygana on the dry edges</h3>
          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
            Where soils thin and grazing pressure rises, maquis gives way to <em>phrygana</em>: lower, more open, thornier, more aromatic — heavily adapted to drought and goats.
          </p>
        </section>

        <section className="rounded-2xl bg-card border border-border p-5 shadow-soft">
          <h3 className="font-serif text-xl text-foreground">The coast itself</h3>
          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
            A patchwork of rocky littoral and pocket beach systems. Tidepool organisms, algae, limpets and sea snails on the rocks; crabs in the wrack; octopus dens in the cracks; juvenile fish sheltering in the shallows.
          </p>
          <h3 className="mt-5 font-serif text-xl text-foreground">Posidonia meadow offshore</h3>
          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
            Underwater, the keystone habitat is the <em>Posidonia oceanica</em> meadow. This is not seaweed — it is a true marine flowering plant endemic to the Mediterranean. The meadows are biodiversity hotspots, fish nurseries, sediment stabilisers, and major carbon sinks.
          </p>
          <h3 className="mt-5 font-serif text-xl text-foreground">Why the water is so clear</h3>
          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
            The famous turquoise comes partly from <em>oligotrophic</em> conditions: nutrient-poor water, low plankton density, high visibility — and lower overall productivity than colder seas.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-xl text-foreground">Geology underfoot</h3>
          <p className="mt-2 text-foreground/80 leading-relaxed">
            Kassandra is mostly uplifted limestone and sedimentary coastal terrain, which gives the peninsula its alkaline soils, caves, rocky shelves, erosion-prone cliffs, and the bright turquoise shallows over white carbonate sand.
          </p>
        </section>

        <section className="rounded-2xl bg-gradient-sea p-5 text-primary-foreground shadow-deep">
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">A cultural landscape</p>
          <h3 className="mt-1 font-serif text-xl">Not pristine wilderness</h3>
          <p className="mt-2 text-sm opacity-90 leading-relaxed">
            Ancient logging, grazing, terraced agriculture, olive cultivation, tourism, road building, recurrent fires, coastal development — all of it has shaped what grows here. The shore is better understood as a long-inhabited Mediterranean cultural landscape, where ecology and human history have been intertwined for thousands of years.
          </p>
        </section>
      </div>

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
