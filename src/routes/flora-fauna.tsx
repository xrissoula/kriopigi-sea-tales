import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import posidonia from "@/assets/posidonia.jpg";
import turtle from "@/assets/turtle.jpg";
import pineForestShore from "@/assets/pine-forest-shore.jpeg";
import maquisShrubland from "@/assets/maquis-shrubland.jpeg";
import phryganaTortoise from "@/assets/phrygana-tortoise.jpeg";

export const Route = createFileRoute("/flora-fauna")({
  head: () => ({
    meta: [
      { title: "Flora & Fauna — Kriopigi Shore Guide" },
      { name: "description", content: "A field catalogue of Kriopigi's species, zone by zone — from the pine-shaded dune to the deep-water meadows." },
      { property: "og:title", content: "Flora & Fauna — Kriopigi Shore Guide" },
      { property: "og:description", content: "From the pine line to the open sea: five ecological zones of the Kriopigi shore." },
    ],
  }),
  component: FloraFauna,
});

type Species = { sci: string; common: string; note: string; img?: string; wiki?: string };
type Zone = { id: string; eyebrow: string; title: string; depth: string; lead: string; species: Species[] };

const zones: Zone[] = [
  {
    id: "dune",
    eyebrow: "Zone 1",
    title: "Dune & Pine Edge",
    depth: "Above the high tide line",
    lead: "The terrestrial fringe — sand-binding plants and the Aleppo pine canopy that shades the shore.",
    species: [
      { sci: "Pinus halepensis", common: "Aleppo pine", note: "Dominant overstory; resin scents the beach in summer heat.", wiki: "https://en.wikipedia.org/wiki/Pinus_halepensis", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/%CE%A7%CE%B1%CE%BB%CE%AD%CF%80%CE%B9%CE%BF%CF%82_%CF%80%CE%B5%CF%8D%CE%BA%CE%B7_%CE%A3%CE%BF%CF%8D%CE%BD%CE%B9%CE%BF_1963.jpg/330px-%CE%A7%CE%B1%CE%BB%CE%AD%CF%80%CE%B9%CE%BF%CF%82_%CF%80%CE%B5%CF%8D%CE%BA%CE%B7_%CE%A3%CE%BF%CF%8D%CE%BD%CE%B9%CE%BF_1963.jpg" },
      { sci: "Eryngium maritimum", common: "Sea holly", note: "Spiny blue-grey rosettes stabilising the upper sand.", wiki: "https://en.wikipedia.org/wiki/Eryngium_maritimum", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Eryngium_maritimum_-_geograph.org.uk_-_496275.jpg/330px-Eryngium_maritimum_-_geograph.org.uk_-_496275.jpg" },
      { sci: "Cakile maritima", common: "Sea rocket", note: "Pioneer succulent on the strand line; pale lilac flowers.", wiki: "https://en.wikipedia.org/wiki/Cakile_maritima", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cakile_maritima_Rad%C3%A8s_beach.jpg/330px-Cakile_maritima_Rad%C3%A8s_beach.jpg" },
      { sci: "Larus michahellis", common: "Yellow-legged gull", note: "Nests on the cliffs above the cove; vocal at dawn.", wiki: "https://en.wikipedia.org/wiki/Yellow-legged_gull", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Yellow-legged_Gull_2023-10-10.jpg/330px-Yellow-legged_Gull_2023-10-10.jpg" },
    ],
  },
  {
    id: "shore",
    eyebrow: "Zone 2",
    title: "Beach & Wash Zone",
    depth: "0 – 0.5 m",
    lead: "The wet sand and breaking surf — turnover habitat for crabs, isopods, and shorebirds.",
    species: [
      { sci: "Ocypode cursor", common: "Tufted ghost crab", note: "Pale, fast; visible at dusk near burrow entrances on the upper beach.", wiki: "https://en.wikipedia.org/wiki/Ocypode_cursor", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ocypode_cursor_1.jpg/330px-Ocypode_cursor_1.jpg" },
      { sci: "Tylos europaeus", common: "Beach isopod", note: "Nocturnal scavenger of stranded seaweed — a sign of a healthy strand line.", wiki: "https://en.wikipedia.org/wiki/Tylos_(crustacean)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tylos_punctatus_dorsal.jpg/330px-Tylos_punctatus_dorsal.jpg" },
      { sci: "Charadrius alexandrinus", common: "Kentish plover", note: "Small shorebird; nests directly on shingle. Keep clear May–July.", wiki: "https://en.wikipedia.org/wiki/Kentish_plover", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Kentish_Plover_Charadrius_alexandrinus%2C_India.jpg/330px-Kentish_Plover_Charadrius_alexandrinus%2C_India.jpg" },
      { sci: "Donax trunculus", common: "Wedge clam", note: "Filter-feeder in the swash zone; tiny triangular shells wash up after storms.", wiki: "https://en.wikipedia.org/wiki/Donax_trunculus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Donax_trunculus_MHNT.jpg/330px-Donax_trunculus_MHNT.jpg" },
    ],
  },
  {
    id: "shallows",
    eyebrow: "Zone 3",
    title: "Shallow Water",
    depth: "0.5 – 5 m",
    lead: "Sun-warmed sand and rocky patches — nursery ground for juveniles and the inner edge of the seagrass meadow.",
    species: [
      { sci: "Atherina hepsetus", common: "Mediterranean sand smelt", note: "Silvery shoals near the surface; often the first fish snorkellers see.", wiki: "https://en.wikipedia.org/wiki/Atherina_hepsetus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Atherina_hepsetus_449181144.jpg/330px-Atherina_hepsetus_449181144.jpg" },
      { sci: "Diplodus vulgaris", common: "Common two-banded sea bream", note: "Curious juveniles around rocks; two dark bands on a silver body.", wiki: "https://en.wikipedia.org/wiki/Diplodus_vulgaris", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Mojarra_%28Diplodus_vulgaris%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-31%2C_DD_20.jpg/330px-Mojarra_%28Diplodus_vulgaris%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-31%2C_DD_20.jpg" },
      { sci: "Sarpa salpa", common: "Salema porgy", note: "Schools of 20–60 graze seagrass tips at the meadow's edge.", wiki: "https://en.wikipedia.org/wiki/Salema_porgy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sarpa_salpa_.jpg/330px-Sarpa_salpa_.jpg" },
      { sci: "Hippocampus hippocampus", common: "Short-snouted seahorse", note: "Rare but resident; clings to algae among shallow rocks.", wiki: "https://en.wikipedia.org/wiki/Hippocampus_hippocampus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg/330px-Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg" },
      { sci: "Holothuria tubulosa", common: "Cotton-spinner sea cucumber", note: "Slow detritivore on sandy bottoms; do not lift from the substrate.", wiki: "https://en.wikipedia.org/wiki/Holothuria_tubulosa", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Holothuria_tubulosa_Banyuls.jpg/330px-Holothuria_tubulosa_Banyuls.jpg" },
    ],
  },
  {
    id: "meadow",
    eyebrow: "Zone 4",
    title: "Posidonia Meadow",
    depth: "5 – 15 m",
    lead: "The Mediterranean's lungs — endemic seagrass beds that oxygenate the bay and shelter its biodiversity.",
    species: [
      { sci: "Posidonia oceanica", common: "Neptune grass", note: "Endemic seagrass; one meter of meadow can be over 100 years old.", wiki: "https://en.wikipedia.org/wiki/Posidonia_oceanica", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Posidonia_oceanica_%28L%29.jpg/330px-Posidonia_oceanica_%28L%29.jpg" },
      { sci: "Pinna nobilis", common: "Noble pen shell", note: "Critically endangered fan mussel anchored in the meadow; report sightings.", wiki: "https://en.wikipedia.org/wiki/Pinna_nobilis", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Pinnidae_-_Pinna_nobilis.jpg/330px-Pinnidae_-_Pinna_nobilis.jpg" },
      { sci: "Octopus vulgaris", common: "Common octopus", note: "Dens between rocks at the meadow's edge; shell middens betray the entrance.", wiki: "https://en.wikipedia.org/wiki/Common_octopus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/330px-Octopus2.jpg" },
      { sci: "Symphodus tinca", common: "Peacock wrasse", note: "Males turn iridescent blue-green during spring courtship over the meadow.", wiki: "https://en.wikipedia.org/wiki/Symphodus_tinca", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Symphodus_tinca_m%C3%A2le_avec_des_femelles_%28Linnaeus%2C_1758%29.jpg/330px-Symphodus_tinca_m%C3%A2le_avec_des_femelles_%28Linnaeus%2C_1758%29.jpg" },
      { sci: "Sepia officinalis", common: "Common cuttlefish", note: "Lays grape-like egg clusters on Posidonia leaves in late spring.", wiki: "https://en.wikipedia.org/wiki/Common_cuttlefish", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sepia_com%C3%BAn_%28Sepia_officinalis%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-21%2C_DD_62.jpg/330px-Sepia_com%C3%BAn_%28Sepia_officinalis%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-21%2C_DD_62.jpg" },
    ],
  },
  {
    id: "deep",
    eyebrow: "Zone 5",
    title: "Deep Water & Offshore",
    depth: "15 m and beyond",
    lead: "Beyond the meadow's outer edge — coralligenous reefs, pelagic visitors, and migratory megafauna.",
    species: [
      { sci: "Caretta caretta", common: "Loggerhead sea turtle", note: "Seen surfacing in the bay May–October; juveniles forage on the meadow.", wiki: "https://en.wikipedia.org/wiki/Loggerhead_sea_turtle", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Loggerhead_sea_turtle.jpg/330px-Loggerhead_sea_turtle.jpg" },
      { sci: "Tursiops truncatus", common: "Common bottlenose dolphin", note: "Pods of 4–10 transit the gulf; occasional inshore feeding at dawn.", wiki: "https://en.wikipedia.org/wiki/Common_bottlenose_dolphin", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Tursiops_truncatus_01-cropped.jpg/330px-Tursiops_truncatus_01-cropped.jpg" },
      { sci: "Thunnus thynnus", common: "Atlantic bluefin tuna", note: "Migratory; offshore boils visible from the headland on calm summer mornings.", wiki: "https://en.wikipedia.org/wiki/Atlantic_bluefin_tuna", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bluefin-big.jpg/330px-Bluefin-big.jpg" },
      { sci: "Paramuricea clavata", common: "Violescent sea-whip", note: "Coralligenous gorgonian on deeper rocky outcrops; fragile, never anchor near.", wiki: "https://en.wikipedia.org/wiki/Paramuricea_clavata", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Paramuricea_clavata_%28Risso%2C_1826%29_3.jpg/330px-Paramuricea_clavata_%28Risso%2C_1826%29_3.jpg" },
      { sci: "Scyliorhinus canicula", common: "Small-spotted catshark", note: "Harmless benthic shark; egg cases ('mermaid's purses') wash up after storms.", wiki: "https://en.wikipedia.org/wiki/Small-spotted_catshark", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Scyliorhinus_canicula.jpg/330px-Scyliorhinus_canicula.jpg" },
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
          <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/80">Living Shore</p>
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
          <figure className="-mx-5 -mt-5 mb-5 overflow-hidden">
            <img src={pineForestShore} alt="Aleppo pines silhouetted above the Kriopigi shoreline at dusk, with the Thermaic Gulf glowing pink behind their trunks." loading="lazy" className="w-full h-56 object-cover" />
            <figcaption className="px-5 py-2 text-[11px] text-muted-foreground border-b border-border bg-muted/30">Aleppo pine canopy along the bluff above Kriopigi at dusk.</figcaption>
          </figure>
          <h3 className="font-serif text-xl text-foreground">The forest above the shore</h3>
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mt-1">Forest canopy</p>
          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
            Primarily Mediterranean conifer forest, dominated by <em>Aleppo pine (Pinus halepensis)</em>, locally mixed with <em>Turkish pine (Pinus brutia)</em>. Classic eastern-Mediterranean fire-adapted pines: resinous, drought-tolerant, fast colonisers of poor rocky soils.
          </p>
          <h3 className="mt-6 font-serif text-xl text-foreground">Maquis underneath</h3>
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mt-1">Dense understory</p>
          <figure className="mt-3 -mx-5 overflow-hidden">
            <img src={maquisShrubland} alt="A sandy footpath descending through dense maquis shrubland to the turquoise shallows of a Kriopigi cove." loading="lazy" className="w-full h-auto object-contain bg-muted" />
            <figcaption className="px-5 py-2 text-[11px] text-muted-foreground bg-muted/30 border-y border-border">Maquis flanking a path down to the cove.</figcaption>
          </figure>
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
            Dense evergreen <em>maquis</em> shrubland fills the understory — kermes oak, lentisk, arbutus, wild olive, myrtle, phillyrea, rosemary, thyme, sage. One of the defining ecosystems of the Mediterranean Basin.
          </p>
          <h3 className="mt-5 font-serif text-xl text-foreground">Phrygana on the dry edges</h3>
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mt-1">Degraded / exposed dry edge ecology</p>
          <figure className="mt-3 -mx-5 overflow-hidden">
            <img src={phryganaTortoise} alt="Dry-edge phrygana habitat above Kriopigi: thin rocky soil, sparse drought-adapted scrub, and an erosional drainage cut beside a dirt track, with a Boettger's tortoise picking its way across the bank." loading="lazy" className="w-full h-auto object-contain bg-muted" />
            <figcaption className="px-5 py-2 text-[11px] text-muted-foreground bg-muted/30 border-y border-border">Phrygana scrub and a seasonal erosion channel above the shore — habitat for species like the Boettger's tortoise, just visible on the bank.</figcaption>
          </figure>
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
            Where soils thin and grazing pressure rises, maquis gives way to <em>phrygana</em>: lower, more open, thornier, more aromatic — heavily adapted to drought and goats. The exposed substrate, sparse scrub, and small drainage cuts that score these dry edges are part of the same picture: thin Mediterranean soils carrying episodic rain downhill, and edge habitat for reptiles like Hermann's / Boettger's tortoise (<em>Testudo hermanni boettgeri</em>) that thrive in this mosaic of rock, grass, and low cover.
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
                    {s.wiki ? (
                      <a href={s.wiki} target="_blank" rel="noopener noreferrer" className="font-serif italic text-lg text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
                        {s.sci}
                      </a>
                    ) : (
                      <h3 className="font-serif italic text-lg text-foreground">{s.sci}</h3>
                    )}
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
