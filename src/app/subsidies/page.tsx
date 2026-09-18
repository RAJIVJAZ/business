import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubsidyChecker } from "@/components/ui/subsidy-checker";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { subsidyCategories } from "@/data/subsidies";
import { generalFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "MSME Subsidy Consultancy — Eligibility Checker",
  description:
    "Check your eligibility for food processing, dairy, manufacturing, hospital and renewable energy subsidies, and MSME schemes. Get a detailed subsidy report from Anuradha Business Solutions.",
  alternates: { canonical: "/subsidies" },
};

export default function SubsidiesPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Subsidy Consultancy" }]} />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
            Flagship Solution
          </span>
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            MSME &amp; Industry Subsidy Consultancy
          </h1>
          <p className="text-balance mt-4 max-w-2xl text-lg text-white/70">
            Central and state governments run dozens of overlapping subsidy schemes. We map every scheme
            your project qualifies for, prepare the DPR the committee expects, and follow through to disbursement.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Try It Now"
              title="Subsidy Eligibility Checker"
              description="Answer three quick questions and unlock an indicative report of subsidy categories that may apply to your project."
            />
          </div>
          <div className="lg:col-span-3">
            <SubsidyChecker />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Subsidy Categories"
            title="Schemes we actively track and apply for on behalf of clients"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subsidyCategories.map((cat) => (
              <div key={cat.slug} className="rounded-2xl border border-border bg-bg p-6">
                <h3 className="text-lg font-bold text-navy">{cat.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{cat.summary}</p>
                <span className="mt-3 inline-block rounded-full bg-green/10 px-3 py-0.5 text-xs font-semibold text-green-dark">
                  {cat.benefitRange}
                </span>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                  {cat.keyPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/government-schemes" className="text-sm font-semibold text-blue hover:underline">
              See real state-by-state subsidy rates and women entrepreneur schemes →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <SectionHeading eyebrow="Our Process" title="How we take you from eligibility to disbursement" />
          </div>
          <div className="lg:col-span-2">
            <ol className="space-y-6">
              {[
                { title: "Eligibility Mapping", desc: "We match your industry, state and investment size against every live scheme." },
                { title: "DPR Preparation", desc: "A bank-grade, scheme-formatted detailed project report is built by our technical and finance team." },
                { title: "Application & Liaison", desc: "Filed with the nodal agency; we actively liaise through every committee review." },
                { title: "Disbursement Follow-up", desc: "Utilization certificates and disbursement milestones tracked post-sanction." },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green/10 font-bold text-green-dark">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <SectionHeading eyebrow="FAQs" title="Subsidy consultancy questions, answered" />
          <div className="lg:col-span-2">
            <FaqAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Don't leave subsidy money on the table"
        description="Our subsidy desk has helped clients access ₹840 Cr+ in combined loans and subsidies. Find out what your project qualifies for."
      />
    </>
  );
}
