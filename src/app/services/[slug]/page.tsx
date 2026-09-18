import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { services, getServiceBySlug } from "@/data/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.summary },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "IN",
    description: service.summary,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
            {service.category}
          </span>
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">{service.title}</h1>
          <p className="text-balance mt-4 max-w-2xl text-lg text-white/70">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={site.ctaPrimary.href} size="lg">{site.ctaPrimary.label}</ButtonLink>
            <ButtonLink href={site.ctaSecondary.href} variant="outline" size="lg">{site.ctaSecondary.label}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">Overview</h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              {service.overview.map((para) => <p key={para}>{para}</p>)}
            </div>

            <h2 className="mt-12 text-2xl font-bold text-navy">Our Process</h2>
            <ol className="mt-6 space-y-6">
              {service.process.map((step, index) => (
                <li key={step.step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue/10 font-bold text-blue-dark">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{step.step}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-2xl font-bold text-navy">Frequently Asked Questions</h2>
            <div className="mt-6">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-bold text-navy">Why Choose Anuradha Business Solutions</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <ButtonLink href={site.ctaPrimary.href} className="mt-6 w-full">{site.ctaPrimary.label}</ButtonLink>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-bold text-navy">Related Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-blue hover:underline">{s.shortTitle}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
