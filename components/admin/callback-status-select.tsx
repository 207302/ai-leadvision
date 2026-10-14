"use client";

import { useRouter } from "next/navigation";
import { useState, type ChangeEvent } from "react";
import { callbackStatuses, type CallbackStatus } from "@/lib/callback/validate";

const labels: Record<CallbackStatus, string> = {
  new: "New",
  contacted: "Contacted",
  closed: "Closed",
};

export function CallbackStatusSelect({
  id,
  status,
  name,
}: {
  id: string;
  status: CallbackStatus;
  name: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function onChange(event: ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value as CallbackStatus;
    const previous = value;
    setValue(next);
    setPending(true);
    setError("");

    try {
      const response = await fetch(`/api/admin/callback-requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        setValue(previous);
        setError(payload.error ?? "The status could not be updated.");
        setPending(false);
        return;
      }
      setPending(false);
      router.refresh();
    } catch {
      setValue(previous);
      setError("The status could not be updated.");
      setPending(false);
    }
  }

  return (
    <div>
      <label className="sr-only" htmlFor={`status-${id}`}>
        Status for {name}
      </label>
      <select
        id={`status-${id}`}
        value={value}
        onChange={onChange}
        disabled={pending}
        className="rounded-md border border-line bg-white px-2 py-1.5 text-sm text-ink outline-none focus:border-accent disabled:opacity-60"
      >
        {callbackStatuses.map((item) => (
          <option key={item} value={item}>
            {labels[item]}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
