export function SiteFooter({ location }: { location: string }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <a href="/" className="font-display text-lg font-semibold tracking-tight">
              Even Ground <span className="text-clay">Co.</span>
            </a>
            <p className="mt-2 text-sm text-muted">{location}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Locations
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="/louisville" className="text-muted transition-colors hover:text-clay">
                  Louisville
                </a>
              </li>
              <li>
                <a href="/nashville" className="text-muted transition-colors hover:text-clay">
                  Nashville
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Industries
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="/industries/restaurants"
                  className="text-muted transition-colors hover:text-clay"
                >
                  Restaurants
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-sm text-muted">
          &copy; {new Date().getFullYear()} Even Ground Co.
        </div>
      </div>
    </footer>
  );
}
