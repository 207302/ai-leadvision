/**
 * Industries the owner has named. Supporting lines use systems already published
 * on the site. Logistics and agriculture are named here without a product of their own.
 */

export const industriesIntro = {
  eyebrow: "Industries we serve",
  title: "Find your industry.",
  support: "If your industry is listed, we work in it.",
};

export const industriesPage = {
  path: "/industries",
  eyebrow: "Industries",
  title: "Industries we serve.",
  description:
    "Automotive, Manufacturing, Healthcare, Education, Retail & E-commerce, Logistics, Banking & Finance, Construction, Government, Agriculture, and Security & Surveillance.",
};

export const industries = [
  {
    id: "automotive",
    title: "Automotive",
    text: "Factory systems, inspection, and automation, and professional training in automotive domains.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    text: "Inspection, control, robot integration, and a production view for the line.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    text: "Attendance for hospitals, and voice systems for healthcare conversations.",
  },
  {
    id: "education",
    title: "Education",
    text: "Schools, colleges, and STEM labs that need hardware and systems students can program.",
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    text: "Voice and chat for retail, product recommendations, and e-commerce assistance.",
  },
  {
    id: "logistics",
    title: "Logistics",
    text: "Enterprise AI, computer vision, and software for logistics operations.",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    text: "Voice assistants for banking conversations, connected to booking, support, and the CRM.",
  },
  {
    id: "construction",
    title: "Construction",
    text: "Contactless attendance for construction sites.",
  },
  {
    id: "government",
    title: "Government",
    text: "Contactless attendance for government offices.",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    text: "Enterprise AI, computer vision, and software for agricultural operations.",
  },
  {
    id: "security-surveillance",
    title: "Security & Surveillance",
    text: "Video analytics on a live camera feed — intrusion, PPE, fire and smoke, crowds, vehicles, plates, and falls.",
  },
] as const;
