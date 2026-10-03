import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { socialProfiles } from "@/lib/content/site";
import { cn } from "@/lib/utils";

const icons: Record<(typeof socialProfiles)[number]["label"], LucideIcon> = {
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Instagram: Instagram,
  Facebook: Facebook,
};

function isLive(href: string | null): href is string {
  return typeof href === "string" && href.startsWith("http");
}

export function SocialLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const pending = socialProfiles.filter((item) => !isLive(item.href));

  return (
    <div>
      <ul className="flex items-center gap-2">
        {socialProfiles.map((item) => {
          const Icon = icons[item.label];
          const classes = cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors",
            tone === "dark"
              ? "border-white/15 text-white/80 hover:border-cyan/50 hover:text-cyan"
              : "border-line text-ink hover:border-accent/40 hover:text-accent",
            !isLive(item.href) && "opacity-70",
          );

          if (!isLive(item.href)) {
            return (
              <li key={item.label}>
                <span className={classes} role="img" aria-label={`${item.label}, [profile URL]`}>
                  <Icon size={16} aria-hidden="true" />
                </span>
              </li>
            );
          }

          return (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={classes}
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
      {pending.length > 0 && (
        <p className={cn("mt-3 text-xs leading-5", tone === "dark" ? "text-white/45" : "text-muted")}>
          {pending.map((item) => item.label).join(", ")}: [profile URL]
        </p>
      )}
    </div>
  );
}
