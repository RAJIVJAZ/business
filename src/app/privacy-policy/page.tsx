import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name} — how we collect, use and protect your information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="18 September 2026"
      sections={[
        {
          heading: "1. Information We Collect",
          body: [
            "We collect information you provide directly, such as your name, phone number, email address, business details and documents shared during consultation, application preparation or engagement onboarding.",
            "We also collect information automatically through website usage — pages visited, forms submitted (e.g. the Subsidy Eligibility Checker or Loan Eligibility Calculator), and general browser/device information.",
          ],
        },
        {
          heading: "2. How We Use Your Information",
          body: [
            "To respond to consultation, callback and enquiry requests, including via WhatsApp and email hand-offs from our website forms.",
            "To prepare and file applications on your behalf (registrations, licenses, subsidy applications, loan applications) once you engage us for a specific service.",
            "To send compliance reminders, scheme updates and newsletter content, where you have opted in.",
          ],
        },
        {
          heading: "3. Information Sharing",
          body: [
            "We share information with relevant government departments, banks, NBFCs or regulatory bodies only as necessary to complete the specific service you've engaged us for, and only with your knowledge.",
            "We do not sell your personal information to third parties for marketing purposes.",
          ],
        },
        {
          heading: "4. Data Security",
          body: [
            "Documents and personal information shared with us are handled under confidentiality obligations standard to professional consultancy engagements. We recommend sharing sensitive documents through the secure channels our team provides during active engagements rather than public forms.",
          ],
        },
        {
          heading: "5. Your Rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information held by us, subject to any statutory record-retention obligations applicable to completed filings and engagements.",
          ],
        },
        {
          heading: "6. Contact Us",
          body: [`For any privacy-related queries, contact us at ${site.email} or ${site.phone}.`],
        },
      ]}
    />
  );
}
