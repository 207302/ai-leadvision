/**
 * GA4 events. No-ops until GoogleAnalytics has loaded gtag with a real measurement ID.
 */
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (
    window as Window & {
      gtag?: (command: "event", eventName: string, eventParams?: Record<string, string>) => void;
    }
  ).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
}
