/**
 * Industries the owner has named. Supporting lines use systems already published
 * on the site. Logistics and agriculture are named here without a product of their own.
 */

export const industriesIntro = {
  eyebrow: "Industries we serve",
  title: "Find your industry.",
  support:
    "Industrial AI solutions for the industries listed here. Each one is tied to a system the company already builds: attendance, vision, conversation, inspection, robotics, or custom software.",
};

export const industriesPage = {
  path: "/industries",
  eyebrow: "Industries",
  title: "Industrial AI solutions.",
  description:
    "Industrial AI solutions for automotive, manufacturing, healthcare, education, retail and e-commerce, logistics, banking and finance, construction, government, agriculture, and security.",
};

export const industries = [
  {
    id: "automotive",
    title: "Automotive",
    text: "Factory systems, inspection, and automation, and professional training in automotive domains. The engineering side covers embedded software, automotive AI, computer vision, and the standards named on this site.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    text: "Inspection, control, robot integration, and a production view for the line. Machine vision and the software that supervises the cell are designed as one operational layer.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    text: "Attendance for hospitals, and voice systems for healthcare conversations. Check-in stays contactless, and the conversation can connect to the channels the organization already uses.",
  },
  {
    id: "education",
    title: "Education",
    text: "Schools, colleges, and STEM labs that need hardware and systems students can program. Campus attendance and educational robots for the lab sit in the same practice.",
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    text: "Voice and chat for retail, product recommendations, and e-commerce assistance. The conversation sits in the channel the customer already uses, and hands off when a person is needed.",
  },
  {
    id: "logistics",
    title: "Logistics",
    text: "Enterprise AI, computer vision, and software for logistics operations. The work uses those systems, scoped to the logistics operation.",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    text: "Voice assistants for banking conversations, connected to booking, support, and the CRM. The assistant answers in conversation and hands off when a person is needed.",
  },
  {
    id: "construction",
    title: "Construction",
    text: "Contactless attendance for construction sites. Face recognition replaces a paper register at the entrance, with a record the site can audit.",
  },
  {
    id: "government",
    title: "Government",
    text: "Contactless attendance for government offices. The same attendance system supports offices that need check-in without a shared biometric device.",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    text: "Enterprise AI, computer vision, and software for agricultural operations. The work uses those systems, scoped to the agricultural operation.",
  },
  {
    id: "security-surveillance",
    title: "Security & Surveillance",
    text: "Video analytics on a live camera feed — intrusion, PPE, fire and smoke, crowds, vehicles, plates, and falls. The camera raises an alert when one of those events is detected.",
  },
] as const;
