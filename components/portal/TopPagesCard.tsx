import { sampleTopPages } from "./portalContent";

export function TopPagesCard() {
  const max = Math.max(...sampleTopPages.map((p) => p.sessions));

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="font-display text-lg font-semibold">Top pages</h2>
      <p className="mt-1 text-sm text-muted">Where visitors are landing.</p>
      <div className="mt-4 flex flex-col gap-3">
        {sampleTopPages.map((page) => (
          <div key={page.path}>
            <div className="flex items-center justify-between text-sm">
              <span>{page.path}</span>
              <span className="text-muted">{page.sessions}</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-background">
              <div
                className="h-2 rounded-full bg-clay"
                style={{ width: `${(page.sessions / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
