import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";
import { Brain, Heart, Store, Shield, Lock, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    id: "ai",
    title: "Personal AI Agent",
    tagline: "Intelligence that lives on your device.",
    description: "Your dedicated AI that learns your patterns — so it knows when something feels \"off.\" Runs entirely on your device. No cloud. No surveillance.",
    what: [
      "Learns your daily routes and routines",
      "Understands your normal walking speed and times",
      "Detects deviations that might signal danger",
      "Decides when human help should step in",
      "Gets smarter over time, never shares your data",
    ],
    how: [
      { label: "Route familiarity", desc: "Your daily paths" },
      { label: "Time patterns", desc: "When you usually walk" },
      { label: "Safe zones", desc: "Places you feel comfortable" },
      { label: "Unease history", desc: "Past moments you felt worried" },
    ],
    cta: { label: "Learn about AI privacy", to: "/privacy" },
  },
  {
    icon: Heart,
    id: "helpers",
    title: "Human Helpers",
    tagline: "Trained, verified humans. Present without being seen.",
    description: "Helpers watch over you quietly — only speaking when needed, never escalating to police unless you ask.",
    what: [
      "Silent monitoring during your journey",
      "Calm guidance if you feel uneasy",
      "Coordinate with Safe Shops if needed",
      "Notify your emergency contacts",
      "Stay with you until you're safe",
      "Never call police without your consent",
    ],
    how: [
      { label: "Background verified", desc: "" },
      { label: "De-escalation trained", desc: "" },
      { label: "Crisis management certified", desc: "" },
      { label: "Confidentiality agreement", desc: "" },
    ],
    cta: { label: "Become a Helper", to: "/become-a-helper" },
  },
  {
    icon: Store,
    id: "shops",
    title: "Safe Shops Network",
    tagline: "Real places. Real refuge.",
    description: "Cafés, pharmacies, stores — that provide safe refuge when you need it most.",
    what: [
      "Shops display Guardian sticker in window",
      "App shows nearby Safe Shops on map",
      "During unease, nearest shop is alerted silently",
      "Shop staff trained to provide calm refuge",
      "You can walk in anytime — no questions asked",
    ],
    how: [
      { label: "Mumbai", desc: "120+ shops" },
      { label: "Bangalore", desc: "95+ shops" },
      { label: "Delhi", desc: "85+ shops" },
      { label: "Chennai", desc: "50+ shops" },
    ],
    cta: { label: "Register Your Shop", to: "/shop-registration" },
  },
  {
    icon: Shield,
    id: "snatchproof",
    title: "Snatch-Proof Technology",
    tagline: "Protection continues even if your phone is taken.",
    description: "Because danger doesn't stop when your device does.",
    what: [
      "Jerk and drop detection (sudden snatch)",
      "SIM removal alerts",
      "Face-down detection",
      "Sudden acceleration patterns",
      "Bluetooth disconnection from key fob",
    ],
    how: [
      { label: "Last location broadcast", desc: "To helpers instantly" },
      { label: "Emergency contacts notified", desc: "Automatically" },
      { label: "Nearby Safe Shops alerted", desc: "Within 30 seconds" },
      { label: "Recording continues", desc: "If enabled" },
    ],
    cta: { label: "Explore Hardware", to: "/hardware" },
  },
  {
    icon: Lock,
    id: "privacy",
    title: "Privacy Architecture",
    tagline: "Your data belongs to you. Always.",
    description: "No cloud. No surveillance. No sharing. This isn't just policy — it's architecture.",
    what: [
      "Hardware-backed encryption on your device",
      "All AI runs locally — no cloud processing",
      "You can see everything your agent knows",
      "You can edit or delete any memory",
      "Complete audit trail of all actions",
      "One-click delete wipes everything",
    ],
    how: [
      { label: "profile.md", desc: "Your preferences and facts" },
      { label: "routes.md", desc: "Learned paths and patterns" },
      { label: "contacts.md", desc: "Emergency contacts" },
      { label: "audit.log", desc: "Complete action history" },
    ],
    cta: { label: "Read Full Privacy Policy", to: "/privacy" },
  },
];

export function Features() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Product"
        title={<>Features that protect<br /><span className="text-red-500">silently.</span></>}
        subtitle="Every layer of Guardian works together, watching over you without drama or panic."
      />

      <div className="max-w-6xl mx-auto px-5 md:px-12 pb-16 md:pb-32 space-y-20 md:space-y-32">
        {features.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Connector line */}
            {i < features.length - 1 && (
              <div className="hidden md:block absolute left-8 -bottom-32 w-[1px] h-32 bg-gradient-to-b from-red-500/30 to-transparent" />
            )}

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Left — icon + title */}
              <div className="md:w-1/3 space-y-4 md:sticky md:top-32">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-red-500/40 transition-all">
                  <f.icon className="w-5 h-5 text-red-500/80" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tighter">{f.title}</h2>
                <p className="text-sm font-mono text-red-500/70 tracking-wider">{f.tagline}</p>
                <p className="text-white/50 text-sm leading-relaxed font-light">{f.description}</p>
                <Link
                  to={f.cta.to}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors mt-4 group"
                >
                  {f.cta.label}
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right — details */}
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="border border-white/5 p-6 space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">What it does</h3>
                  <ul className="space-y-3">
                    {f.what.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/70 font-light">
                        <span className="w-1 h-1 bg-red-500 rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/5 p-6 space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">
                    {f.id === "ai" ? "How it learns" : f.id === "helpers" ? "Qualifications" : f.id === "shops" ? "City coverage" : f.id === "snatchproof" ? "What happens next" : "Memory files"}
                  </h3>
                  <ul className="space-y-3">
                    {f.how.map((item, j) => (
                      <li key={j} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <div className="text-[11px] font-bold text-white/80 uppercase tracking-widest font-mono">{item.label}</div>
                        {item.desc && <div className="text-xs text-white/40 mt-1">{item.desc}</div>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
