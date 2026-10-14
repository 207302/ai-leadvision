import { getPool } from "@/lib/db/pool";
import { callbackStatuses, type CallbackInput, type CallbackStatus } from "@/lib/callback/validate";

export type CallbackRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: CallbackStatus;
  createdAt: string;
};

type CallbackRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  created_at: Date | string;
};

function iso(value: Date | string) {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function toRequest(row: CallbackRow): CallbackRequest {
  const status = (callbackStatuses as readonly string[]).includes(row.status)
    ? (row.status as CallbackStatus)
    : "new";
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    status,
    createdAt: iso(row.created_at),
  };
}

export function parseCallbackQuery(searchParams: URLSearchParams) {
  const q = (searchParams.get("q") ?? "").trim().slice(0, 120);
  const page = Math.max(1, Number.parseInt(searchParams.get("page") ?? "1", 10) || 1);
  return { q, page, pageSize: 20 };
}

export async function insertCallbackRequest(input: CallbackInput) {
  await getPool().query(
    `INSERT INTO callback_requests (name, email, phone)
     VALUES ($1, $2, $3)`,
    [input.name, input.email, input.phone],
  );
}

export async function listCallbackRequests(query: ReturnType<typeof parseCallbackQuery>) {
  const pattern = query.q ? `%${query.q.replace(/[%_\\]/g, "\\$&")}%` : null;
  const where = pattern
    ? "WHERE name ILIKE $1 ESCAPE '\\' OR email ILIKE $1 ESCAPE '\\' OR phone ILIKE $1 ESCAPE '\\'"
    : "";
  const params: Array<string | number> = pattern ? [pattern] : [];
  const limitIndex = params.length + 1;
  const offsetIndex = params.length + 2;
  const offset = (query.page - 1) * query.pageSize;

  const [count, rows] = await Promise.all([
    getPool().query<{ count: string }>(
      `SELECT count(*)::text AS count FROM callback_requests ${where}`,
      params,
    ),
    getPool().query<CallbackRow>(
      `SELECT id, name, email, phone, status, created_at
       FROM callback_requests
       ${where}
       ORDER BY created_at DESC
       LIMIT $${limitIndex} OFFSET $${offsetIndex}`,
      [...params, query.pageSize, offset],
    ),
  ]);

  return {
    requests: rows.rows.map(toRequest),
    total: Number(count.rows[0]?.count ?? 0),
    page: query.page,
    pageSize: query.pageSize,
  };
}

export async function updateCallbackStatus(id: string, status: CallbackStatus) {
  const result = await getPool().query<CallbackRow>(
    `UPDATE callback_requests
     SET status = $1
     WHERE id = $2
     RETURNING id, name, email, phone, status, created_at`,
    [status, id],
  );
  const row = result.rows[0];
  return row ? toRequest(row) : null;
}
