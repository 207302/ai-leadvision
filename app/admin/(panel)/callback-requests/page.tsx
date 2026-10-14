import Link from "next/link";
import { CallbackStatusSelect } from "@/components/admin/callback-status-select";
import { listCallbackRequests, parseCallbackQuery } from "@/lib/callback/store";

export const dynamic = "force-dynamic";

function hrefFor(query: { q: string; page: number }) {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  if (query.page > 1) params.set("page", String(query.page));
  const search = params.toString();
  return search ? `/admin/callback-requests?${search}` : "/admin/callback-requests";
}

export default async function CallbackRequestsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolved = await searchParams;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(resolved)) {
    if (typeof value === "string") params.set(key, value);
  }
  const query = parseCallbackQuery(params);
  const result = await listCallbackRequests(query);
  const pages = Math.max(1, Math.ceil(result.total / result.pageSize));

  return (
    <div className="rounded-xl border border-line bg-white p-5 sm:p-8">
      <h1 className="text-2xl text-ink">Callback Requests</h1>
      <p className="mt-2 text-sm text-muted">
        {result.total} {result.total === 1 ? "request" : "requests"}, newest first
      </p>

      <form method="get" className="mt-6 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="callback-search">
          Search callback requests
        </label>
        <input
          id="callback-search"
          name="q"
          defaultValue={query.q}
          placeholder="Search name, email, or phone"
          className="w-full rounded-md border border-line px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-white hover:bg-accent-strong"
        >
          Search
        </button>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-[11px] uppercase tracking-[0.16em] text-faint">
              <th scope="col" className="px-2 py-3 font-medium">Name</th>
              <th scope="col" className="px-2 py-3 font-medium">Email</th>
              <th scope="col" className="px-2 py-3 font-medium">Phone</th>
              <th scope="col" className="px-2 py-3 font-medium">Status</th>
              <th scope="col" className="px-2 py-3 font-medium">Received</th>
            </tr>
          </thead>
          <tbody>
            {result.requests.length === 0 && (
              <tr>
                <td colSpan={5} className="px-2 py-8 text-muted">
                  {query.q ? "No callback requests match this search." : "No callback requests yet."}
                </td>
              </tr>
            )}
            {result.requests.map((request) => (
              <tr key={request.id} className="border-b border-line/80">
                <td className="px-2 py-3 text-ink">{request.name}</td>
                <td className="px-2 py-3 text-ink">{request.email}</td>
                <td className="px-2 py-3 text-ink">{request.phone}</td>
                <td className="px-2 py-3">
                  <CallbackStatusSelect
                    key={`${request.id}-${request.status}`}
                    id={request.id}
                    status={request.status}
                    name={request.name}
                  />
                </td>
                <td className="px-2 py-3 text-muted">
                  {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(
                    new Date(request.createdAt),
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <nav className="mt-6 flex items-center justify-between text-sm" aria-label="Pagination">
          {query.page > 1 ? (
            <Link href={hrefFor({ q: query.q, page: query.page - 1 })} className="text-accent hover:text-accent-strong">
              Previous
            </Link>
          ) : (
            <span className="text-faint">Previous</span>
          )}
          <span className="text-muted">
            Page {query.page} of {pages}
          </span>
          {query.page < pages ? (
            <Link href={hrefFor({ q: query.q, page: query.page + 1 })} className="text-accent hover:text-accent-strong">
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
