import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-black/10 bg-[#efece4] px-10">
      <div>
        <p className="text-xs tracking-[0.35em] text-[#6e7064]">
          KARIGARCONNECT AI
        </p>

        <h2 className="mt-2 text-xl font-semibold text-[#1c1b17]">
          Rural Commerce Infrastructure
        </h2>
      </div>

      <div className="flex items-center gap-8">
        <button>
          <Bell size={18} />
        </button>

        <div className="text-right">
          <p className="text-sm font-medium text-[#1c1b17]">
            Rural Cooperative
          </p>

          <p className="text-xs tracking-[0.15em] text-[#6e7064]">
            PREMIUM ACCOUNT
          </p>
        </div>
      </div>
    </header>
  );
}