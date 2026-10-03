export type PlaceholderPage = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  links?: readonly { href: string; label: string }[];
};

export const placeholderPages = {
  solutions: {
    path: "/solutions",
    eyebrow: "Solutions",
    title: "Solutions",
    description:
      "How enterprise AI, industrial automation, computer vision, robotics, and custom software apply to an operation.",
    note: "This page is a placeholder. Solution descriptions will be added here. Products and services are available now.",
    links: [
      { href: "/products", label: "Products" },
      { href: "/services", label: "Services" },
    ],
  },
  caseStudies: {
    path: "/case-studies",
    eyebrow: "Case Studies",
    title: "Case Studies",
    description: "Published work, once client names and results are confirmed.",
    note: "This page is a placeholder. No case studies are listed yet. Client names stay as [Client Name], and project results stay unpublished until confirmed.",
    links: [{ href: "/contact", label: "Contact" }],
  },
  training: {
    path: "/training",
    eyebrow: "Training",
    title: "Training",
    description:
      "Professional training in aviation and automotive domains, and recruitment for software development and testing.",
    note: "Programme names, duration, and cohort details are not published yet. Use [Programme name] until they are confirmed. Enquiries go to the HR address.",
    links: [{ href: "mailto:hr@aileadvision.com", label: "hr@aileadvision.com" }],
  },
} as const satisfies Record<string, PlaceholderPage>;
