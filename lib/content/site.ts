/**
 * Single source for company identity, navigation, and contact details.
 * Street addresses published on the previous site disagree, so none are rendered.
 * Project and client counts also disagreed across pages, so statistics stay unpublished.
 */

export const siteConfig = {
  name: "AI Lead Vision",
  legalName: "AI Lead Vision",
  url: "https://aileadvision.com",
  description:
    "AI Lead Vision is a technology solutions company in Bengaluru. We deliver enterprise AI, industrial automation, computer vision, robotics, and custom software development for enterprises, industries, educational institutions, and businesses.",
  locale: "en_IN",
  location: {
    city: "Bengaluru",
    region: "Karnataka",
    country: "India",
  },
  emails: {
    general: "info@aileadvision.com",
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
  },
  cta: {
    primary: { label: "Talk to Our Team", href: "/contact" },
    secondary: { label: "Explore Products", href: "/products" },
    demo: { label: "Request a Demo", href: "/contact?interest=products" },
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

/** FAQ and Testimonials stay out of the header so the primary bar can hold Careers. */
export const footerNavigation = [
  ...navigation,
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
] as const;

/**
 * Unpublished on purpose. The previous site showed 247+ / 74+ on the homepage
 * and 398+ / 120+ on About and FAQ. Render items only after publish is set
 * from a single confirmed source.
 */
export const statistics = {
  publish: false,
  items: [] as { label: string; value: string }[],
};

export const inquiryInterests = [
  { value: "products", label: "Products" },
  { value: "ai-development", label: "AI Development" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "computer-vision", label: "Computer Vision" },
  { value: "robotics", label: "Robotics" },
  { value: "software-development", label: "Software Development" },
  { value: "training", label: "Training" },
  { value: "other", label: "Other" },
] as const;

export type InquiryInterest = (typeof inquiryInterests)[number]["value"];

export function locationLine() {
  const { city, region, country } = siteConfig.location;
  return `${city}, ${region}, ${country}`;
}
