"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function AnalyzingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/analysis");
    }, 4500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <DashboardLayout>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="max-w-4xl text-center">
          {/* Label */}

          <p className="text-xs tracking-[0.35em] text-[#6e7064]">
            AI INTELLIGENCE ENGINE
          </p>

          {/* Headline */}

          <h1 className="mt-8 text-7xl font-bold leading-[0.92] text-[#1c1b17]">
            Analyzing
            <br />
            Product Data
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[#6e7064]">
            KarigarConnect AI is evaluating product
            positioning, audience demographics,
            sustainability signals and creator alignment.
          </p>

          {/* Animated Lines */}

         {/* AI Processing Animation */}

<div className="mx-auto mt-16 flex items-center justify-center">
  <div className="relative flex h-44 w-44 items-center justify-center">
    
    <div className="absolute h-44 w-44 animate-ping rounded-full border border-[#1c1b17]/20" />

    <div
      className="absolute h-32 w-32 animate-ping rounded-full border border-[#1c1b17]/30"
      style={{ animationDelay: "0.5s" }}
    />

    <div
      className="absolute h-20 w-20 animate-ping rounded-full border border-[#1c1b17]/40"
      style={{ animationDelay: "1s" }}
    />

    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1c1b17] text-white">
      AI
    </div>
  </div>
</div>

<div className="mt-16 space-y-4">
  <div className="flex items-center justify-between border-b border-black/10 pb-3">
    <span className="tracking-[0.2em] text-[#6e7064]">
      PRODUCT ANALYSIS
    </span>

    <span className="animate-pulse text-green-600">
      COMPLETE
    </span>
  </div>

  <div className="flex items-center justify-between border-b border-black/10 pb-3">
    <span className="tracking-[0.2em] text-[#6e7064]">
      MARKET FIT SCORING
    </span>

    <span className="animate-pulse text-green-600">
      COMPLETE
    </span>
  </div>

  <div className="flex items-center justify-between border-b border-black/10 pb-3">
    <span className="tracking-[0.2em] text-[#6e7064]">
      CREATOR MATCHING
    </span>

    <span className="animate-pulse text-orange-600">
      PROCESSING...
    </span>
  </div>

  <div className="flex items-center justify-between border-b border-black/10 pb-3">
    <span className="tracking-[0.2em] text-[#6e7064]">
      PREDICTION MODEL
    </span>

    <span className="animate-pulse text-orange-600">
      PROCESSING...
    </span>
  </div>
</div>

          {/* Steps */}

          <div className="mt-20 grid gap-8 md:grid-cols-4">
            <div>
              <div className="text-5xl font-bold text-[#1c1b17]/15">
                01
              </div>

              <p className="mt-3 text-xs tracking-[0.25em] text-[#1c1b17]">
                PRODUCT ANALYSIS
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#1c1b17]/15">
                02
              </div>

              <p className="mt-3 text-xs tracking-[0.25em] text-[#1c1b17]">
                MARKET FIT
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#1c1b17]/15">
                03
              </div>

              <p className="mt-3 text-xs tracking-[0.25em] text-[#1c1b17]">
                AUDIENCE MATCHING
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#1c1b17]/15">
                04
              </div>

              <p className="mt-3 text-xs tracking-[0.25em] text-[#1c1b17]">
                CREATOR DISCOVERY
              </p>
            </div>
          </div>

          {/* Footer Note */}

          <div className="mt-20 border-t border-black/10 pt-8">
            <p className="text-xs tracking-[0.25em] text-[#6e7064]">
              SOURCE: KARIGARCONNECT AI ANALYSIS ENGINE, 2026.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}