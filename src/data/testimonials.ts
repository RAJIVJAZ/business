export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  industry: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rakesh Verma",
    role: "Founder",
    company: "Verma Foods Pvt Ltd",
    quote:
      "Anuradha Business Solutions's team structured our PMFME subsidy application and DPR so well that our sanction came through in one committee cycle. Their follow-up through disbursement was the real difference.",
    industry: "Food Processing",
  },
  {
    name: "Dr. Anita Sharma",
    role: "Managing Director",
    company: "Sharma Multispeciality Hospital",
    quote:
      "From drug license to NABH pre-assessment, they coordinated every regulator so our hospital could open on schedule. The compliance calendar they set up still runs our renewals today.",
    industry: "Healthcare",
  },
  {
    name: "Manish Agarwal",
    role: "Director",
    company: "Agarwal Dairy Industries",
    quote:
      "We didn't know our expansion qualified for three different subsidy schemes until Anuradha Business Solutions mapped it out. Their DPR got us sanctioned across all three without any double-funding issues.",
    industry: "Dairy",
  },
  {
    name: "Priya Nair",
    role: "Co-founder",
    company: "Nair Textiles LLP",
    quote:
      "Registering as an LLP, getting GST sorted, and setting up our compliance calendar took less than three weeks end-to-end. Everything was handled by one relationship manager.",
    industry: "Manufacturing",
  },
  {
    name: "Suresh Iyer",
    role: "Proprietor",
    company: "Iyer Cold Chain Solutions",
    quote:
      "Our CGTMSE-backed machinery loan was sanctioned without any collateral thanks to how they packaged our project report for the bank's credit team.",
    industry: "Warehousing",
  },
];
