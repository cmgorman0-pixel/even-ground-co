import { process } from "./content";
import { IconBadge } from "./IconBadge";

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          No funnel, no filler. Three steps from first call to a live
          site. It&rsquo;s that simple.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {process.map((item) => (
            <div
              key={item.step}
              className="group rounded-2xl border border-transparent p-2 transition-all hover:-translate-y-1 hover:border-border hover:bg-background"
            >
              <div className="flex items-center gap-4">
                <IconBadge icon={item.icon} className="" />
                <span className="font-mono text-sm font-semibold text-muted">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
