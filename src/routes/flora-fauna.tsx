import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/flora-fauna")({
  head: () => ({
    meta: [
      { title: "Flora & Fauna — Kriopigi Shore Guide" },
      { name: "description", content: "Plants and animals photographed on the Kriopigi shore and in its waters, each linked to its Wikipedia page." },
      { property: "og:title", content: "Flora & Fauna — Kriopigi Shore Guide" },
      { property: "og:description", content: "A photo index of the species I have met on the Kriopigi shore." },
    ],
  }),
  component: FloraFaunaIndex,
});

type Entry = {
  common: string;
  sci: string;
  wiki: string;
  image?: string; // import or URL — leave undefined for a placeholder tile
  habitat?: "Shore" | "Water";
};

// Add entries here as you upload photos. Drop the image into src/assets/
// and import it at the top of this file, then reference it in `image`.
const entries: Entry[] = [
  // Example shape — replace with real photos & links:
  // { common: "Sea daffodil", sci: "Pancratium maritimum", wiki: "https://en.wikipedia.org/wiki/Pancratium_maritimum", image: seaDaffodil, habitat: "Shore" },
];

function FloraFaunaIndex() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Living shore"
        title="Flora & Fauna"
        lead="A growing photo index of the plants and animals I have met on the Kriopigi shore and in its waters. Tap any tile to read more on Wikipedia."
      />
      <div className="px-5 max-w-3xl mx-auto pb-10">
        {entries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
            <p className="font-serif text-xl text-foreground">Catalogue coming soon</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Photographs and Wikipedia links will appear here as they are added.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {entries.map((e) => (
              <li key={e.sci}>
                <a
                  href={e.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-deep transition-shadow"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    {e.image ? (
                      <img
                        src={e.image}
                        alt={`${e.common} (${e.sci})`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full grid place-items-center text-xs text-muted-foreground">photo</div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm text-foreground leading-tight">{e.common}</p>
                      <ExternalLink size={12} className="mt-0.5 text-muted-foreground shrink-0" />
                    </div>
                    <p className="mt-0.5 text-[11px] italic text-muted-foreground leading-tight">{e.sci}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SiteLayout>
  );
}
