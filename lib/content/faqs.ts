import { siteConfig } from "@/lib/content/site";

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Can AI Lead Vision develop a custom AI solution?",
    answer:
      "Yes. When a ready product does not fit, the team designs a system around the operation: the model, the software, and the connection to tools you already use. That covers machine learning, computer vision, robotics, software, and automotive engineering.",
  },
  {
    question: "Can you integrate AI with existing software or cameras?",
    answer:
      "Yes. Attendance is built to connect with HRMS and payroll. Voice and chat systems are built to connect with CRM, WhatsApp, phone, and support workflows. Vision can use existing or new cameras. Industrial systems are described with PLC, robot, and MES integration. The exact interface is scoped with the project.",
  },
  {
    question: "Do you support on-premise / edge AI deployment?",
    answer:
      "The attendance system is described as cloud or on-premise. TODO: confirm with client — a general edge-AI offer (sites, hardware, and support boundaries) is not fully specified.",
  },
  {
    question: "Can you build computer vision for manufacturing?",
    answer:
      "Yes. Machine-vision inspection covers surface defects, OCR, barcode checks, dimension measurement, counting, and missing-part or packaging inspection on a line.",
  },
  {
    question: "Can you develop robotics solutions using ROS2?",
    answer:
      "Yes. The educational robot is ROS2 compatible, and robotics work covers perception, control, sensors, and industrial automation. TODO: confirm with client — which ROS2 deployments are offered beyond that robot.",
  },
  {
    question: "Can you develop a PoC before full implementation?",
    answer:
      "Work starts from the operation, then a product or a custom system scoped to it. TODO: confirm with client — whether a formal proof of concept is a standard first step, and how it is priced.",
  },
  {
    question: "Do you provide support and maintenance?",
    answer:
      "Published work includes handover and support after a system is in use. TODO: confirm with client — support hours, response times, and what maintenance includes.",
  },
  {
    question: "Do you provide corporate AI training?",
    answer: `Yes, as a separate practice from the product line. Topics include AI and machine learning, computer vision, robotics, automotive software and testing, embedded systems, corporate training, and faculty development. Programme length is not published yet. Write to ${siteConfig.emails.hr}.`,
  },
];

export const homepageFaqs = faqs.slice(0, 4);
