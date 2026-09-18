// Site-wide configuration: business info, navigation, contact details.
// Update phone/email/address/social links here as the real business details are finalized.

export const site = {
  name: "BusinessMitra India",
  legalName: "BusinessMitra India Consultancy Services",
  tagline: "Start. Comply. Grow.",
  description:
    "India's complete business growth and compliance partner — business registration, GST & taxation, licenses, MSME subsidies, loan facilitation, project reports, hospital and industrial consultancy under one roof.",
  url: "https://www.businessmitraindia.com",
  domain: "businessmitraindia.com",
  logoText: "BusinessMitra",
  logoSuffix: "India",
  founded: "2016",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappNumber: "919876543210",
  email: "consult@businessmitraindia.com",
  supportEmail: "support@businessmitraindia.com",
  address: {
    line1: "9th Floor, Mitra Corporate Towers",
    line2: "Cyber City, Sector 24",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122002",
    country: "India",
  },
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.526441!2d77.0854!3d28.4949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzQxLjYiTiA3N8KwMDUnMDcuNCJF!5e0!3m2!1sen!2sin!4v1700000000000",
  social: {
    linkedin: "https://www.linkedin.com/company/businessmitraindia",
    twitter: "https://twitter.com/businessmitrain",
    facebook: "https://www.facebook.com/businessmitraindia",
    instagram: "https://www.instagram.com/businessmitraindia",
    youtube: "https://www.youtube.com/@businessmitraindia",
  },
  stats: [
    { value: "12,000+", label: "Businesses Served" },
    { value: "28", label: "States Covered" },
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
    ],
  },
  { label: "Industries", href: "/industries" },
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
