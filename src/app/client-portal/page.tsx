import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadForm } from "@/components/ui/lead-form";

export const metadata: Metadata = {
  title: "Client Portal (Preview)",
  description:
    "A preview of the upcoming Anuradha Business Solutions client portal — document upload, compliance tracker, application status, renewal alerts, invoices and support tickets in one dashboard.",
  alternates: { canonical: "/client-portal" },
};

const modules = [
  {
    title: "Document Upload",
    desc: "Securely upload KYC, financials and application documents once — reused across every engagement.",
    preview: ["PAN Card.pdf", "GST Certificate.pdf", "Audited Financials FY25.pdf"],
  },
  {
    title: "Compliance Tracker",
    desc: "See every upcoming ROC, GST and license renewal deadline in one calendar view.",
    preview: ["GSTR-3B — Due in 4 days", "ROC AOC-4 — Due in 18 days", "Trade License Renewal — Due in 40 days"],
  },
  {
    title: "Application Status",
    desc: "Track subsidy, loan and license applications through each stage of government/bank review.",
    preview: ["PMFME Subsidy — Committee Review", "CGTMSE Loan — Sanctioned", "Fire NOC — Documentation"],
  },
  {
    title: "Renewal Alerts",
    desc: "Automated alerts before licenses, registrations and certifications lapse.",
    preview: ["FSSAI License expires in 60 days", "NABH re-accreditation due in 5 months"],
  },
  {
    title: "Invoice Section",
    desc: "View and download invoices for every engagement, with payment status at a glance.",
    preview: ["INV-2026-014 — Paid", "INV-2026-021 — Due 30 Sep"],
  },
  {
    title: "Support Tickets",
    desc: "Raise and track queries directly with your relationship manager instead of email threads.",
    preview: ["#1042 — GST notice query — In Progress", "#1039 — Subsidy DPR revision — Resolved"],
  },
];

export default function ClientPortalPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Client Portal" }]} />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
            Coming Soon — Preview
          </span>
          <SectionHeading
            title="One dashboard for every engagement with Anuradha Business Solutions"
            description="We're building a client portal so you can track documents, compliance deadlines, applications, renewals, invoices and support in one place. Here's a preview of what's coming."
            light
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div key={module.title} className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-bold text-navy">{module.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{module.desc}</p>
              <div className="mt-4 space-y-2 rounded-xl bg-bg p-3">
                {module.preview.map((line) => (
                  <div key={line} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs text-slate-600 shadow-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Get Early Access"
              title="Be first to use the client portal"
              description="Existing and prospective clients can register interest now — we'll onboard the first cohort as modules go live."
            />
          </div>
          <div className="lg:col-span-3">
            <LeadForm
              title="Request Early Access"
              whatsappIntro="Hi Anuradha Business Solutions, I'd like early access to the Client Portal."
              submitLabel="Request Early Access"
              fields={[
                { name: "name", label: "Full Name", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "company", label: "Company Name" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
