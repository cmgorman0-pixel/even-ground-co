type LocationLink = { label: string; href: string };

export function LocationSection({
  eyebrow,
  heading,
  body,
  links,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  links?: LocationLink[];
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-clay">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{body}</p>
        {links && links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-clay hover:underline"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
