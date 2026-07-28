import { Smartphone, UtensilsCrossed, MapPin, Camera } from "lucide-react";
import { IconBadge } from "@/components/IconBadge";

const highlights = [
  {
    title: "Built mobile-first",
    body: "Most \"restaurants near me\" searches happen on a phone, in the car, hungry. Your site has to work there first, not as an afterthought.",
    icon: Smartphone,
  },
  {
    title: "A menu you can update yourself",
    body: "Seasonal specials, price changes, a dish that's 86'd — you shouldn't need to call us (or wait days) to fix your own menu.",
    icon: UtensilsCrossed,
  },
  {
    title: "Map, hours & location up front",
    body: "The single biggest reason a hungry visitor bounces: they can't tell in five seconds if you're open and where you are.",
    icon: MapPin,
  },
  {
    title: "Built to make people hungry",
    body: "If you've got real food photography, we design around it. If you don't yet, we'll tell you honestly that it's worth getting before launch.",
    icon: Camera,
  },
];

export function RestaurantHighlights() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for how restaurants actually run
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Not a generic template with your logo dropped in — the things
          that actually matter for a restaurant, built in from the start.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title}>
              <IconBadge icon={item.icon} />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
