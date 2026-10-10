"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteSubscriberButton({ id }: { id: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function remove() {
    if (!window.confirm("Remove this subscriber?")) return;
    setPending(true);
    setError("");
    try {
      const response = await fetch(`/api/admin/subscribers/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        setError(payload.error ?? "The subscriber could not be removed.");
        setPending(false);
        return;
      }
      router.refresh();
    } catch {
      setError("The subscriber could not be removed.");
      setPending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={remove}
        disabled={pending}
        className="text-sm text-red-700 hover:text-red-900 disabled:opacity-60"
      >
        {pending ? "Removing…" : "Delete"}
      </button>
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
