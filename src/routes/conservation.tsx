import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import posidonia from "@/assets/posidonia.jpg";
import gullyRunoff from "@/assets/gully-runoff.jpeg";
import lifecycleDiagram from "@/assets/posidonia-lifecycle-diagram.png";
import { Leaf, AlertTriangle, HandHeart, Shell } from "lucide-react";

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
