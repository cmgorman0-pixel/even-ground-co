import { whyUs } from "./content";
import { IconBadge } from "./IconBadge";

export function WhyUsSection() {
  return (
    <section id="why-us" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Why Even Ground Co.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {whyUs.map((item) => (
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
