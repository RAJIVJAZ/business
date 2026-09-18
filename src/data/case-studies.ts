// Illustrative case studies built around the same client stories already used
// as testimonials (src/data/testimonials.ts) — replace with real, verified
// client case studies (with permission) before launch. Each is narrated
// through the firm's five-stage engagement process: Discover, Plan, Execute,
// Comply, Grow.

export type CaseStudyStage = {
  stage: "Discover" | "Plan" | "Execute" | "Comply" | "Grow";
  description: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  servicesUsed: string[];
  challenge: string;
  stages: CaseStudyStage[];
  results: { metric: string; label: string }[];
  quote: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "verma-foods-pmfme-subsidy",
    client: "Verma Foods Pvt Ltd",
    industry: "Food Processing",
    servicesUsed: ["MSME Subsidies", "DPR & Project Reports", "Loan Facilitation"],
    challenge:
      "Verma Foods wanted to add a new processing line but didn't know their expansion qualified for a PMFME capital subsidy — an earlier, generically-formatted project report had already been rejected by their bank once.",
    stages: [
      { stage: "Discover", description: "Mapped the expansion's machinery and civil work costs against PMFME eligibility criteria for micro food processing units." },
      { stage: "Plan", description: "Structured a single DPR to satisfy both the bank's lending format and the scheme's subsidy conditions simultaneously, avoiding a second rewrite." },
      { stage: "Execute", description: "Filed the subsidy application and the bank loan application in parallel, coordinating the site verification visit both required." },
      { stage: "Comply", description: "Set up utilization-certificate tracking and a disbursement-milestone calendar post-sanction." },
      { stage: "Grow", description: "Sanction came through in a single committee cycle, and the new line let Verma Foods enter two additional retail distribution channels." },
    ],
    results: [
      { metric: "1 cycle", label: "Subsidy sanctioned in a single committee review" },
      { metric: "2 formats", label: "One DPR satisfied both bank and scheme requirements" },
      { metric: "2 new channels", label: "Retail distribution added post-expansion" },
    ],
    quote: {
      text: "Anuradha Business Solutions' team structured our PMFME subsidy application and DPR so well that our sanction came through in one committee cycle. Their follow-up through disbursement was the real difference.",
      name: "Rakesh Verma",
      role: "Founder, Verma Foods Pvt Ltd",
    },
  },
  {
    slug: "sharma-hospital-setup-nabh",
    client: "Sharma Multispeciality Hospital",
    industry: "Hospitals",
    servicesUsed: ["Hospital Consultancy", "Licenses & Approvals", "Compliance Management"],
    challenge:
      "A new multispeciality hospital needed drug license, fire NOC, pollution NOC and biomedical waste authorization coordinated against a fixed opening date, with no single team managing dependencies across regulators.",
    stages: [
      { stage: "Discover", description: "Built the complete license matrix for the facility's bed capacity and target opening timeline." },
      { stage: "Plan", description: "Sequenced applications by real dependency — construction sign-off, biomedical waste vendor tie-up, staffing — instead of filing everything at once and hoping." },
      { stage: "Execute", description: "Filed and actively liaised across all four regulators in parallel, briefing the hospital's team ahead of each inspection." },
      { stage: "Comply", description: "Handed over a renewal and inspection calendar covering every license and authorization obtained." },
      { stage: "Grow", description: "The hospital opened on its original target date and completed NABH pre-assessment, positioning it for Ayushman Bharat empanelment." },
    ],
    results: [
      { metric: "On schedule", label: "Opened on the original target date" },
      { metric: "4 regulators", label: "Coordinated in parallel, not sequentially" },
      { metric: "NABH-ready", label: "Pre-assessment completed post-launch" },
    ],
    quote: {
      text: "From drug license to NABH pre-assessment, they coordinated every regulator so our hospital could open on schedule. The compliance calendar they set up still runs our renewals today.",
      name: "Dr. Anita Sharma",
      role: "Managing Director, Sharma Multispeciality Hospital",
    },
  },
  {
    slug: "agarwal-dairy-multi-scheme-subsidy",
    client: "Agarwal Dairy Industries",
    industry: "Dairy",
    servicesUsed: ["MSME Subsidies", "DPR & Project Reports"],
    challenge:
      "Agarwal Dairy's expansion plan was eligible for three separate subsidy schemes at once, but the client had no way of knowing that — or how to structure one DPR to claim all three without double-funding the same cost heads.",
    stages: [
      { stage: "Discover", description: "Mapped every applicable central and state dairy scheme against the expansion's specific cost heads." },
      { stage: "Plan", description: "Allocated distinct, non-overlapping cost heads to each scheme in the DPR so all three could be claimed without a double-funding conflict." },
      { stage: "Execute", description: "Filed all three applications in parallel with the respective nodal agencies." },
      { stage: "Comply", description: "Tracked disbursement milestones and utilization certificates separately across all three sanctions." },
      { stage: "Grow", description: "All three schemes were sanctioned, funding a processing-capacity expansion the client had budgeted for a single-scheme outcome." },
    ],
    results: [
      { metric: "3 schemes", label: "Combined without a double-funding conflict" },
      { metric: "0 rejections", label: "Across all three applications" },
      { metric: "1 DPR", label: "Structured to serve all three simultaneously" },
    ],
    quote: {
      text: "We didn't know our expansion qualified for three different subsidy schemes until Anuradha Business Solutions mapped it out. Their DPR got us sanctioned across all three without any double-funding issues.",
      name: "Manish Agarwal",
      role: "Director, Agarwal Dairy Industries",
    },
  },
  {
    slug: "iyer-cold-chain-cgtmse-loan",
    client: "Iyer Cold Chain Solutions",
    industry: "Warehousing",
    servicesUsed: ["Loan Facilitation", "DPR & Project Reports"],
    challenge:
      "Iyer Cold Chain needed machinery finance for a cold-storage capacity expansion but had no collateral to offer, and a prior application at another bank had stalled without a clear credit-committee packaging.",
    stages: [
      { stage: "Discover", description: "Assessed the client's eligibility for CGTMSE-backed lending against the machinery cost and repayment capacity." },
      { stage: "Plan", description: "Structured the project report specifically to the bank's credit-appraisal format, not a generic template." },
      { stage: "Execute", description: "Filed the loan application and liaised directly with the bank's credit team through appraisal." },
      { stage: "Comply", description: "Set up the asset register and insurance compliance required for the financed machinery." },
      { stage: "Grow", description: "The loan was sanctioned fully collateral-free, and the added capacity let the client take on two new institutional contracts." },
    ],
    results: [
      { metric: "100%", label: "Collateral-free financing via CGTMSE" },
      { metric: "1 attempt", label: "Sanctioned without a second bank application" },
      { metric: "2 contracts", label: "New institutional business post-expansion" },
    ],
    quote: {
      text: "Our CGTMSE-backed machinery loan was sanctioned without any collateral thanks to how they packaged our project report for the bank's credit team.",
      name: "Suresh Iyer",
      role: "Proprietor, Iyer Cold Chain Solutions",
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
