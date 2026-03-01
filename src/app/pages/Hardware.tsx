import { motion } from "framer-motion";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Bluetooth, Battery, Shield, Zap } from "lucide-react";

const products = [
  {
    name: "Guardian Key Fob",
    tagline: "Small enough for your keychain.\nPowerful enough to summon help.",
    price: "₹2,499",
    status: "Pre-Order",
    features: [
      "One-button alert",
      "Double-press emergency",
      "Vibration feedback",
      "6-month battery",
      "Water resistant (IP67)",
      "Bluetooth 5.2",
    ],
    color: "from-red-900/20 to-transparent",
  },
  {
    name: "Guardian Wearable Band",
    tagline: "Wear it daily.\nForget it's there.\nUntil you need it.",
    price: "₹4,999",
    status: "Pre-Order",
    features: [
      "Squeeze detection",
      "Tap patterns",
      "Heart rate monitoring",
      "Removal alert",
      "7-day battery",
      "USB-C charging",
    ],
    color: "from-red-800/20 to-transparent",
  },
  {
    name: "Guardian Pendant",
    tagline: "Protection that's completely invisible.",
    price: "Coming Soon",
    status: "Waitlist",
    features: [
      "Hidden button under pendant",
      "Pull-cord trigger option",
      "Sterling silver / gold options",
      "12-month battery",
      "Discreet and elegant",
    ],
    color: "from-red-950/20 to-transparent",
  },
];

const specs = [
  { icon: Bluetooth, label: "Connectivity", value: "Bluetooth 5.2", sub: "Range: 30m • Low energy • Encrypted" },
  { icon: Battery, label: "Battery", value: "6–12 months", sub: "Key fob 6mo • Band 7 days • Pendant 12mo" },
  { icon: Shield, label: "Durability", value: "IP67 rated", sub: "Drop proof 1m • Water resistant" },
  { icon: Zap, label: "Response", value: "<3 seconds", sub: "Alert to helpers after button press" },
];

const steps = [
  { num: "01", title: "Pair via Bluetooth", desc: "One-time setup, takes 30 seconds." },
  { num: "02", title: "Press button when uneasy", desc: "Single press for alert, double press for emergency." },
  { num: "03", title: "App alerts helpers silently", desc: "No sound. No drama. Just quiet action." },
  { num: "04", title: "Helpers guide you to safety", desc: "Real people respond within seconds." },
];

export function Hardware() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Hardware"
        title={<>Physical protection.<br /><span className="text-red-500">Always on.</span></>}
        subtitle="Optional devices that extend your protection — even when your phone is in your pocket."
      />

      {/* Products */}
      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-16 md:pb-24 space-y-8 md:space-y-12">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/5 relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8 p-6 md:p-12">
              {/* Icon placeholder */}
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 border border-white/5 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto border border-red-500/30 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-red-500/60" />
                    </div>
                    <div className="text-[9px] font-mono text-white/30 tracking-widest uppercase">{p.name}</div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 space-y-6">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.4em] text-red-500 uppercase mb-2">
                    {p.status === "Waitlist" ? "Coming Soon" : "Available Now"}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">{p.name}</h2>
                  <p className="text-white/50 font-light mt-2 whitespace-pre-line">{p.tagline}</p>
                </div>

                <ul className="grid grid-cols-2 gap-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1 h-1 bg-red-500 rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="text-3xl font-bold text-white">{p.price}</span>
                  {/* Pre-Order and Waitlist both navigate to waitlist-confirmation */}
                  <Link
                    to="/waitlist-confirmation"
                    className={`px-8 py-3 font-bold tracking-widest uppercase text-sm rounded-full transition-all duration-300 ${
                      p.status === "Waitlist"
                        ? "border border-white/20 text-white/60 hover:bg-white/5"
                        : "bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                    }`}
                  >
                    {p.status === "Waitlist" ? "Join Waitlist" : "Pre-Order Now"}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-4 uppercase">How it works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-10 md:mb-16">Press. Alert. <span className="text-red-500">Safe.</span></h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-0">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border-t-2 border-white/10 pt-8 pr-8 relative hover:border-red-500 transition-colors duration-500 group"
              >
                <div className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors font-mono mb-4">{s.num}</div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{s.title}</h4>
                <p className="text-white/40 text-xs font-mono leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[-2px] right-0 w-4 h-[2px] bg-white/5" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech specs */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-[#050608]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-4 uppercase">Specifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-10 md:mb-16">Built to last.<br /><span className="text-red-500">Built to protect.</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {specs.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#050608] p-8 space-y-3"
              >
                <s.icon className="w-5 h-5 text-red-500/60" />
                <div className="text-[9px] font-bold tracking-[0.4em] text-white/30 uppercase">{s.label}</div>
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-[11px] text-white/30 font-mono leading-relaxed">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
