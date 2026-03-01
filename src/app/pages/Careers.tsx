import { motion } from "framer-motion";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { MapPin, Clock, TrendingUp, Heart } from "lucide-react";

const perks = [
  { icon: MapPin, label: "Remote First", desc: "Work from anywhere in India" },
  { icon: Clock, label: "Flex Hours", desc: "Async communication, 5-day week" },
  { icon: TrendingUp, label: "Equity", desc: "Competitive salary + stock options" },
  { icon: Heart, label: "Mission", desc: "Work that actually saves lives" },
];

const jobs = [
  { title: "Senior Flutter Developer", type: "Full-time", location: "Remote", salary: "₹25–40 LPA", desc: "Build the Guardian app for iOS and Android. Experience with background services, Bluetooth, and on-device ML preferred.", email: "careers@guardian.ai?subject=Application: Senior Flutter Developer" },
  { title: "ML Engineer (On-Device AI)", type: "Full-time", location: "Remote", salary: "₹30–50 LPA", desc: "Train and optimize models that run entirely on user devices. Experience with TensorFlow Lite, CoreML, and privacy-preserving ML required.", email: "careers@guardian.ai?subject=Application: ML Engineer (On-Device AI)" },
  { title: "Community Manager — Safe Shops", type: "Full-time", location: "Mumbai / Bangalore", salary: "₹12–20 LPA", desc: "Onboard and support Safe Shops across cities. Build relationships with shop owners, conduct training sessions.", email: "careers@guardian.ai?subject=Application: Community Manager — Safe Shops" },
  { title: "Head of Growth", type: "Full-time", location: "Remote", salary: "₹35–55 LPA", desc: "Drive user acquisition, shop partnerships, and brand awareness. Experience in B2C + B2B growth required.", email: "careers@guardian.ai?subject=Application: Head of Growth" },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote", salary: "₹20–35 LPA", desc: "Design calm, trustworthy interfaces. Experience with safety products, dark mode design, and motion preferred.", email: "careers@guardian.ai?subject=Application: UI/UX Designer" },
];

export function Careers() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Careers"
        title={<>Join us. Build<br /><span className="text-red-500">safer streets.</span></>}
        subtitle="Remote-first. Mission-driven. Privacy-obsessed. Join a team building something that actually matters."
      />

      {/* Perks */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-12 uppercase">Why Guardian</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-12">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0B0F1A] p-5 md:p-8 space-y-3 md:space-y-4 group hover:bg-[#0d0505] transition-colors"
              >
                <p.icon className="w-5 h-5 text-red-500/60 group-hover:text-red-500 transition-colors" />
                <h4 className="text-white font-bold uppercase text-sm tracking-wider">{p.label}</h4>
                <p className="text-white/40 text-xs font-mono">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Health insurance for you + family", "Annual learning budget", "Annual team retreats", "Stock options for all full-time employees"].map((b, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5">
                <span className="w-1 h-1 bg-red-500 rounded-full shrink-0" />
                <span className="text-white/60 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-[#050608] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-12 uppercase">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/5 p-5 md:p-8 group hover:border-red-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-700" />
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">{job.title}</h3>
                  <span className="text-lg font-bold text-white/80 shrink-0">{job.salary}</span>
                </div>
                <div className="flex gap-4 mb-4">
                  <span className="text-[10px] font-mono text-white/30 border border-white/10 px-2 py-1">{job.type}</span>
                  <span className="text-[10px] font-mono text-white/30 border border-white/10 px-2 py-1">{job.location}</span>
                </div>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">{job.desc}</p>
                {/* Apply Now → opens email client pre-filled with job title */}
                <a
                  href={`mailto:${job.email}`}
                  className="px-6 py-2 border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-red-600 hover:border-red-600 transition-all duration-300 inline-block"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General application */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">Don't see your role?</h3>
          <p className="text-white/50 font-light mb-8">We're always looking for great people who believe in our mission. Send us your CV anyway.</p>
          {/* General Application → /contact */}
          <Link
            to="/contact"
            className="px-10 py-4 bg-red-600 text-white font-bold tracking-widest uppercase hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all duration-300 inline-block"
          >
            Send General Application
          </Link>
        </div>
      </section>
    </div>
  );
}
