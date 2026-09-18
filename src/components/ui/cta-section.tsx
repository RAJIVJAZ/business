import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";

export function CtaSection({
  title = "Ready to start, comply, and grow?",
  description = "Book a free consultation with a Anuradha Business Solutions relationship manager and get a scoped plan within 24 hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <div className="bg-grid-pattern absolute inset-0 opacity-40" />
      <div className="container-site relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-balance max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="text-balance max-w-xl text-white/70">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={site.ctaPrimary.href} size="lg">
            {site.ctaPrimary.label}
          </ButtonLink>
          <ButtonLink href={site.ctaSecondary.href} variant="outline" size="lg">
            {site.ctaSecondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
