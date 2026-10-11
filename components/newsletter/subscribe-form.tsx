"use client";

import { FormEvent, useId, useState } from "react";
import { GeneralEmailLink } from "@/components/layout/general-email-link";
import { newsletterCopy } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-md border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/50";

export function SubscribeForm({ className }: { className?: string }) {
  const uid = useId();
  const titleId = `${uid}-title`;
  const nameId = `${uid}-name`;
  const emailId = `${uid}-email`;
  const trapId = `${uid}-company`;
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
    <form
      onSubmit={onSubmit}
      noValidate
      aria-labelledby={titleId}
      className={cn(
        "relative flex w-full flex-col gap-8 md:flex-row md:items-start md:justify-between",
        className,
      )}
    >
      <div className="max-w-xl">
        <h3 id={titleId} className="text-[11px] uppercase tracking-[0.16em] text-white/40">
          {newsletterCopy.label}
        </h3>
        <p className="mt-3 text-base leading-7 text-white/70">{newsletterCopy.body}</p>
        <p className="mt-2 text-sm leading-6 text-white/50">
          {newsletterCopy.removal}{" "}
          <GeneralEmailLink className="text-white/80 underline decoration-white/25 underline-offset-2 hover:text-white hover:decoration-white" />.
        </p>
      </div>

      <div className="w-full md:w-80">
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={trapId}>Company website</label>
          <input id={trapId} name="company_website" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="block text-sm text-white/75" htmlFor={emailId}>
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="name@company.com"
          aria-invalid={status === "error"}
          className={fieldClass}
        />

        <label className="mt-3 block text-sm text-white/75" htmlFor={nameId}>
          Name <span className="text-white/40">(optional)</span>
        </label>
        <input
          id={nameId}
          name="name"
          autoComplete="name"
          maxLength={80}
          placeholder="Your name"
          className={fieldClass}
        />

        <Button type="submit" disabled={status === "submitting"} className="mt-3 min-h-12 w-full">
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </Button>

        {message && (
          <p role="status" className={cn("mt-3 text-sm leading-5", status === "error" ? "text-red-300" : "text-cyan")}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
