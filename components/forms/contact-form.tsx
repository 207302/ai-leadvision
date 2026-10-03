"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProduct } from "@/lib/content/products";
import {
  inquiryIndustries,
  inquiryRequirements,
  inquirySolutions,
  preferredContactMethods,
  siteConfig,
} from "@/lib/content/site";
import { parseInquiry, type InquiryErrors } from "@/lib/contact/parse";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";

function listed(options: readonly { value: string }[], value: string) {
  return options.some((item) => item.value === value) ? value : "";
}

export function ContactForm() {
  const params = useSearchParams();
  const requestedInterest = params.get("interest") ?? "";
  const productId = params.get("product") ?? "";
  const product = getProduct(productId);

  const initialSolution = listed(
    inquirySolutions,
    params.get("solution") || productId || requestedInterest,
  );
  const initialRequirement =
    listed(inquiryRequirements, params.get("requirement") ?? "") ||
    (requestedInterest === "training" ? "training" : "");

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [formError, setFormError] = useState("");

  const solutionDefault = useMemo(() => initialSolution, [initialSolution]);
  const requirementDefault = useMemo(() => initialRequirement, [initialRequirement]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      industry: String(data.get("industry") ?? ""),
      requirement: String(data.get("requirement") ?? ""),
      solution: String(data.get("solution") ?? ""),
      message: String(data.get("message") ?? ""),
      contactMethod: String(data.get("contactMethod") ?? ""),
      product: product?.name ?? "",
      website: String(data.get("website") ?? ""),
    };

    const parsed = parseInquiry(payload);
    if (!parsed.ok) {
      setErrors(parsed.errors);
      setFormError("Check the highlighted fields and try again.");
      setStatus("error");
      return;
    }

    setErrors({});
    setFormError("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok: boolean;
        errors?: InquiryErrors;
        code?: string;
      };

      if (result.errors) {
        setErrors(result.errors);
        setFormError("Check the highlighted fields and try again.");
        setStatus("error");
        return;
      }

      if (!response.ok || !result.ok) {
        setFormError(
          result.code === "DELIVERY_NOT_CONFIGURED"
            ? `Email delivery is not connected on this server yet. Please write to ${siteConfig.emails.general} with the same details.`
            : `The message could not be sent. Please email ${siteConfig.emails.general} directly.`,
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setFormError(`The message could not be sent. Please email ${siteConfig.emails.general} directly.`);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="enter-box rounded-xl border border-line bg-white p-8" role="status">
        <p className="text-[11px] uppercase tracking-[0.16em] text-accent">Inquiry received</p>
        <h2 className="mt-3 text-2xl text-ink">Thank you. We have your note.</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          The team reads inquiries at {siteConfig.emails.general}. If your note is about training or hiring, use {siteConfig.emails.hr}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="enter-box relative rounded-xl border border-line bg-white p-6 sm:p-8">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {formError && (
        <p role="alert" className="mb-6 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {formError}
        </p>
      )}

      {product && (
        <p className="mb-6 text-sm text-muted">
          Regarding <span className="text-ink">{product.name}</span>
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field label="Company" name="company" error={errors.company} autoComplete="organization" />
        <Field label="Work Email" name="email" type="email" error={errors.email} autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} autoComplete="tel" />
        <SelectField
          label="Industry"
          name="industry"
          error={errors.industry}
          options={inquiryIndustries}
          placeholder="Select an industry"
        />
        <SelectField
          label="Requirement"
          name="requirement"
          error={errors.requirement}
          options={inquiryRequirements}
          defaultValue={requirementDefault}
          placeholder="Select a requirement"
        />
      </div>

      <SelectField
        className="mt-5"
        label="Interested Solution"
        name="solution"
        error={errors.solution}
        options={inquirySolutions}
        defaultValue={solutionDefault}
        placeholder="Select a solution"
      />

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
          placeholder="What are you trying to solve?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <fieldset
        className="mt-5"
        aria-invalid={Boolean(errors.contactMethod)}
        aria-describedby={errors.contactMethod ? "contactMethod-error" : undefined}
      >
        <legend className="text-sm font-medium text-ink">Preferred contact method</legend>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {preferredContactMethods.map((item) => (
            <label key={item.value} className="inline-flex items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="contactMethod"
                value={item.value}
                className="accent-accent"
                aria-invalid={Boolean(errors.contactMethod)}
              />
              {item.label}
            </label>
          ))}
        </div>
        {errors.contactMethod && (
          <p id="contactMethod-error" className="mt-1.5 text-sm text-red-700">
            {errors.contactMethod}
          </p>
        )}
      </fieldset>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-strong disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  error,
  options,
  defaultValue = "",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  error?: string;
  options: readonly { value: string; label: string }[];
  defaultValue?: string;
  placeholder: string;
  className?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
      >
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
