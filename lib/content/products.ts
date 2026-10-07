export type FlowStep = {
  label: string;
  detail: string;
};

export type Product = {
  id: string;
  name: string;
  kicker: string;
  positioning: string;
  summary: string;
  problem: string;
  solution: string;
  capabilities: string[];
  highlights: string[];
  useCases: string[];
  workflow: FlowStep[];
  featured: boolean;
  /** Path under /public, matched from product-demos filenames. */
  demo?: string;
};

export const products: Product[] = [
  {
    id: "face-attendance",
    name: "AI Face Recognition Attendance System",
    kicker: "Attendance",
    positioning: "Smart. Secure. Contactless.",
    summary:
      "Replace manual registers, shared biometric devices, and proxy attendance with facial recognition that identifies people in real time, without contact.",
    problem:
      "Paper registers and touch-based biometric devices are easy to bypass, slow at a busy entrance, and awkward to audit across more than one site.",
    solution:
      "A contactless attendance system that detects a face, checks it against the enrolled record, and writes the result to a live dashboard — with leave, shift, visitor, and payroll workflows attached.",
    capabilities: [
      "Real-time face detection with anti-spoofing that blocks photo and video attempts",
      "Contactless check-in for employees, students, and visitors",
      "Live dashboard, plus GPS-based and mobile attendance",
      "Leave, shift, and visitor management",
      "Multi-location support, cloud or on-premise",
      "HRMS and payroll integration",
    ],
    highlights: [
      "Real-time detection with anti-spoofing",
      "Contactless check-in",
      "Live dashboard and mobile attendance",
      "HRMS and payroll integration",
    ],
    useCases: [
      "Corporate offices",
      "Schools and colleges",
      "Factories",
      "Hospitals",
      "Government offices",
      "Construction sites",
    ],
    workflow: [
      { label: "Camera", detail: "Entrance or mobile capture" },
      { label: "Face detection", detail: "Live face, not a still" },
      { label: "Verification", detail: "Match and anti-spoofing" },
      { label: "Dashboard", detail: "Attendance, leave, payroll" },
    ],
    featured: true,
    demo: "/product-demos/AiLeadVision Attendance.mp4",
  },
  {
    id: "voice-bot",
    name: "AI Voice Chat Bot",
    kicker: "Voice",
    positioning: "A human-like voice assistant for business.",
    summary:
      "Give customers a natural spoken conversation — around the clock, in more than one language — without adding a person to every call.",
    problem:
      "Phone and WhatsApp queues repeat the same questions. Staff spend the day on status checks, bookings, and answers that a system could handle.",
    solution:
      "A voice assistant that listens, speaks, and completes a defined set of tasks: answer from a knowledge base, book an appointment, or look up an order, then write the result back to the CRM.",
    capabilities: [
      "Natural speech-to-text and text-to-speech",
      "Conversations in more than one language",
      "WhatsApp and phone call integration",
      "CRM integration and appointment booking",
      "Automated support and order-status tracking",
      "Built-in AI knowledge base",
    ],
    highlights: [
      "Speech in and speech out",
      "More than one language",
      "WhatsApp and phone",
      "CRM, booking, and order status",
    ],
    useCases: [
      "Healthcare",
      "Banking",
      "Real estate",
      "Retail",
      "Hospitality",
      "Education",
    ],
    workflow: [
      { label: "Customer", detail: "Call or WhatsApp voice" },
      { label: "Voice", detail: "Speech in, speech out" },
      { label: "AI", detail: "Intent and knowledge" },
      { label: "Action", detail: "CRM, booking, support" },
    ],
    featured: true,
    demo: "/product-demos/ai-voice-chatbot-teaser (3).html",
  },
  {
    id: "chat-bot",
    name: "AI Chat Bot",
    kicker: "Conversation",
    positioning: "Intelligent engagement across every channel.",
    summary:
      "Respond on the website, app, WhatsApp, and Messenger. The bot is built to understand intent — not only keywords — using large language models and natural language processing.",
    problem:
      "Customers ask the same questions in different places. A keyword bot answers the script and misses the request, so the conversation still lands on a person.",
    solution:
      "One conversational system across the channels you already use. It handles leads, common questions, recommendations, and tickets, and keeps a transcript your team can review.",
    capabilities: [
      "Website widget, app, WhatsApp, and Messenger",
      "Intent understanding with LLM and NLP integration",
      "Lead generation and FAQ automation",
      "Product recommendations and support ticketing",
      "File upload, multiple languages, and an analytics dashboard",
    ],
    highlights: [
      "Website, app, WhatsApp, Messenger",
      "Intent, not keywords",
      "Leads, FAQs, and tickets",
      "Analytics on the conversation",
    ],
    useCases: [
      "Customer support",
      "Sales automation",
      "HR and internal helpdesk",
      "E-commerce assistance",
    ],
    workflow: [
      { label: "User", detail: "Site, app, or chat app" },
      { label: "Conversation", detail: "Message in context" },
      { label: "AI", detail: "Intent, not keywords" },
      { label: "Knowledge", detail: "Answer or ticket" },
      { label: "Action", detail: "Lead, order, or handoff" },
    ],
    featured: true,
    demo: "/product-demos/ai-chat-bot-teaser.html",
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    kicker: "Vision intelligence",
    positioning: "Real-time visibility across your operations.",
    summary:
      "Video analytics and smart surveillance that watch a camera feed for defined events — an intrusion, a missing helmet, smoke, a fall — and send the alert to a dashboard.",
    problem:
      "A wall of camera feeds is not monitoring. People cannot watch every screen, so events are found after the fact, if they are found at all.",
    solution:
      "Vision models on the live feed detect the events you specify and raise an alert. The camera stays the sensor. The system does the watching.",
    capabilities: [
      "Intrusion detection",
      "PPE compliance detection",
      "Fire and smoke detection",
      "Crowd monitoring",
      "Vehicle counting",
      "ANPR — number plate recognition",
      "Fall detection",
      "Suspicious-activity alerts",
    ],
    highlights: [
      "Intrusion and PPE detection",
      "Fire, smoke, and fall alerts",
      "Crowd and vehicle counting",
      "Number plate recognition",
    ],
    useCases: [
      "Sites that already run CCTV",
      "Yards and gates with vehicle movement",
      "Floors where PPE rules are mandatory",
      "Spaces where a fall or intrusion needs a fast alert",
    ],
    workflow: [
      { label: "Camera feed", detail: "Existing or new cameras" },
      { label: "Vision AI", detail: "Detect the defined event" },
      { label: "Detection", detail: "Frame, class, confidence" },
      { label: "Alert", detail: "Dashboard or notification" },
    ],
    featured: true,
    demo: "/product-demos/ai-video-surveillance-teaser.html",
  },
  {
    id: "educational-robot",
    name: "Educational AI Robot",
    kicker: "Learning systems",
    positioning: "Hands-on AI, vision, and robotics for the lab.",
    summary:
      "A robot for schools, colleges, and STEM labs. Students practice computer vision, voice, IoT, and robotics on hardware they can program — not on a slide.",
    problem:
      "AI courses that stay on a screen never show how a model meets a sensor, a motor, and a real room.",
    solution:
      "A programmable robot with an AI camera, voice and gesture input, and a Python environment, so a lab can teach the full loop from perception to movement.",
    capabilities: [
      "AI camera with object detection and face recognition",
      "Voice control, gesture recognition, obstacle avoidance, and line following",
      "ROS2 compatible, with a Python programming environment",
      "Raspberry Pi and Arduino support",
      "Wi-Fi and mobile app control",
    ],
    highlights: [
      "Object detection and face recognition",
      "Voice, gesture, and line following",
      "Python, ROS2, Pi, and Arduino",
      "Wi-Fi and mobile control",
    ],
    useCases: [
      "Schools",
      "Engineering colleges",
      "STEM labs",
      "Robotics clubs",
      "AI training institutes",
    ],
    workflow: [
      { label: "Sensor", detail: "Camera, voice, motion" },
      { label: "Program", detail: "Python on the robot" },
      { label: "Action", detail: "Move, avoid, follow" },
      { label: "Lab", detail: "Student iteration" },
    ],
    featured: false,
    demo: "/product-demos/educational-ai-robot-teaser.html",
  },
  {
    id: "industrial-automation",
    name: "Industrial Automation",
    kicker: "Factory systems",
    positioning: "Machine vision, PLC, robotics, and IoT on one line.",
    summary:
      "Automation designed around the factory floor: inspection, control, robot integration, and a view of production — built to raise throughput and cut avoidable cost.",
    problem:
      "Inspection, the PLC, and the production report often live in different systems. Defects and downtime show up late, and in different places.",
    solution:
      "A connected automation layer: vision for inspection, PLC and robot integration for the line, and a production view that includes OEE and MES.",
    capabilities: [
      "Machine vision inspection and defect detection",
      "Barcode and QR verification",
      "Predictive maintenance signals",
      "PLC automation and robot integration",
      "Production monitoring, OEE dashboard, and MES integration",
      "Smart factory analytics",
    ],
    highlights: [
      "Vision inspection on the line",
      "PLC and robot integration",
      "Barcode and QR verification",
      "OEE and MES dashboards",
    ],
    useCases: [
      "Automotive",
      "Electronics",
      "FMCG",
      "Food processing",
      "Pharmaceutical",
      "Packaging",
    ],
    workflow: [
      { label: "Line", detail: "Station and sensors" },
      { label: "Vision", detail: "Inspect the unit" },
      { label: "Control", detail: "PLC and robot" },
      { label: "OEE", detail: "Production dashboard" },
    ],
    featured: false,
    demo: "/product-demos/industrial-automation-teaser.html",
  },
  {
    id: "machine-vision",
    name: "AI Machine Vision Inspection",
    kicker: "Quality",
    positioning: "Defect detection on the line, in real time.",
    summary:
      "Industrial cameras and deep learning inspect each unit as it moves, so a defect is caught before it leaves the line.",
    problem:
      "Sampling and end-of-line checks miss defects that a person cannot see at production speed, or cannot watch for an entire shift.",
    solution:
      "A vision inspection station that reads the unit — surface, mark, code, dimension, count — and flags what fails while the line is still running.",
    capabilities: [
      "Surface defect detection",
      "OCR reading",
      "Barcode verification",
      "Dimension measurement",
      "Object counting",
      "Missing-part and packaging inspection",
    ],
    highlights: [
      "Surface defects",
      "OCR and barcode checks",
      "Dimension and count",
      "Packaging completeness",
    ],
    useCases: [
      "In-line quality checks",
      "Packaging verification",
      "Label and code reading",
      "Count and completeness checks",
    ],
    workflow: [
      { label: "Unit", detail: "On the moving line" },
      { label: "Camera", detail: "Industrial capture" },
      { label: "Model", detail: "Defect, code, measure" },
      { label: "Decision", detail: "Pass, fail, or review" },
    ],
    featured: false,
    demo: "/product-demos/ai-machine-vision-inspection-teaser.html",
  },
  {
    id: "predictive-analytics",
    name: "AI Predictive Analytics",
    kicker: "Decisions",
    positioning: "Turn operational data into a decision.",
    summary:
      "Dashboards and forecasts built on the data a business already collects — demand, inventory, customer behavior, and the KPIs a team actually reviews.",
    problem:
      "Reports describe last month. The useful question is what is likely to happen next, and which number should change a decision this week.",
    solution:
      "A focused analytics layer: the forecast or segment that matters, shown in a dashboard a manager can use, not a model left in a notebook.",
    capabilities: [
      "Interactive dashboards",
      "Demand and sales forecasting",
      "Inventory analytics",
      "Customer behavior analysis",
      "KPI monitoring",
      "Business intelligence reporting",
    ],
    highlights: [
      "Demand and sales forecasts",
      "Inventory analytics",
      "Customer behavior",
      "KPI dashboards",
    ],
    useCases: [
      "Demand and sales planning",
      "Inventory decisions",
      "Customer and campaign review",
      "Operational KPI tracking",
    ],
    workflow: [
      { label: "Data", detail: "Systems you already run" },
      { label: "Model", detail: "Forecast or segment" },
      { label: "Dashboard", detail: "The number that matters" },
      { label: "Decision", detail: "A change in the operation" },
    ],
    featured: false,
    demo: "/product-demos/ai-predictive-analytics-teaser.html",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

/** Cards for the products index. Detail copy stays on each product record. */
export const productCards = [
  {
    id: "face-attendance",
    title: "AI Face Recognition Attendance",
    line: "Contactless attendance that identifies a live face, blocks photo and video attempts, and records the result.",
    tags: ["Face recognition", "Anti-spoofing", "Attendance and analytics"],
    href: "/products/attendance",
  },
  {
    id: "voice-bot",
    title: "AI Voice Assistant / Voice Bot",
    line: "A spoken assistant for defined business tasks, connected to the channels a team already uses.",
    tags: ["Voice AI", "Conversational workflows", "Integrations"],
    href: "/products#voice-bot",
  },
  {
    id: "chat-bot",
    title: "AI Chatbot",
    line: "Business-specific conversational AI across the website, app, and chat channels already in use.",
    tags: ["Conversational AI", "Business-specific"],
    href: "/products#chat-bot",
  },
  {
    id: "educational-robot",
    title: "Educational / Service Robot",
    line: "A programmable robot for labs: sensors, AI, and interaction on hardware a student can program. TODO: confirm with client — a separate service-robot deployment is not published.",
    tags: ["Robotics", "Sensors", "AI and interaction"],
    href: "/products/robotics",
  },
  {
    id: "machine-vision",
    title: "Machine Vision Inspection",
    line: "Industrial cameras and deep learning inspect each unit for defects while the line is running.",
    tags: ["Object detection", "Defect detection", "Industrial inspection"],
    href: "/products/computer-vision#machine-vision",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    line: "Forecasts and dashboards on data a business already collects, shown where a decision is made.",
    tags: ["Forecasting", "Dashboards", "Decision support"],
    href: "/products#predictive-analytics",
  },
  {
    id: "computer-vision",
    title: "AI Video Analytics",
    line: "Detection and alerts on a live camera feed for safety and security events.",
    tags: ["Object detection", "Tracking", "Safety and security alerts"],
    href: "/products/computer-vision",
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    line: "AI, control, sensors, and machine integration designed as one layer on the line.",
    tags: ["AI", "Control and sensors", "Machine integration"],
    href: "/products/robotics",
  },
] as const;
