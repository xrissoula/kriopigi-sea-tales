import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Wind, Thermometer, Waves, Sun, Compass, Droplet } from "lucide-react";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Sea & Sky — Kriopigi Shore Guide" },
      { name: "description", content: "Today's sea conditions, wind, swell, water temperature, and forecast for Kriopigi Beach." },
    ],
  }),
  component: Conditions,
});

const stats = [
  { icon: Thermometer, label: "Air", value: "23°C", note: "feels 24°" },
  { icon: Droplet, label: "Sea", value: "19°C", note: "fresh, clear" },
  { icon: Wind, label: "Wind", value: "8 kn", note: "NW · light" },
  { icon: Waves, label: "Swell", value: "0.3 m", note: "every 4s" },
  { icon: Sun, label: "UV", value: "7", note: "high" },
  { icon: Compass, label: "Visibility", value: "12 m", note: "underwater" },
];

const forecast = [
  { day: "Mon", hi: 24, lo: 17, wind: "NW 9", icon: "☀" },
  { day: "Tue", hi: 25, lo: 18, wind: "N 6", icon: "☀" },
  { day: "Wed", hi: 22, lo: 17, wind: "NE 14", icon: "⛅" },
  { day: "Thu", hi: 21, lo: 16, wind: "E 18", icon: "🌧" },
  { day: "Fri", hi: 23, lo: 17, wind: "S 7", icon: "⛅" },
];

function Conditions() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Today" title="Sea & sky, right now" lead="Live data hooks land here next — for now, illustrative readings from a typical late-spring morning." />
      <div className="px-5 max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-sea p-6 text-primary-foreground shadow-deep">
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">Sunday, May 10</p>
          <p className="font-serif text-5xl mt-1">19°C <span className="text-2xl opacity-80">sea</span></p>
          <p className="mt-1 opacity-90 text-sm">Calm. Northwesterly breeze. Excellent visibility for snorkeling.</p>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-xl bg-card border border-border p-4 shadow-soft">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-[10px] uppercase tracking-[0.2em]">{s.label}</span>
                  <Icon size={16} className="text-accent" />
                </div>
                <p className="font-serif text-2xl text-foreground mt-2">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.note}</p>
              </div>
            );
          })}
        </div>

        <h2 className="mt-10 font-serif text-2xl text-foreground">5-day outlook</h2>
        <div className="mt-3 rounded-2xl bg-card border border-border shadow-soft divide-y divide-border">
          {forecast.map((f) => (
            <div key={f.day} className="flex items-center justify-between px-5 py-3">
              <span className="w-12 text-sm font-medium text-foreground">{f.day}</span>
              <span className="text-2xl">{f.icon}</span>
              <span className="text-sm text-muted-foreground w-20 text-right">{f.wind}</span>
              <span className="text-sm text-foreground w-20 text-right tabular-nums">{f.hi}° / <span className="text-muted-foreground">{f.lo}°</span></span>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
