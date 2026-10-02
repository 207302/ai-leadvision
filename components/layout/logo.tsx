export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 shrink-0">
        <rect
          x="1.25"
          y="1.25"
          width="29.5"
          height="29.5"
          rx="7"
          fill="none"
          stroke="#8fd8ea"
          strokeWidth="1.2"
        />
        <path
          d="M8.5 12.2V8.5H12.2M19.8 8.5h3.7v3.7M23.5 19.8v3.7h-3.7M12.2 23.5H8.5v-3.7"
          fill="none"
          stroke="#8fd8ea"
          strokeWidth="1.3"
          strokeLinecap="square"
        />
        <rect x="13.25" y="13.25" width="5.5" height="5.5" fill="#1a5fd4" />
      </svg>
      <span className="leading-none">
        <span className="block font-heading text-[15px] font-medium tracking-[-0.03em] text-white">
          AI Lead Vision
        </span>
      </span>
    </span>
  );
}
