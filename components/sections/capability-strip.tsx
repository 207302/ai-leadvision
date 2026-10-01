import Link from "next/link";

const items = [
  { label: "Artificial Intelligence", href: "/products" },
  { label: "Machine Learning", href: "/products" },
  { label: "Computer Vision", href: "/services" },
  { label: "Robotics", href: "/services#robotics" },
  { label: "Software Engineering", href: "/services#software-development" },
];

export function CapabilityStrip() {
  return (
    <section aria-label="Our expertise" className="border-y border-white/10 bg-navy-2">
      <div className="mx-auto max-w-[1160px] px-5 pt-6 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan">Our Expertise</p>
      </div>
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="border-t border-white/10 px-5 py-5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:bg-white/[0.04] hover:text-cyan sm:px-6"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
