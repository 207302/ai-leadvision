export function InsightPanel() {
  const frames = ["01", "02", "03", "04"];

  return (
    <figure className="mx-auto w-full max-w-[520px]">
      <div
        role="img"
        aria-label="Illustration of camera views beside an analytics summary"
        className="rounded-2xl border border-white/10 bg-navy-2 p-3 shadow-[0_0_80px_rgba(26,95,212,0.18)] sm:p-4"
      >
        <div className="rounded-xl border border-white/10 bg-[#0c1220] p-3 sm:p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/45">
            <span>Camera views</span>
            <span className="text-cyan">Analytics</span>
          </div>
          <div className="mt-3 grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] gap-2">
            <div className="grid grid-cols-2 gap-2">
              {frames.map((frame) => (
                <div key={frame} className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-[#101622]">
                  <svg viewBox="0 0 120 90" className="h-full w-full" aria-hidden="true">
                    <rect x="18" y="16" width="34" height="56" rx="3" fill="none" stroke="#8fd8ea" strokeWidth="1.4" />
                    <circle cx="35" cy="32" r="6" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" />
                    <path d="M22 66c2-12 8-16 13-16s11 4 13 16" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" />
                    <rect x="62" y="22" width="30" height="48" rx="3" fill="none" stroke="#1a5fd4" strokeWidth="1.4" />
                    <circle cx="77" cy="36" r="5" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                    <path d="M66 66c2-9 6-12 11-12s9 3 11 12" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                  </svg>
                  <span className="absolute left-1.5 top-1.5 font-mono text-[9px] tracking-[0.14em] text-cyan">{frame}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-between rounded-md border border-white/10 bg-[#101622] p-2.5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/45">Trend</p>
              <div className="mt-3 flex h-24 items-end gap-1" aria-hidden="true">
                {[42, 68, 50, 84, 60, 96, 74].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-sm bg-accent"
                    style={{ height: `${height}%`, opacity: 0.45 + (index % 3) * 0.18 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
