"use client";

import { FormEvent, useState } from "react";
import { socialPlatforms, type SettingsInput, type SiteSettings, type SocialKey } from "@/lib/settings/types";

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";

type Errors = Partial<Record<"phones" | "whatsapp" | "address" | SocialKey | "form", string>>;

function toInput(settings: SiteSettings): SettingsInput {
  return {
    phones: settings.phones.length ? settings.phones.map((phone) => phone.display) : [""],
    whatsapp: settings.whatsapp.length ? settings.whatsapp.map((phone) => phone.display) : [""],
    address: settings.addressLines.join("\n"),
    social: {
      linkedin: settings.social.linkedin ?? "",
      youtube: settings.social.youtube ?? "",
      instagram: settings.social.instagram ?? "",
      facebook: settings.social.facebook ?? "",
    },
  };
}

export function SettingsForm({ initial }: { initial: SiteSettings }) {
  const [values, setValues] = useState<SettingsInput>(() => toInput(initial));
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  function updateList(key: "phones" | "whatsapp", index: number, value: string) {
    setValues((current) => {
      const next = [...current[key]];
      next[index] = value;
      return { ...current, [key]: next };
    });
  }

  function addRow(key: "phones" | "whatsapp") {
    setValues((current) => ({ ...current, [key]: [...current[key], ""] }));
  }

  function removeRow(key: "phones" | "whatsapp", index: number) {
    setValues((current) => {
      const next = current[key].filter((_, itemIndex) => itemIndex !== index);
      return { ...current, [key]: next.length ? next : [""] };
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");
    setErrors({});

    try {
      const response = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as { error?: string; errors?: Errors; settings?: SiteSettings };
      if (!response.ok) {
        setErrors(payload.errors ?? { form: payload.error ?? "The settings could not be saved." });
        setPending(false);
        return;
      }
      if (payload.settings) setValues(toInput(payload.settings));
      setMessage("Saved. The public footer will show these details on the next visit.");
    } catch {
      setErrors({ form: "The settings could not be saved." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      {message && (
        <p role="status" className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
          {message}
        </p>
      )}
      {errors.form && (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {errors.form}
        </p>
      )}

      <NumberList
        label="Contact phone numbers"
        name="phones"
        values={values.phones}
        error={errors.phones}
        onChange={(index, value) => updateList("phones", index, value)}
        onAdd={() => addRow("phones")}
        onRemove={(index) => removeRow("phones", index)}
      />
      <NumberList
        label="WhatsApp numbers"
        name="whatsapp"
        values={values.whatsapp}
        error={errors.whatsapp}
        onChange={(index, value) => updateList("whatsapp", index, value)}
        onAdd={() => addRow("whatsapp")}
        onRemove={(index) => removeRow("whatsapp", index)}
      />

      <fieldset>
        <legend className="text-sm font-medium text-ink">Office address</legend>
        <p className="mt-1 text-sm text-muted">One line per row. This replaces the street address in the footer.</p>
        <textarea
          name="address"
          rows={4}
          value={values.address}
          onChange={(event) => setValues((current) => ({ ...current, address: event.target.value }))}
          className={fieldClass}
        />
        {errors.address && <p className="mt-2 text-sm text-red-700">{errors.address}</p>}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-sm font-medium text-ink">Social links</legend>
        <p className="text-sm text-muted">Leave a link blank to hide that icon in the footer.</p>
        {socialPlatforms.map((platform) => (
          <div key={platform.key}>
            <label className="text-sm text-ink" htmlFor={`social-${platform.key}`}>
              {platform.label}
            </label>
            <input
              id={`social-${platform.key}`}
              type="url"
              inputMode="url"
              placeholder="https://"
              value={values.social[platform.key]}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  social: { ...current.social, [platform.key]: event.target.value },
                }))
              }
              className={fieldClass}
            />
            {errors[platform.key] && <p className="mt-2 text-sm text-red-700">{errors[platform.key]}</p>}
          </div>
        ))}
      </fieldset>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-strong disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save footer"}
      </button>
    </form>
  );
}

function NumberList({
  label,
  name,
  values,
  error,
  onChange,
  onAdd,
  onRemove,
}: {
  label: string;
  name: string;
  values: string[];
  error?: string;
  onChange: (index: number, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink">{label}</legend>
      <div className="mt-3 space-y-3">
        {values.map((value, index) => (
          <div key={`${name}-${index}`} className="flex flex-col gap-2 sm:flex-row">
            <label className="sr-only" htmlFor={`${name}-${index}`}>
              {label} {index + 1}
            </label>
            <input
              id={`${name}-${index}`}
              value={value}
              onChange={(event) => onChange(index, event.target.value)}
              inputMode="tel"
              autoComplete="tel"
              className="w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
            />
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="rounded-md border border-line px-3 py-2 text-sm text-ink hover:border-ink/30"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
      <button type="button" onClick={onAdd} className="mt-3 text-sm font-medium text-accent hover:text-accent-strong">
        Add number
      </button>
    </fieldset>
  );
}
