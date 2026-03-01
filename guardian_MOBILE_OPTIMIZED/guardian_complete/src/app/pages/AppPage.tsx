import { motion } from "framer-motion";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Smartphone, Apple, Check } from "lucide-react";

const freeTier = [
  "Basic watch-over sessions (15 min)",
  "Safe Shop directory access",
  "Manual route confidence",
  "Privacy dashboard",
  "Emergency contact notifications",
];

const premiumTier = [
  "Unlimited watch-over sessions",
  "Priority helper assignment",
  "Hardware integration (key fob, band)",
  "Extended session duration (60 min)",
  "Family sharing (up to 4 members)",
];

const screens = ["Home", "Route", "Chat", "Privacy", "Active"];

// App store links — update these when the app is live
const APP_STORE_URL = "/waitlist-confirmation";   // → replace with real App Store URL when live
const PLAY_STORE_URL = "/waitlist-confirmation";  // → replace with real Play Store URL when live

export function AppPage() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Download"
        title={<>Guardian App.<br /><span className="text-red-500">In your pocket.</span></>}
        subtitle="Your personal AI safety agent, right in your pocket. Available now for iOS and Android."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          {/* App Store */}
          <a
            href={APP_STORE_URL}
            className="flex items-center gap-3 px-6 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors group"
          >
            <Apple className="w-5 h-5" />
            <div className="text-left">
              <div className="text-[9px] font-normal">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href={PLAY_STORE_URL}
            className="flex items-center gap-3 px-6 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            <Smartphone className="w-5 h-5" />
            <div className="text-left">
              <div className="text-[9px] font-normal">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </a>
        </motion.div>
      </PageHero>

      {/* App screens mockup */}
      <section className="py-16 md:py-24 px-5 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {screens.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="shrink-0 w-36 h-72 sm:w-48 sm:h-96 border border-white/10 bg-[#050608] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent" />
                <div className="absolute top-4 left-0 right-0 flex justify-center">
                  <div className="w-16 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <div className="text-[9px] font-mono text-white/30 tracking-widest uppercase">{s}</div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-red-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500/40 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-4 uppercase">Pricing</h2>
          <h3 className="text-4xl font-bold text-white uppercase tracking-tighter mb-16">Free. <span className="text-red-500">Forever.</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {/* Free */}
            <div className="bg-[#0B0F1A] p-6 md:p-10 space-y-6 md:space-y-8">
              <div>
                <div className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-2">Free Tier</div>
                <div className="text-5xl font-bold text-white">₹0</div>
                <div className="text-white/40 text-sm mt-1">forever</div>
              </div>
              <ul className="space-y-3">
                {freeTier.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <Check className="w-4 h-4 text-white/30 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {/* Get Started → /download */}
              <Link
                to="/download"
                className="w-full py-4 border border-white/20 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/5 transition-colors block text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-[#0d0505] p-6 md:p-10 space-y-6 md:space-y-8 relative overflow-hidden border border-red-500/20">
              <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-red-500 uppercase border border-red-500/30 px-2 py-1">
                Popular
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-[0.4em] text-red-500 uppercase mb-2">Premium</div>
                <div className="text-5xl font-bold text-white">₹99</div>
                <div className="text-white/40 text-sm mt-1">per month • ₹999/year (save 2 months)</div>
              </div>
              <ul className="space-y-3">
                {premiumTier.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {/* Start Free Trial → /download */}
              <Link
                to="/download"
                className="w-full py-4 bg-red-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-500 transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] block text-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-[#050608]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-12">System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {[
              { os: "iOS", req: ["Version 15+", "iPhone XS or newer", "200MB storage", "Bluetooth for hardware"] },
              { os: "Android", req: ["Version 12+", "4GB RAM recommended", "200MB storage", "Bluetooth for hardware"] },
            ].map((r, i) => (
              <div key={i} className="bg-[#050608] p-8">
                <div className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-4">{r.os}</div>
                <ul className="space-y-2">
                  {r.req.map((item, j) => (
                    <li key={j} className="text-sm text-white/60 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-500/50 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
