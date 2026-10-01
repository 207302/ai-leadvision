"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";

export function SiteLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setDone(true), reduce ? 0 : 3400);
    return () => window.clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading AI Lead Vision"
      className="site-loader fixed inset-0 z-[70] flex items-center justify-center bg-navy text-white"
    >
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative w-[min(100%,280px)] px-6 text-center">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="mt-8 h-px overflow-hidden bg-white/15">
          <div className="load-bar h-full bg-cyan" />
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/50">Systems coming online</p>
      </div>
    </div>
  );
}
