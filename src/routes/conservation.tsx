import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import posidonia from "@/assets/posidonia.jpg";
import { Leaf, AlertTriangle, HandHeart } from "lucide-react";

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
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-sea text-primary-foreground p-6 shadow-deep">
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">Citizen science</p>
          <h3 className="font-serif text-2xl mt-1">Help us count the meadow</h3>
          <p className="mt-2 text-sm opacity-90">Submit your underwater photos via the observation form — researchers at AUTh use them to map yearly seagrass extent.</p>
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
