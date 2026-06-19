"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "DASHBOARD" },
  { href: "/upload", label: "PRODUCTS" },
  { href: "/analysis", label: "ANALYSIS" },
  { href: "/matching", label: "MATCHING" },
  { href: "/prediction", label: "FORECASTING" },
  { href: "/profit", label: "RETURNS" },
  { href: "/outreach", label: "OUTREACH" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 flex-col border-r border-black/10 bg-[#efece4] md:flex">
      <div className="border-b border-black/10 p-8">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full border border-[#1c1b17]" />
          <div className="h-4 w-4 rounded-full border border-[#1c1b17]" />
        </div>

        <h1 className="mt-8 text-3xl font-bold text-[#1c1b17]">
          KarigarConnect
        </h1>

        <p className="mt-2 text-xs tracking-[0.35em] text-[#6e7064]">
          ARTISAN COMMERCE PLATFORM
        </p>
      </div>

      <nav className="flex-1 px-8 py-10">
        <p className="mb-6 text-xs tracking-[0.3em] text-[#6e7064]">
          PLATFORM
        </p>

        <div className="space-y-2">
          {links.map((link, index) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between border-b border-black/5 py-4 transition-all ${
                  active
                    ? "text-[#1c1b17] font-semibold"
                    : "text-[#6e7064] hover:text-[#1c1b17]"
                }`}
              >
                <span className="text-xs tracking-[0.25em]">
                  0{index + 1}
                </span>

                <span className="text-sm tracking-[0.15em]">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="m-8 border border-black/10 p-6">
        <p className="text-xs tracking-[0.3em] text-[#6e7064]">
          PLATFORM IMPACT
        </p>

        <div className="mt-6">
          <p className="text-5xl font-bold text-[#1c1b17]">
            ₹12.5L
          </p>

          <p className="mt-2 text-sm text-[#6e7064]">
            Revenue Generated
          </p>
        </div>

        <div className="mt-8">
          <p className="text-5xl font-bold text-[#1c1b17]">
            850+
          </p>

          <p className="mt-2 text-sm text-[#6e7064]">
            Families Supported
          </p>
        </div>
      </div>
    </aside>
  );
}