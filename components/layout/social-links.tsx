import { Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/content/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
];

export function SocialLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <ul className="flex items-center gap-2">
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors",
                tone === "dark"
                  ? "border-white/15 text-white/80 hover:border-cyan/50 hover:text-cyan"
                  : "border-line text-ink hover:border-accent/40 hover:text-accent",
              )}
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
