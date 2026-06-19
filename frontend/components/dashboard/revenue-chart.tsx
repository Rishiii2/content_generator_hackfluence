"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 25000 },
  { month: "Apr", revenue: 31000 },
  { month: "May", revenue: 42000 },
  { month: "Jun", revenue: 48800 },
];

export default function RevenueChart() {
  return (
    <section className="mt-20 border-t border-black/10 pt-12">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs tracking-[0.35em] text-[#6e7064]">
            PLATFORM GROWTH
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-[#1c1b17]">
            Revenue
            <br />
            Performance
          </h2>
        </div>

        <div className="text-right">
          <p className="text-xs tracking-[0.25em] text-[#6e7064]">
            YTD REVENUE
          </p>

          <p className="mt-2 text-4xl font-bold text-[#1c1b17]">
            ₹48.8K
          </p>
        </div>
      </div>

      <div className="border border-black/10 bg-white p-8">
        <div className="mb-8 flex justify-between border-b border-black/10 pb-6">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#6e7064]">
              PERIOD
            </p>

            <p className="mt-2 text-lg font-semibold">
              January — June 2026
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] text-[#6e7064]">
              GROWTH RATE
            </p>

            <p className="mt-2 text-lg font-semibold">
              +307%
            </p>
          </div>
        </div>

        <div className="h-[380px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart data={data}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#1c1b17"
                fill="#d8d4c8"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 border-t border-black/10 pt-6">
          <p className="text-xs tracking-[0.25em] text-[#6e7064]">
            SOURCE
          </p>

          <p className="mt-2 text-sm text-[#6e7064]">
            Internal KarigarConnect AI campaign
            performance dataset, 2026.
          </p>
        </div>
      </div>
    </section>
  );
}