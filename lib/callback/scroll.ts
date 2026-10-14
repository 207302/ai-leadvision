import { consultationSectionId } from "@/lib/content/practical-ai";

export const callbackHighlightEvent = "callback:highlight";

export function scrollToConsultation() {
  const section = document.getElementById(consultationSectionId);
  if (!section) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  const hash = `#${consultationSectionId}`;
  if (window.location.hash !== hash) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${hash}`);
  }

  window.dispatchEvent(new CustomEvent(callbackHighlightEvent));
}
