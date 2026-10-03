export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/logo/logo.png"
        alt=""
        width={420}
        height={594}
        className="h-9 w-9 shrink-0 object-cover object-[50%_57%] sm:h-10 sm:w-10"
      />
      <span className="leading-none">
        <span className="block font-heading text-[15px] font-medium tracking-[-0.03em] text-white">
          AI Lead Vision
        </span>
      </span>
    </span>
  );
}
