// Site-wide configuration: business info, navigation, contact details.
// Update phone/email/address/social links here as the real business details are finalized.

export const site = {
  name: "Anuradha Business Solutions",
  legalName: "Anuradha Business Solutions Pvt. Ltd.",
  tagline: "Start. Comply. Grow.",
  description:
    "India's complete business growth and compliance partner — business registration, GST & taxation, licenses, MSME subsidies, loan facilitation, project reports, hospital and industrial consultancy under one roof.",
  url: "https://www.anuradhabusinesssolutions.com",
  domain: "anuradhabusinesssolutions.com",
  // Wordmark text used in the logo lock-up only (always lower case + accent dot) —
  // kept separate from `name`, which is used in prose/metadata.
  logoWord: "anuradha",
  founded: "2016",
  phone: "+91 95809 15299",
  phoneHref: "tel:+919580915299",
  whatsappNumber: "919580915299",
  email: "consult@anuradhabusinesssolutions.com",
  supportEmail: "support@anuradhabusinesssolutions.com",
  address: {
    line1: "594A/371A, Mutthiganj",
    line2: "Salikgram, Jaiswal Nagar",
    city: "Prayagraj",
    state: "Uttar Pradesh",
    pincode: "211003",
    country: "India",
  },
  // Query-based embed (no API key required) resolves to the actual address below;
  // if the address changes, regenerate this from the new address string.
  mapEmbedSrc:
    "https://www.google.com/maps?q=594A%2F371A%2C%20Mutthiganj%2C%20Salikgram%2C%20Jaiswal%20Nagar%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211003%2C%20India&output=embed",
  social: {
    linkedin: "https://www.linkedin.com/company/anuradhabusinesssolutions",
    twitter: "https://twitter.com/anuradhabizsol",
    facebook: "https://www.facebook.com/anuradhabusinesssolutions",
    instagram: "https://www.instagram.com/anuradhabusinesssolutions",
    youtube: "https://www.youtube.com/@anuradhabusinesssolutions",
  },
  stats: [
    { value: "12,000+", label: "Businesses Served" },
    { value: "Top Rated", label: "Business Solutions Provider in Prayagraj" },
    { value: "₹840 Cr+", label: "Loans & Subsidies Facilitated" },
    { value: "9.2 yrs", label: "Avg. Team Experience" },
  ],
  ctaPrimary: { label: "Book Free Consultation", href: "/contact#consultation" },
  ctaSecondary: { label: "Request Callback", href: "/contact#callback" },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Registration", href: "/services/business-registration" },
      { label: "GST & Taxation", href: "/services/gst-taxation" },
      { label: "Licenses & Approvals", href: "/services/licenses-approvals" },
      { label: "MSME Subsidies", href: "/services/msme-subsidies" },
      { label: "Loan Facilitation", href: "/services/loan-facilitation" },
      { label: "DPR & Project Reports", href: "/services/project-reports" },
      { label: "Hospital Consultancy", href: "/services/hospital-consultancy" },
      { label: "Industrial Consultancy", href: "/services/industrial-consultancy" },
      { label: "Tender Consultancy", href: "/services/tender-consultancy" },
      { label: "Trademark & IP Services", href: "/services/trademark-ip" },
      { label: "Compliance Management", href: "/services/compliance-management" },
      { label: "Virtual Legal Officer", href: "/services/virtual-legal-officer" },
      { label: "ISO Certification", href: "/services/iso-certification" },
      { label: "Virtual CFO Services", href: "/services/virtual-cfo" },
    ],
  },
  {
    label: "Flagship Solutions",
    href: "/subsidies",
    children: [
      { label: "Subsidy Consultancy", href: "/subsidies", description: "Eligibility checker + schemes" },
      { label: "Loan Assistance", href: "/loans", description: "Eligibility calculator" },
      { label: "Hospital Consultancy", href: "/hospital-consultancy", description: "Setup to accreditation" },
      { label: "Manufacturing Consultancy", href: "/manufacturing-consultancy", description: "Factory to compliance" },
      { label: "Government Schemes Explorer", href: "/government-schemes", description: "Central, state & women entrepreneur schemes" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Why Us", href: "/why-choose-us" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: primaryNav[0].children ?? [],
  flagship: primaryNav[1].children ?? [],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog & Resources", href: "/blog" },
    { label: "Client Portal", href: "/client-portal" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
