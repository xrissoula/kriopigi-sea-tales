import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import elder from "@/assets/elder.jpg";
import { Play } from "lucide-react";

export const Route = createFileRoute("/oral-history")({
  head: () => ({
    meta: [
      { title: "Oral Histories — Kriopigi Shore Guide" },
      { name: "description", content: "Voices of fishermen, elders, and locals who have known the Kriopigi shore for generations." },
    ],
  }),
  component: OralHistory,
});

const stories = [
  { name: "Yiannis, b. 1942", role: "Fisherman", quote: "When I was a boy, you could see your shadow on the seabed at ten meters. We measured weather not by forecast, but by the smell of the pines." , length: "12:04" },
  { name: "Maria, b. 1955", role: "Beekeeper", quote: "The thyme on the headland blooms three days after the first cicada. My grandmother taught me to listen for it.", length: "08:31" },
  { name: "Petros, b. 1968", role: "Boatwright", quote: "Every caïque from this coast has pine from the slope above the spring. The wood remembers the salt before it ever touches the sea.", length: "15:22" },
];

function OralHistory() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Voices" title="What the elders remember" lead="Recorded interviews with people who have lived this coast longer than the road has been paved." />
      <div className="px-5 max-w-3xl mx-auto space-y-6">
        {stories.map((s) => (
          <article key={s.name} className="rounded-2xl overflow-hidden shadow-soft bg-card border border-border">
            <div className="grid sm:grid-cols-[160px_1fr]">
              <div className="relative h-40 sm:h-auto">
                <img src={elder} alt="" loading="lazy" className="w-full h-full object-cover sepia-[0.3]" />
                <button className="absolute inset-0 grid place-items-center bg-black/20 hover:bg-black/30 transition">
                  <span className="w-12 h-12 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-deep">
                    <Play size={18} fill="currentColor" />
                  </span>
                </button>
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{s.role} · {s.length}</p>
                <h2 className="mt-1 font-serif text-2xl text-foreground">{s.name}</h2>
                <blockquote className="mt-3 font-serif italic text-lg text-foreground/85 border-l-2 border-accent pl-4 leading-snug">
                  "{s.quote}"
                </blockquote>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
