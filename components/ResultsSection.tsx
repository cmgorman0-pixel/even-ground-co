import { realResults } from "./content";

export function ResultsSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-clay">
          Real results
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {realResults.map((result) => (
            <div key={result.label}>
              <div className="font-display text-4xl font-semibold text-clay">
                {result.stat}
              </div>
              <p className="mt-2 text-sm text-muted">{result.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted">
          Real results from past campaigns and projects — not a guarantee of
          your results. Every business and market is different.
        </p>
      </div>
    </section>
  );
}
