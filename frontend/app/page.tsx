import Link from "next/link";

import DashboardLayout from "@/components/layout/dashboard-layout";
import RevenueChart from "@/components/dashboard/revenue-chart";
import ProgressTracker from "@/components/dashboard/progress-tracker";
import PageTransition from "@/components/ui/page-transition";

export default function Home() {
  return (
    <DashboardLayout>
        <PageTransition>
      <div>
        {/* Editorial Hero */}

<div className="border-b border-black/10 pb-20">
  <p className="text-xs tracking-[0.35em] text-[#6e7064]">
    KARIGARCONNECT AI
  </p>

  <h1 className="mt-6 max-w-6xl text-7xl font-bold leading-[0.92] text-[#1c1b17]">
    The Platform Connecting
    Rural Artisans With
    The Creator Economy
  </h1>

  <p className="mt-8 max-w-2xl text-lg text-[#6e7064]">
    AI-powered creator discovery,
    campaign forecasting,
    outreach automation,
    and revenue optimization for artisan businesses.
  </p>

  <div className="mt-10 flex gap-4">
    <Link
      href="/upload"
      className="rounded-full bg-[#1c1b17] px-8 py-4 text-xs tracking-[0.25em] text-white"
    >
      EXPLORE PLATFORM →
    </Link>

    <Link
      href="/demo"
      className="rounded-full border border-black/20 px-8 py-4 text-xs tracking-[0.25em]"
    >
      VIEW DEMO
    </Link>
  </div>
</div>

        {/* Workflow */}

        <ProgressTracker />

        {/* KPI Cards */}
<div className="mt-20 grid gap-12 border-t border-black/10 pt-16 md:grid-cols-4">
  <div>
    <p className="text-xs tracking-[0.3em] text-[#6e7064]">
      REVENUE GENERATED
    </p>

    <h2 className="mt-4 text-6xl font-bold">
      ₹12.5L
    </h2>
  </div>

  <div>
    <p className="text-xs tracking-[0.3em] text-[#6e7064]">
      FAMILIES SUPPORTED
    </p>

    <h2 className="mt-4 text-6xl font-bold">
      850+
    </h2>
  </div>

  <div>
    <p className="text-xs tracking-[0.3em] text-[#6e7064]">
      ACTIVE CAMPAIGNS
    </p>

    <h2 className="mt-4 text-6xl font-bold">
      142
    </h2>
  </div>

  <div>
    <p className="text-xs tracking-[0.3em] text-[#6e7064]">
      CREATOR REACH
    </p>

    <h2 className="mt-4 text-6xl font-bold">
      2.1M
    </h2>
  </div>
</div>

        {/* Quick Actions */}

        <div className="mt-20 border-t border-black/10 pt-16">
  <p className="text-xs tracking-[0.35em] text-[#6e7064]">
    THE PLATFORM
  </p>

  <div className="mt-10 grid gap-10 md:grid-cols-3">
    <Link href="/upload" className="border-b border-black/10 pb-8">
      <div className="text-6xl font-bold text-[#1c1b17]">
        01
      </div>

      <h3 className="mt-4 text-2xl font-bold">
        Product Intelligence
      </h3>

      <p className="mt-3 text-[#6e7064]">
        Analyze artisan products using AI.
      </p>
    </Link>

    <Link href="/matching" className="border-b border-black/10 pb-8">
      <div className="text-6xl font-bold text-[#1c1b17]">
        02
      </div>

      <h3 className="mt-4 text-2xl font-bold">
        Creator Matching
      </h3>

      <p className="mt-3 text-[#6e7064]">
        Find the highest-converting influencers.
      </p>
    </Link>

    <Link href="/prediction" className="border-b border-black/10 pb-8">
      <div className="text-6xl font-bold text-[#1c1b17]">
        03
      </div>

      <h3 className="mt-4 text-2xl font-bold">
        Forecasting Engine
      </h3>

      <p className="mt-3 text-[#6e7064]">
        Predict revenue and campaign outcomes.
      </p>
    </Link>
  </div>
</div>

        {/* Revenue Chart */}

        <div className="mt-10">
          <RevenueChart />
        </div>

        {/* Featured Product */}

        <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">
            Featured Artisan Product
          </h2>

          <div className="mt-5 flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
              🏺
            </div>

            <div>
              <h3 className="font-semibold">
                Handmade Terracotta Vase
              </h3>

              <p className="text-slate-500">
                Sustainable Home Decor
              </p>

              <p className="mt-2 font-bold text-orange-600">
                ₹800
              </p>
            </div>
          </div>
        </div>

        {/* Recent Campaigns */}

        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">
            Recent Campaigns
          </h2>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left">
                    Product
                  </th>

                  <th className="px-6 py-4 text-left">
                    Influencer
                  </th>

                  <th className="px-6 py-4 text-left">
                    Match
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    Terracotta Vase
                  </td>

                  <td className="px-6 py-4">
                    Priya Decor
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    94%
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">
                    Bamboo Basket
                  </td>

                  <td className="px-6 py-4">
                    Green Living India
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    91%
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Impact */}

        <div className="mt-20 bg-[#1c1b17] p-16 text-white">
  <p className="text-xs tracking-[0.35em] text-white/50">
    PLATFORM IMPACT
  </p>

  <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-tight">
    Building the infrastructure
    for creator-led artisan commerce.
  </h2>

  <div className="mt-12 grid gap-10 md:grid-cols-3">
    <div>
      <div className="text-6xl font-bold">
        ₹12.5L
      </div>

      <p className="mt-3 text-white/60">
        Revenue Generated
      </p>
    </div>

    <div>
      <div className="text-6xl font-bold">
        850+
      </div>

      <p className="mt-3 text-white/60">
        Families Supported
      </p>
    </div>

    <div>
      <div className="text-6xl font-bold">
        2.1M
      </div>

      <p className="mt-3 text-white/60">
        Creator Reach
      </p>
    </div>
  </div>
</div>
      </div>
      </PageTransition>
    </DashboardLayout>
  );
}