import { getPool } from "@/lib/db/pool";

export type Subscriber = {
  id: string;
  email: string;
  name: string | null;
  isActive: boolean;
  unsubscribedAt: string | null;
  createdAt: string;
};

export type SubscriberSort = "created_at" | "email" | "name" | "is_active";

const sorts: Record<SubscriberSort, string> = {
  created_at: "created_at",
  email: "email",
  name: "name",
  is_active: "is_active",
};

type SubscriberRow = {
  id: string;
  email: string;
  name: string | null;
  is_active: boolean;
  unsubscribed_at: Date | null;
  created_at: Date;
};

function toSubscriber(row: SubscriberRow): Subscriber {
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    isActive: row.is_active,
    unsubscribedAt: row.unsubscribed_at ? row.unsubscribed_at.toISOString() : null,
    createdAt: row.created_at.toISOString(),
  };
}

export function parseSubscriberQuery(searchParams: URLSearchParams): {
  q: string;
  sort: SubscriberSort;
  dir: "asc" | "desc";
  page: number;
  pageSize: number;
} {
  const q = (searchParams.get("q") ?? "").trim().slice(0, 120);
  const sortParam = searchParams.get("sort");
  const sort: SubscriberSort =
    sortParam === "email" || sortParam === "name" || sortParam === "is_active" || sortParam === "created_at"
      ? sortParam
      : "created_at";
  const dir = searchParams.get("dir") === "asc" ? "asc" : "desc";
  const page = Math.max(1, Number.parseInt(searchParams.get("page") ?? "1", 10) || 1);
  return { q, sort, dir, page, pageSize: 20 };
}

export async function subscribeNewsletter(input: { email: string; name: string | null }) {
  const existing = await getPool().query<{ id: string }>(
    "SELECT id FROM newsletter_subscribers WHERE lower(email) = lower($1)",
    [input.email],
  );
  if (existing.rowCount) return { ok: false as const, reason: "duplicate" as const };

  try {
    await getPool().query(
      `INSERT INTO newsletter_subscribers (email, name, is_active, unsubscribed_at)
       VALUES ($1, $2, true, NULL)`,
      [input.email, input.name],
    );
  } catch (error) {
    if (typeof error === "object" && error && "code" in error && error.code === "23505") {
      return { ok: false as const, reason: "duplicate" as const };
    }
    throw error;
  }
  return { ok: true as const };
}

export async function listSubscribers(query: ReturnType<typeof parseSubscriberQuery>) {
  const pattern = query.q ? `%${query.q.replace(/[%_\\]/g, "\\$&")}%` : null;
  const where = pattern ? "WHERE email ILIKE $1 ESCAPE '\\' OR COALESCE(name, '') ILIKE $1 ESCAPE '\\'" : "";
  const params: Array<string | number> = pattern ? [pattern] : [];
  const count = await getPool().query<{ count: string }>(
    `SELECT count(*)::text AS count FROM newsletter_subscribers ${where}`,
    params,
  );
  const total = Number(count.rows[0]?.count ?? 0);
  const offset = (query.page - 1) * query.pageSize;
  const column = sorts[query.sort];
  const direction = query.dir === "asc" ? "ASC" : "DESC";
  const limitIndex = params.length + 1;
  const offsetIndex = params.length + 2;
  const rows = await getPool().query<SubscriberRow>(
    `SELECT id, email, name, is_active, unsubscribed_at, created_at
     FROM newsletter_subscribers
     ${where}
     ORDER BY ${column} ${direction} NULLS LAST, created_at DESC
     LIMIT $${limitIndex} OFFSET $${offsetIndex}`,
    [...params, query.pageSize, offset],
  );
  return {
    subscribers: rows.rows.map(toSubscriber),
    total,
    page: query.page,
    pageSize: query.pageSize,
  };
}

export async function listSubscribersForExport() {
  const rows = await getPool().query<SubscriberRow>(
    `SELECT id, email, name, is_active, unsubscribed_at, created_at
     FROM newsletter_subscribers
     ORDER BY created_at DESC`,
  );
  return rows.rows.map(toSubscriber);
}

export async function deleteSubscriber(id: string) {
  const result = await getPool().query("DELETE FROM newsletter_subscribers WHERE id = $1", [id]);
  return result.rowCount === 1;
}
