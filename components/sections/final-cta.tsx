import { LeadCtas } from "@/components/layout/lead-ctas";
import { Container } from "@/components/ui/container";

export function FinalCta({
  title = "Let's Build Something Intelligent.",
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
        <LeadCtas layout="stack" className="w-full sm:max-w-xs sm:w-80" />
      </Container>
    </section>
  );
}
