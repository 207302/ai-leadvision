import { siteConfig } from "@/lib/content/site";

/** Copy for the inquiry notification sent to the team and the confirmation sent to the visitor. */
export const contactEmail = {
  fromName: siteConfig.name,
  notification: {
    subject: (name: string, company: string) => `Website inquiry: ${name}, ${company}`,
    intro: "A new inquiry was submitted through the website contact form. Reply to this email to answer the sender directly.",
  },
  confirmation: {
    subject: `We received your inquiry | ${siteConfig.name}`,
    greeting: (name: string) => `Hello ${name},`,
    genericGreeting: "Hello,",
    body: [
      `Thank you for contacting ${siteConfig.legalName}. We have received your inquiry and our team will get back to you.`,
      `If you need to add anything, reply to this email or write to ${siteConfig.emails.general}.`,
    ],
    signOff: ["Regards,", siteConfig.legalName, siteConfig.url],
  },
} as const;
