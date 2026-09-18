import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { IndustryCard } from "@/components/ui/industry-card";
import { CtaSection } from "@/components/ui/cta-section";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "BusinessMitra India serves manufacturers, dairy plants, food processors, hospitals, hotels, warehousing businesses, educational institutions and retail businesses across India.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Sector-specific expertise, not generic advice"
            description="Every industry has its own licensing matrix, subsidy schemes and compliance calendar. Our consultants specialize by sector so nothing gets missed."
            light
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
