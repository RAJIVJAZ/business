import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/ui/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BusinessMitra India's mission, vision, values and leadership — a one-stop business consultancy platform built to make compliance and growth simple for Indian businesses.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Transparency", desc: "Upfront pricing and honest timelines — no hidden charges, no false promises on approval odds." },
  { title: "Accountability", desc: "A dedicated relationship manager owns your engagement end-to-end, not a rotating pool of juniors." },
  { title: "Technical Rigor", desc: "Every DPR, filing and application is built to the specific bank/scheme/regulator's actual requirements." },
  { title: "Pan-India Reach", desc: "In-house consultants plus a vetted regional associate network for state-specific liaison." },
];

const leadership = [
  { name: "Arjun Malhotra", role: "Founder & Managing Director", bio: "18+ years advising MSMEs and mid-market companies on compliance, taxation and growth financing." },
  { name: "Dr. Kavita Rao", role: "Head of Healthcare Consultancy", bio: "Former hospital administrator specializing in NABH accreditation and healthcare regulatory compliance." },
  { name: "Sanjay Kulkarni", role: "Head of Loans & Subsidies", bio: "Ex-banker with 12 years in MSME credit appraisal, now leading lender-matching and subsidy strategy." },
  { name: "Neha Kapoor", role: "Head of Legal & Compliance", bio: "Corporate lawyer overseeing registration, trademark/IP and the Virtual Legal Officer practice." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <SectionHeading
            eyebrow="About BusinessMitra India"
            title="Built to be the one call a growing business needs to make"
            description={`Founded in ${site.founded}, BusinessMitra India was started to remove the friction Indian entrepreneurs face juggling separate CAs, lawyers, licensing agents and loan brokers.`}
            light
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-lg font-bold text-navy">Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To make every legal, tax, licensing and financing requirement of running a business in India
              simple, transparent and accessible from one platform.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-lg font-bold text-navy">Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To become India&apos;s most trusted business growth and compliance partner — recognized in every
              state for the depth of our sector expertise and consistency of delivery.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-lg font-bold text-navy">Our Story</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              What started as a two-person CA and legal advisory in {site.founded} has grown into a
              multi-disciplinary consultancy serving 12,000+ businesses across 28 states, spanning tax,
              legal, licensing, subsidy, loan and specialized industry consultancy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Our Values" title="What guides every engagement" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-bg p-6">
                <h3 className="font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Leadership Team" title="The people behind BusinessMitra India" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <div key={person.name} className="rounded-2xl border border-border bg-white p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-bold text-navy">{person.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-blue">{person.role}</p>
                <p className="mt-2 text-sm text-slate-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
