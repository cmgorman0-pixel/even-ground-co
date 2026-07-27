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
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-clay">
          {eyebrow}
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
          Agency-level experience.{" "}
          <span className="text-clay">None of the agency overhead.</span>
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
          {subhead}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-clay px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-clay-dark"
          >
            Book a free discovery call
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-border px-7 py-3 text-base font-semibold transition-colors hover:border-clay hover:text-clay"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
