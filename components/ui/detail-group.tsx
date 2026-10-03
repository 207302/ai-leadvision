"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type DetailItem = {
  title: string;
  body?: string;
  list?: string[];
};

export function DetailGroup({ items, tone = "light" }: { items: DetailItem[]; tone?: "light" | "dark" }) {
  return (
    <div className="grid items-start gap-2 sm:grid-cols-2">
      {items.map((item, index) => (
        <DetailDisclosure
          key={item.title}
          item={item}
          tone={tone}
          wide={items.length % 2 === 1 && index === items.length - 1}
        />
      ))}
    </div>
  );
}

function DetailDisclosure({
  item,
  tone,
  wide,
}: {
  item: DetailItem;
  tone: "light" | "dark";
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "enter-box rounded-lg border transition-colors",
        wide && "sm:col-span-2",
        dark ? "border-white/10 bg-white/[0.03]" : "border-line bg-white/70",
        open && (dark ? "border-cyan/40" : "border-accent/30"),
      )}
    >
      <h3>
        <button
          type="button"
          className={cn(
            "flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium",
            dark ? "text-white" : "text-ink",
          )}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {item.title}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={cn(
              "shrink-0 text-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
              open && "rotate-180",
            )}
          />
        </button>
      </h3>
      <div
        id={panelId}
        aria-hidden={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div
          className={cn(
            "overflow-hidden transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          <div className={cn("px-4 pb-4 text-sm leading-6", dark ? "text-white/70" : "text-muted")}>
            {item.body && <p>{item.body}</p>}
            {item.list && (
              <ul className="space-y-2">
                {item.list.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
