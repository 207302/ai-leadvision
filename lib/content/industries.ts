/**
 * Industries the owner has named. Primary six lead the page.
 * Extra industries already on the site stay below them.
 */

export const industriesIntro = {
  eyebrow: "Industries",
  title: "Industries we work with.",
  support:
    "Manufacturing, automotive, retail, healthcare, education, and security lead. Other sectors already described on the site sit below.",
};

export const industriesPage = {
  path: "/industries",
  eyebrow: "Industries",
  title: "Industries we work with.",
  description:
    "AI, computer vision, robotics, and automation for manufacturing, automotive, retail, healthcare, education, and security.",
};

export const industries = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    text: "Machine vision, inspection, automation, and predictive maintenance for the production line.",
    href: "/solutions#robotics-automation",
    primary: true,
  },
  {
    id: "automotive",
    title: "Automotive",
    text: "AI, embedded systems, testing, computer vision, and intelligent systems, including the automotive standards named on this site.",
    href: "/solutions#automotive-engineering",
    primary: true,
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    text: "Customer analytics, AI assistants, and inventory intelligence. Voice and chat sit in the channel the customer already uses.",
    href: "/solutions#ai-machine-learning",
    primary: true,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    text: "Intelligent workflows for hospital check-in and healthcare conversations. TODO: confirm with client — clinical monitoring products are not published yet.",
    href: "/solutions#ai-machine-learning",
    primary: true,
  },
  {
    id: "education",
    title: "Education",
    text: "AI training, robotics, and smart systems for schools, colleges, and STEM labs, including campus attendance.",
    href: "/products/robotics",
    primary: true,
  },
  {
    id: "security-surveillance",
    title: "Security",
    text: "Video analytics, detection, and alerts on a live camera feed — intrusion, PPE, fire and smoke, crowds, vehicles, plates, and falls.",
    href: "/products#computer-vision",
    primary: true,
  },
  {
    id: "logistics",
    title: "Logistics",
    text: "Enterprise AI, computer vision, and software scoped to a logistics operation.",
    href: "/solutions",
    primary: false,
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    text: "Voice assistants for banking conversations, connected to booking, support, and the CRM.",
    href: "/products#voice-bot",
    primary: false,
  },
  {
    id: "construction",
    title: "Construction",
    text: "Contactless attendance for construction sites, with a record the site can audit.",
    href: "/products/attendance",
    primary: false,
  },
  {
    id: "government",
    title: "Government",
    text: "Contactless attendance for government offices, without a shared biometric device.",
    href: "/products/attendance",
    primary: false,
  },
  {
    id: "agriculture",
    title: "Agriculture",
    text: "Enterprise AI, computer vision, and software scoped to an agricultural operation.",
    href: "/solutions",
    primary: false,
  },
] as const;

export const primaryIndustries = industries.filter((item) => item.primary);
export const moreIndustries = industries.filter((item) => !item.primary);
