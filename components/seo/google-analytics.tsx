import Script from "next/script";
import { analyticsPlaceholder } from "@/lib/seo";

/**
 * Loads GA4 only after NEXT_PUBLIC_GA_MEASUREMENT_ID is a real measurement ID.
 * The placeholder does not send hits and does not set analytics cookies.
 */
export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? analyticsPlaceholder;
  if (!/^G-[A-Z0-9]+$/.test(id) || id === analyticsPlaceholder) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
