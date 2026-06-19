import DashboardLayout from "@/components/layout/dashboard-layout";

export default function DemoPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl">
        {/* Hero */}

        <div className="border-b border-black/10 pb-16">
          <p className="text-xs tracking-[0.35em] text-[#6e7064]">
            KARIGARCONNECT AI / DEMONSTRATION
          </p>

          <h1 className="mt-6 text-7xl font-bold leading-[0.92] text-[#1c1b17]">
            Creator Commerce
            <br />
            Infrastructure For
            <br />
            Rural Artisans
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-[#6e7064]">
            KarigarConnect AI helps rural artisans discover
            creators, launch campaigns, forecast revenue,
            calculate profits and generate outreach using
            intelligent automation.
          </p>
        </div>

        {/* Metrics */}

        <section className="mt-16">
          <div className="mb-10 flex justify-between">
            <p className="text-xs tracking-[0.35em] text-[#6e7064]">
              PLATFORM SCALE
            </p>

            <p className="text-xs tracking-[0.35em] text-[#6e7064]">
              FIG. A
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            <div className="border-t border-black/10 pt-6">
              <p className="text-xs tracking-[0.25em] text-[#6e7064]">
                ARTISANS
              </p>

              <h2 className="mt-4 text-6xl font-bold">
                850+
              </h2>
            </div>

            <div className="border-t border-black/10 pt-6">
              <p className="text-xs tracking-[0.25em] text-[#6e7064]">
                CAMPAIGNS
              </p>

              <h2 className="mt-4 text-6xl font-bold">
                320
              </h2>
            </div>

            <div className="border-t border-black/10 pt-6">
              <p className="text-xs tracking-[0.25em] text-[#6e7064]">
                CREATOR REACH
              </p>

              <h2 className="mt-4 text-6xl font-bold">
                2.1M
              </h2>
            </div>

            <div className="border-t border-black/10 pt-6">
              <p className="text-xs tracking-[0.25em] text-[#6e7064]">
                REVENUE
              </p>

              <h2 className="mt-4 text-6xl font-bold">
                ₹12.5L
              </h2>
            </div>
          </div>
        </section>

        {/* Thesis */}

        <section className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.35em] text-[#6e7064]">
              THE PROBLEM
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Rural Artisans
              <br />
              Lack Access To
              <br />
              Digital Distribution.
            </h2>
          </div>

          <div>
            <p className="leading-relaxed text-[#6e7064]">
              Millions of skilled artisans produce
              high-quality handmade goods but struggle to
              reach modern digital consumers. Marketing,
              creator partnerships and campaign management
              remain inaccessible due to cost and
              complexity.
            </p>

            <p className="mt-6 leading-relaxed text-[#6e7064]">
              KarigarConnect AI acts as the infrastructure
              layer connecting artisan products with
              creators capable of driving awareness,
              engagement and sales.
            </p>
          </div>
        </section>

        {/* Solution */}

        <section className="mt-20 bg-[#1c1b17] p-16 text-white">
          <p className="text-xs tracking-[0.35em] text-white/50">
            THE PLATFORM
          </p>

          <h2 className="mt-6 text-6xl font-bold">
            A Complete AI
            <br />
            Commerce Engine.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-5">
            <div>
              <div className="text-5xl font-bold">01</div>

              <p className="mt-4 text-white/70">
                Product Analysis
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold">02</div>

              <p className="mt-4 text-white/70">
                Creator Matching
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold">03</div>

              <p className="mt-4 text-white/70">
                Revenue Forecasting
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold">04</div>

              <p className="mt-4 text-white/70">
                Profit Optimization
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold">05</div>

              <p className="mt-4 text-white/70">
                Outreach Automation
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}

        <section className="mt-20 border-t border-black/10 pt-16">
          <p className="text-xs tracking-[0.35em] text-[#6e7064]">
            MISSION
          </p>

          <h2 className="mt-6 text-6xl font-bold leading-tight">
            Empowering Rural
            <br />
            Communities Through
            <br />
            Creator Commerce.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-[#6e7064]">
            We believe the next generation of artisan
            entrepreneurship will be powered by AI,
            creators and social commerce. Our goal is to
            ensure every artisan has access to modern
            marketing infrastructure regardless of
            geography or technical expertise.
          </p>
        </section>
      </div>
    </DashboardLayout>
  );
}