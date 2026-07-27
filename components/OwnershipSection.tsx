import { CheckIcon } from "./CheckIcon";

export function OwnershipSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              We build it. You own it.
            </h2>
            <p className="mt-4 text-muted">
              We&rsquo;ve watched too many small business owners get locked
              into contracts where the agency holds the site — and the
              business — hostage. With Even Ground Co., your site and
              domain are yours from day one, with the login credentials
              to prove it — not a lock-in dressed up as a discount.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-clay/30 hover:shadow-xl">
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>You own your domain and your site, period.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Full login access to your hosting and domain from day one.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Cancel monthly support anytime — no penalty, no fine print.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Take your site and walk if you ever want to leave.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
