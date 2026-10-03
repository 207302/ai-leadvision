export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What AI solutions does AI Lead Vision build?",
    answer:
      "Products and custom systems. The product set includes face-recognition attendance, a voice assistant, a chat assistant, computer vision and video analytics, machine-vision inspection, industrial automation, predictive analytics, and an educational robot. Custom work covers machine learning, robotics, and software engineering around a specific operation.",
  },
  {
    question: "Can AI Lead Vision develop a custom AI solution?",
    answer:
      "Yes. Custom AI development starts when the operation does not fit a product. The team designs a system around the problem — the model, the software, and the way it connects to tools you already use.",
  },
  {
    question: "What industries can your AI solutions support?",
    answer:
      "The products are described for offices, education, factories, hospitals, retail, hospitality, banking, real estate, and industrial lines such as automotive, electronics, FMCG, food processing, pharmaceutical, and packaging. Fit depends on the problem and the systems already in place, not on an industry label.",
  },
  {
    question: "Can your products integrate with existing business systems?",
    answer:
      "Yes. Attendance is built to connect with HRMS and payroll. Voice and chat systems are built to connect with CRM, WhatsApp, phone, and support workflows. Industrial systems are described with PLC, robot, and MES integration. The exact interface is scoped with the project.",
  },
  {
    question: "Do you provide custom software development?",
    answer:
      "Yes. Web applications, business platforms, custom operational software, and the integrations those systems need — including applications that carry chat, voice, vision, or analytics.",
  },
  {
    question: "How can I request a product demo?",
    answer:
      "Use Request a Demo, or email info@aileadvision.com. On the contact form, choose Request a Demo and the product under Interested Solution. Name the kind of site it needs to run in, and a phone number.",
  },
  {
    question: "What information is needed to start an AI project?",
    answer:
      "The problem to solve, who will use the system, the software or cameras it must connect to, and what data you already have. A finished dataset is not required to begin the conversation.",
  },
  {
    question: "Do you also offer training and hiring support?",
    answer:
      "Yes, as a separate practice. AI Lead Vision trains working professionals in aviation and automotive domains, and recruits for software development and testing roles. For that work, email hr@aileadvision.com or choose Training under Requirement on the contact form.",
  },
];

export const homepageFaqs = faqs.slice(0, 4);
