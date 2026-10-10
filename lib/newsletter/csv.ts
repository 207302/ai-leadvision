import type { Subscriber } from "@/lib/newsletter/store";

function cell(value: string) {
  const guarded = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${guarded.replaceAll('"', '""')}"`;
}

export function subscribersToCsv(subscribers: Subscriber[]) {
  const header = ["email", "name", "is_active", "unsubscribed_at", "created_at"];
  const lines = subscribers.map((subscriber) =>
    [
      subscriber.email,
      subscriber.name ?? "",
      subscriber.isActive ? "true" : "false",
      subscriber.unsubscribedAt ?? "",
      subscriber.createdAt,
    ]
      .map(cell)
      .join(","),
  );
  return `\uFEFF${[header.join(","), ...lines].join("\r\n")}\r\n`;
}
