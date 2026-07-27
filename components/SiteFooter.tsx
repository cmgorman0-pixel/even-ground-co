export function SiteFooter({ location }: { location: string }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Even Ground Co.</span>
        <span>{location}</span>
      </div>
    </footer>
  );
}
