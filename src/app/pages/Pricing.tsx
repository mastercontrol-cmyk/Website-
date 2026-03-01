import { motion } from "framer-motion";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Pricing"
        title={<>Simple.<br /><span className="text-red-500">Transparent.</span></>}
        subtitle="Safety should be accessible to everyone. That's why we start free — forever."
      />

      {/* Individuals */}
      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-16 md:pb-24">
        <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 mb-10 uppercase">For Individuals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {[
            {
              name: "Free",
              price: "₹0",
              sub: "forever",
              features: ["15-minute watch-over sessions", "Safe Shop map access", "Basic route confidence", "Emergency contact notifications", "Privacy dashboard"],
              cta: "Get Started",
              ctaTo: "/download",
              highlight: false,
            },
            {
              name: "Premium",
              price: "₹99",
              sub: "per month • ₹999/year",
              features: ["Unlimited watch-over sessions", "Priority helper assignment", "Hardware support (key fob, band)", "60-minute sessions", "Family sharing (4 members)", "24/7 support"],
              cta: "Start Free Trial",
              ctaTo: "/download",
              highlight: true,
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 space-y-8 relative ${plan.highlight ? "bg-[#0d0505] border border-red-500/20" : "bg-[#0B0F1A]"}`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-red-500 border border-red-500/30 px-2 py-1 uppercase">Popular</div>
              )}
              <div>
                <div className={`text-[10px] font-bold tracking-[0.4em] uppercase mb-2 ${plan.highlight ? "text-red-500" : "text-white/40"}`}>{plan.name}</div>
                <div className="text-5xl font-bold text-white">{plan.price}</div>
                <div className="text-white/40 text-sm mt-1">{plan.sub}</div>
              </div>
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-red-500" : "text-white/30"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={plan.ctaTo}
                className={`w-full py-4 font-bold tracking-widest uppercase text-sm transition-all duration-300 block text-center ${
                  plan.highlight
                    ? "bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Safe Shops */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 mb-10 uppercase">For Safe Shops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[
              { name: "Basic", price: "₹499", sub: "/month", features: ["Verified badge in app", "Map listing (5,000+ users)", "Basic SMS alerts", "1 staff member"], cta: "Sign Up", highlight: false },
              { name: "Popular", price: "₹999", sub: "/month", features: ["All Basic features", "Priority alert routing", "SMS + app alerts", "2 staff trained", "Monthly safety report"], cta: "Sign Up", highlight: true },
              { name: "Premium", price: "₹1,499", sub: "/month", features: ["All Popular features", "Featured placement", "Analytics dashboard", "5 staff trained", "Weekly insights", "Dedicated support"], cta: "Sign Up", highlight: false },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 space-y-6 relative ${plan.highlight ? "bg-[#0d0505] border border-red-500/20" : "bg-[#0B0F1A]"}`}
              >
                {plan.highlight && (
                  <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-red-500 border border-red-500/30 px-2 py-1 uppercase">Popular</div>
                )}
                <div>
                  <div className={`text-[10px] font-bold tracking-[0.4em] uppercase mb-2 ${plan.highlight ? "text-red-500" : "text-white/40"}`}>{plan.name}</div>
                  <div className="text-3xl font-bold text-white">{plan.price}<span className="text-lg text-white/40">{plan.sub}</span></div>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.highlight ? "text-red-500" : "text-white/30"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                {/* Sign Up → /shop-registration */}
                <Link
                  to="/shop-registration"
                  className={`w-full py-3 font-bold tracking-widest uppercase text-sm transition-all block text-center ${
                    plan.highlight
                      ? "bg-red-600 text-white hover:bg-red-500"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5 bg-[#050608]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 mb-10 uppercase">For Corporates & Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {[
              { name: "Small (10–50 employees)", price: "₹75", sub: "/employee/month", features: ["All Premium individual features", "Team safety dashboard", "Basic reporting", "1-hour onboarding training"] },
              { name: "Enterprise (50+ employees)", price: "₹50", sub: "/employee/month", features: ["All Small features", "API access & custom integration", "Dedicated account manager", "24/7 phone support", "Custom safety protocols"] },
            ].map((plan, i) => (
              <div key={i} className="bg-[#050608] p-6 md:p-10 space-y-5 md:space-y-6">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-2">{plan.name}</div>
                  <div className="text-4xl font-bold text-white">{plan.price}<span className="text-lg text-white/40">{plan.sub}</span></div>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-white/30 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {/* Contact Sales → /contact */}
                <Link
                  to="/contact"
                  className="w-full py-3 border border-white/20 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/5 transition-colors block text-center"
                >
                  Contact Sales
                </Link>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-px bg-[#050608] p-10 border-t border-white/5">
            <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-4">Educational Institutions</h3>
            <p className="text-white/50 mb-6 max-w-2xl">Custom pricing based on student count. Campus-wide protection, parent portal access, incident reporting, safety compliance, and staff training included.</p>
            {/* Contact Education Team → /contact */}
            <Link
              to="/contact"
              className="px-8 py-3 border border-white/20 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/5 transition-colors inline-block"
            >
              Contact Education Team
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-10 uppercase">FAQ</h2>
          {[
            { q: "Is the free tier really free?", a: "Yes, forever. Basic safety should be accessible to all. No credit card required." },
            { q: "Can I cancel premium anytime?", a: "Absolutely. No contracts, no cancellation fees. Cancel with one click in Settings." },
            { q: "Do you offer student discounts?", a: "Yes — 50% off premium for verified students. Contact us with your institution email." },
            { q: "What payment methods do you accept?", a: "Cards, UPI, net banking, Google Pay, and Apple Pay. All payments secured by Razorpay." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-white/5 py-8"
            >
              <h4 className="text-white font-bold mb-3">{item.q}</h4>
              <p className="text-white/50 font-light leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
