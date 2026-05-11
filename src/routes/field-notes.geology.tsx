import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { ArrowLeft } from "lucide-react";
import hero from "@/assets/hero-kriopigi.webp";
import timeScale from "@/assets/geologic-time-scale.webp";
import triassicMap from "@/assets/triassic-supercontinent.png";
import eoceneMap from "@/assets/eocene-world.png";
import plioceneMap from "@/assets/pliocene-world.png";
import holoceneMap from "@/assets/holocene-world.jpg";
import greeceGeoMap from "@/assets/greece-geological-map.webp";
import halkidikiGeoMap from "@/assets/halkidiki-geology.jpg";
import aegeanCirculation from "@/assets/aegean-circulation.png";

export const Route = createFileRoute("/field-notes/geology")({
  head: () => ({
    meta: [
      { title: "Geological & Natural History — Kriopigi Shore Guide" },
      { name: "description", content: "The deep-time formation of the Kriopigi cove: tectonics, limestone, springs, and the rise of its ecosystem." },
    ],
  }),
  component: Geology,
});

type Era = { age: string; title: string; body: string; image?: string; caption?: string; image2?: string; caption2?: string };

const eras: Era[] = [
  { age: "~250 Mya · Triassic", title: "An ancient sea bed", body: "The carbonate platform that would become Halkidiki's bedrock accumulates as marine sediment in the warm Tethys Ocean — countless coral, mollusc, and plankton skeletons compacted into limestone.", image: triassicMap, caption: "Pangaea in the Triassic, with the Tethys Ocean opening to the east — the future Halkidiki lay along its northern shelf." },
  { age: "~50 Mya · Eocene", title: "Tectonic uplift", body: "The collision of the African and Eurasian plates lifts the Hellenic peninsula. The Kassandra ridge emerges as a long limestone spine, faulted and folded by ongoing compression.", image: eoceneMap, caption: "Eocene world — Africa drifts north into Eurasia, closing the Tethys and crumpling the Hellenic arc into being." },
  { age: "~5 Mya · Pliocene", title: "Sculpting the coast", body: "Sea level fluctuations and karst dissolution carve coves and headlands. Freshwater percolating through fractured limestone emerges as cold springs along the shore — krio pigi, the cold spring.", image: plioceneMap, caption: "Pliocene world — continents in nearly modern positions; the Mediterranean settles into its present basin." },
  { age: "~12,000 ya · Holocene", title: "The modern shoreline", body: "Post-glacial sea-level rise floods the lower valleys. Aleppo pine (Pinus halepensis) colonises the slopes; Posidonia oceanica meadows establish on the sandy shelf, stabilising the bay.", image: holoceneMap, caption: "Holocene world — continents in their familiar outlines after post-glacial seas rose to today's coastline." },
  { age: "Today", title: "A living equilibrium", body: "The cold spring still surfaces beneath the sand, lowering nearshore temperatures by 2–3°C in summer — a microclimate that shelters juvenile fish and keeps the seagrass meadow productive.", image: greeceGeoMap, caption: "Simplified geological map of Greece (modified after IGME, 1983 and Zachariadis, 2007). Kassandra-Sithonia (K-S) marks the Halkidiki peninsulas.", image2: halkidikiGeoMap, caption2: "Geological map of the Halkidiki peninsula and the Serbo-Macedonian Massif (modified after Melfos & Voudouris, 2012; Schmid et al., 2008; van Hinsbergen & Schmid, 2012). Source: ScienceDirect, S0169136822000221." },
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
      <div className="px-5 max-w-5xl mx-auto pb-8 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <figure className="rounded-lg overflow-hidden border border-border bg-card shadow-soft">
            <img src={timeScale} alt="Geologic time scale, 650 million years ago to the present" className="w-full h-auto" />
            <figcaption className="px-3 py-2 text-[11px] text-muted-foreground leading-snug">
              Geologic time scale — 650 Mya to present. © Encyclopædia Britannica.
            </figcaption>
          </figure>
        </aside>
        <div className="space-y-6 max-w-2xl">
          {eras.map((e, i) => (
            <article key={i} className="relative pl-6 border-l-2 border-accent/40">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent">{e.age}</p>
              <h2 className="mt-1 font-serif text-2xl text-foreground">{e.title}</h2>
              <p className="mt-2 text-[15px] text-foreground/80 leading-relaxed">{e.body}</p>
              {e.image && (
                <figure className="mt-4 rounded-lg overflow-hidden border border-border bg-card shadow-soft">
                  <img src={e.image} alt={e.caption ?? e.title} loading="lazy" className="w-full h-auto" />
                  {e.caption && (
                    <figcaption className="px-3 py-2 text-[11px] text-muted-foreground leading-snug">{e.caption}</figcaption>
                  )}
                </figure>
              )}
              {e.image2 && (
                <figure className="mt-4 rounded-lg overflow-hidden border border-border bg-card shadow-soft">
                  <img src={e.image2} alt={e.caption2 ?? e.title} loading="lazy" className="w-full h-auto" />
                  {e.caption2 && (
                    <figcaption className="px-3 py-2 text-[11px] text-muted-foreground leading-snug">{e.caption2}</figcaption>
                  )}
                </figure>
              )}
            </article>
          ))}
          <Link
            to="/field-notes/biogeochemistry"
            className="group block mt-8 rounded-xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-deep transition"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={aegeanCirculation}
                alt="Schematic of Aegean Sea upper circulation"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Continue · Part II</p>
              <h3 className="mt-1 font-serif text-2xl text-foreground">Wanna dive deeper?</h3>
              <p className="mt-2 text-[15px] text-foreground/80 leading-relaxed">
                Click here to learn about the Biogeochemistry of the Aegean.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
