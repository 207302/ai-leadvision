import { Fragment } from "react";
import { siteConfig } from "@/lib/content/site";

export function GeneralEmailLink({ className }: { className?: string }) {
  return (
    <a className={className} href={`mailto:${siteConfig.emails.general}`}>
      {siteConfig.emails.public}
    </a>
  );
}

export function linkPublicEmail(text: string, className?: string) {
  const label = siteConfig.emails.public;
  const parts = text.split(label);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 ? <GeneralEmailLink className={className} /> : null}
    </Fragment>
  ));
}
