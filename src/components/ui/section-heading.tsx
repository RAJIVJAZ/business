export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider ${
            light ? "bg-white/10 text-green" : "bg-green/10 text-green-dark"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-balance text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-balance text-lg leading-relaxed ${light ? "text-white/70" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
