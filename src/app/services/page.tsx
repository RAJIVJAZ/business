import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaSection } from "@/components/ui/cta-section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Business Consultancy Services",
  description:
    "Business registration, GST & taxation, licenses & approvals, MSME subsidies, loan facilitation, project reports, hospital and industrial consultancy, tender consultancy, trademark & IP, compliance management and virtual legal officer services.",
  alternates: { canonical: "/services" },
};

const categories = Array.from(new Set(services.map((s) => s.category)));

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <SectionHeading
            eyebrow="Our Services"
            title="Twelve service lines. One relationship manager."
            description="Every legal, tax, licensing and growth service a business needs — coordinated by a single team instead of a dozen vendors."
            light
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site space-y-14">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-xl font-bold text-navy">{category}</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.filter((s) => s.category === category).map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
