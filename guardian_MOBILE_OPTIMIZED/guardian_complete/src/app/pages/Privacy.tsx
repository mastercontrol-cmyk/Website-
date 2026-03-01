import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const toc = [
  "What Data We Collect",
  "How We Use Data",
  "Where Data Is Stored",
  "Data Sharing",
  "Your Rights",
  "Data Retention",
  "Children's Privacy",
  "Changes to This Policy",
  "Contact Us",
];

const sections = [
  {
    title: "1. What Data We Collect",
    content: [
      {
        sub: "Data You Provide Explicitly",
        items: ["Profile information (name, preferences)", "Emergency contacts", "Safe places you mark", "Service connections (Gmail, WhatsApp, etc.)"],
      },
      {
        sub: "Data Learned by Your Agent",
        items: ["Frequently used routes (stored as patterns)", "Typical walking times", "Normal behavior baseline", "Past 'uneasy' moments (patterns only, not recordings)"],
      },
      {
        sub: "Sensor Data (Temporary, Never Stored)",
        items: ["Motion data — used for anomaly detection, not stored", "Location — used for route confidence, discarded after session", "Audio — ephemeral inference only, never stored or transmitted"],
      },
    ],
  },
  {
    title: "2. How We Use Data",
    text: "We use data solely to provide the Guardian service: learning your patterns for safety detection, suggesting safer routes, triggering helpers when needed, and improving your agent's accuracy locally. We never use your data for advertising. We never sell it to third parties. We never share it without your explicit consent.",
  },
  {
    title: "3. Where Data Is Stored",
    text: "All data is stored encrypted on your device using hardware-backed encryption (Secure Enclave on iOS, StrongBox on Android), SQLCipher encrypted database, and encrypted files for user-editable memory. There are no cloud backups. No remote servers hold your data. No third parties have access.",
  },
  {
    title: "4. Data Sharing",
    text: "We share only what you explicitly authorize in the moment: with emergency contacts when you trigger an alert, with helpers during watch-over sessions (location only, for session duration), and with Safe Shops when you request refuge (proximity only). All sharing is end-to-end encrypted, minimal, and revocable by you at any time.",
  },
  {
    title: "5. Your Rights",
    text: "You have the right to view everything your agent knows, edit any memory file, delete any or all data, export your complete data, revoke service connections, and delete your account entirely. All of this is available in the Privacy Dashboard inside the app.",
  },
  {
    title: "6. Data Retention",
    text: null,
    retention: [
      { key: "Motion data", value: "7 days (rolling)" },
      { key: "Location history", value: "30 days" },
      { key: "Conversations", value: "Until you delete" },
      { key: "Learned patterns", value: "Until you reset" },
      { key: "Audit logs", value: "90 days" },
    ],
  },
  {
    title: "7. Children's Privacy",
    text: "Guardian is not intended for users under 13. We do not knowingly collect data from children. If you believe a child is using Guardian, please contact privacy@guardian.ai.",
  },
  {
    title: "8. Changes to This Policy",
    text: "We'll notify you of material changes via the app before they take effect. Continued use of Guardian after notification constitutes acceptance of the updated policy.",
  },
  {
    title: "9. Contact Us",
    text: null,
    contacts: [
      { label: "Privacy questions", email: "privacy@guardian.ai" },
      { label: "Data Protection Officer", email: "dpo@guardian.ai" },
    ],
  },
];

export function Privacy() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Legal"
        title={<>Privacy<br /><span className="text-red-500">Policy.</span></>}
        subtitle="Last updated: March 1, 2026"
      />

      <div className="max-w-6xl mx-auto px-5 md:px-12 pb-16 md:pb-32">
        {/* Promise box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-red-500/20 bg-red-900/10 p-6 md:p-8 mb-10 md:mb-16 space-y-3"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-tight">Our Promise</h2>
          <p className="text-white/70 font-light leading-relaxed">Your data belongs to you. Always. We built Guardian so your information never leaves your device. We have no servers with your data. We cannot access it. We cannot sell it. This isn't just policy — it's architecture.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-16 items-start">
          {/* TOC */}
          <aside className="hidden md:block sticky top-32">
            <h3 className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase mb-4">Contents</h3>
            <ul className="space-y-2">
              {toc.map((item, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="text-xs text-white/30 hover:text-red-500 transition-colors font-mono leading-relaxed block">
                    {i + 1}. {item}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="space-y-10 md:space-y-16">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                id={`section-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="space-y-4 border-t border-white/5 pt-12 first:border-0 first:pt-0"
              >
                <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">{section.title}</h2>

                {section.text && (
                  <p className="text-white/60 font-light leading-relaxed">{section.text}</p>
                )}

                {section.content && section.content.map((block, j) => (
                  <div key={j} className="border border-white/5 p-6 space-y-3">
                    <h3 className="text-[10px] font-bold tracking-[0.3em] text-red-500/70 uppercase">{block.sub}</h3>
                    <ul className="space-y-2">
                      {block.items.map((item, k) => (
                        <li key={k} className="flex items-start gap-3 text-sm text-white/60 font-light">
                          <span className="w-1 h-1 bg-red-500/50 rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {section.retention && (
                  <div className="border border-white/5 divide-y divide-white/5">
                    {section.retention.map((r, j) => (
                      <div key={j} className="flex items-center justify-between px-6 py-3">
                        <span className="text-sm text-white/50 font-mono">{r.key}</span>
                        <span className="text-sm text-white/80">{r.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {section.contacts && (
                  <div className="space-y-3">
                    {section.contacts.map((c, j) => (
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
          <Link to="/terms" className="text-xs text-white/30 hover:text-white transition-colors font-mono uppercase tracking-widest">Terms of Service →</Link>
          <Link to="/cookies" className="text-xs text-white/30 hover:text-white transition-colors font-mono uppercase tracking-widest">Cookie Policy →</Link>
        </div>
      </div>
    </div>
  );
}
