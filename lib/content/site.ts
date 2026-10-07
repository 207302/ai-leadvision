import { industries } from "@/lib/content/industries";

/**
 * Single source for company identity, navigation, and contact details.
 * Street addresses published on the previous site disagree, so the street line
 * stays a placeholder and address.confirmed stays null.
 * Project and client counts also disagreed across pages, so statistics stay unpublished.
 */

export const siteConfig = {
  name: "AI Lead Vision",
  legalName: "AI Lead Vision Pvt Ltd",
  url: "https://aileadvision.com",
  description:
    "AI Lead Vision Pvt Ltd, Bengaluru, India builds production-ready AI, computer vision, machine learning, robotics, and automation for real business environments.",
  locale: "en_IN",
  location: {
    city: "Bengaluru",
    region: "Karnataka",
    country: "India",
  },
  emails: {
    general: "aradhana@aileadvision.com",
    hr: "hr@aileadvision.com",
  },
  /**
   * purpose is null until the business assigns a role to each number.
   * Do not invent labels such as Sales or Support in the UI.
   */
  phones: [
    { display: "+91 8050243330", tel: "+918050243330", purpose: null },
    { display: "+91 8193939819", tel: "+918193939819", purpose: null },
    { display: "+91 9844716214", tel: "+919844716214", purpose: null },
  ],
  /**
   * Two street addresses appear on the previous website. Leave confirmed as null
   * until the business picks one. The city is consistent and safe to show.
   */
  address: {
    confirmed: null as null | { lines: string[] },
    candidates: [
      {
        source: "contact-page",
        lines: [
          "36, 22nd Main Road",
          "Banashankari 2nd Stage",
          "Bengaluru 560070",
        ],
      },
      {
        source: "site-footer",
        lines: [
          "845, 7th Main, 22nd Cross Road",
          "Sector 7, HSR Layout",
          "Bengaluru 560102",
        ],
      },
    ],
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ai-lead-vision-pvt-ltd/",
    youtube: null,
    instagram: null,
    facebook: null,
  },
  /**
   * Confirmed line for the call button and WhatsApp.
   * Same number as the first published phone line.
   */
  call: {
    label: "Call AI Lead Vision",
    display: "+91-8050243330",
    tel: "+91-8050243330",
  },
  whatsapp: {
    label: "Chat with AI Lead Vision",
    display: "+91-8050243330",
    tel: "918050243330",
  },
  /** Placeholder until the company registration number is confirmed. */
  registration: "[Company registration number]",
  cta: {
    explore: { label: "Explore Solutions", href: "/solutions" },
    expert: { label: "Talk to Our AI Team", href: "/contact" },
    consultation: {
      label: "Discuss Your Project",
      href: "/contact",
    },
  },
} as const;

export const socialProfiles = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Facebook", href: siteConfig.social.facebook },
] as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** No dropdown in the header. These sit in the footer. */
export const companyNavigation = [
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
] as const;

export const footerNavigation = navigation;

/**
 * Unpublished on purpose. The previous site showed 247+ / 74+ on the homepage
 * and 398+ / 120+ on About and FAQ. Render items only after publish is set
 * from a single confirmed source.
 */
export const statistics = {
  publish: false,
  items: [] as { label: string; value: string }[],
};

export const legalNavigation = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Sitemap", href: "/sitemap.xml" },
] as const;

/** Published industries, plus Other. Labels match the industries page. */
export const inquiryIndustries = [
  ...industries.map((item) => ({ value: item.id, label: item.title })),
  { value: "other", label: "Other" },
];

/** Project enquiry: what the visitor wants built. */
export const inquiryBuilds = [
  { value: "ai-ml", label: "AI/ML" },
  { value: "computer-vision", label: "Computer Vision" },
  { value: "robotics", label: "Robotics" },
  { value: "automation", label: "Automation" },
  { value: "ai-software", label: "AI Software" },
  { value: "automotive", label: "Automotive Engineering" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "training", label: "Training" },
  { value: "other", label: "Other" },
] as const;

/** Product names already published, plus service areas used by existing contact links. */
export const inquirySolutions = [
  { value: "face-attendance", label: "AI Face Recognition Attendance System" },
  { value: "voice-bot", label: "AI Voice Chat Bot" },
  { value: "chat-bot", label: "AI Chat Bot" },
  { value: "computer-vision", label: "Computer Vision" },
  { value: "machine-vision", label: "AI Machine Vision Inspection" },
  { value: "industrial-automation", label: "Industrial Automation" },
  { value: "predictive-analytics", label: "AI Predictive Analytics" },
  { value: "educational-robot", label: "Educational AI Robot" },
  { value: "ai-development", label: "Generative AI" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "robotics", label: "Robotics" },
  { value: "software-development", label: "Custom software development" },
  { value: "training", label: "Training" },
  { value: "other", label: "Other" },
] as const;

export const preferredContactMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

export type InquiryBuild = (typeof inquiryBuilds)[number]["value"];
export type InquirySolution = (typeof inquirySolutions)[number]["value"];

export function locationLine() {
  const { city, region, country } = siteConfig.location;
  return `${city}, ${region}, ${country}`;
}

/** Legal name and place, in one form, for schema, footer, and page copy. */
export function companyIdentity() {
  return `${siteConfig.legalName}, ${locationLine()}`;
}

/** Street line stays a placeholder until address.confirmed is set. */
export function officeAddressLines() {
  if (siteConfig.address.confirmed) return [...siteConfig.address.confirmed.lines];
  return ["[Office street address]", locationLine()];
}
