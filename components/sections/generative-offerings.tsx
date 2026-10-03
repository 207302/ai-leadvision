import { generativeAi } from "@/lib/content/generative-ai";

export function GenerativeOfferingList({
  cardClassName = "bg-white",
}: {
  cardClassName?: string;
}) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {generativeAi.offerings.map((item) => (
        <li key={item.title} className={`rounded-xl border border-line p-5 ${cardClassName}`}>
          <h3 className="text-lg text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
