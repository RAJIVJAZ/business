// Compiled from published central and state MSME/industrial policy documents
// (see docs/government-schemes-sources.md for the research trail). Scheme
// terms change with budget cycles and policy revisions — this is a reference
// point for a first conversation, not a substitute for verifying current
// terms with the relevant department before applying. Last compiled: Sept 2026.

export type CentralScheme = {
  name: string;
  shortName: string;
  authority: string;
  summary: string;
  keyFacts: string[];
  status?: string; // flagged when a scheme is mid-revision, not steady-state
};

export const centralSchemes: CentralScheme[] = [
  {
    name: "Prime Minister's Employment Generation Programme",
    shortName: "PMEGP",
    authority: "Ministry of MSME / KVIC",
    summary: "Credit-linked capital subsidy for new micro-enterprises, with a materially higher subsidy rate for women and other special-category applicants.",
    keyFacts: [
      "Project cost limit: ₹50 lakh (manufacturing) / ₹20 lakh (service & business), per the 2026 revision",
      "General category: 15% subsidy (urban), 25% (rural)",
      "Women, SC/ST, OBC, minorities, ex-servicemen, persons with disabilities, NER & Hill States: 25% (urban), 35% (rural)",
      "Applicant margin money: 10% of project cost; balance financed via bank loan",
    ],
  },
  {
    name: "Credit Guarantee Fund Trust for Micro & Small Enterprises",
    shortName: "CGTMSE",
    authority: "Ministry of MSME / SIDBI",
    summary: "Collateral-free credit guarantee cover for bank/NBFC loans to micro and small enterprises.",
    keyFacts: [
      "Guarantee cover raised to ₹10 crore for micro and small enterprises (from ₹5 crore)",
      "Eligible exporter MSMEs: guarantee cover up to ₹20 crore",
      "Retail and wholesale trading enterprises now eligible for guarantee cover (2026 update)",
      "No collateral or third-party guarantee required from the borrower",
    ],
  },
  {
    name: "PM Formalisation of Micro Food Processing Enterprises",
    shortName: "PMFME",
    authority: "Ministry of Food Processing Industries",
    summary: "Credit-linked capital subsidy for micro food processing units, widely used by first-time and women entrepreneurs in food processing.",
    keyFacts: [
      "Capital subsidy for eligible micro food processing units (individual, FPO/SHG and cooperative tracks)",
      "Credit-linked — bank appraisal and scheme approval happen alongside each other",
      "Particularly accessible for women-led micro food processing enterprises",
    ],
  },
  {
    name: "Pradhan Mantri MUDRA Yojana",
    shortName: "MUDRA (PMMY)",
    authority: "Ministry of Finance / MUDRA Ltd",
    summary: "Collateral-free micro loans across three ticket-size categories, heavily used by women-led micro and small businesses.",
    keyFacts: [
      "Shishu: up to ₹50,000 · Kishor: ₹50,000–5 lakh · Tarun: ₹5–10 lakh",
      "Fully collateral-free at every tier",
      "Available through public/private banks, RRBs, MFIs and NBFCs",
    ],
  },
  {
    name: "Stand-Up India Scheme",
    shortName: "Stand-Up India",
    authority: "Ministry of Finance (DFS) / SIDBI",
    summary: "Bank loans for new greenfield enterprises set up by SC/ST and women entrepreneurs, currently being revamped after the original scheme lapsed.",
    keyFacts: [
      "Original scheme (launched 2016) provided loans of ₹10 lakh–1 crore; it lapsed on 31 March 2025",
      "A revamped version was announced in Parliament in March 2026, expected to raise the ceiling to ₹2 crore and add online skill-building",
      "At least one loan per bank branch was reserved for an SC/ST borrower and one for a woman borrower under the original design",
    ],
    status: "Under revision — confirm current terms before quoting this scheme to a client",
  },
  {
    name: "Credit Linked Capital Subsidy / ZED Certification",
    shortName: "CLCSS / ZED",
    authority: "Ministry of MSME",
    summary: "Technology-upgradation capital subsidy and Zero Defect Zero Effect quality certification support for MSME manufacturers.",
    keyFacts: [
      "Capital subsidy on institutional finance for approved technology upgradation",
      "ZED certification adds a quality/sustainability credential increasingly asked for in tenders and export contracts",
    ],
  },
];

export type WomenScheme = {
  name: string;
  authority: string;
  summary: string;
  benefit: string;
};

export const womenSchemes: WomenScheme[] = [
  {
    name: "Mahila Udyam Nidhi Scheme",
    authority: "SIDBI, via public sector banks",
    summary: "Soft-loan scheme for women setting up, expanding or modernising a small-scale industrial unit.",
    benefit: "Loans up to ₹10 lakh; requires at least 51% women shareholding/proprietorship. Routed through bank-specific women's schemes — SBI's Stree Shakti, Bank of Baroda's Mahila Shakti, Canara Bank's Mahila Vikas, Union Bank's Cent Kalyani.",
  },
  {
    name: "Stand-Up India (women category)",
    authority: "Ministry of Finance (DFS)",
    summary: "A dedicated lending quota for women first-time entrepreneurs, currently being revamped (see Central Schemes).",
    benefit: "Originally ₹10 lakh–1 crore per branch reservation; the 2026 revamp is expected to raise this to ₹2 crore.",
  },
  {
    name: "PMEGP — higher women's subsidy rate",
    authority: "Ministry of MSME / KVIC",
    summary: "Women applicants qualify under PMEGP's special category, at a meaningfully higher subsidy rate than general applicants.",
    benefit: "25% subsidy in urban areas, 35% in rural areas — versus 15%/25% for general-category applicants.",
  },
  {
    name: "Udyogini Scheme",
    authority: "State women's development corporations (e.g. Karnataka)",
    summary: "State-run scheme supporting women entrepreneurs across retail, manufacturing and service businesses, typically alongside a state industrial policy.",
    benefit: "Financial support and concessional lending terms; exact benefit varies by state — confirm current terms with the state women's development corporation.",
  },
  {
    name: "TREAD Scheme for Women",
    authority: "Ministry of MSME",
    summary: "Trade-Related Entrepreneurship Assistance and Development — credit access support routed through NGOs, alongside training and counselling.",
    benefit: "Loan-linked grant support for women lacking collateral or a credit track record, delivered with a mandatory training component.",
  },
  {
    name: "Mahila e-Haat",
    authority: "Ministry of Women & Child Development",
    summary: "An online marketing platform specifically for women entrepreneurs, artisans and SHGs to showcase and sell products directly.",
    benefit: "Free digital storefront and market linkage — complements financing schemes rather than replacing them.",
  },
];

export type StateSubsidyProfile = {
  state: string;
  researched: boolean;
  generalCapitalSubsidyPct?: number;
  womenCapitalSubsidyPct?: number;
  policy?: string;
  highlights?: string[];
  womenSpecific?: string;
};

export const stateSubsidyProfiles: StateSubsidyProfile[] = [
  {
    state: "Uttar Pradesh",
    researched: true,
    generalCapitalSubsidyPct: 25,
    womenCapitalSubsidyPct: 35,
    policy: "UP MSME Policy 2022",
    highlights: [
      "Capital subsidy up to 25% (general) / 35% (women & SC/ST) of eligible fixed capital investment",
      "Higher subsidy slabs in focus regions — Bundelkhand and Purvanchal — versus already-developed regions",
    ],
    womenSpecific: "10 percentage-point higher capital subsidy ceiling than general-category applicants.",
  },
  {
    state: "Maharashtra",
    researched: true,
    policy: "Maharashtra Industry, Investment & Services Policy (MIISP) 2025",
    highlights: [
      "Notified 31 Dec 2025, valid through 30 Dec 2030 — replaces the earlier PSI-2019",
      "Capital subsidy up to 100% of land/building/machinery cost in eligible zones for thrust sectors, including women-owned enterprises",
      "Industrial Promotion Subsidy reimburses 100% of Gross SGST paid on eligible in-state sales",
    ],
    womenSpecific: "Women-owned, SC/ST-owned and PwD-owned enterprises receive additional incentives layered on top of the standard package.",
  },
  {
    state: "Gujarat",
    researched: true,
    policy: "Viksit Gujarat Industrial Policy 2026 (effective 1 Jun 2026 – 31 May 2031)",
    highlights: [
      "Incentive ceiling up to 45% of eligible Fixed Capital Investment (Category-A talukas) / 35% (Category-B)",
      "7% interest subsidy on term loans for 5 years, up to 10% of eFCI",
    ],
    womenSpecific: "Additional 1% interest subsidy, plus rental assistance of 75% of rent (up to ₹3 lakh/year for 5 years); a Women's Industrial Leadership Committee and a \"Return-to-Industry Accelerator\" for women resuming work after a career break.",
  },
  {
    state: "Tamil Nadu",
    researched: true,
    generalCapitalSubsidyPct: 25,
    policy: "Tamil Nadu MSME Policy + Tamil Nadu Women Entrepreneurs Empowerment Scheme (TWEES, launched Mar 2026)",
    highlights: [
      "25% capital subsidy on eligible plant & machinery, capped at ₹150 lakh",
      "9 dedicated women's industrial parks (₹237 crore) and 13 new industrial estates announced Sept 2026",
    ],
    womenSpecific: "Additional 5% capital subsidy (up to ₹2 lakh) for women/SC-ST/PwD/transgender entrepreneurs; TWEES separately offers loans up to ₹10 lakh with a 25% subsidy (max ₹2 lakh), targeting 100,000 women entrepreneurs over 5 years.",
  },
  {
    state: "Rajasthan",
    researched: true,
    highlights: [
      "MLUPY: interest subsidy up to 8% p.a. for up to 5 years, subject to eligibility",
      "RIPS 2024: investment-linked incentive package",
      "Vishwakarma Yuva Yojana: support for artisans",
    ],
    womenSpecific: "MNSUPY is a dedicated scheme channel for women entrepreneurs alongside the general RIPS 2024 package.",
  },
  {
    state: "Karnataka",
    researched: true,
    policy: "Karnataka Industrial Policy 2025–30",
    highlights: [
      "30% of industrial area land earmarked for MSMEs, of which 24.1% is reserved for SC/ST entrepreneurs",
      "Infrastructure support and industrial cluster development prioritized in backward regions",
    ],
    womenSpecific: "Udyogini Scheme (Karnataka State Women's Development Corporation) provides financial support for women entrepreneurs in retail, manufacturing and service businesses, alongside the industrial policy's general incentives.",
  },
  {
    state: "Madhya Pradesh",
    researched: true,
    highlights: [
      "Support recognized for plant & machinery investment up to ₹10 crore under the state's MSME policy framework",
    ],
    womenSpecific: "Women entrepreneurs are eligible under the state's general MSME incentive framework — confirm current women-specific top-ups with the state MSME department.",
  },
  {
    state: "West Bengal",
    researched: true,
    policy: "Banglashree Scheme",
    highlights: [
      "Capital investment subsidy, interest subsidy on eligible term loans, power-related assistance",
      "Stamp duty reimbursement and SGST refund for eligible manufacturing MSMEs",
    ],
  },
  {
    state: "Telangana",
    researched: true,
    policy: "Telangana MSME Promotion Policy",
    highlights: [
      "A broad incentive framework covering capital, power and other MSME support — confirm current rates directly, as granular slabs were not independently verified for this summary",
    ],
  },
  {
    state: "Haryana",
    researched: true,
    highlights: [
      "ADEETIE scheme: interest subsidy specifically for MSMEs adopting energy-efficient technologies",
      "Broader state industrial policy incentives exist alongside this — confirm current general slabs directly",
    ],
  },
  // Remaining states and union territories: every state runs an MSME/industrial
  // incentive framework, but specific current slabs weren't independently
  // verified for this page — our subsidy desk tracks live terms on request
  // rather than publishing unverified numbers here.
  ...[
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Himachal Pradesh", "Jharkhand", "Kerala", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Sikkim", "Tripura", "Uttarakhand",
    "Andaman & Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu",
    "Delhi (NCT)", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
  ].map((state) => ({ state, researched: false })),
];

export function getStateProfile(state: string) {
  return stateSubsidyProfiles.find((s) => s.state === state);
}
