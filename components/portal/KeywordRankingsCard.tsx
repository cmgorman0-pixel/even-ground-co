import { sampleKeywordRows } from "./portalContent";

export function KeywordRankingsCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="font-display text-lg font-semibold">Keyword rankings</h2>
      <p className="mt-1 text-sm text-muted">
        Real search queries your site shows up for, and where you rank.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide text-muted">
              <th className="py-2 pr-4 font-semibold">Query</th>
              <th className="py-2 pr-4 font-semibold">Clicks</th>
              <th className="py-2 pr-4 font-semibold">Impressions</th>
              <th className="py-2 pr-4 font-semibold">CTR</th>
              <th className="py-2 font-semibold">Avg. position</th>
            </tr>
          </thead>
          <tbody>
            {sampleKeywordRows.map((row) => (
              <tr key={row.query} className="border-b border-border last:border-0">
                <td className="py-2 pr-4">{row.query}</td>
                <td className="py-2 pr-4">{row.clicks}</td>
                <td className="py-2 pr-4">{row.impressions.toLocaleString()}</td>
                <td className="py-2 pr-4">{row.ctr}%</td>
                <td className="py-2 text-clay">{row.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
