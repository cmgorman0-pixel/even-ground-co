import { ChevronDown } from "lucide-react";
import { nav, navDropdowns } from "./content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-lg font-semibold tracking-tight">
          Even Ground <span className="text-clay">Co.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          {navDropdowns.map((dropdown) => (
            <div key={dropdown.label} className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 text-muted transition-colors hover:text-foreground"
              >
                {dropdown.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-0 top-full w-40 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-border bg-surface p-2 shadow-xl">
                  {dropdown.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-background hover:text-clay"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
