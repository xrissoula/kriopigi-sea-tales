import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { ArrowLeft } from "lucide-react";
import elder from "@/assets/anthropology-tower.webp";
import olynthusPlan from "@/assets/olynthus-megali-toumba.jpg";
import mendePithamphora from "@/assets/mende-pithamphora.jpg";
import philipII from "@/assets/philip-ii-vergina.webp";
import greatLavra from "@/assets/great-lavra-athos.jpg";
import greekRevolution from "@/assets/greek-revolution.jpg";
import refugees1923 from "@/assets/refugees-1923.jpg";

type Period = {
  age: string;
  title: string;
  body: string;
  image?: string;
  alt?: string;
  caption?: string;
};

export const Route = createFileRoute("/field-notes/anthropology")({
  head: () => ({
    meta: [
      { title: "Anthropological History — Kriopigi Shore Guide" },
      { name: "description", content: "Human history of the Kassandra peninsula, from Neolithic settlers through Byzantine villages to today's tourist coast." },
    ],
  }),
  component: Anthropology,
});

const periods: Period[] = [
  {
    age: "~6500 BCE",
    title: "First settlers",
    body: "Neolithic communities arrive in Halkidiki, drawn to springs, sheltered coves, and the rich Thermaic Gulf. Stone tools and ceramics from this period are found across the Kassandra peninsula.",
    image: olynthusPlan,
    alt: "General plan of the southern projection of the Megali Toumba at Olynthus, showing Byzantine, Prehistoric, Classical, and unexcavated remains.",
    caption: "General plan of the southern projection of the Megali Toumba at Olynthus. From G. E. Mylonas, Excavations at Olynthus, Part I: The Neolithic Settlement (Johns Hopkins University Studies in Archaeology No. 6, ed. D. M. Robinson; Baltimore: The Johns Hopkins Press / London: Humphrey Milford / Oxford University Press, 1929).",
  },
  {
    age: "~700 BCE",
    title: "Ancient Mende & Eretrian colonies",
    body: "Greek colonists from Eretria found Mende and other coastal cities. The peninsula — then called Pallene — becomes famous for its wine, exported across the Aegean in distinctive amphorae.",
    image: mendePithamphora,
    alt: "Pithamphora with floral motifs recovered from the cemetery at Mende.",
    caption: "Pithamphora with floral motifs from the cemetery at Mende. From S. Moschonissioti, “Vases du cimetière de Mendè,” in Recherches récentes sur le monde hellénistique (Publications du Centre Jean Bérard), available via OpenEdition Books: https://books.openedition.org/pcjb/661.",
  },
  {
    age: "348 BCE",
    title: "Macedonian rule",
    body: "Philip II of Macedon destroys Olynthos and consolidates Halkidiki under Macedonian control. The region's harbours feed Alexander's campaigns.",
    image: philipII,
    alt: "Small ivory head identified as a portrait of Philip II of Macedon, recovered from the royal tumulus at Aigai (Vergina).",
    caption: "Ivory portrait head identified as Philip II of Macedon, recovered from Tomb II of the Great Tumulus at Aigai (modern Vergina), the royal necropolis of the Macedonian kings.",
  },
  {
    age: "Byzantine era",
    title: "Monastic landscape",
    body: "Mount Athos to the east becomes the spiritual heart of Orthodoxy. Kassandra's villages live by fishing, olives, and beekeeping; the cold spring at Kriopigi serves caravans crossing the peninsula.",
    image: greatLavra,
    alt: "The fortified arsanas (sea-gate tower) of the Great Lavra monastery rising above the rocks on the Athos peninsula.",
    caption: "The Great Lavra (Megisti Lavra), founded in 963 CE by St. Athanasios the Athonite — the oldest and first-ranked of the twenty monasteries of Mount Athos.",
  },
  {
    age: "1821 onward",
    title: "Revolution & rebuilding",
    body: "Kassandra rises in the Greek War of Independence and is devastated in 1821. Villages are slowly resettled through the 19th century by refugees and returning families.",
    image: greekRevolution,
    alt: "Hand-coloured lithograph depicting a battle scene from the Greek War of Independence, with Greek fighters in fustanella confronting Ottoman troops on a hillside.",
    caption: "Scene from the Greek War of Independence (1821), from the series of folk lithographs commissioned by General Yannis Makriyannis and painted by Panagiotis Zografos (1836–1839) to illustrate Makriyannis' Memoirs.",
  },
  {
    age: "1923",
    title: "Population exchange",
    body: "Following the Greco–Turkish war, refugees from Asia Minor settle across Halkidiki, reshaping the demographics, cuisine, and music of the coast.",
    image: refugees1923,
    alt: "Black-and-white photograph of Greek refugees from Asia Minor disembarking with their bundled belongings at the waterfront of Thessaloniki, c. 1923.",
    caption: "Greek refugees from Asia Minor arriving by caïque at the port of Thessaloniki in the wake of the 1923 Convention Concerning the Exchange of Greek and Turkish Populations. Photographer unknown; widely reproduced from the interwar press archive (see Margaret21, “Greek refugees from Smyrna arriving at Thessaloniki 1923”: https://margaret21.com/2015/02/18/nation-swap-house-swap/greek-refugees-from-smyrna-arriving-at-thessaloniki-1923/).",
  },
  { age: "1960s–today", title: "The tourist coast", body: "Paved roads reach Kassandra; Kriopigi grows from a fishing hamlet into a summer destination. Pine-shaded campsites and small hotels replace tobacco fields, while the shoreline absorbs new pressures." },
];

function Anthropology() {
  return (
    <SiteLayout>
      <div className="relative h-64 overflow-hidden">
        <img src={elder} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 max-w-3xl mx-auto">
          <Link to="/field-notes" className="inline-flex items-center gap-1 text-xs text-primary-foreground/80 hover:text-primary-foreground">
            <ArrowLeft size={14} /> Field Notes
          </Link>
          <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-primary-foreground/80">II · Human Time</p>
          <h1 className="font-serif text-4xl text-primary-foreground">Anthropological History</h1>
        </div>
      </div>
      <PageHeader eyebrow="People of the cove" title="Eight thousand years on a thin coast" lead="From Neolithic foragers to amphora merchants to summer arrivals — every layer is still legible in the village above the bay." />
      <div className="px-5 max-w-2xl mx-auto pb-8 space-y-6">
        {periods.map((e, i) => (
          <article key={i} className="relative pl-6 border-l-2 border-accent/40">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent">{e.age}</p>
            <h2 className="mt-1 font-serif text-2xl text-foreground">{e.title}</h2>
            <p className="mt-2 text-[15px] text-foreground/80 leading-relaxed">{e.body}</p>
            {e.image && (
              <figure className="mt-4 rounded-xl overflow-hidden border border-border bg-card shadow-soft">
                <img src={e.image} alt={e.alt ?? ""} loading="lazy" className="w-full object-contain bg-[oklch(0.97_0.01_85)]" />
                {e.caption && (
                  <figcaption className="px-4 py-3 text-[11px] leading-relaxed text-muted-foreground border-t border-border">
                    {e.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
