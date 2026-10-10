"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPending(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(payload.error ?? "Sign-in is unavailable right now.");
        setPending(false);
        return;
      }
      router.replace("/admin/settings");
      router.refresh();
    } catch {
      setError("Sign-in is unavailable right now.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line bg-white p-6 sm:p-8" noValidate>
      <h1 className="text-2xl text-ink">Admin sign in</h1>
      <p className="mt-2 text-sm leading-6 text-muted">This page is for AI Lead Vision staff.</p>
      {error && (
        <p role="alert" className="mt-5 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <label className="mt-5 block text-sm text-ink" htmlFor="admin-email">
        Email
      </label>
      <input id="admin-email" name="email" type="email" autoComplete="username" required className={fieldClass} />
      <label className="mt-4 block text-sm text-ink" htmlFor="admin-password">
        Password
      </label>
      <input
        id="admin-password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className={fieldClass}
      />
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-accent text-sm font-medium text-white transition-colors hover:bg-accent-strong disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
