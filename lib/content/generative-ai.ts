/**
 * Generative AI and LLM offerings named by the owner.
 * Each card carries a second sentence so the homepage can explain the offering.
 */

export const generativeAi = {
  eyebrow: "Generative AI & LLM solutions",
  title: "Generative AI development.",
  support:
    "AI agents, retrieval applications, and enterprise assistants for work a team already does. Each offering stays inside a defined task, an approved source, or a report the business already needs.",
  offerings: [
    {
      title: "AI Agents",
      text: "Agents that carry out a defined task. The task is named first, then the agent is built to complete that step inside the workflow.",
    },
    {
      title: "RAG applications",
      text: "Retrieval-augmented applications that answer from your own sources. The answer stays tied to the documents and records the organization already holds.",
    },
    {
      title: "Enterprise ChatGPT solutions",
      text: "A ChatGPT-style assistant for the organization. People ask in conversation, and the assistant stays inside the company's own context.",
    },
    {
      title: "Document AI",
      text: "AI that works with the documents a business holds. The assistant uses those documents as the source, so the answer comes from the business.",
    },
    {
      title: "Knowledge-base assistants",
      text: "Assistants that answer from an approved knowledge base. Questions stay inside the material the organization has already approved.",
    },
    {
      title: "AI copilots",
      text: "Assistants beside the person doing the work. The person stays in charge of the decision. The copilot sits next to the task they are already doing.",
    },
    {
      title: "Automated report generation",
      text: "Reports generated from data you already collect. The report is produced from that data, so a team does not assemble the same summary by hand each time.",
    },
    {
      title: "Customer service agents",
      text: "Agents for customer conversations. They answer in the channel the customer already uses, and hand off when a person is needed.",
    },
    {
      title: "Internal enterprise assistants",
      text: "Assistants for people inside the organization. They answer from internal sources and the tasks those teams already run.",
    },
  ],
} as const;
