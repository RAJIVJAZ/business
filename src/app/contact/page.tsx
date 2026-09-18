import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadForm } from "@/components/ui/lead-form";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation, request a callback, or reach BusinessMitra India via phone, email or WhatsApp. Offices coordinating clients across 28 states.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <SectionHeading
            eyebrow="Get In Touch"
            title="Book a consultation or request a callback"
            description="A relationship manager will respond within 24 hours with a scoped plan for your requirement."
            light
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-6 text-center">
            <h3 className="font-bold text-navy">Call Us</h3>
            <a href={site.phoneHref} className="mt-2 block text-lg font-semibold text-blue">{site.phone}</a>
            <p className="mt-1 text-xs text-slate-500">Mon–Sat, 9:30 AM – 7:00 PM IST</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 text-center">
            <h3 className="font-bold text-navy">WhatsApp</h3>
            <a
              href={whatsappLink("Hi BusinessMitra India, I'd like to know more about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lg font-semibold text-green-dark"
            >
              Chat with us
            </a>
            <p className="mt-1 text-xs text-slate-500">Fastest way to reach our team</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 text-center">
            <h3 className="font-bold text-navy">Email</h3>
            <a href={`mailto:${site.email}`} className="mt-2 block text-lg font-semibold text-blue">{site.email}</a>
            <p className="mt-1 text-xs text-slate-500">Response within 24 hours</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <LeadForm
            id="consultation"
            title="Book Free Consultation"
            description="Tell us what you're working on — registration, licensing, subsidies, loans or ongoing compliance."
            whatsappIntro="Hi BusinessMitra, I'd like to book a free consultation."
            fields={[
              { name: "name", label: "Full Name", required: true },
              { name: "phone", label: "Phone Number", type: "tel", required: true },
              { name: "email", label: "Email", type: "email" },
              {
                name: "service",
                label: "Service Required",
                type: "select",
                required: true,
                options: [
                  "Business Registration", "GST & Taxation", "Licenses & Approvals", "MSME Subsidies",
                  "Loan Facilitation", "DPR & Project Reports", "Hospital Consultancy", "Industrial Consultancy",
                  "Tender Consultancy", "Trademark & IP", "Compliance Management", "Virtual Legal Officer", "Not Sure Yet",
                ],
              },
              { name: "message", label: "Tell us more", type: "textarea" },
            ]}
          />

          <LeadForm
            id="callback"
            title="Request a Callback"
            description="Prefer a call? Leave your number and a relationship manager will call you back."
            whatsappIntro="Hi BusinessMitra, please call me back."
            submitLabel="Request Callback"
            fields={[
              { name: "name", label: "Full Name", required: true },
              { name: "phone", label: "Phone Number", type: "tel", required: true },
              {
                name: "time",
                label: "Preferred Callback Time",
                type: "select",
                options: ["Morning (9:30 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 7 PM)"],
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Visit Us" title="Our head office" />
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-bg p-6">
              <p className="font-semibold text-navy">{site.legalName}</p>
              <p className="mt-2 text-sm text-slate-600">
                {site.address.line1}<br />
                {site.address.line2}<br />
                {site.address.city}, {site.address.state} {site.address.pincode}<br />
                {site.address.country}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="BusinessMitra India office location"
                src={site.mapEmbedSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
