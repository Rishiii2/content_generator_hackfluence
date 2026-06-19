export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 px-10 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] text-[#6e7064]">
              KARIGARCONNECT AI
            </p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6e7064]">
              AI-powered creator commerce infrastructure
              connecting rural artisans with digital
              creators, audiences and modern markets.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 px-4 py-2 text-xs tracking-[0.2em]">
              PLATFORM
            </span>

            <span className="rounded-full border border-black/10 px-4 py-2 text-xs tracking-[0.2em]">
              ANALYSIS
            </span>

            <span className="rounded-full border border-black/10 px-4 py-2 text-xs tracking-[0.2em]">
              MATCHING
            </span>

            <span className="rounded-full border border-black/10 px-4 py-2 text-xs tracking-[0.2em]">
              FORECAST
            </span>

            <span className="rounded-full border border-black/10 px-4 py-2 text-xs tracking-[0.2em]">
              OUTREACH
            </span>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-8">
          <p className="text-xs tracking-[0.25em] text-[#6e7064]">
            © 2026 KARIGARCONNECT AI · CREATOR COMMERCE
            INFRASTRUCTURE FOR RURAL INDIA
          </p>

          <h2 className="mt-8 text-5xl font-bold leading-none text-[#1c1b17] md:text-7xl">
            KarigarConnect
          </h2>
        </div>
      </div>
    </footer>
  );
}