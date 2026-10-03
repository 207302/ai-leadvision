import { siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items = [
  { ...siteConfig.cta.demo, variant: "primary" as const },
  { ...siteConfig.cta.expert, variant: "secondary" as const },
  { ...siteConfig.cta.consultation, variant: "secondary" as const },
];

export function LeadCtas({
  tone = "dark",
  layout = "wrap",
  className,
}: {
  tone?: "dark" | "light";
  layout?: "wrap" | "stack";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        layout === "wrap" && "sm:flex-row sm:flex-wrap",
        className,
      )}
    >
      {items.map((item) => (
        <Button
          key={item.label}
          href={item.href}
          variant={item.variant}
          tone={tone}
          className={cn(
            "h-auto min-h-12 whitespace-normal px-4 py-3 text-center",
            layout === "stack" ? "w-full" : "w-full sm:w-auto",
          )}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}
