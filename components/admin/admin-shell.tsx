"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";

const links = [
  { href: "/admin/settings", label: "Footer" },
  { href: "/admin/subscribers", label: "Subscribers" },
];

export function AdminShell({ email, children }: { email: string; children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-navy text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">AI Lead Vision</p>
            <p className="text-sm text-white/80">{email}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm ${active ? "bg-white text-ink" : "text-white/80 hover:bg-white/10"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={logout}
              disabled={pending}
              className="rounded-md px-3 py-2 text-sm text-cyan hover:text-white disabled:opacity-60"
            >
              {pending ? "Signing out…" : "Log out"}
            </button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">{children}</main>
    </div>
  );
}
