export type SubsidyCategory = {
  slug: string;
  title: string;
  summary: string;
  industries: string[];
  benefitRange: string;
  keyPoints: string[];
};

export const subsidyCategories: SubsidyCategory[] = [
  {
    slug: "food-processing",
    title: "Food Processing Subsidies",
    summary: "Capital and credit-linked subsidies under PMFME, PMKSY and state food processing policies.",
    industries: ["Food Processing", "Agro Processing", "Packaged Foods"],
    benefitRange: "25%–35% of eligible project cost",
    keyPoints: [
      "PMFME credit-linked capital subsidy for micro food processing units",
      "PMKSY component schemes for cold chain, mega food parks and processing clusters",
      "State-specific top-up subsidies in select manufacturing-focused states",
    ],
  },
  {
    slug: "dairy",
    title: "Dairy Subsidies",
    summary: "Capital subsidy and interest subvention for dairy processing, chilling and value-addition units.",
    industries: ["Dairy Processing", "Milk Chilling", "Value-Added Dairy Products"],
    benefitRange: "25%–33% of eligible project cost",
    keyPoints: [
      "Dairy Entrepreneurship Development Scheme (DEDS)-linked benefits via NABARD-refinanced banks",
      "State dairy development corporation capital subsidy programs",
      "Interest subvention on term loans for milk processing infrastructure",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & MSME Subsidies",
    summary: "Capital investment subsidy, interest subvention and technology upgradation support for MSME manufacturers.",
    industries: ["General Manufacturing", "Engineering", "Textiles", "Auto Components"],
    benefitRange: "15%–25% of eligible plant & machinery cost",
    keyPoints: [
      "Credit Linked Capital Subsidy Scheme (CLCSS) for technology upgradation",
      "State industrial policy capital and interest subsidies for new/expansion units",
      "Stamp duty and electricity duty exemptions in several state policies",
    ],
  },
  {
    slug: "hospital",
    title: "Hospital & Healthcare Subsidies",
    summary: "State healthcare infrastructure incentives and interest subvention for new hospital and diagnostic setups.",
    industries: ["Hospitals", "Diagnostic Centres", "Nursing Homes"],
    benefitRange: "Varies by state; interest subvention + stamp duty relief common",
    keyPoints: [
      "State healthcare infrastructure policy incentives for tier-2/3 city hospitals",
      "Interest subvention on term loans for medical equipment and infrastructure",
      "Priority sector lending benefits for healthcare under RBI guidelines",
    ],
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy Subsidies",
    summary: "Capital subsidy and accelerated depreciation for solar, biomass and energy-efficiency installations.",
    industries: ["Solar Installations", "Biomass Energy", "Industrial Energy Efficiency"],
    benefitRange: "MNRE/state-linked; varies by technology and capacity",
    keyPoints: [
      "MNRE capital subsidy programs for rooftop and off-grid solar",
      "State renewable energy policy incentives and net-metering support",
      "Accelerated depreciation benefits for industrial energy investments",
    ],
  },
  {
    slug: "msme-schemes",
    title: "MSME Schemes (General)",
    summary: "Udyam-linked schemes covering technology, marketing, quality certification and cluster development.",
    industries: ["All Udyam-Registered MSMEs"],
    benefitRange: "Scheme-specific; typically 50%–75% of eligible cost",
    keyPoints: [
      "Quality certification (ISO/ZED) reimbursement schemes",
      "Marketing and export promotion support for MSME exporters",
      "Cluster development program support for common infrastructure",
    ],
  },
];

export const indianStates = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand",
  "West Bengal",
];

export const subsidyIndustries = [
  "Food Processing", "Dairy", "Manufacturing", "Hospital / Healthcare", "Renewable Energy",
  "Warehousing / Cold Storage", "Hotel / Hospitality", "Textiles", "Other MSME",
];

export const industryToCategorySlugs: Record<string, string[]> = {
  "Food Processing": ["food-processing", "msme-schemes"],
  "Dairy": ["dairy", "msme-schemes"],
  "Manufacturing": ["manufacturing", "msme-schemes"],
  "Hospital / Healthcare": ["hospital", "msme-schemes"],
  "Renewable Energy": ["renewable-energy", "msme-schemes"],
  "Warehousing / Cold Storage": ["food-processing", "manufacturing", "msme-schemes"],
  "Hotel / Hospitality": ["msme-schemes"],
  "Textiles": ["manufacturing", "msme-schemes"],
  "Other MSME": ["msme-schemes"],
};
