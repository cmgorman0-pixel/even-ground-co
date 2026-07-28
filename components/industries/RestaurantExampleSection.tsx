import type { UnsplashPhoto } from "@/lib/unsplash";
import { RestaurantMockupCard } from "./RestaurantMockupCard";

export function RestaurantExampleSection({
  photo,
}: {
  photo?: UnsplashPhoto | null;
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-clay">
          What it could look like
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          A real design, not a template preview
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          This is a concept layout we built to show what&rsquo;s possible —
          not a real client, and not a stock template. Your actual site
          would be designed around your food, your photos, and your
          brand.
        </p>
        <div className="mt-10">
          <RestaurantMockupCard photo={photo} />
        </div>
      </div>
    </section>
  );
}
