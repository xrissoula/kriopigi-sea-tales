import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import elder from "@/assets/elder.jpg";
import hero from "@/assets/hero-kriopigi.webp";
import posidonia from "@/assets/posidonia.jpg";
import damselfish from "@/assets/flora-fauna-damselfish.jpg";
import tower from "@/assets/anthropology-tower.webp";
import { Play, Camera } from "lucide-react";

export const Route = createFileRoute("/oral-history")({
  head: () => ({
    meta: [
      { title: "Voices & Images — Kriopigi Shore Guide" },
      { name: "description", content: "Recorded oral histories from locals and a community photo archive of the Kriopigi shore." },
    ],
  }),
  component: OralHistory,
});

const stories = [
  { name: "Yiannis, b. 1942", role: "Fisherman", quote: "When I was a boy, you could see your shadow on the seabed at ten meters. We measured weather not by forecast, but by the smell of the pines.", length: "12:04" },
  { name: "Maria, b. 1955", role: "Beekeeper", quote: "The thyme on the headland blooms three days after the first cicada. My grandmother taught me to listen for it.", length: "08:31" },
  { name: "Petros, b. 1968", role: "Boatwright", quote: "Every caïque from this coast has pine from the slope above the spring. The wood remembers the salt before it ever touches the sea.", length: "15:22" },
];

const photos = [
  { src: hero, caption: "Cove at golden hour", credit: "Anna K. · local · 2025" },
  { src: tower, caption: "The old stone tower", credit: "D. Marinos · local · 2024" },
  { src: damselfish, caption: "Damselfish over the reef", credit: "Luca P. · visitor (IT) · 2025" },
  { src: posidonia, caption: "Posidonia at four meters", credit: "Eleni V. · local · 2025" },
  { src: elder, caption: "Morning at the harbor", credit: "Tomás R. · visitor (ES) · 2024" },
];

function OralHistory() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Voices & Images"
        title="What locals remember"
        lead="A community archive in two parts — recorded conversations with people who know this coast, and a slow-growing album of pictures sent in by locals and travellers."
      />

      <div className="px-5 max-w-3xl mx-auto">
        {/* Section nav */}
        <div className="flex gap-2 mb-8 border-b border-border">
          <a href="#voices" className="px-3 py-2 text-sm text-foreground border-b-2 border-accent -mb-px">Oral Histories</a>
          <a href="#album" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">Community Album</a>
        </div>

        {/* Oral Histories */}
        <section id="voices" className="scroll-mt-20">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-serif text-3xl text-foreground">Oral Histories</h2>
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent">Part I</span>
          </div>
          <div className="space-y-6">
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
                    <h3 className="mt-1 font-serif text-2xl text-foreground">{s.name}</h3>
                    <blockquote className="mt-3 font-serif italic text-lg text-foreground/85 border-l-2 border-accent pl-4 leading-snug">
                      "{s.quote}"
                    </blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Community Album */}
        <section id="album" className="scroll-mt-20 mt-16 pb-8">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="font-serif text-3xl text-foreground">Community Album</h2>
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent">Part II</span>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Pictures of the cove submitted by locals and visitors — the seasons, the weather, the small things worth pointing a camera at.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {photos.map((p, i) => (
              <figure key={i} className="group rounded-xl overflow-hidden bg-card border border-border shadow-soft">
                <div className="aspect-square overflow-hidden">
                  <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <figcaption className="p-3">
                  <p className="text-sm text-foreground leading-tight">{p.caption}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{p.credit}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <a
            href="/submit"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/30 px-5 py-6 text-sm text-foreground/80 hover:bg-muted transition"
          >
            <Camera size={16} className="text-accent" />
            Add your photo to the album
          </a>
        </section>
      </div>
    </SiteLayout>
  );
}
