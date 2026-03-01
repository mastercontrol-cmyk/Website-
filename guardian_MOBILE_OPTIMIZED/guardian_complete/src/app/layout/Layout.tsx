import { Outlet, ScrollRestoration } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-slate-200 antialiased selection:bg-red-500/30 selection:text-red-200 overflow-x-hidden">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
