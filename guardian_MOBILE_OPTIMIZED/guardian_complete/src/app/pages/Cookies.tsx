import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";
import { useState } from "react";

export function Cookies() {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Legal"
        title={<>Cookie<br /><span className="text-red-500">Policy.</span></>}
        subtitle="Last updated: March 1, 2026"
      />

      <div className="max-w-3xl mx-auto px-5 md:px-12 pb-16 md:pb-32 space-y-12 md:space-y-16">

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>

          {/* What are cookies */}
          <section className="border-t border-white/5 pt-12 space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">What Are Cookies?</h2>
            <p className="text-white/60 font-light leading-relaxed">Cookies are small text files stored on your device when you visit a website. We use them to improve your experience on guardian.ai. The Guardian mobile app itself does not use cookies.</p>
          </section>

          {/* Cookies we use */}
          <section className="border-t border-white/5 pt-12 mt-12 space-y-6">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Cookies We Use (Website Only)</h2>

            {[
              {
                title: "Essential Cookies",
                required: true,
                desc: "These cookies are required for the website to function. They manage your session, maintain security, and remember your preferences.",
                examples: ["Session management", "CSRF protection", "Cookie consent preferences"],
              },
              {
                title: "Analytics Cookies",
                required: false,
                desc: "Help us understand how visitors use the site so we can improve it. We use Google Analytics with anonymized IP addresses.",
                examples: ["Page views and navigation", "Time on page", "Device and browser type (anonymized)"],
              },
              {
                title: "Marketing Cookies",
                required: false,
                desc: "Used to show you relevant advertisements on other websites. We only use these if you explicitly consent.",
                examples: ["Retargeting", "Conversion tracking", "Ad performance"],
              },
            ].map((cookie, i) => (
              <div key={i} className="border border-white/5 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">{cookie.title}</h3>
                  {cookie.required ? (
                    <span className="text-[9px] font-mono text-white/30 border border-white/10 px-2 py-1">Always on</span>
                  ) : (
                    <span className="text-[9px] font-mono text-red-500/70 border border-red-500/20 px-2 py-1">Optional</span>
                  )}
                </div>
                <p className="text-white/50 text-sm font-light leading-relaxed">{cookie.desc}</p>
                <ul className="space-y-1">
                  {cookie.examples.map((ex, j) => (
                    <li key={j} className="text-xs text-white/30 font-mono flex items-center gap-2">
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Preferences */}
          <section className="border-t border-white/5 pt-12 mt-12 space-y-6">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Your Cookie Preferences</h2>
            <p className="text-white/50 font-light text-sm">Manage which non-essential cookies you allow us to use.</p>

            <div className="border border-white/5 divide-y divide-white/5">
              {[
                { label: "Essential Cookies", sub: "Required for the site to work", enabled: true, locked: true, toggle: () => {} },
                { label: "Analytics Cookies", sub: "Help us improve the site", enabled: analytics, locked: false, toggle: () => setAnalytics(!analytics) },
                { label: "Marketing Cookies", sub: "Relevant ads on other sites", enabled: marketing, locked: false, toggle: () => setMarketing(!marketing) },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between p-5">
                  <div>
                    <div className="text-sm text-white font-bold">{pref.label}</div>
                    <div className="text-xs text-white/30 font-mono mt-0.5">{pref.sub}</div>
                  </div>
                  <button
                    onClick={pref.toggle}
                    disabled={pref.locked}
                    className={`relative w-12 h-6 transition-colors duration-300 ${pref.enabled ? "bg-red-600" : "bg-white/10"} ${pref.locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 bg-white transition-transform duration-300 ${pref.enabled ? "translate-x-7" : "translate-x-1"}`} />
                  </button>
                </div>
              ))}
            </div>

            {saved ? (
              <p className="text-green-400/70 text-xs font-mono">Preferences saved.</p>
            ) : (
              <button
                onClick={() => setSaved(true)}
                className="px-8 py-3 bg-red-600 text-white font-bold tracking-widest uppercase text-xs hover:bg-red-500 transition-all"
              >
                Save Preferences
              </button>
            )}
          </section>

          {/* How to control */}
          <section className="border-t border-white/5 pt-12 mt-12 space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Browser Controls</h2>
            <p className="text-white/60 font-light leading-relaxed">You can also control cookies directly in your browser settings:</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { browser: "Chrome", path: "Settings → Privacy and Security → Cookies" },
                { browser: "Firefox", path: "Options → Privacy & Security" },
                { browser: "Safari", path: "Preferences → Privacy" },
                { browser: "Edge", path: "Settings → Cookies and site permissions" },
              ].map((b, i) => (
                <div key={i} className="border border-white/5 p-4 space-y-1">
                  <div className="text-xs font-bold text-white/60 uppercase tracking-wide">{b.browser}</div>
                  <div className="text-[11px] text-white/30 font-mono">{b.path}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Third party */}
          <section className="border-t border-white/5 pt-12 mt-12 space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Third-Party Cookies</h2>
            <p className="text-white/60 font-light leading-relaxed">Some third-party services we use may set their own cookies: Google Analytics (subject to Google's privacy policy), Vimeo (for video embeds), and social media embeds (Twitter, Instagram). These are subject to their own privacy policies, not ours.</p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/5 pt-12 mt-12 space-y-3">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Questions?</h2>
            <p className="text-white/60 font-light">For cookie questions: <a href="mailto:privacy@guardian.ai" className="text-red-500 hover:text-red-400 transition-colors font-mono">privacy@guardian.ai</a></p>
          </section>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-6">
            <Link to="/privacy" className="text-xs text-white/30 hover:text-white transition-colors font-mono uppercase tracking-widest">Privacy Policy →</Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white transition-colors font-mono uppercase tracking-widest">Terms of Service →</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
