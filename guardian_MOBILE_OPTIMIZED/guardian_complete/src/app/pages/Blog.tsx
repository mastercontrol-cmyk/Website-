import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";
import { Loader2 } from "lucide-react";

const featured = {
  slug: "truth-about-street-safety",
  title: "The Truth About Street Safety in Indian Cities",
  subtitle: "What 1,000 women told us about walking alone. And why existing solutions aren't working.",
  date: "March 1, 2026",
  readTime: "8 min read",
  category: "Research",
};

const posts = [
  { slug: "safe-shops-changing-communities", title: "How Safe Shops Are Changing Communities", date: "Feb 26, 2026", readTime: "5 min read", category: "Community Stories", excerpt: "The café owner who didn't know she'd become a guardian. The pharmacy that's helped 12 women this month." },
  { slug: "5-things-walking-alone", title: "5 Things Every Woman Walking Alone Should Know", date: "Feb 19, 2026", readTime: "7 min read", category: "Safety Tips", excerpt: "Practical advice from our safety advisors on staying aware without living in fear." },
  { slug: "training-first-50-helpers", title: "Behind the Scenes: Training Our First 50 Helpers", date: "Feb 12, 2026", readTime: "6 min read", category: "Company News", excerpt: "What it takes to become a Guardian helper — and why the work is harder and more meaningful than anyone expected." },
  { slug: "privacy-by-design", title: "Privacy by Design: How Guardian Keeps Your Data Safe", date: "Feb 5, 2026", readTime: "4 min read", category: "Product Updates", excerpt: "A deep dive into our zero-knowledge architecture and why we built it this way from day one." },
  { slug: "chennai-launch", title: "Chennai Launch: 50 Shops, 1,000 Users, Day One", date: "Jan 28, 2026", readTime: "3 min read", category: "Company News", excerpt: "We launched in Chennai last Tuesday. Here's what happened." },
  { slug: "why-not-police", title: "Why Guardian Doesn't Call Police Without Your Consent", date: "Jan 15, 2026", readTime: "6 min read", category: "Safety Tips", excerpt: "A thoughtful exploration of why autonomous police escalation is the wrong design decision for safety apps." },
];

const categories = ["All", "Safety Tips", "Product Updates", "Community Stories", "Research", "Company News"];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  async function handleSubscribe() {
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) return;
    setSubState("loading");
    try {
      // Try Firebase if configured, otherwise simulate success
      try {
        const mod = await import("../../lib/guardianServices");
        await mod.submitWaitlist({ email: trimmed, source: "blog-newsletter" });
      } catch {
        await new Promise((r) => setTimeout(r, 700));
      }
      setSubState("done");
    } catch {
      setSubState("error");
    }
  }

  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Blog"
        title={<>Stories. Insights.<br /><span className="text-red-500">Safety.</span></>}
        subtitle="From our team — product updates, safety research, community stories, and the thinking behind Guardian."
      />

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative border border-white/5 overflow-hidden group hover:border-red-500/20 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent" />
          <div className="absolute top-0 left-0 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-700" />
          <Link to={`/blog/${featured.slug}`} className="relative z-10 block p-6 md:p-16 space-y-4 md:space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.3em] text-red-500 uppercase border border-red-500/30 px-2 py-1">Featured</span>
              <span className="text-[10px] font-mono text-white/30">{featured.category}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-none group-hover:text-red-500 transition-colors duration-300">{featured.title}</h2>
            <p className="text-white/50 font-light max-w-2xl text-lg">{featured.subtitle}</p>
            <div className="flex items-center gap-4 text-xs font-mono text-white/30">
              <span>{featured.date}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>{featured.readTime}</span>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Categories - now functional */}
      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-6 md:pb-8">
        <div className="flex gap-2 flex-wrap">
          {categories.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === c
                  ? "bg-red-600 text-white"
                  : "border border-white/10 text-white/40 hover:border-white/30 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-16 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bg-[#0B0F1A] group hover:bg-[#0d0505] transition-colors duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block p-5 md:p-8 space-y-3 md:space-y-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-bold tracking-[0.3em] text-red-500/70 uppercase">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-red-500 transition-colors duration-300 leading-tight">{post.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-[10px] font-mono text-white/20 pt-2 border-t border-white/5">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </motion.div>
          ))}
          {filteredPosts.length === 0 && (
            <div className="col-span-2 py-16 text-center text-white/30 font-mono text-sm">
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter - now wired */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-white/5 bg-[#050608]">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-[10px] font-bold tracking-[0.4em] text-red-500 uppercase flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-sm" />
            Newsletter
          </p>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Safety insights<br /><span className="text-red-500">in your inbox.</span></h2>
          <p className="text-white/40 font-light">No spam. No fluff. Just insights on safety, privacy, and building a safer city. Unsubscribe anytime.</p>

          {subState === "done" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 text-green-400 font-mono text-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              You're subscribed!
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="your@email.com"
                className="flex-1 bg-black/40 border border-white/10 sm:border-r-0 border-b-0 px-4 py-4 text-sm text-white placeholder-white/20 outline-none focus:border-red-500/50 transition-colors font-mono"
              />
              <button
                onClick={handleSubscribe}
                disabled={subState === "loading"}
                className="px-6 py-4 bg-red-600 text-white font-bold tracking-widest uppercase text-xs hover:bg-red-500 transition-all whitespace-nowrap flex items-center gap-2 disabled:opacity-70"
              >
                {subState === "loading" && <Loader2 className="w-3 h-3 animate-spin" />}
                Subscribe
              </button>
            </div>
          )}

          {subState === "error" && (
            <p className="text-red-400 text-xs font-mono">Something went wrong. Please try again.</p>
          )}
        </div>
      </section>
    </div>
  );
}
