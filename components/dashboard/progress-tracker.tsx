export default function ProgressTracker() {
  const steps = [
    "PRODUCT",
    "ANALYSIS",
    "MATCHING",
    "FORECAST",
    "PROFIT",
    "OUTREACH",
  ];

  return (
    <div className="mt-16 border-y border-black/10 py-10">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-xs tracking-[0.35em] text-[#6e7064]">
          PLATFORM WORKFLOW
        </p>

        <p className="text-xs tracking-[0.35em] text-[#6e7064]">
          01 — 06
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        {steps.map((step, index) => (
          <div
            key={step}
            className="relative"
          >
            <div className="text-5xl font-bold text-[#1c1b17]/15">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="mt-3 h-px bg-black/10" />

            <p className="mt-4 text-xs tracking-[0.25em] text-[#1c1b17]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}