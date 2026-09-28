export function Eyebrow({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-cyan" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}
