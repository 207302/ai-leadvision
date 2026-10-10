import Link from "next/link";
import { DeleteSubscriberButton } from "@/components/admin/delete-subscriber-button";
import { listSubscribers, parseSubscriberQuery, type SubscriberSort } from "@/lib/newsletter/store";

export const dynamic = "force-dynamic";

const columns: Array<{ key: SubscriberSort; label: string }> = [
  { key: "email", label: "Email" },
  { key: "name", label: "Name" },
  { key: "is_active", label: "Status" },
  { key: "created_at", label: "Subscribed" },
];

function hrefFor(query: { q: string; sort: SubscriberSort; dir: "asc" | "desc"; page: number }) {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  params.set("sort", query.sort);
  params.set("dir", query.dir);
  if (query.page > 1) params.set("page", String(query.page));
  const search = params.toString();
  return search ? `/admin/subscribers?${search}` : "/admin/subscribers";
}

export default async function SubscribersPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolved = await searchParams;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(resolved)) {
    if (typeof value === "string") params.set(key, value);
  }
  const query = parseSubscriberQuery(params);
  const result = await listSubscribers(query);
  const pages = Math.max(1, Math.ceil(result.total / result.pageSize));

  return (
    <div className="rounded-xl border border-line bg-white p-5 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl text-ink">Subscribers</h1>
          <p className="mt-2 text-sm text-muted">{result.total} on the list</p>
        </div>
        <a
          href="/api/admin/subscribers/export"
          className="inline-flex h-10 items-center justify-center rounded-md border border-ink/15 px-4 text-sm font-medium text-ink hover:border-ink/40"
        >
          Export CSV
        </a>
      </div>

      <form method="get" className="mt-6 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="subscriber-search">
          Search subscribers
        </label>
        <input
          id="subscriber-search"
          name="q"
          defaultValue={query.q}
          placeholder="Search email or name"
          className="w-full rounded-md border border-line px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
        />
        <input type="hidden" name="sort" value={query.sort} />
        <input type="hidden" name="dir" value={query.dir} />
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-white hover:bg-accent-strong"
        >
          Search
        </button>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-[11px] uppercase tracking-[0.16em] text-faint">
              {columns.map((column) => {
                const active = query.sort === column.key;
                const nextDir = active && query.dir === "asc" ? "desc" : "asc";
                return (
                  <th key={column.key} scope="col" className="px-2 py-3 font-medium">
                    <Link
                      href={hrefFor({ q: query.q, sort: column.key, dir: nextDir, page: 1 })}
                      className="hover:text-ink"
                    >
                      {column.label}
                      {active ? (query.dir === "asc" ? " ↑" : " ↓") : ""}
                    </Link>
                  </th>
                );
              })}
              <th scope="col" className="px-2 py-3 font-medium">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {result.subscribers.length === 0 && (
              <tr>
                <td colSpan={5} className="px-2 py-8 text-muted">
                  No subscribers match this search.
                </td>
              </tr>
            )}
            {result.subscribers.map((subscriber) => (
              <tr key={subscriber.id} className="border-b border-line/80">
                <td className="px-2 py-3 text-ink">{subscriber.email}</td>
                <td className="px-2 py-3 text-ink">{subscriber.name ?? "—"}</td>
                <td className="px-2 py-3 text-ink">{subscriber.isActive ? "Active" : "Unsubscribed"}</td>
                <td className="px-2 py-3 text-muted">
                  {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(
                    new Date(subscriber.createdAt),
                  )}
                </td>
                <td className="px-2 py-3">
                  <DeleteSubscriberButton id={subscriber.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <nav className="mt-6 flex items-center justify-between text-sm" aria-label="Pagination">
          {query.page > 1 ? (
            <Link href={hrefFor({ ...query, page: query.page - 1 })} className="text-accent hover:text-accent-strong">
              Previous
            </Link>
          ) : (
            <span className="text-faint">Previous</span>
          )}
          <span className="text-muted">
            Page {query.page} of {pages}
          </span>
          {query.page < pages ? (
            <Link href={hrefFor({ ...query, page: query.page + 1 })} className="text-accent hover:text-accent-strong">
              Next
            </Link>
          ) : (
            <span className="text-faint">Next</span>
          )}
        </nav>
      )}
    </div>
  );
}
