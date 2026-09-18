import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { LeadForm } from "@/components/ui/lead-form";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hospital & Healthcare Consultancy",
  description:
    "Hospital setup, NABH accreditation, Ayushman Bharat empanelment, drug license, fire NOC, pollution NOC and biomedical waste compliance — coordinated end-to-end by BusinessMitra India.",
  alternates: { canonical: "/hospital-consultancy" },
};

const scopeItems = [
  { title: "Hospital Setup", desc: "Site planning, bed-capacity licensing norms and capital structuring guidance from day one." },
  { title: "NABH Accreditation", desc: "Pre-assessment, SOP documentation and quality-system readiness for first-attempt accreditation." },
  { title: "Ayushman Bharat Empanelment", desc: "End-to-end empanelment application, unlocking government scheme patient volume." },
  { title: "Drug License", desc: "Pharmacy and drug storage licensing coordinated with your facility layout and staffing plan." },
  { title: "Fire NOC", desc: "Fire safety compliance documentation and liaison through inspection and clearance." },
  { title: "Pollution NOC", desc: "Consent to establish/operate from the state pollution control board." },
  { title: "Biomedical Waste Compliance", desc: "Authorization, vendor tie-ups and ongoing renewal tracking for biomedical waste management." },
];

const hospitalFaqs = [
  { question: "Is NABH accreditation mandatory to operate a hospital?", answer: "NABH is not legally mandatory but is increasingly required for insurance empanelment, Ayushman Bharat participation, and competitive positioning against accredited peers." },
  { question: "How long does end-to-end hospital licensing take?", answer: "From site finalization to operational licensing, timelines typically run 4-8 months depending on state and bed capacity — we run approvals in parallel wherever regulations allow to compress this." },
  { question: "Do you help with biomedical waste vendor tie-ups?", answer: "Yes, we coordinate authorized biomedical waste handling vendor agreements as part of your compliance setup and keep renewal dates tracked." },
  { question: "Can you help an operational hospital that's missing some approvals?", answer: "Yes, we regularly help operational hospitals regularize missing licenses and prepare for NABH or Ayushman Bharat empanelment retroactively." },
];

export default function HospitalConsultancyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-14 sm:py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="container-site relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Hospital Consultancy" }]} />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
            Specialized Consultancy
          </span>
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            Hospital &amp; Healthcare Consultancy
          </h1>
          <p className="text-balance mt-4 max-w-2xl text-lg text-white/70">
            Healthcare is one of the most heavily regulated sectors — a single missing NOC or lapsed
            biomedical waste authorization can shut down operations. We coordinate every regulator from
            setup through accreditation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#consultation" size="lg">{site.ctaPrimary.label}</ButtonLink>
            <ButtonLink href={site.ctaSecondary.href} variant="outline" size="lg">{site.ctaSecondary.label}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Full Scope" title="Every regulatory approval a healthcare facility needs" />
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
              title="Talk to our healthcare consultancy desk"
              description="Share your project stage and location — we'll map the complete license and accreditation roadmap for your facility."
            />
          </div>
          <div className="lg:col-span-3">
            <LeadForm
              id="consultation"
              title="Hospital Consultancy Enquiry"
              description="Tell us about your hospital project and we'll respond within 24 hours."
              whatsappIntro="Hi BusinessMitra, I'd like a consultation for Hospital Consultancy."
              fields={[
                { name: "name", label: "Full Name", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true },
                { name: "email", label: "Email", type: "email" },
                { name: "location", label: "City / State", required: true },
                {
                  name: "stage",
                  label: "Project Stage",
                  type: "select",
                  required: true,
                  options: ["Planning / Site Selection", "Under Construction", "Operational — Need New Licenses", "Operational — Seeking NABH/Ayushman Bharat"],
                },
                { name: "message", label: "Tell us more", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <SectionHeading eyebrow="FAQs" title="Hospital consultancy questions, answered" />
          <div className="lg:col-span-2">
            <FaqAccordion faqs={hospitalFaqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Open on schedule, accredited with confidence"
        description="From drug license to NABH pre-assessment, let one team coordinate every regulator for your hospital."
      />
    </>
  );
}
