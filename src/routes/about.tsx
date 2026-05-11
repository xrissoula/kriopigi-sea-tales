import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import christina from "@/assets/christina-amparoudes.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kriopigi Shore Guide" },
      { name: "description", content: "About Christina Anthemides-Kelley and the Kriopigi Shore Guide project." },
      { property: "og:title", content: "About — Kriopigi Shore Guide" },
      { property: "og:description", content: "A Greek-American writer, sailor, and naturalist documenting the Kriopigi coast." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="A naturalist's notebook for a familiar shore"
        lead="The Kriopigi Shore Guide is a personal, evolving project — part field journal, part living archive."
      />
      <div className="px-5 max-w-3xl mx-auto">
        <figure className="rounded-2xl overflow-hidden shadow-soft bg-muted">
          <img
            src={christina}
            alt="Christina Anthemides-Kelley birdwatching in a meadow above Kriopigi at dawn, near her house in the Amparoudes"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-4 py-3 text-xs text-muted-foreground italic">
            Birdwatching at dawn in a meadow above Kriopigi Beach, near my house in the Amparoudes.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-5 font-serif text-foreground/90 leading-relaxed text-lg">
          <p>
            My name is Christina Anthemides-Kelley, and I am a Greek-American writer, sailor, and lifelong visitor to Kriopigi and the Kassandra peninsula. My family has deep roots in Greece, and I have spent much of my life returning to this coastline — swimming its coves, walking its forest paths, observing its seasonal changes, and slowly developing a deeper curiosity about the systems that shape it.
          </p>
          <p>
            Over time, I became increasingly interested not only in the beauty of the landscape, but in the relationships beneath it: the geology that formed the peninsula, the Mediterranean ecosystems that thrive here, the springs and drainage channels that connect hillside to sea, the underwater Posidonia meadows offshore, and the layers of human history embedded throughout the region.
          </p>
          <p>
            My background in sailing, natural history, conservation, preservation, and storytelling shaped the beginning of this project. What started as personal field notes and photography gradually evolved into an attempt to document Kriopigi as a living coastal system — one shaped by climate, ecology, tectonics, memory, and human activity across thousands of years.
          </p>
          <p>
            The Kriopigi Shore Guide is an evolving natural history and cultural landscape project combining ecology, geology, oral history, photography, and geospatial storytelling. My hope is that it becomes both a long-term archive and an invitation to observe the coastline with greater depth, curiosity, and care.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
