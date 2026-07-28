import { nav } from "./content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-lg font-semibold tracking-tight">
          Even Ground <span className="text-clay">Co.</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-clay px-5 py-2 text-sm font-semibold text-white shadow-md shadow-clay/20 transition-all hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-lg"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
