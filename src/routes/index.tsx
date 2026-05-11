import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-kriopigi.webp";
import posidonia from "@/assets/posidonia.jpg";
import turtle from "@/assets/turtle.jpg";
import kassandraMap from "@/assets/kassandra-landcover.webp";
import { ArrowRight, Map, Leaf, Waves, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kriopigi Shore Guide — A Field Guide to a Halkidiki Coast" },
      { name: "description", content: "An interactive field guide to Kriopigi Beach: maps, species, oral histories, snorkeling, and conservation in Halkidiki, Greece." },
      { property: "og:title", content: "Kriopigi Shore Guide" },
      { property: "og:description", content: "Place-based environmental storytelling on the Kassandra coast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden -mt-px">
        <img src={hero} alt="Aerial view of Kriopigi Beach at golden hour" className="absolute inset-0 w-full h-full object-cover" width={1080} height={1920} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/80">Halkidiki · Kassandra Peninsula</p>
          <h1 className="mt-3 font-serif text-5xl md:text-7xl text-primary-foreground text-balance leading-[0.95]">
            A field guide to the <em className="text-accent not-italic">Kriopigi shore</em>.
          </h1>
          <p className="mt-4 text-primary-foreground/85 text-base md:text-lg max-w-md leading-relaxed">
            Walk the cove with us — through species, stories, and the slow language of the Aegean.
          </p>
          <Link to="/map" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-medium shadow-deep hover:opacity-90 transition">
            Open the map <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-16 max-w-2xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-accent">A living archive</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground text-balance">
          Where pine forest meets a wine-dark sea.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Kriopigi — "cold spring" — sits on the western Kassandra coast, a crescent of fine sand under Aleppo pines, looking out over what Homer called the <em>oînops póntos</em>, the wine-dark sea.
          This guide gathers what locals, scientists, and travelers have learned of its tides, meadows, and migrants.
        </p>
      </section>

      {/* Sections grid */}
      <section className="px-5 pb-16 max-w-5xl mx-auto grid gap-4 sm:grid-cols-2">
        <FeatureCard to="/map" image={kassandraMap} icon={<Map size={18} />} title="Interactive Map" desc="Trails, springs, dive points & access notes." />
        <FeatureCard to="/flora-fauna" image={turtle} icon={<Leaf size={18} />} title="Flora & Fauna" desc="Five ecological zones, from pine line to open sea." />
        <FeatureCard to="/snorkeling" image={posidonia} icon={<Waves size={18} />} title="Snorkeling" desc="Three coves, mapped with depth & visibility." />
        <FeatureCard to="/conservation" image={posidonia} icon={<Shield size={18} />} title="Conservation" desc="Posidonia meadows & how to tread lightly." />
      </section>
    </SiteLayout>
  );
}

function FeatureCard({ to, image, icon, title, desc }: { to: string; image: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Link to={to} className="group relative block rounded-2xl overflow-hidden shadow-soft hover:shadow-deep transition-shadow bg-card">
      <div className="aspect-[5/3] overflow-hidden">
        <img src={image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-accent">
          {icon}
          <span className="text-[10px] uppercase tracking-[0.2em]">Section</span>
        </div>
        <h3 className="mt-1 font-serif text-2xl text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </Link>
  );
}
