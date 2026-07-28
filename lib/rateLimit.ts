// Best-effort in-memory rate limiter: cheap protection against scripted
// abuse of a public unauthenticated endpoint, not a durable guarantee
// (resets on cold start, not shared across instances).
const hits = new Map<string, number[]>();

export function rateLimit(
  key: string,
  { max = 5, windowMs = 10 * 60 * 1000 } = {}
) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return { allowed: false, retryAfterMs: windowMs - (now - recent[0]) };
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    hits.forEach((v, k) => {
      if (v.every((t) => now - t >= windowMs)) hits.delete(k);
    });
  }
  return { allowed: true, retryAfterMs: 0 };
}

export function clientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for") || "";
  return xff.split(",")[0].trim() || "unknown";
}
