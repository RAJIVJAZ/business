import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaSection } from "@/components/ui/cta-section";
import { industries, getIndustryBySlug } from "@/data/industries";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.title} Consultancy Services`,
    description: industry.summary,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedServices = services.filter((s) => industry.services.includes(s.shortTitle));

  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            {industry.title} Consultancy Services
          </h1>
          <p className="text-balance mt-4 max-w-2xl text-lg text-white/70">{industry.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={site.ctaPrimary.href} size="lg">{site.ctaPrimary.label}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Common Challenges</h2>
            <ul className="mt-6 space-y-4">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <span className="text-sm text-slate-600">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Relevant Services</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-xl border border-border bg-white p-4 hover:border-blue/30 hover:shadow-md"
                >
                  <h3 className="font-semibold text-navy">{service.shortTitle}</h3>
                  <p className="mt-1 text-xs text-slate-500">{service.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection title={`Get an ${industry.title.toLowerCase()}-specific compliance roadmap`} />
    </>
  );
}
