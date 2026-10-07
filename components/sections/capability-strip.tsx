import Link from "next/link";

const items = [
  { label: "Artificial Intelligence", href: "/products" },
  { label: "Machine Learning", href: "/products" },
  { label: "Computer Vision", href: "/solutions#computer-vision" },
  { label: "Generative AI", href: "/solutions#ai-machine-learning" },
  { label: "Robotics", href: "/solutions#robotics-automation" },
  { label: "Software Engineering", href: "/solutions#software-engineering" },
];

export function CapabilityStrip() {
  return (
    <section aria-label="Our expertise" className="border-y border-white/10 bg-navy-2">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-12">
        <p className="pt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan">Our Expertise</p>
        <div className="mt-4 grid grid-cols-2 border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-5 pr-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-cyan"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
