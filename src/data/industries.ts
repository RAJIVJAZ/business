export type Industry = {
  slug: string;
  title: string;
  summary: string;
  challenges: string[];
  services: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary: "Factory licensing, environmental clearances, MSME subsidies and ongoing compliance for manufacturers of every scale.",
    challenges: [
      "Sequencing land conversion, environmental clearance and factory licensing correctly",
      "Accessing capital and interest subsidies for plant & machinery investment",
      "Managing labour law and pollution compliance post-commissioning",
    ],
    services: ["Industrial Consultancy", "MSME Subsidies", "Loan Facilitation", "Compliance Management"],
  },
  {
    slug: "dairy",
    title: "Dairy",
    summary: "Milk chilling, processing plant setup, FSSAI licensing and dairy-specific capital subsidy facilitation.",
    challenges: [
      "Cold chain infrastructure financing",
      "FSSAI and dairy-specific quality certifications",
      "Accessing DEDS-linked and state dairy subsidy schemes",
    ],
    services: ["MSME Subsidies", "Loan Facilitation", "Licenses & Approvals", "DPR & Project Reports"],
  },
  {
    slug: "food-processing",
    title: "Food Processing",
    summary: "FSSAI, packaging compliance, PMFME/PMKSY subsidy access and export documentation for food processors.",
    challenges: [
      "Navigating FSSAI category-wise licensing requirements",
      "Structuring DPRs for PMFME/PMKSY subsidy eligibility",
      "Export documentation and quality certification for overseas markets",
    ],
    services: ["MSME Subsidies", "Licenses & Approvals", "DPR & Project Reports", "GST & Taxation"],
  },
  {
    slug: "hospitals",
    title: "Hospitals",
    summary: "Hospital setup licensing, NABH accreditation, Ayushman Bharat empanelment and biomedical waste compliance.",
    challenges: [
      "Coordinating drug license, fire NOC, pollution NOC and biomedical waste authorization",
      "Preparing for NABH accreditation and insurance/TPA empanelment",
      "Financing high-capex medical equipment and infrastructure",
    ],
    services: ["Hospital Consultancy", "Loan Facilitation", "Compliance Management", "Licenses & Approvals"],
  },
  {
    slug: "hotels",
    title: "Hotels & Resorts",
    summary: "FSSAI, fire and liquor licensing, tourism department approvals and hospitality-sector loan facilitation.",
    challenges: [
      "Multiple licenses spanning fire, food safety, excise and tourism departments",
      "Seasonal working capital financing",
      "State tourism policy incentive access",
    ],
    services: ["Licenses & Approvals", "Loan Facilitation", "Compliance Management", "Business Registration"],
  },
  {
    slug: "warehousing",
    title: "Warehousing & Cold Storage",
    summary: "Warehouse licensing, cold-chain subsidy access and logistics-sector compliance management.",
    challenges: [
      "Land use and warehousing-specific licensing",
      "Accessing cold-chain and logistics infrastructure subsidies",
      "Fire safety and structural compliance for large storage facilities",
    ],
    services: ["MSME Subsidies", "Licenses & Approvals", "Loan Facilitation", "Industrial Consultancy"],
  },
  {
    slug: "education",
    title: "Educational Institutions",
    summary: "Trust/society registration, affiliation compliance and infrastructure financing for schools and institutes.",
    challenges: [
      "Society/trust registration and statutory compliance",
      "Affiliation and recognition approvals from education boards",
      "Infrastructure financing for campus expansion",
    ],
    services: ["Business Registration", "Compliance Management", "Loan Facilitation", "Licenses & Approvals"],
  },
  {
    slug: "retail",
    title: "Retail Businesses",
    summary: "Trade licensing, GST compliance and working capital solutions for retail and trading businesses.",
    challenges: [
      "Multi-location trade license and GST registration management",
      "Working capital for inventory-heavy operations",
      "Point-of-sale and e-commerce compliance",
    ],
    services: ["GST & Taxation", "Loan Facilitation", "Business Registration", "Compliance Management"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
