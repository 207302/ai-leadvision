import type { MediaSlot } from "@/lib/content/product-pages";

export function MediaPlaceholder({
  title,
  note,
  framed = false,
}: {
  title: string;
  note: string;
  framed?: boolean;
}) {
  return (
    <figure
      className={
        framed
          ? "flex aspect-video flex-col justify-between rounded-xl border border-dashed border-accent/35 bg-white p-4"
          : "flex min-h-36 flex-col justify-between rounded-xl border border-dashed border-accent/35 bg-paper p-4"
      }
    >
      <figcaption className="text-[11px] uppercase tracking-[0.16em] text-accent">{title}</figcaption>
      <p className="font-mono text-sm text-faint">{note}</p>
    </figure>
  );
}

export function MediaGrid({ items, framed = false }: { items: readonly MediaSlot[]; framed?: boolean }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id}>
          <MediaPlaceholder title={item.title} note={item.note} framed={framed} />
        </li>
      ))}
    </ul>
  );
}
