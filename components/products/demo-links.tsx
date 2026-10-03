import { siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/button";

export function DemoLinks({
  productId,
  salesHref,
  salesLabel,
}: {
  productId: string;
  salesHref?: string;
  salesLabel?: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button href={`${siteConfig.cta.demo.href}&product=${productId}`} tone="light">
        {siteConfig.cta.demo.label}
      </Button>
      {salesHref && salesLabel && (
        <Button href={salesHref} variant="secondary" tone="light">
          {salesLabel}
        </Button>
      )}
    </div>
  );
}
