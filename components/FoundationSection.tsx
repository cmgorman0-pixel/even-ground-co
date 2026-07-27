import { foundationIntro, foundationPillars } from "./content";
import { IconBadge } from "./IconBadge";

export function FoundationSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-clay">
          Why we build the foundation first
        </p>
        <p className="mt-4 max-w-3xl font-display text-lg leading-relaxed text-foreground sm:text-xl">
          {foundationIntro}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {foundationPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-clay/30 hover:shadow-xl"
            >
              <IconBadge icon={pillar.icon} />
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
