export type Service = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  capabilities: string[];
  deliverables: string[];
  useCases: string[];
  interest: string;
};

export const services: Service[] = [
  {
    id: "robotics",
    title: "Robotics",
    summary:
      "Automation that connects perception, control, and the software supervising the machine.",
    problem:
      "Physical work gets automated one machine at a time. The camera, the controller, and the report end up as separate projects, so the line never behaves like one system.",
    approach:
      "We treat robotics as a system. Perception, control, and supervision software are designed around the operation they have to support — a lab, a cell, or a production line — not around a catalogue of parts.",
    capabilities: [
      "Intelligent automation that combines robotics with machine vision and AI",
      "Integration of robotic cells with PLC, IoT, and production software",
      "Educational robotics for schools, colleges, and STEM labs",
      "Operator interfaces and monitoring for the people who run the system",
    ],
    deliverables: [
      "Automation concept and system design",
      "Integration plan for equipment and software already on site",
      "Control, vision, and monitoring software",
      "Handover for the team that will operate it",
    ],
    useCases: [
      "Inspection and handling concepts on a factory line",
      "Teaching labs that need hardware, not only slides",
      "Cells where a machine has to see, decide, and act",
    ],
    interest: "robotics",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    summary:
      "Models built for a specific decision — and the software that puts that decision in front of a person.",
    problem:
      "Teams collect data they cannot reliably turn into a forecast, an exception, or the next action. A model that stays in a notebook does not change the operation.",
    approach:
      "We start from the decision. Then we build the data-driven model and the application around it, so the output shows up where the work already happens.",
    capabilities: [
      "Predictive systems for demand, operations, and risk signals",
      "Data-driven models trained for a defined outcome",
      "Decision support placed inside an existing workflow",
      "Custom machine-learning work, scoped to the problem",
    ],
    deliverables: [
      "Problem framing and a look at the data you already have",
      "Model development and an honest evaluation",
      "Integration into an application or dashboard",
      "A way to watch the system after it is deployed",
    ],
    useCases: [
      "Demand and sales forecasting",
      "Inventory and operational planning",
      "Customer behavior and campaign review",
      "KPI monitoring for a team that has to act on the number",
    ],
    interest: "machine-learning",
  },
  {
    id: "software-development",
    title: "Software Development",
    summary:
      "Web applications, business platforms, and the software that makes an AI system usable.",
    problem:
      "An intelligent model that people cannot operate is still a prototype. The product, the integration, and the interface are part of the system.",
    approach:
      "We engineer the application: the screens people use, the integrations with systems you already run, and the AI features — chat, voice, vision, analytics — when they belong in the product.",
    capabilities: [
      "Web applications and business platforms",
      "Custom software for internal operations",
      "Integrations with CRM, HRMS, payroll, and other systems in use",
      "AI-enabled applications across chat, voice, vision, and analytics",
    ],
    deliverables: [
      "A specification tied to the operation, not a feature list",
      "Application design and engineering",
      "Integrations with the systems the software must meet",
      "Deployment support",
    ],
    useCases: [
      "Attendance and workforce dashboards",
      "Customer support and sales tools",
      "Operational portals for a site or a line",
      "Internal software that needs an AI feature, not a separate experiment",
    ],
    interest: "software-development",
  },
];

export const capabilities = [
  {
    title: "AI & Machine Learning",
    text: "Models and products that take a defined business decision from data to software.",
  },
  {
    title: "Computer Vision",
    text: "Detection on a live camera feed — people, objects, defects, plates, and events.",
  },
  {
    title: "Natural Language Processing",
    text: "Intent, knowledge, and conversation for chat systems that have to do more than match keywords.",
  },
  {
    title: "Voice AI",
    text: "Speech in and speech out, connected to booking, support, and the CRM.",
  },
  {
    title: "Robotics",
    text: "Perception, control, and educational hardware for labs and automated cells.",
  },
  {
    title: "Software Engineering",
    text: "The applications, dashboards, and integrations a system needs in order to run.",
  },
  {
    title: "Automation",
    text: "Inspection, PLC, and production monitoring designed as one operational layer.",
  },
  {
    title: "Data Analytics",
    text: "Forecasts, inventory, behavior, and KPIs shown where a decision is made.",
  },
] as const;

export const outcomes = [
  {
    title: "Automate repetitive operations",
    text: "Attendance, first-line support, and inspection that no longer depend on a person repeating the same check.",
  },
  {
    title: "Improve decision-making",
    text: "Forecasts, alerts, and dashboards aimed at a number someone can act on.",
  },
  {
    title: "Reduce manual processes",
    text: "Registers, status calls, and end-of-line sampling replaced by a system with an audit trail.",
  },
  {
    title: "Create intelligent customer experiences",
    text: "Voice and chat that answer in the channel the customer already uses, and hand off when a person is needed.",
  },
] as const;
