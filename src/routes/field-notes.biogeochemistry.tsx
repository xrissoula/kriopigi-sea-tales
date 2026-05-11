import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { ArrowLeft } from "lucide-react";
import aegeanCirculation from "@/assets/aegean-circulation.png";

export const Route = createFileRoute("/field-notes/biogeochemistry")({
  head: () => ({
    meta: [
      { title: "Biogeochemistry of the Aegean — Kriopigi Shore Guide" },
      { name: "description", content: "Currents, nutrients, and the chemical life of the Aegean Sea around Halkidiki." },
    ],
  }),
  component: Biogeochemistry,
});

function Biogeochemistry() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Deep Time · II"
        title="Biogeochemistry of the Aegean"
        lead="How currents, nutrients, and microbial life shape the waters off Kassandra."
      />
      <div className="px-5 max-w-3xl mx-auto pb-10">
        <Link to="/field-notes/geology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> Back to Geology
        </Link>
        <figure className="mt-6 rounded-lg overflow-hidden border border-border bg-card shadow-soft">
          <img src={aegeanCirculation} alt="Schematic of Aegean Sea upper circulation" className="w-full h-auto" />
          <figcaption className="px-3 py-2 text-[11px] text-muted-foreground leading-snug">
            Schematic representation of the Aegean Sea upper circulation (after Theocharis et al.).
          </figcaption>
        </figure>
        <p className="mt-6 text-foreground/80 leading-relaxed">
          Content coming soon — water masses, nutrient cycling, and the seasonal pulse that feeds the Halkidiki shelf.
        </p>
      </div>
    </SiteLayout>
  );
}
