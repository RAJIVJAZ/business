export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Legal & Registration" | "Tax & Compliance" | "Growth & Finance" | "Specialized Consultancy";
  summary: string;
  overview: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "business-registration",
    title: "Business Registration Services",
    shortTitle: "Business Registration",
    category: "Legal & Registration",
    summary:
      "Private limited, LLP, OPC, partnership and proprietorship registration — structured for funding readiness and long-term compliance.",
    overview: [
      "Choosing the right legal structure at incorporation determines how easily you raise capital, bring in co-founders, and stay compliant for years. Our registration specialists assess your business model, ownership plans, and growth stage before recommending a structure.",
      "We handle end-to-end incorporation with the Ministry of Corporate Affairs (MCA) and Registrar of Firms — digital signatures, name approval, MOA/AOA drafting, PAN/TAN, and the first-year compliance calendar.",
    ],
    process: [
      { step: "Consultation & Structuring", description: "We evaluate your business model and recommend Private Limited, LLP, OPC, or Partnership." },
      { step: "Documentation", description: "DSC, DIN, name reservation (RUN/SPICe+), MOA/AOA or partnership deed drafted by our legal team." },
      { step: "Filing & Approval", description: "Application filed with MCA/Registrar; we track and respond to any queries from the ministry." },
      { step: "Post-Incorporation Kit", description: "PAN, TAN, bank account opening support, and a compliance calendar handed over." },
    ],
    benefits: [
      "Structure recommendation based on funding and liability goals, not a one-size-fits-all template",
      "Dedicated relationship manager tracking your application end-to-end",
      "Post-incorporation compliance calendar so you never miss an ROC deadline",
      "Bundled PAN, TAN and bank account facilitation",
    ],
    faqs: [
      { question: "Which structure is best — Private Limited or LLP?", answer: "Private Limited suits businesses planning to raise equity funding or issue ESOPs; LLP suits professional and service firms wanting lower compliance cost with limited liability. We assess your 3-year plan before recommending." },
      { question: "How long does registration take?", answer: "Private Limited and LLP incorporation typically takes 7-12 working days once documents are ready, subject to MCA processing times." },
      { question: "Do I need a physical office to register?", answer: "No, a registered office address (including a virtual/co-working address with NOC) is sufficient for incorporation." },
    ],
    keywords: ["company registration consultant", "private limited registration India", "LLP registration consultant", "startup registration consultant"],
  },
  {
    slug: "gst-taxation",
    title: "GST & Taxation Advisory",
    shortTitle: "GST & Taxation",
    category: "Tax & Compliance",
    summary: "GST registration, monthly return filing, income tax planning, and TDS compliance managed by a dedicated tax desk.",
    overview: [
      "GST and income tax compliance is one of the most common reasons businesses face penalties and notices. Our taxation desk manages registration, periodic return filing, reconciliation, and assessment representation so your books stay audit-ready.",
      "We work with manufacturers, traders, service providers and exporters — including composition scheme advisory, e-way bill compliance, input tax credit reconciliation, and GST refund processing.",
    ],
    process: [
      { step: "Tax Health Check", description: "Review of current GST/IT filings, past notices, and reconciliation gaps." },
      { step: "Registration/Correction", description: "GST registration, amendments, or scheme migration (regular to composition or vice versa)." },
      { step: "Periodic Filing", description: "Monthly/quarterly GSTR filing, TDS returns, advance tax computation, and annual ITR filing." },
      { step: "Notice & Assessment Support", description: "Representation before GST and income tax authorities in case of scrutiny or notices." },
    ],
    benefits: [
      "Dedicated tax desk instead of a rotating pool of juniors",
      "Proactive reminders before every filing due date",
      "Input tax credit reconciliation to prevent revenue leakage",
      "Notice and assessment representation included",
    ],
    faqs: [
      { question: "Is GST registration mandatory for my business?", answer: "GST registration is mandatory once turnover crosses ₹40 lakh (goods) or ₹20 lakh (services) in most states, or immediately for inter-state supply and e-commerce sellers. We assess your specific case." },
      { question: "What happens if I miss a GST return deadline?", answer: "Late fees and interest accrue daily, and repeated defaults can lead to registration cancellation. We set up a filing calendar with buffer reminders to avoid this." },
      { question: "Can you help with an ongoing GST notice?", answer: "Yes, our tax desk drafts replies, compiles reconciliation statements, and represents you before the department." },
    ],
    keywords: ["GST consultant", "GST return filing consultant", "income tax consultant", "TDS compliance consultant"],
  },
  {
    slug: "licenses-approvals",
    title: "Licenses & Government Approvals",
    shortTitle: "Licenses & Approvals",
    category: "Legal & Registration",
    summary: "Trade license, FSSAI, fire NOC, pollution NOC, factory license and all sector-specific approvals coordinated in parallel.",
    overview: [
      "Every industry — food, manufacturing, healthcare, hospitality — needs a different stack of licenses from municipal, state and central authorities. Missing even one can halt operations or invite penalties.",
      "We map the complete license matrix for your business type and location, then run applications in parallel across departments to minimize your time-to-launch.",
    ],
    process: [
      { step: "License Mapping", description: "We identify every license and NOC your specific business and location require." },
      { step: "Documentation", description: "Drawings, affidavits, ownership/lease proofs and department-specific forms prepared." },
      { step: "Parallel Filing", description: "Applications filed simultaneously across municipal, fire, pollution and sector regulators." },
      { step: "Inspection Support", description: "We accompany or brief you for departmental inspections and site visits." },
    ],
    benefits: [
      "Single license matrix covering municipal, state and central requirements",
      "Applications run in parallel, not sequentially, to save months",
      "Inspection-readiness support so visits don't stall approval",
      "Renewal tracking to prevent lapses",
    ],
    faqs: [
      { question: "What licenses does a food manufacturing unit need?", answer: "Typically FSSAI license, trade license, fire NOC, pollution consent, factory license, and weights & measures registration — the exact list depends on scale and state." },
      { question: "How long do approvals take?", answer: "Trade and FSSAI licenses can take 2-4 weeks; fire and pollution NOCs vary by state, typically 4-8 weeks. We track every application actively rather than waiting passively." },
    ],
    keywords: ["trade license consultant", "FSSAI license consultant", "fire NOC consultant", "factory license consultant"],
  },
  {
    slug: "msme-subsidies",
    title: "MSME Subsidy Consultancy",
    shortTitle: "MSME Subsidies",
    category: "Growth & Finance",
    summary: "Capital and interest subsidies under central and state MSME schemes — from eligibility mapping to disbursement follow-up.",
    overview: [
      "India's central and state governments run dozens of overlapping subsidy schemes for MSMEs, food processing, dairy, manufacturing and healthcare units. Most businesses miss eligible subsidies simply because no one is tracking the fine print.",
      "We map your investment plan against every applicable scheme, prepare the detailed project report the scheme requires, and follow the application through the sanctioning committee to disbursement.",
    ],
    process: [
      { step: "Eligibility Mapping", description: "We match your industry, state and investment size against every live central/state scheme." },
      { step: "DPR Preparation", description: "A bank-grade detailed project report is prepared to the scheme's format." },
      { step: "Application & Liaison", description: "We file with the nodal agency and liaise through committee reviews." },
      { step: "Disbursement Follow-up", description: "Post-sanction, we track utilization certificates and disbursement milestones." },
    ],
    benefits: [
      "See our full flagship Subsidy Consultancy page with the eligibility checker tool",
      "Scheme-specific DPR formatting that reduces rejection risk",
      "Active liaison through sanctioning committees, not just filing",
      "Disbursement and utilization-certificate follow-through",
    ],
    faqs: [
      { question: "Can I apply for more than one subsidy scheme?", answer: "Yes, several central and state schemes can be combined (e.g. PMFME with a state capital subsidy) as long as double-funding of the same cost head is avoided. We structure the DPR to maximize combined eligibility." },
      { question: "Is a subsidy guaranteed once I apply?", answer: "No scheme guarantees sanction — approval depends on committee review, budget availability and documentation quality. A well-prepared DPR significantly improves approval odds." },
    ],
    keywords: ["MSME subsidy consultant", "government scheme consultant", "PMFME consultant", "capital subsidy consultant"],
  },
  {
    slug: "loan-facilitation",
    title: "Bank Loan Facilitation",
    shortTitle: "Loan Facilitation",
    category: "Growth & Finance",
    summary: "MSME, Mudra, CGTMSE, working capital and project finance — matched to lenders and packaged for faster sanction.",
    overview: [
      "Banks reject a large share of MSME loan applications not for lack of eligibility, but incomplete financials, weak project reports, or the wrong lender being approached. We package your loan application to each lender's specific credit appetite.",
      "See our flagship Loan Assistance page for the interactive eligibility calculator across MSME, Mudra, CGTMSE, working capital, machinery and project finance.",
    ],
    process: [
      { step: "Financial Assessment", description: "We review your financials, collateral position and repayment capacity." },
      { step: "Lender Matching", description: "Your profile is matched to PSU banks, private banks, NBFCs or CGTMSE-backed products." },
      { step: "Documentation & DPR", description: "Bank-ready project report, financial projections and collateral documentation prepared." },
      { step: "Sanction Follow-up", description: "We liaise with the bank's credit team through appraisal to sanction and disbursement." },
    ],
    benefits: [
      "Lender-matching instead of a single-bank approach",
      "Bank-grade project reports and financial projections",
      "Collateral-free options structured under CGTMSE where eligible",
      "Active follow-up through credit appraisal, not just application filing",
    ],
    faqs: [
      { question: "Can I get a collateral-free business loan?", answer: "Yes, CGTMSE-backed loans up to ₹2 crore (subject to current scheme limits) can be sanctioned without collateral for eligible MSMEs. Mudra loans up to ₹10 lakh are also collateral-free." },
      { question: "What documents does a bank need for project finance?", answer: "A detailed project report, promoter KYC, financial statements (or projections for new units), collateral documents, and quotations for machinery/civil work." },
    ],
    keywords: ["business loan consultant", "MSME loan consultant", "CGTMSE loan consultant", "project finance consultant"],
  },
  {
    slug: "project-reports",
    title: "DPR & Project Report Preparation",
    shortTitle: "DPR & Project Reports",
    category: "Growth & Finance",
    summary: "Bank and subsidy-ready detailed project reports with market study, financial projections and technical feasibility.",
    overview: [
      "A Detailed Project Report (DPR) is the single document that determines whether a bank sanctions your loan or a subsidy committee approves your application. Generic templates get rejected — lenders and committees expect industry-specific technical and financial rigor.",
      "Our DPR team includes chartered accountants and industry-specific technical consultants (food processing, dairy, healthcare, manufacturing) who build reports to each lender or scheme's exact format.",
    ],
    process: [
      { step: "Data Collection", description: "Site details, machinery quotations, manpower plan and market study inputs gathered." },
      { step: "Financial Modeling", description: "Cost of project, means of finance, projected P&L, cash flow and break-even analysis built." },
      { step: "Technical Feasibility", description: "Process flow, capacity utilization and technical viability documented by domain experts." },
      { step: "Formatting & Submission", description: "Report formatted to the specific bank's or scheme's template and submitted with the application." },
    ],
    benefits: [
      "Industry-specific technical inputs, not generic templates",
      "Financial models stress-tested against lender scrutiny",
      "Formatted to the exact bank/scheme template required",
      "Used directly for both loan and subsidy applications",
    ],
    faqs: [
      { question: "How long does DPR preparation take?", answer: "A standard DPR takes 7-10 working days once site and financial data are shared; complex hospital or manufacturing projects may take 2-3 weeks." },
      { question: "Can the same DPR be used for a loan and a subsidy application?", answer: "Yes, with format adjustments — the underlying financial model and technical feasibility remain the same." },
    ],
    keywords: ["project report consultant", "DPR preparation consultant", "bank project report consultant"],
  },
  {
    slug: "hospital-consultancy",
    title: "Hospital & Healthcare Consultancy",
    shortTitle: "Hospital Consultancy",
    category: "Specialized Consultancy",
    summary: "Hospital setup, NABH accreditation, Ayushman Bharat empanelment and full regulatory compliance for healthcare units.",
    overview: [
      "Healthcare is one of the most heavily regulated sectors — a single missing NOC or lapsed biomedical waste authorization can shut down operations. We work with hospital promoters from site planning through accreditation.",
      "See our dedicated Hospital Consultancy flagship page for the full scope covering setup, NABH, Ayushman Bharat empanelment, drug licensing, fire/pollution NOCs and biomedical waste compliance.",
    ],
    process: [
      { step: "Setup Advisory", description: "Site planning, bed-capacity licensing norms and capital structuring guidance." },
      { step: "Regulatory Filing", description: "Drug license, fire NOC, pollution NOC, biomedical waste authorization filed in parallel." },
      { step: "Accreditation Prep", description: "NABH pre-assessment, documentation and quality-system readiness." },
      { step: "Empanelment", description: "Ayushman Bharat and insurance TPA empanelment applications managed end-to-end." },
    ],
    benefits: [
      "Single point of coordination across multiple healthcare regulators",
      "NABH pre-assessment reduces first-attempt rejection risk",
      "Ayushman Bharat empanelment support opens government scheme revenue",
      "Biomedical waste and pollution compliance tracked on renewal calendars",
    ],
    faqs: [
      { question: "Is NABH accreditation mandatory?", answer: "NABH is not legally mandatory but is increasingly required for insurance empanelment, Ayushman Bharat participation, and competitive positioning." },
      { question: "How long does hospital licensing take end-to-end?", answer: "From site finalization to operational licensing, timelines typically run 4-8 months depending on state and bed capacity, run in parallel wherever regulations allow." },
    ],
    keywords: ["hospital consultant", "NABH accreditation consultant", "Ayushman Bharat empanelment consultant"],
  },
  {
    slug: "industrial-consultancy",
    title: "Industrial & Manufacturing Consultancy",
    shortTitle: "Industrial Consultancy",
    category: "Specialized Consultancy",
    summary: "Factory setup, environmental clearances, industrial licensing and plant compliance for manufacturers.",
    overview: [
      "Setting up a factory involves land conversion, environmental clearance, factory licensing, labour compliance and utility connections — each governed by a different authority. Sequencing these correctly saves months of delay.",
      "See our dedicated Manufacturing Consultancy page covering factory setup, food processing units, dairy plants, cold storage, warehousing and packaging units.",
    ],
    process: [
      { step: "Site & Zoning Check", description: "Land use, industrial zoning and conversion requirements verified before capital commitment." },
      { step: "Clearances", description: "Environmental clearance/consent, factory license and labour registrations filed." },
      { step: "Utility & Infrastructure", description: "Power, water and effluent connection facilitation coordinated with clearances." },
      { step: "Ongoing Compliance", description: "Statutory registers, labour law and pollution renewal compliance handed over as a calendar." },
    ],
    benefits: [
      "Correct sequencing of clearances to avoid capital lock-up delays",
      "Environmental and factory licensing run by specialists in each domain",
      "Utility connection facilitation bundled with regulatory filing",
      "Ongoing compliance calendar post-commissioning",
    ],
    faqs: [
      { question: "Do I need environmental clearance for a small manufacturing unit?", answer: "Requirement depends on the industry category (Red/Orange/Green/White) under CPCB classification and investment size — we assess this before you commit capital." },
      { question: "Can you help with an existing factory that lacks some licenses?", answer: "Yes, we regularly help units regularize missing licenses, including compounding of past defaults where applicable." },
    ],
    keywords: ["factory license consultant", "industrial consultant", "environmental clearance consultant"],
  },
  {
    slug: "tender-consultancy",
    title: "Government Tender Consultancy",
    shortTitle: "Tender Consultancy",
    category: "Specialized Consultancy",
    summary: "GeM registration, tender documentation, EMD/bank guarantee support and bid preparation for government contracts.",
    overview: [
      "Government tenders are a significant revenue channel that most MSMEs under-utilize due to unfamiliarity with GeM, e-procurement portals and bid documentation requirements.",
      "We help you get registered, identify relevant tenders, prepare technical and financial bids, and manage EMD/bank guarantee logistics.",
    ],
    process: [
      { step: "Portal Registration", description: "GeM, state e-procurement and CPPP registration with vendor assessment/OEM authorization where needed." },
      { step: "Tender Identification", description: "Relevant, eligible tenders shortlisted based on your capacity and past performance." },
      { step: "Bid Preparation", description: "Technical and financial bid documentation, compliance statements and pricing strategy support." },
      { step: "EMD & BG Support", description: "Earnest money deposit and bank guarantee facilitation coordinated with your banker." },
    ],
    benefits: [
      "GeM and e-procurement registration handled end-to-end",
      "Tender shortlisting matched to your actual eligibility",
      "Bid documentation reviewed for compliance before submission",
      "EMD/bank guarantee logistics coordinated to avoid missed deadlines",
    ],
    faqs: [
      { question: "What is GeM and do I need it?", answer: "Government e-Marketplace (GeM) is the primary portal for selling goods/services to government departments. Registration is required to bid on most government tenders and rate contracts." },
      { question: "Can MSMEs get relaxation in tender EMD or turnover criteria?", answer: "Yes, Udyam-registered MSMEs are entitled to EMD exemption and relaxed turnover/experience criteria on many government tenders under the public procurement policy." },
    ],
    keywords: ["tender consultant", "GeM registration consultant", "government tender consultant"],
  },
  {
    slug: "trademark-ip",
    title: "Trademark & Intellectual Property Services",
    shortTitle: "Trademark & IP",
    category: "Legal & Registration",
    summary: "Trademark search, registration, opposition handling, and copyright/patent filing support to protect your brand.",
    overview: [
      "Your brand name, logo and product designs are business assets. Filing trademark applications early — and defending them through the opposition process — prevents costly rebranding later.",
      "We handle trademark search and class selection, registration filing, opposition/objection replies, and coordinate copyright and patent filings through our IP specialist network.",
    ],
    process: [
      { step: "Trademark Search", description: "Comprehensive search across classes to assess registrability and conflict risk." },
      { step: "Filing", description: "Application filed with the Trademark Registry under the correct class(es)." },
      { step: "Examination Response", description: "Replies to examination reports and objections drafted by our legal team." },
      { step: "Registration & Renewal", description: "Certificate tracking through to registration, with renewal reminders every 10 years." },
    ],
    benefits: [
      "Pre-filing search reduces objection and opposition risk",
      "Legal drafting for examination reports and oppositions in-house",
      "Renewal tracking so registration never lapses",
      "Copyright and patent filing coordinated through specialist partners",
    ],
    faqs: [
      { question: "How long does trademark registration take?", answer: "If unopposed, registration typically takes 12-18 months from filing; the ™ symbol can be used immediately after filing." },
      { question: "What happens if someone opposes my trademark application?", answer: "We draft and file a counter-statement and represent you before the Registrar/IPAB through the opposition proceedings." },
    ],
    keywords: ["trademark registration consultant", "IP consultant India", "trademark opposition lawyer"],
  },
  {
    slug: "compliance-management",
    title: "Ongoing Compliance Management",
    shortTitle: "Compliance Management",
    category: "Tax & Compliance",
    summary: "ROC filings, labour law returns, license renewals and statutory registers managed on a single compliance calendar.",
    overview: [
      "Post-incorporation, businesses juggle ROC annual filings, GST returns, labour law registrations (PF/ESI), license renewals and statutory registers — missing any one attracts penalties or disqualification of directors.",
      "We build a single compliance calendar across all applicable laws for your business and manage filings proactively rather than reactively.",
    ],
    process: [
      { step: "Compliance Audit", description: "Mapping of every applicable central, state and sector-specific compliance obligation." },
      { step: "Calendar Setup", description: "A master compliance calendar built with buffer alerts before each due date." },
      { step: "Ongoing Filing", description: "ROC annual returns, PF/ESI returns, license renewals filed on schedule." },
      { step: "Audit Support", description: "Statutory registers and documentation kept audit-ready year-round." },
    ],
    benefits: [
      "One calendar covering ROC, labour law, tax and sector licenses",
      "Proactive reminders instead of penalty notices",
      "Statutory registers maintained continuously, not scrambled at audit time",
      "Single point of contact instead of coordinating multiple vendors",
    ],
    faqs: [
      { question: "What happens if I miss an ROC annual filing?", answer: "Late filing attracts a penalty of ₹100 per day per form with no upper cap, and can lead to director disqualification for repeated defaults across multiple years." },
      { question: "Do you handle PF/ESI compliance too?", answer: "Yes, we manage labour law registrations and periodic PF/ESI return filing alongside corporate and tax compliance." },
    ],
    keywords: ["ROC compliance consultant", "annual compliance consultant", "PF ESI compliance consultant"],
  },
  {
    slug: "virtual-legal-officer",
    title: "Virtual Legal Officer (VLO) Services",
    shortTitle: "Virtual Legal Officer",
    category: "Specialized Consultancy",
    summary: "An outsourced, dedicated legal and compliance officer for businesses not yet ready to hire in-house counsel.",
    overview: [
      "Growing businesses need consistent legal oversight — contract review, compliance sign-off, vendor agreements — without the cost of a full-time General Counsel. Our Virtual Legal Officer service provides exactly that on a monthly retainer.",
      "A dedicated legal professional is assigned to your account, available for contract review, compliance queries, notice response and board resolution drafting, backed by our full consultancy team for specialized matters.",
    ],
    process: [
      { step: "Onboarding", description: "Legal and compliance audit of existing contracts, registers and pending matters." },
      { step: "Officer Assignment", description: "A dedicated Virtual Legal Officer is assigned as your point of contact." },
      { step: "Monthly Retainer Scope", description: "Contract review, compliance sign-off, notice drafting and board resolutions included per the agreed retainer." },
      { step: "Escalation Support", description: "Specialized matters (litigation, IP, M&A) escalated to our specialist network." },
    ],
    benefits: [
      "Predictable monthly cost versus a full-time legal hire",
      "Dedicated officer who knows your business, not a call-center rotation",
      "Contract and compliance turnaround in days, not weeks",
      "Seamless escalation to specialists for complex matters",
    ],
    faqs: [
      { question: "What size of business needs a Virtual Legal Officer?", answer: "Businesses with ₹5-100 crore turnover, or with 20+ vendor/customer contracts a year, typically see the most value before justifying a full-time General Counsel hire." },
      { question: "Can the VLO handle litigation?", answer: "The VLO manages day-to-day legal and compliance work; litigation is escalated to our litigation specialist network under the same engagement." },
    ],
    keywords: ["virtual legal officer", "outsourced general counsel India", "legal retainer consultant"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
