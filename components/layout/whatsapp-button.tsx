import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/content/site";

const message = "Hello AI Lead Vision, I would like to discuss a project.";

const pill =
  "inline-flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-full py-3 pl-3.5 pr-4 text-sm font-medium text-white shadow-[0_10px_30px_rgba(16,22,34,0.22)] transition-colors";

export function WhatsAppButton({
  phoneTel = siteConfig.call.tel,
  whatsappTel = siteConfig.whatsapp.tel.replace(/\D/g, ""),
}: {
  phoneTel?: string | null;
  whatsappTel?: string | null;
}) {
  const whatsappHref = whatsappTel
    ? `https://wa.me/${whatsappTel}?text=${encodeURIComponent(message)}`
    : null;

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {phoneTel && (
      <a
        href={`tel:${phoneTel}`}
        aria-label={siteConfig.call.label}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_30px_rgba(16,22,34,0.22)] transition-colors hover:bg-accent-strong md:hidden"
      >
        <Phone size={22} aria-hidden="true" />
      </a>
      )}
      {whatsappHref && (
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={siteConfig.whatsapp.label}
        className={`${pill} bg-[#128C7E] shadow-[0_10px_30px_rgba(7,40,32,0.28)] hover:bg-[#0E6B60] max-md:h-12 max-md:w-12 max-md:justify-center max-md:p-0`}
      >
        <svg viewBox="0 0 448 512" aria-hidden="true" className="h-5 w-auto shrink-0">
          <mask id="whatsapp-bubble-hole">
            <rect width="448" height="512" fill="white" />
            <path
              fill="black"
              transform="translate(12 0)"
              d="M223.9 438.7h-.1c-31.3 0-62-8.4-88.8-24.3l-6.4-3.8-78.1 20.5 20.8-76.1-4.2-6.6c-17.5-27.8-26.7-59.9-26.7-92.8 0-96.2 78.3-174.5 174.6-174.5 46.6 0 90.4 18.2 123.3 51.1 32.9 33 51 76.8 50.9 123.4 0 96.3-78.4 174.6-174.3 174.6z"
            />
          </mask>
          <path
            fill="currentColor"
            mask="url(#whatsapp-bubble-hole)"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32 106.1 32 10.7 127.5 10.7 245.2c0 37.3 9.8 73.8 28.4 105.9L0 480l131.6-34.5c30.8 16.8 65.6 25.7 100.5 25.7h.1c117.7 0 213.2-95.4 213.2-213.1 0-56.9-22.1-110.4-62.5-150.5z"
          />
          <path
            fill="currentColor"
            transform="translate(6 -16)"
            d="M320.1 307.9c-5.3-2.6-31.1-15.3-35.9-17.1-4.8-1.8-8.3-2.6-11.8 2.6-3.5 5.3-13.6 17.1-16.6 20.6-3.1 3.5-6.1 4-11.4 1.3-5.3-2.6-22.2-8.2-42.3-26.1-15.6-13.9-26.2-31.1-29.3-36.4-3.1-5.3-.3-8.1 2.3-10.7 2.4-2.4 5.3-6.1 7.9-9.2 2.6-3.1 3.5-5.3 5.3-8.8 1.8-3.5.9-6.6-.4-9.2-1.3-2.6-11.8-28.4-16.2-38.9-4.3-10.2-8.6-8.8-11.8-9-3.1-.2-6.6-.2-10.1-.2-3.5 0-9.2 1.3-14 6.6-4.8 5.3-18.4 18-18.4 43.9s18.8 50.9 21.4 54.4c2.6 3.5 37 56.5 89.6 79.2 12.5 5.4 22.3 8.6 29.9 11 12.6 4 24 3.4 33 2.1 10.1-1.5 31.1-12.7 35.5-25 4.4-12.3 4.4-22.8 3.1-25-1.3-2.2-4.8-3.5-10.1-6.1z"
          />
        </svg>
        <span className="hidden whitespace-nowrap md:inline">{siteConfig.whatsapp.label}</span>
      </a>
      )}
    </div>
  );
}
