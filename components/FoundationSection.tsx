import { foundationIntro, foundationPillars } from "./content";

export function FoundationSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-clay">
          Why we build the foundation first
        </p>
        <p className="mt-4 max-w-3xl text-lg text-muted">{foundationIntro}</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {foundationPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
