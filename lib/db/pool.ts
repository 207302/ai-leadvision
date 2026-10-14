import { neon, type FullQueryResults } from "@neondatabase/serverless";

type Sql = ReturnType<typeof neon>;

const globalForSql = globalThis as typeof globalThis & { neonSql?: Sql };

function connectionString() {
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error("DATABASE_URL is not set.");
  const url = new URL(raw.trim().replace(/^["']|["']$/g, ""));
  url.searchParams.delete("channel_binding");
  return url.toString();
}

function getSql() {
  if (!globalForSql.neonSql) {
    globalForSql.neonSql = neon(connectionString());
  }
  return globalForSql.neonSql;
}

export function getPool() {
  return {
    async query<T extends Record<string, unknown> = Record<string, unknown>>(
      text: string,
      values: readonly unknown[] = [],
    ) {
      const result = (await getSql().query(text, [...values], {
        fullResults: true,
      })) as FullQueryResults<false>;
      return { rows: result.rows as T[], rowCount: result.rowCount };
    },
  };
}
