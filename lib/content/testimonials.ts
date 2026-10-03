/**
 * Customer lines are placeholders until the owner confirms permission to publish.
 * Employee lines are workplace comments previously published on About.
 */

export const testimonialsPage = {
  path: "/testimonials",
  eyebrow: "Testimonials",
  title: "Testimonials",
  description: "Customer testimonials and notes from people who have worked here.",
};

export const customerTestimonials = [
  {
    id: "customer-01",
    name: "[Customer Name]",
    designation: "[Designation]",
    company: "[Company]",
    project: "[Project / use case]",
    quote: "[Testimonial here]",
    permission: "[Permission to publish]",
  },
  {
    id: "customer-02",
    name: "[Customer Name]",
    designation: "[Designation]",
    company: "[Company]",
    project: "[Project / use case]",
    quote: "[Testimonial here]",
    permission: "[Permission to publish]",
  },
  {
    id: "customer-03",
    name: "[Customer Name]",
    designation: "[Designation]",
    company: "[Company]",
    project: "[Project / use case]",
    quote: "[Testimonial here]",
    permission: "[Permission to publish]",
  },
] as const;

export const employeeExperience = {
  title: "Employee / Team Experience",
  note: "These are workplace comments. They are not customer testimonials and they are not case studies.",
  items: [
    {
      name: "Chandresh Chahar",
      quote:
        "Good company for freshers to learn and explore about latest technologies and management is very nice. Seniors are very helpful.",
    },
    {
      name: "Ashish Kumar",
      quote: "Very good company to work with good clients and scale up the skills.",
    },
    {
      name: "Sara Tran",
      quote: "Very good working environment and work-life balance.",
    },
  ],
} as const;
