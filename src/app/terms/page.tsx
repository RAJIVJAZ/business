import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service governing use of the ${site.name} website and engagement of our consultancy services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="18 September 2026"
      sections={[
        {
          heading: "1. Scope of Services",
          body: [
            `${site.name} provides business consultancy services including but not limited to business registration, taxation advisory, licensing facilitation, subsidy and loan consultancy, project report preparation, and industry-specific consultancy. Specific scope, timelines and fees for any engagement are confirmed in writing before work begins.`,
          ],
        },
        {
          heading: "2. No Guarantee of Government Approval",
          body: [
            "While we prepare applications, project reports and documentation to the highest professional standard, final approval of registrations, licenses, subsidies or loans rests solely with the relevant government department, regulator, bank or sanctioning committee. We do not guarantee approval or a specific timeline for any government or bank process.",
          ],
        },
        {
          heading: "3. Client Responsibilities",
          body: [
            "Clients are responsible for providing accurate, complete and timely information and documentation. Delays or inaccuracies in client-provided information may affect application timelines and outcomes, and are outside our control.",
          ],
        },
        {
          heading: "4. Fees and Payment",
          body: [
            "Fees are quoted upfront per engagement, either as a flat fee for defined scopes or a monthly retainer for ongoing services. Statutory fees, stamp duty, government fees and third-party charges (where applicable) are separate from our professional fees unless explicitly stated otherwise.",
          ],
        },
        {
          heading: "5. Website Tools Disclaimer",
          body: [
            "The Subsidy Eligibility Checker and Loan Eligibility Calculator on this website provide indicative, non-binding estimates based on the information you enter. They do not constitute a loan offer, subsidy sanction, or final eligibility determination. Actual eligibility, terms and outcomes are determined by the relevant scheme guidelines or lending institution after formal review.",
          ],
        },
        {
          heading: "6. Limitation of Liability",
          body: [
            `${site.name} shall not be liable for any indirect, incidental or consequential loss arising from delays, rejections or changes in government policy, scheme guidelines, or bank lending criteria that occur after our advice or filing, provided our services were performed with reasonable professional care.`,
          ],
        },
        {
          heading: "7. Governing Law",
          body: [`These terms are governed by the laws of India, with courts in ${site.address.city}, ${site.address.state} having jurisdiction.`],
        },
      ]}
    />
  );
}
