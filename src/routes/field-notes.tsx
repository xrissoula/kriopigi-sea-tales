import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import turtle from "@/assets/turtle.jpg";
import posidonia from "@/assets/posidonia.jpg";

export const Route = createFileRoute("/field-notes")({
  head: () => ({
    meta: [
      { title: "Field Notes — Kriopigi Shore Guide" },
      { name: "description", content: "Recent species observations and field notes from Kriopigi Beach." },
    ],
  }),
  component: FieldNotes,
});

const notes = [
  { date: "May 4, 2026", species: "Caretta caretta", common: "Loggerhead turtle", img: turtle, observer: "M. Papadopoulos", note: "Juvenile sighted off the north headland at dawn. Surface-resting for ~6 minutes before diving." },
  { date: "Apr 28, 2026", species: "Posidonia oceanica", common: "Neptune grass", img: posidonia, observer: "Eleni V.", note: "Healthy meadow at 4–7m. Several leaves bearing epiphytic red algae — sign of a stable substrate." },
  { date: "Apr 21, 2026", species: "Sarpa salpa", common: "Salema porgy", img: posidonia, observer: "D. Kostas", note: "Schooling group of ~40 grazing seagrass tips. Returned each morning for three days." },
  { date: "Apr 14, 2026", species: "Larus michahellis", common: "Yellow-legged gull", img: turtle, observer: "Visitor", note: "Pair nesting on the cliff above the old harbor. Avoid the upper trail until July." },
];

function FieldNotes() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Field Notes" title="What the shore showed us this week" lead="A naturalist's running ledger — open to revision, often surprising." />
      <div className="px-5 max-w-3xl mx-auto space-y-5">
        {notes.map((n) => (
          <article key={n.date} className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
            <div className="grid sm:grid-cols-[140px_1fr]">
              <img src={n.img} alt={n.common} loading="lazy" className="h-32 sm:h-full w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{n.date}</span>
                  <span>by {n.observer}</span>
                </div>
                <h2 className="mt-1 font-serif text-2xl text-foreground italic">{n.species}</h2>
                <p className="text-sm text-accent">{n.common}</p>
                <p className="mt-2 text-[15px] text-foreground/80 leading-relaxed">{n.note}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
