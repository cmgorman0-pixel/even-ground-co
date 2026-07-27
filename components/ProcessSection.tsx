import { process } from "./content";

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          No funnel, no filler. Three steps from first call to a live
          site. It&rsquo;s that simple.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {process.map((item) => (
            <div key={item.step}>
              <span className="text-sm font-mono font-semibold text-clay">
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
