/** Marketing page copy. Wording matches the approved layout. */

export const practicalAiPath = "/practical-ai-solutions";

export const consultationSectionId = "get-a-free-consultation";

export const practicalAiPage = {
  path: practicalAiPath,
  metaTitle: "Practical AI Solutions for Your Business",
  metaDescription:
    "Automate routine work, turn visual data into insights, and build AI systems that fit your workflow.",
  eyebrow: "Turn ideas into real-world solutions",
  titleLead: "Practical AI Solutions",
  titleRest: "for Your Business",
  summary:
    "Automate routine work, turn visual data into insights, and build AI systems that fit your workflow.",
  visualCaption: "From Visual Data to Actionable Insights",
  bookLabel: "Book a Free Consultation",
  exploreSolutions: { label: "Explore Solutions", href: "/solutions" },
  exploreProducts: { label: "Explore Products", href: "/products" },
  cards: [
    {
      title: "AI & Automation",
      text: "Streamline operations, automate manual processes and improve efficiency with AI.",
      href: "/solutions#ai-machine-learning",
      icon: "automation",
    },
    {
      title: "Computer Vision",
      text: "Turn your cameras into intelligent systems for detection, recognition and real-time analytics.",
      href: "/products/computer-vision",
      icon: "vision",
    },
    {
      title: "Robotics & Custom Software",
      text: "Build intelligent robotic systems and custom AI software tailored to your requirements.",
      href: "/solutions#robotics-automation",
      icon: "robotics",
    },
  ],
  stepsTitle: "From idea to deployment",
  steps: [
    {
      title: "Understand your need",
      text: "Discuss your challenges and goals",
      icon: "discuss",
    },
    {
      title: "Build the solution",
      text: "Design, develop and test a tailored AI system",
      icon: "build",
    },
    {
      title: "Deploy and support",
      text: "Implement and provide ongoing support",
      icon: "deploy",
    },
  ],
  form: {
    eyebrow: "Let's build together",
    title: "Get a Free Consultation",
    body: "Tell us about your project and our team will get in touch with you.",
    name: "Your Name",
    email: "Work Email",
    phone: "Phone Number",
    submit: "Request a Call Back",
    privacy: "Your information is safe with us. We will only use it to contact you regarding your inquiry.",
    thanks: "Thanks! We'll get back to you soon.",
  },
} as const;
