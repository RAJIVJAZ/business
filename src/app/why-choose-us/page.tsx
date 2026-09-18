import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/ui/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "One-stop solution, expert team, pan-India reach, technology-enabled delivery, transparent pricing and a dedicated relationship manager — why businesses choose Anuradha Business Solutions.",
  alternates: { canonical: "/why-choose-us" },
};

const reasons = [
  {
    title: "One-Stop Solution",
    desc: "Legal, tax, licensing, subsidies, loans and specialized industry consultancy — coordinated by one team instead of five separate vendors.",
  },
  {
    title: "Expert Team",
    desc: "Chartered accountants, corporate lawyers, ex-bankers and industry-specific technical consultants under one roof.",
  },
  {
    title: "Pan-India Reach",
    desc: "In-house consultants plus a vetted regional associate network covering 28 states for state-specific liaison and approvals.",
  },
  {
    title: "Technology Enabled",
    desc: "Digital eligibility checkers, application tracking and a compliance calendar — moving beyond spreadsheets and phone-tag.",
  },
  {
    title: "Transparent Pricing",
    desc: "Every engagement is quoted upfront — flat fee or monthly retainer — with no hidden charges added mid-engagement.",
  },
  {
    title: "Dedicated Relationship Manager",
    desc: "One point of contact who knows your business and coordinates across our legal, tax and technical teams on your behalf.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]} />
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What sets Anuradha Business Solutions apart from typical CA and law firms"
            description="We built our delivery model around the one thing most consultancies get wrong: coordination. Here's how that plays out for you."
            light
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="rounded-2xl border border-border bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green/10 font-bold text-green-dark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-bold text-navy">{reason.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="By The Numbers" title="Results our clients can point to" align="center" />
          <div className="mt-10 grid grid-cols-2 gap-8 rounded-2xl bg-navy py-10 sm:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
