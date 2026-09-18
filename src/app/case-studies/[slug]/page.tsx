import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/ui/cta-section";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.client} — Case Study`,
    description: caseStudy.challenge,
    alternates: { canonical: `/case-studies/${caseStudy.slug}` },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const relatedServices = services.filter((s) => caseStudy.servicesUsed.includes(s.shortTitle));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${caseStudy.client} — Case Study`,
    description: caseStudy.challenge,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/case-studies/${caseStudy.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: caseStudy.client },
            ]}
          />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
            {caseStudy.industry}
          </span>
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">{caseStudy.client}</h1>
          <p className="text-balance mt-4 max-w-2xl text-lg text-white/70">{caseStudy.challenge}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">How We Ran the Engagement</h2>
            <ol className="mt-6 space-y-6">
              {caseStudy.stages.map((stage, index) => (
                <li key={stage.stage} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue/10 font-bold text-blue-dark">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{stage.stage}</h3>
                    <p className="mt-1 text-sm text-slate-600">{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="mt-12 rounded-2xl border border-border bg-white p-6">
              <p className="text-slate-700 leading-relaxed">&ldquo;{caseStudy.quote.text}&rdquo;</p>
              <footer className="mt-4 text-sm">
                <span className="font-semibold text-navy">{caseStudy.quote.name}</span>
                <span className="text-slate-500"> — {caseStudy.quote.role}</span>
              </footer>
            </blockquote>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-bold text-navy">Results</h3>
              <div className="mt-4 space-y-4">
                {caseStudy.results.map((r) => (
                  <div key={r.label}>
                    <div className="text-2xl font-bold text-green-dark">{r.metric}</div>
                    <div className="text-xs text-slate-500">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-bold text-navy">Services Used</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-blue hover:underline">{s.shortTitle}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection title="Want a result like this for your business?" />
    </>
  );
}
