export type PlaceholderPage = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  links?: readonly { href: string; label: string }[];
};

export const placeholderPages = {
  caseStudies: {
    path: "/projects",
    eyebrow: "Projects",
    title: "Projects",
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
    note: "Programme length, cohort size, and syllabus are not published yet. Enquiries go to the HR address.",
    links: [
      { href: "mailto:hr@aileadvision.com", label: "hr@aileadvision.com" },
      { href: "/careers", label: "Careers / Hiring Solutions" },
    ],
  },
} as const satisfies Record<string, PlaceholderPage>;
