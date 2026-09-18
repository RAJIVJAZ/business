export type LoanProduct = {
  slug: string;
  title: string;
  summary: string;
  maxAmount: string;
  collateral: string;
  idealFor: string[];
};

export const loanProducts: LoanProduct[] = [
  {
    slug: "msme-loan",
    title: "MSME Loans",
    summary: "Term loans and working capital for Udyam-registered micro, small and medium enterprises.",
    maxAmount: "Up to ₹5 crore",
    collateral: "Collateral or CGTMSE-backed, depending on ticket size",
    idealFor: ["Working capital", "Equipment purchase", "Business expansion"],
  },
  {
    slug: "mudra-loan",
    title: "Mudra Loans",
    summary: "Collateral-free micro loans under Shishu, Kishor and Tarun categories for small businesses.",
    maxAmount: "Up to ₹10 lakh",
    collateral: "Collateral-free",
    idealFor: ["Micro enterprises", "First-time borrowers", "Small trading/service units"],
  },
  {
    slug: "cgtmse-loan",
    title: "CGTMSE-Backed Loans",
    summary: "Credit Guarantee Fund Trust backed loans enabling collateral-free lending for MSMEs.",
    maxAmount: "Up to ₹2 crore (per current scheme limits)",
    collateral: "Collateral-free (guarantee-backed)",
    idealFor: ["Manufacturing units", "Service enterprises", "New MSME setups"],
  },
  {
    slug: "working-capital",
    title: "Working Capital Finance",
    summary: "Cash credit, overdraft and invoice discounting to fund day-to-day operating cycles.",
    maxAmount: "Based on turnover and stock/debtor cycle",
    collateral: "Stock/debtor hypothecation, partial collateral",
    idealFor: ["Seasonal businesses", "Traders", "Manufacturers with long receivable cycles"],
  },
  {
    slug: "machinery-finance",
    title: "Machinery & Equipment Finance",
    summary: "Term loans structured against machinery invoices for capacity expansion or new lines.",
    maxAmount: "Up to 75-85% of machinery cost",
    collateral: "Machinery hypothecation",
    idealFor: ["Capacity expansion", "New production lines", "Technology upgradation"],
  },
  {
    slug: "project-finance",
    title: "Project Finance",
    summary: "Structured term finance for greenfield/brownfield projects backed by a detailed project report.",
    maxAmount: "Project-cost dependent, typically ₹50 lakh – ₹50 crore+",
    collateral: "Project assets, promoter contribution, partial collateral",
    idealFor: ["New factory/hospital setup", "Large capex", "Infrastructure projects"],
  },
];
