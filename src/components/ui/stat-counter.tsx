export function StatCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="animate-count-up text-center">
      <div className="text-3xl font-bold text-white sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}
