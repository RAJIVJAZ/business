export type BlogCategory =
  | "GST"
  | "Income Tax"
  | "Business Registration"
  | "Subsidies"
  | "Government Schemes"
  | "Loans"
  | "Compliance"
  | "Hospitals"
  | "Manufacturing";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  readTime: string;
};

export const blogCategories: BlogCategory[] = [
  "GST", "Income Tax", "Business Registration", "Subsidies", "Government Schemes",
  "Loans", "Compliance", "Hospitals", "Manufacturing",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "gst-return-filing-checklist-2026",
    title: "GST Return Filing Checklist for 2026: What MSMEs Must Not Miss",
    category: "GST",
    excerpt: "A practical month-by-month checklist to keep your GSTR filings error-free and penalty-free through the year.",
    date: "2026-01-12",
    author: "BusinessMitra Tax Desk",
    readTime: "6 min read",
    content: [
      "Late fees, blocked input tax credit and cancelled registrations are almost always avoidable with a structured filing calendar. This checklist covers the recurring pitfalls we see across our MSME client base.",
      "Reconcile GSTR-2B with your purchase register before every filing cycle — mismatched input tax credit is the single largest cause of GST notices we handle.",
      "Track e-way bill validity for all inter-state movements above the threshold; expired e-way bills during transit invite detention and penalty.",
      "File GSTR-1 and GSTR-3B even in nil-turnover months — non-filing for consecutive periods can trigger automatic registration suspension.",
      "Keep digital copies of all outward and inward invoices for at least six years, as required for audit and assessment purposes.",
      "If you're unsure whether your current filings are reconciled correctly, our GST & Taxation desk offers a free health check before the next filing deadline.",
    ],
  },
  {
    slug: "income-tax-planning-for-business-owners",
    title: "Income Tax Planning for Business Owners: Beyond Section 80C",
    category: "Income Tax",
    excerpt: "Practical, compliant tax-planning levers available to proprietors, partners and company promoters.",
    date: "2026-01-20",
    author: "BusinessMitra Tax Desk",
    readTime: "5 min read",
    content: [
      "Most business owners over-focus on Section 80C while ignoring larger, legitimate planning opportunities available to promoters and partners.",
      "Presumptive taxation under Sections 44AD/44ADA can meaningfully simplify compliance and reduce tax outgo for eligible small businesses and professionals.",
      "Structuring promoter remuneration between salary, director's fees and dividends affects both personal and corporate tax outgo — this needs a combined computation, not a piecemeal one.",
      "Depreciation planning on newly acquired plant and machinery, including additional depreciation for manufacturing units, is frequently under-claimed.",
      "Advance tax computation should be revisited quarterly, not just estimated once a year, to avoid interest under Sections 234B/234C.",
    ],
  },
  {
    slug: "private-limited-vs-llp-2026-guide",
    title: "Private Limited vs LLP in 2026: Which Structure Fits Your Business?",
    category: "Business Registration",
    excerpt: "A founder's comparison of compliance cost, funding readiness and liability protection across structures.",
    date: "2026-02-02",
    author: "BusinessMitra Registration Desk",
    readTime: "7 min read",
    content: [
      "The right legal structure depends less on 'which is cheaper' and more on your 3-year funding and ownership plan.",
      "Private Limited companies are the default choice for businesses planning to raise external equity, issue ESOPs, or eventually list, due to familiarity with investors and a clear share-based ownership structure.",
      "LLPs suit professional services and family-run businesses prioritizing lower compliance cost and pass-through taxation, with limited liability protection retained.",
      "Conversion from LLP to Private Limited is possible later but involves cost and time — if fundraising is likely within 18-24 months, starting as a Private Limited is usually more efficient.",
      "Whichever structure you choose, set up your compliance calendar (ROC filings, GST, and if applicable PF/ESI) from day one to avoid penalty accumulation.",
    ],
  },
  {
    slug: "pmfme-subsidy-application-guide",
    title: "PMFME Subsidy: A Step-by-Step Application Guide for Food Processors",
    category: "Subsidies",
    excerpt: "How the PMFME credit-linked capital subsidy works, and how to structure your DPR for approval.",
    date: "2026-02-10",
    author: "BusinessMitra Subsidy Desk",
    readTime: "8 min read",
    content: [
      "The Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PMFME) scheme offers a credit-linked capital subsidy for eligible micro food processing units — but approval hinges on DPR quality.",
      "Eligibility is generally assessed on unit category, investment size, and whether the applicant is an individual micro-enterprise, an FPO/SHG, or a cooperative — each track has a slightly different application path.",
      "The DPR must clearly establish project viability: raw material sourcing, market linkage, machinery specification and a realistic financial projection are scrutinized closely by the sanctioning committee.",
      "Bank appraisal happens alongside the subsidy application since the scheme is credit-linked — your project report must satisfy both the bank's lending criteria and the scheme's subsidy conditions simultaneously.",
      "Common rejection reasons we see: unrealistic capacity utilization assumptions, missing raw material supply agreements, and DPRs that don't match the bank's own format expectations.",
    ],
  },
  {
    slug: "udyam-registration-benefits-2026",
    title: "Udyam Registration: The Government Schemes You Unlock as an MSME",
    category: "Government Schemes",
    excerpt: "Udyam registration is free — but the scheme access it unlocks is where the real value lies.",
    date: "2026-02-18",
    author: "BusinessMitra Advisory Desk",
    readTime: "5 min read",
    content: [
      "Udyam registration itself takes minutes online, but many registered MSMEs never claim the benefits it unlocks — from tender EMD exemption to delayed payment protection under the MSME Development Act.",
      "Registered MSMEs get priority sector lending status with banks, often translating to faster loan processing and marginally better terms.",
      "The MSME Samadhaan portal allows registered units to file delayed-payment complaints against buyers, with statutory interest applicable on delays beyond 45 days.",
      "Several state industrial policies tie their capital and interest subsidy eligibility directly to Udyam classification — a Micro, Small or Medium tag changes which schemes you can access.",
      "Keep your Udyam turnover and investment figures updated annually; a stale classification can disqualify you from schemes even if you remain factually eligible.",
    ],
  },
  {
    slug: "cgtmse-collateral-free-loans-explained",
    title: "CGTMSE Explained: How MSMEs Get Collateral-Free Bank Loans",
    category: "Loans",
    excerpt: "Understanding the Credit Guarantee Fund Trust mechanism and how to structure your application around it.",
    date: "2026-02-25",
    author: "BusinessMitra Loan Desk",
    readTime: "6 min read",
    content: [
      "CGTMSE doesn't lend money directly — it guarantees a portion of the bank's exposure, which is why understanding the mechanism helps you package a stronger application.",
      "Eligible MSMEs can access term loans and working capital limits without pledging collateral, up to the scheme's current guarantee ceiling, across participating banks and NBFCs.",
      "Banks still assess repayment capacity and project viability independently — CGTMSE removes the collateral barrier, not the underwriting one, so a strong project report remains essential.",
      "Guarantee fees are charged annually on the outstanding guaranteed amount and typically built into the loan's effective cost — factor this into your financial projections.",
      "Not all banks apply CGTMSE with equal ease; some public sector banks have dedicated MSME CGTMSE cells that process these faster than general branches.",
    ],
  },
  {
    slug: "annual-roc-compliance-calendar",
    title: "The Annual ROC Compliance Calendar Every Private Limited Company Needs",
    category: "Compliance",
    excerpt: "Missed ROC filings compound into penalties and director disqualification — here's the calendar to avoid it.",
    date: "2026-03-04",
    author: "BusinessMitra Compliance Desk",
    readTime: "6 min read",
    content: [
      "Private Limited companies face a recurring set of ROC filings each financial year — missing them compounds daily penalties with no upper cap under current rules.",
      "DIR-3 KYC for all directors, AOC-4 for financial statements, and MGT-7/7A for annual returns form the core annual filing trio most companies must track.",
      "Board meetings and statutory registers (share transfer, related party transactions) need to be documented contemporaneously, not reconstructed at audit time.",
      "Auditor appointment and resignation filings (ADT-1) are frequently missed in the first year after incorporation — this is one of the most common defaults we correct for new clients.",
      "A single compliance calendar covering ROC, GST, and labour law (if applicable) removes the need to track multiple deadlines across disconnected systems.",
    ],
  },
  {
    slug: "nabh-accreditation-readiness-checklist",
    title: "NABH Accreditation Readiness: A Pre-Assessment Checklist for Hospitals",
    category: "Hospitals",
    excerpt: "What hospitals should have in place before applying for NABH pre-assessment.",
    date: "2026-03-12",
    author: "BusinessMitra Healthcare Desk",
    readTime: "7 min read",
    content: [
      "NABH accreditation evaluates hospitals against defined patient safety and quality management standards — most first-time applicants underestimate the documentation burden involved.",
      "Standard operating procedures must exist, be followed, and be evidenced through records for every major clinical and non-clinical department, not just written as policy documents.",
      "Biomedical waste management, infection control protocols and fire safety compliance are cross-checked against your existing pollution and fire NOCs during assessment.",
      "Patient rights and education documentation, along with informed consent processes, are commonly flagged gaps in first-attempt applications.",
      "A structured pre-assessment — ideally 3-4 months before formal application — identifies gaps early and materially improves first-attempt success rates.",
    ],
  },
  {
    slug: "factory-license-clearances-sequencing",
    title: "Factory License and Environmental Clearance: Getting the Sequencing Right",
    category: "Manufacturing",
    excerpt: "Why the order in which you apply for clearances can save (or cost) months of project delay.",
    date: "2026-03-20",
    author: "BusinessMitra Industrial Desk",
    readTime: "6 min read",
    content: [
      "Manufacturers frequently apply for factory licenses and environmental clearances in parallel without realizing certain approvals are legally sequential prerequisites for others.",
      "Land use conversion (if required) and environmental consent to establish typically must precede construction, while factory licensing and consent to operate come after commissioning.",
      "CPCB's Red/Orange/Green/White classification determines whether your unit needs environmental clearance at all, and at what level (state or central) — this should be verified before site finalization, not after.",
      "Utility connections (power, water, effluent discharge) are often contingent on having the right consents in place, creating a domino effect if sequencing is wrong.",
      "We map the full clearance sequence for each client's specific industry classification and state before any application is filed, to avoid capital being locked up waiting on avoidable delays.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
