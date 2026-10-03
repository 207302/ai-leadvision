import Link from "next/link";
import {
  Building2,
  Car,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Shield,
  ShoppingBag,
  Sprout,
  Truck,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  automotive: Car,
  manufacturing: Factory,
  healthcare: HeartPulse,
  education: GraduationCap,
  "retail-ecommerce": ShoppingBag,
  logistics: Truck,
  "banking-finance": Landmark,
  construction: HardHat,
  government: Building2,
  agriculture: Sprout,
  "security-surveillance": Shield,
};

const tones = ["blue", "cyan", "navy"] as const;

export function IndustryCard({
  industry,
  index,
  href,
}: {
  industry: { id: string; title: string; text: string };
  index: number;
  href?: string;
}) {
  const Icon = icons[industry.id] ?? Factory;
  const tone = tones[index % tones.length];
  const className = `industry-card industry-card-${tone} enter-box block h-full overflow-hidden rounded-xl`;

  const body = (
    <>
      <span className="relative flex items-start justify-between gap-4 p-6 pb-0">
        <span className={`industry-card-icon industry-card-icon-${tone}`}>
          <Icon size={20} strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</span>
      </span>
      <h3 className="relative px-6 pt-5 text-2xl text-ink">{industry.title}</h3>
      <p className="relative px-6 pb-6 pt-3 text-sm leading-6 text-muted">{industry.text}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {body}
      </Link>
    );
  }

  return <article className={className}>{body}</article>;
}
