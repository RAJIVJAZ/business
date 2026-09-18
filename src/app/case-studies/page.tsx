import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/ui/cta-section";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Anuradha Business Solutions has taken clients from subsidy eligibility to disbursement, hospital setup to NABH pre-assessment, and collateral-free machinery loans to sanction.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
          <SectionHeading
            eyebrow="Case Studies"
            title="Real engagements, from Discover to Grow"
            description="Every engagement runs through the same five stages — Discover, Plan, Execute, Comply, Grow. Here's what that looks like in practice."
            light
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="inline-block w-fit rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy/60">
                {cs.industry}
              </span>
              <h2 className="mt-3 text-lg font-bold text-navy group-hover:text-blue">{cs.client}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">{cs.challenge}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {cs.results.slice(0, 3).map((r) => (
                  <div key={r.label}>
                    <div className="text-lg font-bold text-green-dark">{r.metric}</div>
                    <div className="text-xs text-slate-500">{r.label}</div>
                  </div>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                Read the full case study
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection title="Want a result like this for your business?" />
    </>
  );
}
