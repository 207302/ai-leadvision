import { siteConfig } from "@/lib/content/site";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalPage = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

const updated = "3 October 2026";

export const privacyPolicy: LegalPage = {
  path: "/privacy",
  eyebrow: "Privacy",
  title: "Privacy Policy",
  description:
    "What AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India collects when you write from this website, and how that note is used.",
  updated,
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "This website is operated by AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India. The street address is [Office street address] until the office line is confirmed. The company registration number is [Company registration number].",
        `Questions about an inquiry can go to ${siteConfig.emails.general}.`,
      ],
    },
    {
      heading: "What you send us",
      paragraphs: [
        "The contact form asks for your name, company, work email, phone number, industry, requirement, interested solution, message, and preferred contact method. If you opened the form from a product page, the product name is included with the inquiry.",
        "A hidden field on the form is there to catch automated submissions. Leave it blank.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "We use the inquiry to reply about a demo, a consultation, training, careers, or the solution you named. We use the contact method you choose: email, phone, or WhatsApp.",
        "Inquiries are not published on the website. They are not used as testimonials or case studies.",
      ],
    },
    {
      heading: "WhatsApp",
      paragraphs: [
        "Chat with AI Lead Vision opens WhatsApp with a short prefilled message. The WhatsApp number is +91-8050243330.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "A retention period is not published yet. Use [Retention period] until the business confirms how long inquiries are kept.",
      ],
    },
    {
      heading: "Asking about your inquiry",
      paragraphs: [
        `To ask what we hold from your form submission, or to ask us to correct it, email ${siteConfig.emails.general} from the work address you used.`,
      ],
    },
  ],
};

export const termsPage: LegalPage = {
  path: "/terms",
  eyebrow: "Terms",
  title: "Terms & Conditions",
  description:
    "The terms for using the website of AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India, and for sending an inquiry.",
  updated,
  sections: [
    {
      heading: "Using this website",
      paragraphs: [
        "The pages describe products, services, and training offered by AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India. You may read them and send an inquiry. You may not misuse the form, attempt to break the site, or copy the pages for your own commercial site.",
      ],
    },
    {
      heading: "An inquiry is not a contract",
      paragraphs: [
        "Request a Demo, Talk to an AI Expert, and Get a Project Consultation open a conversation. A project, a demo on your site, or a training engagement starts only when both sides agree in writing.",
        "Placeholders on the site — including [Office street address], [Company registration number], [Client Name], and unpublished statistics — are not claims.",
      ],
    },
    {
      heading: "The pages",
      paragraphs: [
        "Text, layout, and product descriptions on this website belong to AI Lead Vision Pvt Ltd unless a page says otherwise. Product names describe systems the company offers.",
      ],
    },
    {
      heading: "Liability",
      paragraphs: [
        "The website is information about the company. It is not a promise that a product will fit a particular site, camera, or workflow. That fit is scoped in the project.",
      ],
    },
    {
      heading: "Law",
      paragraphs: [
        "These terms are governed by the laws of India. The registered office line is [Office street address], Bengaluru, Karnataka, India, and the registration number is [Company registration number].",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [`Questions about these terms: ${siteConfig.emails.general}.`],
    },
  ],
};

export const cookiePolicy: LegalPage = {
  path: "/cookies",
  eyebrow: "Cookies",
  title: "Cookie Policy",
  description:
    "What the website of AI Lead Vision Pvt Ltd, Bengaluru, Karnataka, India stores in your browser.",
  updated,
  sections: [
    {
      heading: "What this site stores",
      paragraphs: [
        "This website does not set advertising cookies. Google Analytics is not loaded until a measurement ID is configured, so no analytics cookies are set while that ID is still a placeholder.",
        "If Analytics is turned on later, this page will name it. Until then, treat analytics and marketing cookies as none in use.",
      ],
    },
    {
      heading: "The contact form",
      paragraphs: [
        "What you type into the contact form stays in the form until you send it. Sending the form posts the inquiry to the server. It is not saved as a cookie on this site.",
      ],
    },
    {
      heading: "WhatsApp",
      paragraphs: [
        "Chat with AI Lead Vision leaves this website and opens WhatsApp. WhatsApp is a separate service and has its own policies. The number used here is +91-8050243330.",
      ],
    },
    {
      heading: "Your browser",
      paragraphs: [
        "You can block or delete cookies in your browser settings. Because this site does not rely on a tracking cookie, the pages still load if cookies are blocked.",
      ],
    },
  ],
};

export const legalPages = [privacyPolicy, termsPage, cookiePolicy] as const;
