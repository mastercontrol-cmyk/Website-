import { motion } from "framer-motion";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Check, Smartphone, Apple, Share2 } from "lucide-react";
import { useState } from "react";

// ─── Waitlist Confirmation ───────────────────────────────────────────────────
export function WaitlistConfirmation() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg w-full text-center space-y-10"
      >
        <div className="relative mx-auto w-20 h-20 border border-red-500/30 flex items-center justify-center">
          <div className="absolute inset-0 bg-red-500/5" />
          <Check className="w-8 h-8 text-red-500" />
          <div className="absolute inset-0 border border-red-500/10 scale-150 animate-ping opacity-30" style={{ animationDuration: "2s" }} />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-tighter">You're on<br /><span className="text-red-500">the list.</span></h1>
          <p className="text-white/50 font-light text-lg">We'll notify you when Guardian launches in your city. You'll be among the first to know.</p>
        </div>
        <div className="border border-white/5 p-6 space-y-4 text-left">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">In the meantime</h3>
          <ul className="space-y-3">
            {["Follow us on Twitter for real-time updates", "Tell a friend — safety is better together", "Register your local shop as a Safe Shop"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-1 h-1 bg-red-500 rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/?text=I%20just%20joined%20Guardian%20-%20a%20personal%20AI%20safety%20agent.%20Join%20the%20waitlist%20at%20guardian.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-white/10 px-6 py-3 text-white/60 hover:text-white hover:border-white/30 transition-all text-xs font-bold tracking-widest uppercase">
            <Share2 className="w-3.5 h-3.5" />
            Share on WhatsApp
          </a>
          <Link to="/" className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-500 transition-all text-xs font-bold tracking-widest uppercase">
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Shop Registration ────────────────────────────────────────────────────────
export function ShopRegistration() {
  const [form, setForm] = useState({ shop: "", owner: "", email: "", phone: "", city: "Mumbai", area: "", address: "", type: "Café", open24: "no", from: "", to: "", plan: "Basic ₹499/mo", agreed: false });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  if (submitted) return <ShopThankYou />;

  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Safe Shops"
        title={<>Register your<br /><span className="text-red-500">shop.</span></>}
        subtitle="Become part of the Guardian Safe Shop network. Protect your community, build trust."
      />

      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mb-16">
          {["Verified badge visible to 5,000+ users", "Increased footfall from safety-conscious customers", "Simple SMS alerts when someone needs help", "Free staff training session (30 min online)", "Join a movement making streets safer"].map((b, i) => (
            <div key={i} className="bg-[#0B0F1A] p-5 flex items-center gap-4">
              <Check className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-sm text-white/60 font-light">{b}</span>
            </div>
          ))}
        </div>

        <div className="max-w-2xl space-y-6">
          <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-8">Registration Form</h2>

          {[
            { label: "Shop Name", key: "shop", type: "text", ph: "Your shop name" },
            { label: "Owner Name", key: "owner", type: "text", ph: "Your full name" },
            { label: "Email Address", key: "email", type: "email", ph: "contact@yourshop.com" },
            { label: "Phone Number", key: "phone", type: "tel", ph: "+91 98765 43210" },
            { label: "Area / Locality", key: "area", type: "text", ph: "Bandra, Koramangala, etc." },
            { label: "Full Address", key: "address", type: "text", ph: "Street, landmark, pincode" },
          ].map((f) => (
            <div key={f.key} className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">{f.label}</label>
              <input type={f.type} placeholder={f.ph} value={form[f.key as keyof typeof form] as string} onChange={(e) => set(f.key, e.target.value)}
                className="w-full bg-black/30 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-red-500/50 transition-colors font-mono" />
            </div>
          ))}

          {[
            { label: "City", key: "city", opts: ["Mumbai", "Bangalore", "Delhi", "Pune", "Chennai", "Hyderabad", "Other"] },
            { label: "Shop Type", key: "type", opts: ["Café", "Pharmacy", "Convenience Store", "Restaurant", "Salon", "Medical Clinic", "Bookstore", "Other"] },
            { label: "Plan", key: "plan", opts: ["Basic ₹499/mo", "Popular ₹999/mo", "Premium ₹1,499/mo"] },
          ].map((f) => (
            <div key={f.key} className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">{f.label}</label>
              <select value={form[f.key as keyof typeof form] as string} onChange={(e) => set(f.key, e.target.value)}
                className="w-full bg-black/30 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-red-500/50 transition-colors font-mono appearance-none">
                {f.opts.map((o) => <option key={o} className="bg-[#0B0F1A]">{o}</option>)}
              </select>
            </div>
          ))}

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Open 24/7?</label>
            <div className="flex gap-4">
              {["yes", "no"].map((v) => (
                <button key={v} onClick={() => set("open24", v)}
                  className={`px-6 py-2 border text-xs font-bold tracking-widest uppercase transition-all ${form.open24 === v ? "border-red-500 bg-red-900/20 text-white" : "border-white/10 text-white/40 hover:border-white/30"}`}>
                  {v === "yes" ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[{ label: "Opens at", key: "from", ph: "08:00" }, { label: "Closes at", key: "to", ph: "22:00" }].map((f) => (
              <div key={f.key} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">{f.label}</label>
                <input type="time" value={form[f.key as keyof typeof form] as string} onChange={(e) => set(f.key, e.target.value)}
                  className="w-full bg-black/30 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-red-500/50 transition-colors font-mono" />
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 pt-2">
            <button onClick={() => set("agreed", !form.agreed)}
              className={`w-5 h-5 border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${form.agreed ? "border-red-500 bg-red-600" : "border-white/20"}`}>
              {form.agreed && <Check className="w-3 h-3 text-white" />}
            </button>
            <label className="text-sm text-white/50 font-light cursor-pointer" onClick={() => set("agreed", !form.agreed)}>
              I agree to the Safe Shop terms, training requirements, and confidentiality agreement.
            </label>
          </div>

          <button onClick={() => form.agreed && setSubmitted(true)}
            className={`w-full py-4 font-bold tracking-widest uppercase text-sm transition-all duration-300 mt-4 ${form.agreed ? "bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]" : "bg-white/5 text-white/20 cursor-not-allowed"}`}>
            Register Shop
          </button>
        </div>

        <div className="mt-16 border-t border-white/5 pt-10">
          <h3 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-8">What Happens Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { num: "01", t: "We contact you", d: "Within 24 hours of registration" },
              { num: "02", t: "Training session", d: "30 min online, for your staff" },
              { num: "03", t: "Sticker & setup", d: "Guardian sticker + SMS alerts configured" },
              { num: "04", t: "Go live", d: "In the app within 48 hours" },
            ].map((s, i) => (
              <div key={i} className="border-t-2 border-white/10 pt-6 pr-8 hover:border-red-500 transition-colors duration-500 group">
                <div className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors font-mono mb-3">{s.num}</div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{s.t}</h4>
                <p className="text-white/30 text-xs font-mono">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Shop Thank You ───────────────────────────────────────────────────────────
export function ShopThankYou() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg w-full text-center space-y-10"
      >
        <div className="relative mx-auto w-20 h-20 border border-red-500/30 flex items-center justify-center">
          <div className="absolute inset-0 bg-red-500/5" />
          <Check className="w-8 h-8 text-red-500" />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">Application<br /><span className="text-red-500">received.</span></h1>
          <p className="text-white/50 font-light">Our team will contact you within 24 hours to schedule your training session.</p>
        </div>
        <div className="border border-white/5 p-6 space-y-4 text-left">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Prepare for onboarding</h3>
          <ul className="space-y-3">
            {["Save our email — onboarding@guardian.ai — to your contacts", "Brief your staff that Guardian training is coming", "Think about where to place the Guardian sticker (front window is best)"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                <span className="w-1 h-1 bg-red-500 rounded-full mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-500 transition-all duration-300">
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}

// ─── Become a Helper ──────────────────────────────────────────────────────────
export function BecomeAHelper() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "Mumbai", languages: "", availability: "Evenings", why: "", agreed: false });
  const [submitted, setSubmitted] = useState(false);
  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  if (submitted) return <HelperThankYou />;

  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Helpers"
        title={<>Be the presence<br /><span className="text-red-500">someone needs.</span></>}
        subtitle="Helpers are the human heart of Guardian. Trained, verified, and deeply committed to calm over panic."
      />

      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase mb-6">The Helper Role</h2>
            <p className="text-white/60 font-light leading-relaxed">Helpers are trained individuals who watch over users silently during their journeys, provide calm text-based guidance when needed, coordinate with Safe Shops, and notify emergency contacts if necessary — all without ever calling police unless the user explicitly asks.</p>
            <p className="text-white/40 font-light leading-relaxed text-sm italic border-l border-red-500/20 pl-4">You are a companion. Not a dispatcher. Not a security guard. A calm, steady presence.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-4">Requirements</h3>
            {["21+ years old", "Fluent in English + at least one regional language", "Empathetic and calm under pressure", "Reliable internet connection", "5+ hours/week availability", "Background check required (we assist)"].map((r, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5">
                <span className="w-1 h-1 bg-red-500 rounded-full shrink-0" />
                <span className="text-sm text-white/60 font-light">{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl space-y-6">
          <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-8">Application Form</h2>

          {[
            { label: "Full Name", key: "name", type: "text", ph: "Your full name" },
            { label: "Email Address", key: "email", type: "email", ph: "your@email.com" },
            { label: "Phone Number", key: "phone", type: "tel", ph: "+91 98765 43210" },
            { label: "Languages Spoken", key: "languages", type: "text", ph: "English, Hindi, Tamil..." },
          ].map((f) => (
            <div key={f.key} className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">{f.label}</label>
              <input type={f.type} placeholder={f.ph} value={form[f.key as keyof typeof form] as string} onChange={(e) => set(f.key, e.target.value)}
                className="w-full bg-black/30 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-red-500/50 transition-colors font-mono" />
            </div>
          ))}

          {[
            { label: "City", key: "city", opts: ["Mumbai", "Bangalore", "Delhi", "Pune", "Chennai", "Hyderabad", "Other"] },
            { label: "Availability", key: "availability", opts: ["Mornings (6am–12pm)", "Afternoons (12pm–6pm)", "Evenings (6pm–11pm)", "Nights (11pm–6am)", "Flexible / Multiple"] },
          ].map((f) => (
            <div key={f.key} className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">{f.label}</label>
              <select value={form[f.key as keyof typeof form] as string} onChange={(e) => set(f.key, e.target.value)}
                className="w-full bg-black/30 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-red-500/50 transition-colors font-mono appearance-none">
                {f.opts.map((o) => <option key={o} className="bg-[#0B0F1A]">{o}</option>)}
              </select>
            </div>
          ))}

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Why do you want to be a Helper?</label>
            <textarea rows={5} placeholder="Tell us in your own words..." value={form.why} onChange={(e) => set("why", e.target.value)}
              className="w-full bg-black/30 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-red-500/50 transition-colors resize-none font-mono" />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <button onClick={() => set("agreed", !form.agreed)}
              className={`w-5 h-5 border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${form.agreed ? "border-red-500 bg-red-600" : "border-white/20"}`}>
              {form.agreed && <Check className="w-3 h-3 text-white" />}
            </button>
            <label className="text-sm text-white/50 font-light cursor-pointer" onClick={() => set("agreed", !form.agreed)}>
              I agree to a background check and Guardian's confidentiality agreement.
            </label>
          </div>

          <button onClick={() => form.agreed && form.name && form.email && setSubmitted(true)}
            className={`w-full py-4 font-bold tracking-widest uppercase text-sm transition-all duration-300 mt-4 ${form.agreed && form.name && form.email ? "bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]" : "bg-white/5 text-white/20 cursor-not-allowed"}`}>
            Submit Application
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── Helper Thank You ─────────────────────────────────────────────────────────
export function HelperThankYou() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg w-full text-center space-y-10"
      >
        <div className="relative mx-auto w-20 h-20 border border-red-500/30 flex items-center justify-center">
          <div className="absolute inset-0 bg-red-500/5" />
          <Check className="w-8 h-8 text-red-500" />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">Application<br /><span className="text-red-500">submitted.</span></h1>
          <p className="text-white/50 font-light">Our team will review your application and reach out within 5–7 days with next steps, including background check details and training dates.</p>
        </div>
        <div className="border border-white/5 p-6 space-y-4 text-left">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">What to expect</h3>
          <ul className="space-y-3">
            {["Check your email for a confirmation receipt", "Background check instructions will arrive separately", "Training is online — 2 sessions, weekends work fine", "Your first shift will be observed and supported by a senior helper"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                <span className="w-1 h-1 bg-red-500 rounded-full mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-500 transition-all duration-300">
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}

// ─── Download ────────────────────────────────────────────────────────────────
export function Download() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Download"
        title={<>Get Guardian.<br /><span className="text-red-500">Stay safe.</span></>}
        subtitle="Free for iOS and Android. No credit card required."
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mt-10">
          <a href="/waitlist-confirmation" className="flex items-center gap-3 px-6 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">
            <Apple className="w-5 h-5" />
            <div className="text-left">
              <div className="text-[9px] font-normal">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </a>
          <a href="/waitlist-confirmation" className="flex items-center gap-3 px-6 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">
            <Smartphone className="w-5 h-5" />
            <div className="text-left">
              <div className="text-[9px] font-normal">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </a>
        </motion.div>
      </PageHero>

      {/* QR codes */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase mb-12 text-center">Scan to Download</h2>
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {[{ label: "iOS", sub: "iPhone XS or newer • iOS 15+" }, { label: "Android", sub: "4GB RAM • Android 12+" }].map((p, i) => (
              <div key={i} className="bg-[#0B0F1A] p-6 md:p-10 flex flex-col items-center gap-4 md:gap-6">
                <div className="w-32 h-32 border border-white/10 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1 opacity-30">
                    {Array.from({ length: 9 }).map((_, j) => (
                      <div key={j} className={`w-4 h-4 ${[0, 2, 4, 6, 8].includes(j) ? "bg-white" : "bg-transparent"}`} />
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold uppercase tracking-tight">{p.label}</div>
                  <div className="text-white/30 text-xs font-mono mt-1">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5 bg-[#050608]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-10">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {[
              { os: "iOS", reqs: ["iPhone XS or newer", "iOS version 15 or higher", "200MB free storage", "Bluetooth 5.0+ (for hardware)"] },
              { os: "Android", reqs: ["Android 12 or higher", "4GB RAM recommended", "200MB free storage", "Bluetooth 5.0+ (for hardware)"] },
            ].map((r, i) => (
              <div key={i} className="bg-[#050608] p-8 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">{r.os}</h3>
                <ul className="space-y-2">
                  {r.reqs.map((req, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="w-1 h-1 bg-red-500/50 rounded-full shrink-0" />
                      {req}
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

// ─── 404 ──────────────────────────────────────────────────────────────────────
export function NotFound() {
  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-10 max-w-lg"
      >
        <div className="text-[5rem] sm:text-[8rem] md:text-[10rem] font-bold text-white/5 leading-none font-mono select-none">404</div>
        <div className="space-y-4 -mt-16">
          <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">You've wandered<br /><span className="text-red-500">off the path.</span></h1>
          <p className="text-white/40 font-light">Don't worry — we'll guide you back to safety.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-8 py-4 bg-red-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all duration-300">
            Return Home
          </Link>
          <Link to="/features" className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/5 transition-all duration-300">
            Browse Features
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
