// Sample data for the Phase 1 dashboard shell. Deliberately lives only
// here in application code -- never written to stat_snapshots -- so
// there is no code path where a demo row could be mistaken for real
// client data. Shapes match the payload documented in
// client_portal_schema.sql for search_console / ga4 / gbp.

export const sampleKeywordRows = [
  { query: "landscaping company louisville ky", clicks: 142, impressions: 2380, ctr: 6.0, position: 4.2 },
  { query: "same day lawn care louisville", clicks: 88, impressions: 1190, ctr: 7.4, position: 3.1 },
  { query: "louisville landscaper near me", clicks: 76, impressions: 2040, ctr: 3.7, position: 6.8 },
  { query: "st matthews landscaping service", clicks: 51, impressions: 640, ctr: 8.0, position: 2.9 },
  { query: "jeffersontown lawn mowing", clicks: 34, impressions: 510, ctr: 6.7, position: 5.4 },
  { query: "louisville hardscaping contractor", clicks: 22, impressions: 980, ctr: 2.2, position: 9.1 },
] as const;

export const sampleTrafficSessions = [
  { date: "Jul 1", sessions: 61, users: 54 },
  { date: "Jul 3", sessions: 74, users: 65 },
  { date: "Jul 5", sessions: 68, users: 59 },
  { date: "Jul 7", sessions: 92, users: 80 },
  { date: "Jul 9", sessions: 101, users: 88 },
  { date: "Jul 11", sessions: 89, users: 77 },
  { date: "Jul 13", sessions: 116, users: 99 },
  { date: "Jul 15", sessions: 124, users: 108 },
  { date: "Jul 17", sessions: 110, users: 95 },
  { date: "Jul 19", sessions: 133, users: 114 },
  { date: "Jul 21", sessions: 142, users: 121 },
  { date: "Jul 23", sessions: 128, users: 111 },
  { date: "Jul 25", sessions: 151, users: 130 },
  { date: "Jul 27", sessions: 163, users: 140 },
] as const;

export const sampleTopPages = [
  { path: "/", sessions: 412 },
  { path: "/services/landscaping", sessions: 268 },
  { path: "/quote", sessions: 190 },
  { path: "/services/lawn-care", sessions: 144 },
] as const;

export const sampleGbp = {
  calls: 47,
  directionRequests: 63,
  websiteClicks: 89,
  period: "Last 30 days",
} as const;
