import { foundingClient } from "./content";

export function FoundingClientSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-clay">
          {foundingClient.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {foundingClient.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">{foundingClient.body}</p>
      </div>
    </section>
  );
}
