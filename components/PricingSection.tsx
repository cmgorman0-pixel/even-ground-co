import { tiers } from "./content";
import { CheckIcon } from "./CheckIcon";

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pricing, published — not hidden behind a call
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Most agencies make you book a call to find out what anything
          costs. We&rsquo;d rather you know upfront. Monthly support is
          genuinely cancel-anytime — no six-month minimums.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                tier.featured
                  ? "border-clay bg-surface shadow-lg shadow-clay/10"
                  : "border-border bg-surface"
              }`}
            >
              {tier.featured && (
                <span className="mb-4 w-fit rounded-full bg-clay px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              {tier.tagline && (
                <span className="text-xs font-semibold uppercase tracking-widest text-clay">
                  {tier.tagline}
                </span>
              )}
              <h3 className="mt-1 text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight">
                  {tier.price}
                </span>
                <span className="ml-2 text-sm text-muted">
                  {tier.cadence}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-clay">
                + {tier.monthly}
              </p>
              {tier.bestFor && (
                <p className="mt-4 rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted">
                  <span className="font-semibold text-foreground">Best for: </span>
                  {tier.bestFor}
                </p>
              )}
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-clay text-white hover:bg-clay-dark"
                    : "border border-border hover:border-clay hover:text-clay"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
