import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Interactive Map — Kriopigi Shore Guide" },
      { name: "description", content: "Spatial story of Kriopigi Beach — meadows, springs, and shorelines mapped along the Kassandra coast." },
      { property: "og:title", content: "Interactive Map — Kriopigi Shore Guide" },
      { property: "og:description", content: "A cinematic, mobile-first map of Kriopigi's habitats and history." },
    ],
  }),
  component: MapPage,
});

mapboxgl.accessToken = "pk.eyJ1IjoieHJpc3NvdWxhIiwiYSI6ImNtcDBwaDZncjAwOW4ycW9ka2d0MDRucWMifQ.y-Ww8U9N4YjufwIFYyGtFQ";

function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [23.505, 40.038],
      zoom: 13,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    new mapboxgl.Marker({ color: "#d66a3a" })
      .setLngLat([23.505, 40.038])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="max-width:260px; font-family:Georgia, serif;">
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop"
              style="width:100%; border-radius:10px; margin-bottom:10px;"
            />
            <h3 style="margin:0 0 6px; color:#12343b;">Posidonia Meadow</h3>
            <p style="font-size:14px; line-height:1.5; margin:0 0 6px;">
              Offshore seagrass meadows stabilize sediment, shelter juvenile fish,
              and help maintain the remarkable water clarity of the Aegean coast.
            </p>
            <div style="font-size:12px; opacity:0.7;">Ecology • Marine Habitat • Coastal Processes</div>
          </div>
        `)
      )
      .addTo(map.current);

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <SiteLayout>
      <div className="px-5 max-w-5xl mx-auto pt-4">
        <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Spatial story</p>
        <h1 className="font-serif text-3xl text-foreground">The Cove, Mapped</h1>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          A field map of Kriopigi where geology, water, vegetation, marine life, and human history meet.
        </p>
      </div>

      <div className="px-5 max-w-5xl mx-auto mt-5">
        <div
          ref={mapContainer}
          style={{
            width: "100%",
            height: "70vh",
            minHeight: "500px",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        />
      </div>
    </SiteLayout>
  );
}
