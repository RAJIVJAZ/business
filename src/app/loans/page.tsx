import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { LoanCalculator } from "@/components/ui/loan-calculator";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { loanProducts } from "@/data/loans";

export const metadata: Metadata = {
  title: "Business Loan Assistance — Eligibility Calculator",
  description:
    "MSME, Mudra, CGTMSE, working capital, machinery and project finance — matched to lenders and packaged for faster sanction. Calculate your estimated EMI instantly.",
  alternates: { canonical: "/loans" },
};

const loanFaqs = [
  { question: "How does Anuradha Business Solutions choose which bank to approach?", answer: "We assess your financials, collateral position and industry against each lender's current credit appetite, then match you to PSU banks, private banks or NBFCs most likely to sanction quickly." },
  { question: "Can I get a loan without collateral?", answer: "Yes — CGTMSE-backed loans up to the current scheme ceiling and Mudra loans up to ₹10 lakh are structured to be collateral-free for eligible MSMEs." },
  { question: "What documents do I need to start?", answer: "KYC of promoters, business registration proof, last 2-3 years' financials (or projections for new units), and collateral documents if applicable. Our loan desk shares an exact checklist after the first call." },
  { question: "How long does sanction typically take?", answer: "Straightforward MSME/Mudra loans can be sanctioned in 2-3 weeks; project finance and larger term loans typically take 4-8 weeks depending on the lender's appraisal process." },
];

export default function LoansPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Loan Assistance" }]} />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
            Flagship Solution
          </span>
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            Bank Loan Facilitation &amp; Eligibility Calculator
          </h1>
          <p className="text-balance mt-4 max-w-2xl text-lg text-white/70">
            Banks reject a large share of MSME applications for weak documentation, not ineligibility. We
            package your loan application to each lender&apos;s exact credit appetite.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Try It Now"
              title="Loan Eligibility Calculator"
              description="Select a loan product and get an indicative EMI in seconds, then unlock the full eligibility read."
            />
          </div>
          <div className="lg:col-span-3">
            <LoanCalculator />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Loan Products" title="Financing options we facilitate" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loanProducts.map((product) => (
              <div key={product.slug} className="rounded-2xl border border-border bg-bg p-6">
                <h3 className="text-lg font-bold text-navy">{product.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{product.summary}</p>
                <dl className="mt-4 space-y-1.5 text-sm">
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-500">Max Amount</dt>
                    <dd className="font-medium text-navy">{product.maxAmount}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-500">Collateral</dt>
                    <dd className="font-medium text-navy">{product.collateral}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.idealFor.map((tag) => (
                    <span key={tag} className="rounded-full bg-blue/10 px-2.5 py-0.5 text-xs font-medium text-blue-dark">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <SectionHeading eyebrow="FAQs" title="Loan facilitation questions, answered" />
          <div className="lg:col-span-2">
            <FaqAccordion faqs={loanFaqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Get matched to the right lender, the first time"
        description="Skip the trial-and-error of approaching banks one by one. Our loan desk has facilitated ₹840 Cr+ across MSME, Mudra, CGTMSE and project finance."
      />
    </>
  );
}
