import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { LeadForm } from "@/components/ui/lead-form";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manufacturing & Industrial Consultancy",
  description:
    "Factory setup, food processing units, dairy plants, cold storage, warehouses and packaging units — environmental clearances, factory licensing and MSME subsidy access under one roof.",
  alternates: { canonical: "/manufacturing-consultancy" },
};

const scopeItems = [
  { title: "Factory Setup", desc: "Land use verification, zoning checks and correct sequencing of clearances before capital commitment." },
  { title: "Food Processing Units", desc: "FSSAI licensing, quality certification and PMFME/PMKSY subsidy-ready DPRs." },
  { title: "Dairy Plants", desc: "Milk chilling and processing plant licensing, plus dairy-specific capital subsidy facilitation." },
  { title: "Cold Storage", desc: "Cold-chain infrastructure licensing and access to logistics/cold-chain subsidy schemes." },
  { title: "Warehouses", desc: "Warehousing licensing, fire safety and structural compliance for large storage facilities." },
  { title: "Packaging Units", desc: "Packaging-specific FSSAI/BIS compliance and factory licensing for allied manufacturing." },
];

const manufacturingFaqs = [
  { question: "Do I need environmental clearance for my unit?", answer: "Requirement depends on the CPCB Red/Orange/Green/White classification of your industry and investment size — we assess this before you commit to a site or capital." },
  { question: "Can you help sequence clearances to avoid delays?", answer: "Yes — land conversion and environmental consent typically must precede construction, while factory licensing and consent to operate come after commissioning. We map the exact sequence for your industry and state." },
  { question: "Are MSME subsidies available for factory setup?", answer: "Yes, capital investment subsidy, interest subvention and technology upgradation schemes (like CLCSS) are commonly available — see our Subsidy Consultancy page for the eligibility checker." },
  { question: "Can you help regularize an existing factory missing some licenses?", answer: "Yes, we regularly help units regularize missing licenses, including compounding of past defaults where applicable under the relevant state rules." },
];

export default function ManufacturingConsultancyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-14 sm:py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="container-site relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Manufacturing Consultancy" }]} />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
            Specialized Consultancy
          </span>
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            Manufacturing &amp; Industrial Consultancy
          </h1>
          <p className="text-balance mt-4 max-w-2xl text-lg text-white/70">
            Factory setup involves land conversion, environmental clearance, licensing, labour compliance
            and utility connections — each governed by a different authority. We sequence it right the first time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#consultation" size="lg">{site.ctaPrimary.label}</ButtonLink>
            <ButtonLink href={site.ctaSecondary.href} variant="outline" size="lg">{site.ctaSecondary.label}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Full Scope" title="From site selection to ongoing plant compliance" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scopeItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Book a Consultation"
              title="Talk to our industrial consultancy desk"
              description="Share your project type and location — we'll map the complete clearance sequence and subsidy options."
            />
          </div>
          <div className="lg:col-span-3">
            <LeadForm
              id="consultation"
              title="Manufacturing Consultancy Enquiry"
              description="Tell us about your unit and we'll respond within 24 hours."
              whatsappIntro="Hi Anuradha Business Solutions, I'd like a consultation for Manufacturing Consultancy."
              fields={[
                { name: "name", label: "Full Name", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true },
                { name: "email", label: "Email", type: "email" },
                { name: "location", label: "City / State", required: true },
                {
                  name: "unitType",
                  label: "Unit Type",
                  type: "select",
                  required: true,
                  options: ["Factory Setup (General)", "Food Processing", "Dairy Plant", "Cold Storage", "Warehouse", "Packaging Unit"],
                },
                { name: "message", label: "Tell us more", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <SectionHeading eyebrow="FAQs" title="Manufacturing consultancy questions, answered" />
          <div className="lg:col-span-2">
            <FaqAccordion faqs={manufacturingFaqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Commission your plant without avoidable delays"
        description="Correct sequencing of clearances, subsidy access, and ongoing compliance — all coordinated by one team."
      />
    </>
  );
}
