/**
 * Case study templates. Client names stay as placeholders until the owner confirms them.
 * Technology lines use the company stack for that kind of system.
 */

export const caseStudiesIntro = {
  eyebrow: "Case Studies",
  title: "Case Studies",
  description: "Published work, once client names are confirmed.",
  note: "Each entry below is a solution overview, not a completed client project. Client names stay as [Client Name].",
  stackNote:
    "Each overview follows Client Problem, AI Solution, Technology, and Implementation. Technology shows the company stack for that kind of system.",
  label: "Solution overview",
};

export type CaseStudyTemplate = {
  id: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  technology: readonly string[];
  implementation: string;
  related?: { href: string; label: string };
};

export const caseStudyTemplates: readonly CaseStudyTemplate[] = [
  {
    id: "ai-attendance",
    title: "AI Attendance System",
    client: "[Client Name]",
    problem:
      "Manual attendance is slow at a busy entrance, easy to bypass, and awkward to audit across more than one site.",
    solution:
      "A contactless attendance system detects a live face, checks it against an enrolled record, and blocks photo and video attempts. Check-in covers employees, students, and visitors. Results go to a live dashboard, with leave, shift, and visitor workflows, GPS-based and mobile attendance, multi-location support, and cloud or on-premise deployment. The system connects to HRMS and payroll.",
    technology: ["Python", "OpenCV", "Object Detection", "Image Processing"],
    implementation:
      "A camera at the entrance, or a mobile device, captures a live face. People are enrolled before a match. Verification includes anti-spoofing. Attendance, leave, and payroll appear on the dashboard, with HRMS and payroll integration where that connection is required.",
    related: { href: "/products/attendance", label: "Attendance system" },
  },
  {
    id: "industrial-vision-inspection",
    title: "Industrial Vision Inspection",
    client: "[Client Name]",
    problem:
      "Sampling and end-of-line checks miss defects that a person cannot see at production speed, or cannot watch for an entire shift.",
    solution:
      "Industrial cameras and deep learning inspect each unit as it moves. The station reads the surface, mark, code, dimension, and count, and flags a failure while the line is still running. Checks include surface defects, OCR, barcode verification, dimension measurement, object counting, and missing-part or packaging inspection.",
    technology: ["Python", "OpenCV", "YOLO", "Object Detection", "Image Processing", "Video Analytics"],
    implementation:
      "The unit is captured on the moving line with an industrial camera. A vision model checks the defect, code, or measurement. The station returns a pass, fail, or review.",
    related: { href: "/products/computer-vision", label: "Computer vision" },
  },
  {
    id: "ai-robot",
    title: "AI Robot",
    client: "[Client Name]",
    problem:
      "AI courses that stay on a screen never show how a model meets a sensor, a motor, and a real room.",
    solution:
      "A programmable robot for schools, colleges, and STEM labs. An AI camera handles object detection and face recognition. The same robot supports voice control, gesture recognition, obstacle avoidance, and line following, in a Python environment that is ROS2 compatible, with Raspberry Pi and Arduino support, plus Wi-Fi and mobile app control.",
    technology: ["ROS2", "Raspberry Pi", "Arduino", "IoT", "Sensors", "Python"],
    implementation:
      "The robot takes camera, voice, and motion input. Students program the loop in Python. The robot moves, avoids obstacles, and follows a line in the lab.",
    related: { href: "/products/robotics", label: "Robotics" },
  },
  {
    id: "ocr",
    title: "OCR / Industrial OCR",
    client: "[Client Name]",
    problem:
      "Labels, marks, and codes on a moving line are slow to read by hand, and a person cannot check every one at production speed.",
    solution:
      "OCR reading on the unit, together with barcode and QR verification, as part of the vision inspection station that also checks the surface, dimension, count, and packaging.",
    technology: ["OCR", "Image Processing", "Python", "OpenCV"],
    implementation:
      "An industrial camera captures the mark or code on the line. Image processing and OCR read it. The station can return a pass, fail, or review, alongside the other checks on that unit.",
    related: { href: "/products/computer-vision", label: "Computer vision" },
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    client: "[Client Name]",
    problem:
      "Reports describe last month. The useful question is what is likely to happen next, and which number should change a decision this week.",
    solution:
      "Dashboards and forecasts built on data a business already collects: demand and sales, inventory, customer behavior, and the KPIs a team reviews. The forecast or segment is shown where a manager can use it.",
    technology: ["Python", "PyTorch", "TensorFlow"],
    implementation:
      "The work starts from the decision and the data already collected. A model is developed for that outcome and integrated into a dashboard or the workflow where the number is used.",
    related: { href: "/products#predictive-analytics", label: "AI Predictive Analytics" },
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    client: "[Client Name]",
    problem:
      "Customers ask the same questions on the website, in the app, and in chat. A keyword bot follows a script and misses the request, so the conversation still lands on a person.",
    solution:
      "One conversational system across the website, app, WhatsApp, and Messenger. It understands intent with large language models and natural language processing, and handles leads, common questions, product recommendations, and support tickets. It keeps a transcript, and includes file upload, multiple languages, and an analytics dashboard.",
    technology: ["Python", "Web Applications", "APIs"],
    implementation:
      "The bot is placed on the channels already in use. A message is read in context, matched to intent and a knowledge source, then turned into an answer, a lead, an order, a ticket, or a handoff.",
    related: { href: "/products#chat-bot", label: "AI Chat Bot" },
  },
  {
    id: "automotive-embedded",
    title: "Automotive / Embedded Software Solutions",
    client: "[Client Name]",
    problem:
      "Automotive software has to connect embedded systems with in-vehicle networks and diagnostics, and the work sits inside software testing, verification and validation, and the standards used for that domain.",
    solution:
      "Embedded software, automotive AI, computer vision, and ADAS-related solutions. The practice includes AUTOSAR, CAN and CAN FD, UDS, diagnostics, software testing, verification and validation, ASPICE, and ISO 26262.",
    technology: [
      "C/C++",
      "AUTOSAR",
      "CAN",
      "CAN FD",
      "UDS",
      "DoIP",
      "Embedded Software Testing",
      "Embedded Software",
      "Automotive AI",
      "Computer Vision",
      "ADAS-related solutions",
      "Diagnostics",
      "Software Testing",
      "Verification & Validation",
      "ASPICE",
      "ISO 26262",
    ],
    implementation:
      "The practice covers embedded software, in-vehicle communication on CAN and CAN FD, and diagnostics with UDS and DoIP, together with software testing and verification and validation. AUTOSAR, ASPICE, and ISO 26262 are the standards named for this work.",
    related: { href: "/solutions#automotive-engineering", label: "Automotive engineering" },
  },
];
