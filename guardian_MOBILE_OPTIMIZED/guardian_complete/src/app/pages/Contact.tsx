import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { useState } from "react";
import { Mail, MapPin, Twitter, Linkedin, Github, Instagram, Youtube } from "lucide-react";

const contacts = [
  { label: "Support", email: "help@guardian.ai" },
  { label: "Press", email: "press@guardian.ai" },
  { label: "Partnerships", email: "partners@guardian.ai" },
  { label: "Sales", email: "sales@guardian.ai" },
  { label: "Careers", email: "careers@guardian.ai" },
  { label: "Privacy / Legal", email: "legal@guardian.ai" },
];

const socials = [
  { icon: Twitter, label: "Twitter", handle: "@guardianai" },
  { icon: Linkedin, label: "LinkedIn", handle: "Guardian AI" },
  { icon: Github, label: "GitHub", handle: "guardian-ai" },
  { icon: Instagram, label: "Instagram", handle: "@guardian.ai" },
  { icon: Youtube, label: "YouTube", handle: "Guardian AI" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit() {
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  }

  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Contact"
        title={<>Get in touch.<br /><span className="text-red-500">We respond.</span></>}
        subtitle="We'd love to hear from you — whether you're a user, a shop owner, a journalist, or just curious."
      />

      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-16 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {/* Form */}
          <div className="bg-[#0B0F1A] p-6 md:p-10 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-8">Send a message</h2>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center py-20 text-center space-y-4"
              >
                <div className="w-16 h-16 border border-red-500/30 flex items-center justify-center">
                  <span className="text-2xl text-red-500">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Message sent.</h3>
                <p className="text-white/40 font-light">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { key: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
                ].map((field) => (
                  <div key={field.key} className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full bg-black/30 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-red-500/50 transition-colors font-mono"
                    />
                  </div>
                ))}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-black/30 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-red-500/50 transition-colors resize-none font-mono"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-red-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all duration-300 mt-2"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="bg-[#050608] p-6 md:p-10 space-y-8 md:space-y-10">
            {/* Emails */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-6">Contact Addresses</h2>
              <div className="space-y-3">
                {contacts.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-wrap items-start justify-between py-3 border-b border-white/5 gap-2 group"
                  >
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{c.label}</span>
                    <a href={`mailto:${c.email}`} className="text-sm text-white/60 hover:text-red-500 transition-colors font-mono flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      {c.email}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-6">Offices</h2>
              <div className="space-y-4">
                {[
                  { city: "Mumbai", loc: "WeWork, Bandra Kurla Complex" },
                  { city: "Bangalore", loc: "WeWork, MG Road" },
                ].map((o, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-red-500/40 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/70 text-sm font-bold">{o.city}</div>
                      <div className="text-white/30 text-xs font-mono">{o.loc}</div>
                    </div>
                  </div>
                ))}
                <p className="text-white/20 text-xs font-mono mt-2">We're remote-first. These offices are for meetings by appointment.</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-6">Social</h2>
              <div className="flex flex-wrap gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={"https://twitter.com/guardianai"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-white/10 px-3 py-2 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300 group">
                    <s.icon className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
