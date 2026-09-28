"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/lib/content/site";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const hidden = document.querySelectorAll("main, footer");
    hidden.forEach((node) => {
      if (open) node.setAttribute("inert", "");
      else node.removeAttribute("inert");
    });
    return () => {
      document.body.style.overflow = "";
      hidden.forEach((node) => node.removeAttribute("inert"));
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,height] duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-navy/95"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-6 px-5 sm:h-[4.5rem] sm:px-8">
        <Link href="/" aria-label="AI Lead Vision, home" className="relative z-50">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm tracking-tight transition-colors",
                  active ? "text-white" : "text-white/65 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={siteConfig.cta.primary.href}
            className="inline-flex rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            {siteConfig.cta.primary.label}
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        hidden={!open}
        className={cn(
          "fixed inset-0 z-40 bg-navy lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col justify-between px-6 pb-10 pt-28"
        >
          <ul className="space-y-2">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block py-2 font-heading text-4xl tracking-[-0.04em]",
                      active ? "text-cyan" : "text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={siteConfig.cta.primary.href}
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent text-sm font-medium text-white"
          >
            {siteConfig.cta.primary.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
