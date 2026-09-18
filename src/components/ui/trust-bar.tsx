const trustPoints = [
  "MCA & GST Registered Consultancy",
  "ISO 9001:2015 Certified Processes",
  "Pan-India Associate Network",
  "12,000+ Businesses Served Since 2016",
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-white py-6">
      <div className="container-site flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {trustPoints.map((point) => (
          <div key={point} className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <svg className="h-4 w-4 shrink-0 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}
