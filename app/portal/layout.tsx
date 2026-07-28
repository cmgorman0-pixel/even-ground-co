export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-lg font-semibold tracking-tight">
            Even Ground <span className="text-clay">Co.</span>
          </a>
          <span className="font-display text-sm font-semibold text-muted">
            Tally
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
    </div>
  );
}
