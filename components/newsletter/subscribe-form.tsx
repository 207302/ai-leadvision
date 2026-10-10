"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan";

export function SubscribeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company_website: data.get("company_website"),
        }),
      });
      const payload = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "The list is unavailable right now. Try again shortly.");
        return;
      }
      form.reset();
      setStatus("success");
      setMessage(payload.message ?? "You are subscribed.");
    } catch {
      setStatus("error");
      setMessage("The list is unavailable right now. Try again shortly.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative mt-8 max-w-xs">
      <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">Newsletter</p>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="mt-4 block text-sm text-white/75" htmlFor="newsletter-name">
        Name <span className="text-white/40">(optional)</span>
      </label>
      <input id="newsletter-name" name="name" autoComplete="name" maxLength={80} className={fieldClass} />
      <label className="mt-3 block text-sm text-white/75" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
        className={fieldClass}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-strong disabled:opacity-60"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
      {message && (
        <p role="status" className={`mt-3 text-sm leading-5 ${status === "error" ? "text-red-300" : "text-cyan"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
