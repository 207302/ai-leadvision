import { siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta({
  title = "Let’s build something intelligent.",
  body = "Have a product idea, an automation challenge, or an AI initiative? Let’s discuss what is possible.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-20 sm:py-24 md:flex-row md:items-end">
        <div className="max-w-xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-white/70">{body}</p>
        </div>
        <Button href={siteConfig.cta.primary.href} className="h-12 px-5">
          {siteConfig.cta.primary.label}
        </Button>
      </Container>
    </section>
  );
}
