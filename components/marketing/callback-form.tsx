"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock } from "lucide-react";
import { callbackHighlightEvent } from "@/lib/callback/scroll";
import { parseCallback, type CallbackErrors } from "@/lib/callback/validate";
import { consultationSectionId, practicalAiPage } from "@/lib/content/practical-ai";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";

const redirectAfterMs = 4000;

export function CallbackForm() {
  const router = useRouter();
  const uid = useId();
  const nameId = `${uid}-name`;
  const emailId = `${uid}-email`;
  const phoneId = `${uid}-phone`;
  const trapId = `${uid}-company`;
  const titleId = `${uid}-title`;
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const timer = useRef<number | null>(null);
  const redirectTimer = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [errors, setErrors] = useState<CallbackErrors>({});
  const [formError, setFormError] = useState("");
  const [highlight, setHighlight] = useState(false);
  const [pending, setPending] = useState(false);
  const [thanks, setThanks] = useState(false);

  useEffect(() => {
    const start = () => {
      if (timer.current) window.clearTimeout(timer.current);
      setHighlight(false);
      window.requestAnimationFrame(() => setHighlight(true));
      timer.current = window.setTimeout(() => {
        setHighlight(false);
        const form = formRef.current;
        const active = document.activeElement;
        const alreadyTyping = Boolean(form && active instanceof Node && active !== form && form.contains(active));
        if (!alreadyTyping) nameRef.current?.focus({ preventScroll: true });
        timer.current = null;
      }, 2000);
    };

    window.addEventListener(callbackHighlightEvent, start);
    if (window.location.hash === `#${consultationSectionId}`) {
      window.requestAnimationFrame(start);
    }

    return () => {
      window.removeEventListener(callbackHighlightEvent, start);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    if (!thanks) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    redirectTimer.current = window.setTimeout(() => {
      router.push("/");
    }, redirectAfterMs);

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        router.push("/");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      if (redirectTimer.current) window.clearTimeout(redirectTimer.current);
    };
  }, [thanks, router]);

  function closeThanks() {
    if (redirectTimer.current) window.clearTimeout(redirectTimer.current);
    router.push("/");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company_website: String(data.get("company_website") ?? ""),
    };

    const parsed = parseCallback(payload);
    if (!parsed.ok) {
      setErrors(parsed.errors);
      setFormError(parsed.errors.form ?? "Check the highlighted fields and try again.");
      setPending(false);
      const first = (["name", "email", "phone"] as const).find((key) => parsed.errors[key]);
      if (first === "name") nameRef.current?.focus();
      else if (first) form.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setFormError("");
    setPending(true);

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; errors?: CallbackErrors };
      if (result.errors || !response.ok || !result.ok) {
        const nextErrors = result.errors ?? {};
        setErrors(nextErrors);
        setFormError(nextErrors.form ?? "Check the highlighted fields and try again.");
        setPending(false);
        return;
      }

      trackEvent("callback_request", { cta_location: "practical_form" });
      form.reset();
      setPending(false);
      setThanks(true);
    } catch {
      setFormError("We could not save your request. Please try again in a moment.");
      setPending(false);
    }
  }

  const copy = practicalAiPage.form;

  return (
    <>
      <form ref={formRef} onSubmit={onSubmit} noValidate className="relative">
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={trapId}>Company website</label>
          <input id={trapId} name="company_website" tabIndex={-1} autoComplete="off" />
        </div>

        {formError && (
          <p role="alert" className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
            {formError}
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <Field
            id={nameId}
            label={copy.name}
            name="name"
            autoComplete="name"
            error={errors.name}
            highlight={highlight}
            inputRef={nameRef}
          />
          <Field
            id={emailId}
            label={copy.email}
            name="email"
            type="email"
            autoComplete="email"
            error={errors.email}
            highlight={highlight}
          />
          <Field
            id={phoneId}
            label={copy.phone}
            name="phone"
            type="tel"
            autoComplete="tel"
            error={errors.phone}
            highlight={highlight}
            className="sm:col-span-2 xl:col-span-1"
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2 text-sm leading-6 text-muted">
            <Lock size={16} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
            <span>{copy.privacy}</span>
          </p>
          <button
            type="submit"
            disabled={pending || thanks}
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-strong disabled:opacity-60"
          >
            {pending ? "Sending…" : copy.submit}
            {!pending && <ArrowRight size={16} aria-hidden="true" />}
          </button>
        </div>
      </form>

      {thanks &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/70 px-5"
            onClick={closeThanks}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="w-full max-w-md rounded-xl border border-line bg-white p-6 shadow-xl sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <h2 id={titleId} className="text-2xl text-ink">
                {copy.thanks}
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={closeThanks}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-white hover:bg-accent-strong"
              >
                Close
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

function Field({
  id,
  label,
  name,
  error,
  highlight,
  type = "text",
  autoComplete,
  className,
  inputRef,
}: {
  id: string;
  label: string;
  name: string;
  error?: string;
  highlight: boolean;
  type?: string;
  autoComplete?: string;
  className?: string;
  inputRef?: { current: HTMLInputElement | null };
}) {
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label} <span aria-hidden="true">*</span>
      </label>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, highlight && "callback-highlight")}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
