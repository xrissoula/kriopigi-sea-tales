import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import posidonia from "@/assets/posidonia.jpg";
import gullyRunoff from "@/assets/gully-runoff.jpeg";
import lifecycleDiagram from "@/assets/posidonia-lifecycle-diagram.png";
import { Leaf, AlertTriangle, HandHeart, Shell, Sun } from "lucide-react";

export const Route = createFileRoute("/conservation")({
  head: () => ({
    meta: [
      { title: "Conservation — Kriopigi Shore Guide" },
      { name: "description", content: "Protecting Posidonia meadows, nesting habitats, and the fragile Mediterranean coast at Kriopigi." },
    ],
  }),
  component: Conservation,
});

function Conservation() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Care" title="Tread lightly. Watch closely." lead="The Aegean is patient but not infinite. A few habits keep this coast intact for the next visitor — and the next century." />
      <div className="px-5 max-w-3xl mx-auto">
        <figure className="rounded-2xl overflow-hidden shadow-deep">
          <img src={posidonia} alt="Posidonia meadow" loading="lazy" className="w-full aspect-[16/9] object-cover" />
          <figcaption className="p-4 bg-card text-sm text-muted-foreground border border-t-0 border-border rounded-b-2xl">
            Posidonia oceanica meadows — a UNESCO-listed ecosystem — anchor sediment, oxygenate water, and shelter juvenile fish.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4">
          <Tenet icon={Leaf} title="Anchor on sand, never on seagrass" body="A single boat anchor can clear a meter-wide scar that takes a century to regrow." />
          <Tenet icon={AlertTriangle} title="Give nesting cliffs space" body="From April to July, gulls and shags raise young on the headlands. Stay below the marked path." />
          <Tenet icon={HandHeart} title="Carry out what you carry in" body="There is no bin on the trail. Plastic on the strand will be in the meadow by morning." />
          <Tenet icon={Shell} title="Leave the shells where they lie" body="Empty shells are not souvenirs — they are habitat and raw material. Hermit crabs move into them, small fish shelter beneath them, and over time waves grind them into the calcium-rich sand that builds the beach itself. A pocketful of shells removed each summer becomes meters of lost shoreline over a generation. Photograph them. Leave them." /> 
        </div>

        <section className="mt-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Ridge to reef</p>
          <h2 className="font-serif text-3xl text-foreground mt-1">From hillside to sea</h2>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            Rain falling on roads, gardens, farms, hotels, and hillsides above Kriopigi eventually moves downslope through gullies and seasonal drainage channels into the Aegean. Along the way it can carry sediments, fertilisers, herbicides, pesticides, plastics, oils, and organic waste into coastal waters and nearshore ecosystems.
          </p>
          <figure className="mt-5 rounded-2xl overflow-hidden shadow-soft border border-border bg-card">
            <img src={gullyRunoff} alt="An overgrown hillside gully above Kriopigi at dusk, with a tall cypress on the ridge and the Aegean visible beyond — a seasonal drainage line connecting the village to the sea." loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <figcaption className="p-4 text-sm text-muted-foreground border-t border-border">
              A vegetated gully on the slope above the bay. In dry months it looks like scrub; after the first autumn storms it becomes a pipeline from the village down to the shore.
            </figcaption>
          </figure>

          <div className="mt-5 rounded-2xl bg-card border border-border p-5 shadow-soft">
            <h3 className="font-serif text-xl text-foreground">Why it matters here</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Mediterranean coasts amplify runoff pulses: intense seasonal rain, dry compacted summer soils, steep slopes, thin soils, wildfire-disturbed ground, and dense tourism infrastructure all funnel water — and whatever it picks up — quickly into the sea.
            </p>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
              In an enclosed, oligotrophic system like parts of the Aegean, even moderate nutrient inputs can shift nearshore ecology: algal growth, turbidity, seagrass stress, altered nutrient balance, coastal erosion, bacterial contamination, and local biodiversity changes.
            </p>
          </div>

          <p className="mt-5 text-xs text-muted-foreground italic leading-relaxed">
            These are general mechanisms documented across Mediterranean coastal systems, not measurements taken at this specific bay. Treat the gully above as a way of seeing the connection between land and sea — observation, not accusation.
          </p>
        </section>

        <section className="mt-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Beach life cycle</p>
          <h2 className="font-serif text-3xl text-foreground mt-1">How a Mediterranean beach is built</h2>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            The sand at Kriopigi is not a backdrop — it is the visible end of a long ecological conveyor belt that begins offshore in the <em>Posidonia oceanica</em> meadow. Understanding the cycle is the difference between a beach we use and a beach we keep.
          </p>

          <figure className="mt-5 rounded-2xl overflow-hidden shadow-soft border border-border bg-card">
            <img src={lifecycleDiagram} alt="Cross-section diagram showing the four zones of a Posidonia oceanica beach system: dry beach with egagropiles and banquettes, the sea/beach zone with dead mattes and ripple marks, the living Posidonia meadow exporting leaf litter, and the deep abyss where litter finally settles." loading="lazy" className="w-full object-contain bg-muted" />
            <figcaption className="p-4 text-sm text-muted-foreground border-t border-border">
              The four zones of a Posidonia beach system, from dune to deep water. Diagram from Petrounias et al. (2023), <em>Posidonia oceanica Balls (Egagropili) from Kefalonia Island Evaluated as Alternative Biomass Source for Green Energy</em>, Journal of Marine Science and Engineering, 11(4), 749. Open access (CC BY 4.0).
            </figcaption>
          </figure>

          <div className="mt-6 space-y-4">
            <Stage letter="a" title="The dry beach — egagropiles and banquettes">
              The fibrous brown mats piled at the high-tide line are not rubbish. They are <em>banquettes</em>: dead Posidonia leaves woven by waves into dense berms that absorb storm energy and shield the sand behind them from erosion. The small felted balls scattered around them — <em>egagropiles</em> — are rolled fragments of the same leaf fibre. Bulldozing banquettes off the beach for tourist comfort is one of the single largest causes of shoreline retreat on Mediterranean coasts.
            </Stage>
            <Stage letter="b" title="Sea / beach zone — dead mattes and ripple marks">
              Just offshore, where the sand meets the first underwater slope, you can often see the brown terraced edge of a <em>dead matte</em> — the compacted root-and-rhizome scaffolding left behind by past meadows. These mattes can be thousands of years old and continue to stabilise sediment long after the living plant is gone. Ripple marks in the shallow sand show how much water energy this zone is constantly absorbing.
            </Stage>
            <Stage letter="c" title="The living meadow — where the beach is manufactured">
              The Posidonia meadow itself is the engine. Each plant sheds old leaves seasonally; those leaves are exported shoreward by waves (becoming banquettes) or seaward into deeper water. The meadow also traps suspended sediment, slows currents, and produces the calcium-carbonate sand grains — from broken shells, foraminifera, and calcareous algae living on the leaves — that eventually wash up as "white" Aegean sand.
            </Stage>
            <Stage letter="d" title="The abyss — long-term carbon storage">
              A significant fraction of leaf litter never returns to shore. It sinks down the continental slope into deep water, where low oxygen and cold temperatures lock its carbon away for centuries. Mediterranean Posidonia meadows are among the most carbon-dense ecosystems on Earth — a single hectare can store more CO₂ than a hectare of Amazon rainforest.
            </Stage>
          </div>

          <div className="mt-6 rounded-2xl bg-card border border-border p-5 shadow-soft">
            <h3 className="font-serif text-xl text-foreground">What this means at Kriopigi</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              The beach you walk on each summer is the upper visible slice of a system that runs from the banquette at your feet to the abyssal plain offshore. Anchor scars in the meadow, raked-away banquettes, pocketed shells, and runoff from the slope above all interrupt the same cycle at different points. Protecting any one zone protects the rest.
            </p>
          </div>

          <p className="mt-5 text-xs text-muted-foreground italic leading-relaxed">
            Source: Petrounias, P., Giannakopoulou, P. P., Rogkala, A., Antoniou, N., Koutsovitis, P., Zygouri, E., Krassakis, P., Islam, I., &amp; Koukouzas, N. (2023). <em>Posidonia oceanica Balls (Egagropili) from Kefalonia Island Evaluated as Alternative Biomass Source for Green Energy.</em> Journal of Marine Science and Engineering, 11(4), 749.{" "}
            <a href="https://doi.org/10.3390/jmse11040749" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">https://doi.org/10.3390/jmse11040749</a>. Carbon-storage comparison: Fourqurean et al. (2012), <em>Nature Geoscience</em>.
          </p>
        </section>

        <div className="mt-10 rounded-2xl bg-gradient-sea text-primary-foreground p-6 shadow-deep">
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">Citizen science</p>
          <h3 className="font-serif text-2xl mt-1">Help us count the meadow</h3>
          <p className="mt-2 text-sm opacity-90">Submit your underwater photos via the observation form — researchers at AUTh use them to map yearly seagrass extent.</p>
          <p className="mt-3 text-sm opacity-90">
            You can also log sightings on{" "}
            <a
              href="https://www.inaturalist.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 font-medium hover:opacity-100"
            >
              iNaturalist
            </a>
            {" "}— a global citizen-science platform where your geotagged photos are identified by experts and pooled into open biodiversity data used by researchers worldwide.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}

function Tenet({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-soft">
      <span className="w-10 h-10 rounded-full bg-secondary grid place-items-center text-accent shrink-0"><Icon size={18} /></span>
      <div>
        <h3 className="font-serif text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-0.5">{body}</p>
      </div>
    </div>
  );
}

function Stage({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-soft">
      <span className="w-10 h-10 rounded-full bg-gradient-sea grid place-items-center text-primary-foreground font-serif text-lg shrink-0">{letter}</span>
      <div>
        <h3 className="font-serif text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
