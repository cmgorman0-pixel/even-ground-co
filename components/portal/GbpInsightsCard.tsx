import { sampleGbp } from "./portalContent";

const stats = [
  { label: "Calls", key: "calls" as const },
  { label: "Direction requests", key: "directionRequests" as const },
  { label: "Website clicks", key: "websiteClicks" as const },
];

export function GbpInsightsCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="font-display text-lg font-semibold">
        Google Business Profile
      </h2>
      <p className="mt-1 text-sm text-muted">{sampleGbp.period}</p>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.key}>
            <div className="font-display text-2xl font-semibold">
              {sampleGbp[stat.key]}
            </div>
            <div className="mt-1 text-xs text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
