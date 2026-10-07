"use client";

import { siteConfig } from "@/lib/content/site";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items = [
  { ...siteConfig.cta.explore, variant: "primary" as const },
  { ...siteConfig.cta.expert, variant: "secondary" as const },
];

export function LeadCtas({
  tone = "dark",
  layout = "wrap",
  className,
  location = "lead_ctas",
}: {
  tone?: "dark" | "light";
  layout?: "wrap" | "stack";
  className?: string;
  location?: string;
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
          onClick={() => trackEvent("cta_click", { cta_label: item.label, cta_location: location })}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}
