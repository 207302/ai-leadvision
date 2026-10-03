"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/content/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h2>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="text-base font-medium tracking-tight text-ink sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={cn("mt-1 shrink-0 text-accent transition-transform", open && "rotate-180")}
                />
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={open ? "block" : "hidden"}
            >
              <p className="max-w-2xl pb-5 text-sm leading-6 text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
