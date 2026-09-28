const items = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Robotics",
  "Software Engineering",
];

export function CapabilityStrip() {
  return (
    <section aria-label="Capabilities" className="border-y border-white/10 bg-navy-2">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item, index) => (
          <p
            key={item}
            className={`px-5 py-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 sm:px-6 ${
              index < items.length - 1 ? "lg:border-r lg:border-white/10" : ""
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
