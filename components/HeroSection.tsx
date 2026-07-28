import { MapPin } from "lucide-react";

export function HeroSection({
  eyebrow,
  headline,
  subhead,
}: {
  eyebrow: string;
  headline: string;
  subhead: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-clay/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-clay">
            {eyebrow}
          </p>
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <MapPin className="h-3.5 w-3.5 text-clay" />
            Serving Louisville &amp; Nashville
          </div>
          <h1 className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
            Agency-level experience.{" "}
            <span className="text-clay">None of the agency overhead.</span>
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
            {subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-clay px-7 py-3 text-base font-semibold text-white shadow-lg shadow-clay/25 transition-all hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-xl hover:shadow-clay/30"
            >
              Get a free discovery call
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-border px-7 py-3 text-base font-semibold transition-all hover:-translate-y-0.5 hover:border-clay hover:text-clay"
            >
              See pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
