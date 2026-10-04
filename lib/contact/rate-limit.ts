type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();
const maxTrackedKeys = 5000;

export const HOUR = 60 * 60 * 1000;
export const DAY = 24 * HOUR;

/**
 * Fixed-window counter held in memory. On serverless hosting each instance keeps
 * its own counts and loses them on restart, so this is a best-effort brake on
 * repeated submissions, not a guarantee.
 */
export function takeToken(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  if (windows.size > maxTrackedKeys) prune(now);

  const current = windows.get(key);
  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}

function prune(now: number) {
  for (const [key, value] of windows) {
    if (value.resetAt <= now) windows.delete(key);
  }
  if (windows.size > maxTrackedKeys) windows.clear();
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}
