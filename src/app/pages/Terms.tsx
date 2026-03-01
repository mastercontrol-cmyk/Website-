import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const toc = ["Acceptance of Terms", "Description of Service", "User Accounts", "User Responsibilities", "Privacy and Data", "Fees and Payments", "Cancellation and Termination", "Limitation of Liability", "Indemnification", "Changes to Terms", "Governing Law", "Contact Information"];

const sections = [
  { title: "1. Acceptance of Terms", text: "By accessing or using Guardian, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, do not use the service." },
  { title: "2. Description of Service", text: "Guardian provides a personal AI safety agent that runs locally on your device, learns your behavioral patterns, connects you to trained human helpers, alerts nearby Safe Shops when needed, and notifies your emergency contacts. Guardian is NOT a replacement for emergency services. In case of immediate danger, call 112 or 100." },
  { title: "3. User Accounts", items: ["You must be 13 or older to use Guardian", "You are responsible for maintaining account security", "One person per account — account sharing is not permitted", "You control all data stored on your device", "You may delete your account and all associated data at any time"] },
  { title: "4. User Responsibilities", text: "By using Guardian, you agree to use the service for lawful purposes only, not attempt to reverse engineer or decompile the application, not misuse the helper or Safe Shop network (false alerts, abuse of system), keep emergency contacts updated for accurate response, and not rely solely on Guardian for personal safety." },
  { title: "5. Privacy and Data", text: "Your privacy is governed by our Privacy Policy, which is incorporated into these Terms by reference. We do not sell your data. All data is stored on your device. You own your data — we provide the tool." },
  { title: "6. Fees and Payments", items: ["Free tier is available with no credit card required", "Premium features are billed monthly or annually", "Safe Shop subscriptions are billed monthly", "Corporate plans are invoiced annually in advance", "Refunds are available within 14 days of purchase", "All prices are inclusive of applicable taxes"] },
  { title: "7. Cancellation and Termination", items: ["You can cancel your subscription at any time in Settings", "Premium cancellations are effective at the end of the current billing period", "You retain access to free tier features after cancellation", "We may terminate accounts for violation of these Terms", "Upon account deletion, all your data is wiped immediately"] },
  { title: "8. Limitation of Liability", text: "Guardian is provided 'as is' without warranties of any kind. We are not liable for false alerts or missed detections by the AI system, actions or inactions of third parties including helpers and Safe Shops, consequential or indirect damages, or events beyond our reasonable control. Our total liability to you is limited to the fees you paid in the 12 months preceding any claim." },
  { title: "9. Indemnification", text: "You agree to indemnify and hold harmless Guardian AI, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use or misuse of the service." },
  { title: "10. Changes to Terms", text: "We may update these terms from time to time. We will notify you of material changes via the app at least 30 days before they take effect. Continued use of Guardian after notification constitutes acceptance of updated terms." },
  { title: "11. Governing Law", text: "These Terms are governed by the laws of India. Any disputes arising from these Terms are subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra." },
  { title: "12. Contact Information", text: null, contacts: [{ label: "Legal questions", email: "legal@guardian.ai" }, { label: "General support", email: "help@guardian.ai" }] },
];

export function Terms() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Legal"
        title={<>Terms of<br /><span className="text-red-500">Service.</span></>}
        subtitle="Last updated: March 1, 2026"
      />

      <div className="max-w-6xl mx-auto px-5 md:px-12 pb-16 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-16 items-start">
          {/* TOC */}
          <aside className="hidden md:block sticky top-32">
            <h3 className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase mb-4">Contents</h3>
            <ul className="space-y-2">
              {toc.map((item, i) => (
                <li key={i}>
                  <a href={`#term-${i}`} className="text-xs text-white/30 hover:text-red-500 transition-colors font-mono block leading-relaxed">
                    {i + 1}. {item}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="space-y-10 md:space-y-14">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                id={`term-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="space-y-4 border-t border-white/5 pt-10 first:border-0 first:pt-0"
              >
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">{s.title}</h2>
                {s.text && <p className="text-white/60 font-light leading-relaxed">{s.text}</p>}
                {s.items && (
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/60 font-light">
                        <span className="w-1 h-1 bg-red-500/50 rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.contacts && (
                  <div className="space-y-3">
                    {s.contacts.map((c, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <span className="text-white/40 text-sm">{c.label}:</span>
                        <a href={`mailto:${c.email}`} className="text-red-500 hover:text-red-400 transition-colors text-sm font-mono">{c.email}</a>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-6">
          <Link to="/privacy" className="text-xs text-white/30 hover:text-white transition-colors font-mono uppercase tracking-widest">Privacy Policy →</Link>
          <Link to="/cookies" className="text-xs text-white/30 hover:text-white transition-colors font-mono uppercase tracking-widest">Cookie Policy →</Link>
        </div>
      </div>
    </div>
  );
}
