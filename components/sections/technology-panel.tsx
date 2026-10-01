"use client";

import { useState } from "react";
import { capabilities } from "@/lib/content/services";

export function TechnologyPanel() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-navy text-white">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div
          role="tablist"
          aria-label="Technology disciplines"
          className="grid content-start gap-2 sm:grid-cols-2 lg:grid-cols-1"
        >
          {capabilities.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                id={`tech-tab-${index}`}
                aria-selected={selected}
                aria-controls="tech-panel"
                className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                  selected
                    ? "border-cyan/50 bg-white/10 text-white shadow-[0_0_24px_rgba(143,216,234,0.12)]"
                    : "border-white/10 text-white/70 hover:border-white/25 hover:text-white"
                }`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span className="font-mono text-[10px] tracking-[0.16em] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-heading text-base tracking-tight">{item.title}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="tech-panel"
          aria-labelledby={`tech-tab-${active}`}
          className="flex min-h-72 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-cyan">Live discipline</p>
            <h3 className="mt-4 text-3xl text-white sm:text-4xl">{current.title}</h3>
            <p className="mt-4 max-w-md text-base leading-7 text-white/70">{current.text}</p>
          </div>
          <DisciplineSignal key={current.title} label={current.title} />
        </div>
      </div>
    </div>
  );
}

function DisciplineSignal({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 360 80" className="mt-8 h-16 w-full" role="img" aria-label={label}>
      <line x1="8" y1="36" x2="352" y2="36" stroke="rgba(255,255,255,0.15)" />
      <circle cx="28" cy="36" r="5" fill="#07090f" stroke="#8fd8ea" />
      <circle cx="180" cy="36" r="16" fill="#07090f" stroke="#1a5fd4" strokeWidth="1.5" />
      <circle cx="180" cy="36" r="4" fill="#8fd8ea" />
      <circle className="dash-shift" cx="180" cy="36" r="28" fill="none" stroke="rgba(143,216,234,0.55)" />
      <circle cx="332" cy="36" r="5" fill="#07090f" stroke="#8fd8ea" />
    </svg>
  );
}
