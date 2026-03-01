import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";

const timeline = [
  { year: "2022", event: "The idea is born. Founder walks home, feels uneasy, realizes no app helps until it's too late." },
  { year: "2023", event: "First prototype. Testing with 50 users in Mumbai. Insight: People want quiet presence, not panic." },
  { year: "2024", event: "Safe Shop network launches with 20 partner shops. Human helpers join the system." },
  { year: "2025", event: "Guardian officially launches. 10,000+ users. 500+ Safe Shops. 50+ trained helpers." },
  { year: "2026", event: "Expanding to 10 cities. Hardware devices launch. Chennai pilot begins." },
];

const team = [
  { name: "Priya Sharma", role: "Founder & CEO", initials: "PS" },
  { name: "Raj Mehta", role: "CTO", initials: "RM" },
  { name: "Anjali Krishnan", role: "Head of Community", initials: "AK" },
  { name: "Vikram Singh", role: "Head of Product", initials: "VS" },
  { name: "Neha Kapoor", role: "Lead Designer", initials: "NK" },
  { name: "Arun Nair", role: "Head of Operations", initials: "AN" },
];

const advisors = [
  { name: "Dr. Meera Reddy", role: "Psychologist, human behavior expert" },
  { name: "Sanjay Malhotra", role: "Former DCP, Mumbai Police" },
  { name: "Kavya Iyer", role: "Women's safety activist" },
  { name: "Ajay Thomas", role: "Privacy law expert" },
];

const values = [
  { title: "Privacy First", desc: "We built the tech so your data never leaves you." },
  { title: "Human-Centered", desc: "AI detects. Humans decide. Tech serves people." },
  { title: "Calm Over Panic", desc: "No drama. No fear. Just quiet presence." },
  { title: "Real World, Real Help", desc: "Safe Shops aren't digital — they're places you go." },
];

export function About() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="About Guardian"
        title={<>We started because<br /><span className="text-red-500">we've all felt it.</span></>}
        subtitle="Walking alone. Something feels off. You don't call police. You don't panic. You just wish someone was there. Now someone is."
      />

      {/* Mission */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-6 uppercase">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter leading-none mb-6 md:mb-8">
              Make safety a quiet,<br /><span className="text-red-500">constant presence.</span>
            </h3>
            <p className="text-white/50 font-light leading-relaxed text-lg border-l border-red-500/20 pl-6">
              Not a panicked emergency. Not a surveillance system. A calm, intelligent presence that watches over you without drama.
            </p>
          </motion.div>
          <div className="space-y-4">
            {["Safety should be private, not performative", "Technology should serve humans, not replace them", "Your data belongs to you, always", "Real safety means real places (Safe Shops)", "Protection should work even when your phone doesn't"].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 py-4 border-b border-white/5"
              >
                <span className="text-[10px] font-mono text-red-500/60 mt-1 shrink-0">0{i + 1}</span>
                <span className="text-white/70 font-light">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-[#050608]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-10 md:mb-16 uppercase">Our Story</h2>
          <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-10 md:space-y-16">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[3.25rem] top-1 w-3 h-3 border-2 border-red-500/50 bg-[#050608] rounded-full group-hover:bg-red-500 transition-colors" />
                <div className="text-sm font-mono text-red-500/70 mb-2">{t.year}</div>
                <p className="text-white/70 font-light leading-relaxed">{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-10 md:mb-16 uppercase">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0B0F1A] p-5 md:p-8 group hover:bg-[#0d0a0a] transition-colors"
              >
                <div className="w-16 h-16 border border-white/10 group-hover:border-red-500/30 flex items-center justify-center mb-6 transition-colors">
                  <span className="text-lg font-bold text-white/40 group-hover:text-white/70 transition-colors">{member.initials}</span>
                </div>
                <h4 className="text-white font-bold uppercase tracking-tight">{member.name}</h4>
                <p className="text-white/40 text-xs font-mono mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Advisors */}
          <div className="mt-16">
            <h3 className="text-xs font-bold tracking-[0.3em] text-white/30 mb-8 uppercase">Advisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advisors.map((a, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-white/5">
                  <div className="w-8 h-8 border border-white/10 shrink-0 flex items-center justify-center">
                    <span className="text-[9px] text-white/30">{a.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div>
                    <div className="text-white/80 text-sm font-bold">{a.name}</div>
                    <div className="text-white/30 text-xs font-mono">{a.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-[#050608] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-10 md:mb-16 uppercase">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#050608] p-6 md:p-10 group hover:bg-[#0d0505] transition-colors"
              >
                <div className="text-[10px] font-mono text-red-500/50 mb-4">0{i + 1}</div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-3 group-hover:text-red-500 transition-colors">{v.title}</h3>
                <p className="text-white/50 font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
