import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#efece4] text-[#1c1b17]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 px-10 py-12">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}