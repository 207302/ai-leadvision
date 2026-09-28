import type { FlowStep } from "@/lib/content/products";

export function FlowDiagram({ steps, title }: { steps: FlowStep[]; title: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-navy p-5 text-white sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan">System flow</p>
        <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">{title}</p>
      </div>
      <ol className="mt-6 space-y-0">
        {steps.map((step, index) => (
          <li key={step.label} className="grid grid-cols-[auto_1fr] gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 font-mono text-[11px] text-cyan">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < steps.length - 1 && <span className="my-1 h-8 w-px bg-white/15" aria-hidden="true" />}
            </div>
            <div className={index < steps.length - 1 ? "pb-3" : ""}>
              <p className="font-heading text-lg leading-none text-white">{step.label}</p>
              <p className="mt-1.5 text-sm text-white/60">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
