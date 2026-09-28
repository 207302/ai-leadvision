import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Tone = "dark" | "light";

const styles: Record<Variant, Record<Tone, string>> = {
  primary: {
    dark: "bg-accent text-white hover:bg-accent-strong",
    light: "bg-accent text-white hover:bg-accent-strong",
  },
  secondary: {
    dark: "border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
    light: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-white",
  },
  ghost: {
    dark: "text-cyan hover:text-white",
    light: "text-accent hover:text-accent-strong",
  },
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  tone?: Tone;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  ariaExpanded?: boolean;
  ariaControls?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  tone = "dark",
  className,
  type = "button",
  disabled,
  onClick,
  ariaExpanded,
  ariaControls,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium tracking-tight transition-colors duration-200",
    variant === "ghost" && "px-0 py-0",
    styles[variant][tone],
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
}
