import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import posidonia from "@/assets/posidonia.jpg";
import turtle from "@/assets/turtle.jpg";

export const Route = createFileRoute("/snorkeling")({
  head: () => ({
    meta: [
      { title: "Snorkeling — Kriopigi Shore Guide" },
      { name: "description", content: "Three snorkeling sites at Kriopigi with depth, visibility, and species notes." },
    ],
  }),
  component: Snorkeling,
});

const sites = [
  { name: "North Cove", img: posidonia, depth: "1–4 m", vis: "8–12 m", level: "Beginner", look: "Wrasse, salema, sea hares grazing the seagrass tips." },
  { name: "Old Harbor Wall", img: turtle, depth: "3–7 m", vis: "10–15 m", level: "Intermediate", look: "Octopus dens between blocks; occasional moray." },
  { name: "South Pinnacle", img: posidonia, depth: "5–11 m", vis: "12–20 m", level: "Advanced", look: "Damselfish clouds over rocky reef; rare scorpionfish." },
];

function Snorkeling() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Below the line" title="Three coves, three worlds" lead="Mask, fins, and a quiet kick are all you need. Always enter with a buddy and check the day's sea state." />
      <div className="px-5 max-w-4xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((s) => (
          <article key={s.name} className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
            <img src={s.img} alt={s.name} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <div className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{s.level}</p>
              <h2 className="font-serif text-2xl text-foreground mt-1">{s.name}</h2>
              <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-md bg-secondary/60 p-2">
                  <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Depth</dt>
                  <dd className="text-foreground font-medium">{s.depth}</dd>
                </div>
                <div className="rounded-md bg-secondary/60 p-2">
                  <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Visibility</dt>
                  <dd className="text-foreground font-medium">{s.vis}</dd>
                </div>
              </dl>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.look}</p>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
