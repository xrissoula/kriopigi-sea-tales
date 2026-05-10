import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { ArrowLeft } from "lucide-react";
import hero from "@/assets/hero-kriopigi.webp";

export const Route = createFileRoute("/field-notes/geology")({
  head: () => ({
    meta: [
      { title: "Geological & Natural History — Kriopigi Shore Guide" },
      { name: "description", content: "The deep-time formation of the Kriopigi cove: tectonics, limestone, springs, and the rise of its ecosystem." },
    ],
  }),
  component: Geology,
});

const eras = [
  { age: "~250 Mya · Triassic", title: "An ancient sea bed", body: "The carbonate platform that would become Halkidiki's bedrock accumulates as marine sediment in the warm Tethys Ocean — countless coral, mollusc, and plankton skeletons compacted into limestone." },
  { age: "~50 Mya · Eocene", title: "Tectonic uplift", body: "The collision of the African and Eurasian plates lifts the Hellenic peninsula. The Kassandra ridge emerges as a long limestone spine, faulted and folded by ongoing compression." },
  { age: "~5 Mya · Pliocene", title: "Sculpting the coast", body: "Sea level fluctuations and karst dissolution carve coves and headlands. Freshwater percolating through fractured limestone emerges as cold springs along the shore — krio pigi, the cold spring." },
  { age: "~12,000 ya · Holocene", title: "The modern shoreline", body: "Post-glacial sea-level rise floods the lower valleys. Aleppo pine (Pinus halepensis) colonises the slopes; Posidonia oceanica meadows establish on the sandy shelf, stabilising the bay." },
  { age: "Today", title: "A living equilibrium", body: "The cold spring still surfaces beneath the sand, lowering nearshore temperatures by 2–3°C in summer — a microclimate that shelters juvenile fish and keeps the seagrass meadow productive." },
];

function Geology() {
  return (
    <SiteLayout>
      <div className="relative h-64 overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 max-w-3xl mx-auto">
          <Link to="/field-notes" className="inline-flex items-center gap-1 text-xs text-primary-foreground/80 hover:text-primary-foreground">
            <ArrowLeft size={14} /> Field Notes
          </Link>
          <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-primary-foreground/80">I · Deep Time</p>
          <h1 className="font-serif text-4xl text-primary-foreground">Geological &amp; Natural History</h1>
        </div>
      </div>
      <PageHeader eyebrow="Formation" title="How the cove was made" lead="Read downward through time — from a Triassic sea bed to the cold spring that still feeds the bay." />
      <div className="px-5 max-w-2xl mx-auto pb-8 space-y-6">
        {eras.map((e, i) => (
          <article key={i} className="relative pl-6 border-l-2 border-accent/40">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent">{e.age}</p>
            <h2 className="mt-1 font-serif text-2xl text-foreground">{e.title}</h2>
            <p className="mt-2 text-[15px] text-foreground/80 leading-relaxed">{e.body}</p>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
