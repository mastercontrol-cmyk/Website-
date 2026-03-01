import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";
import { Loader2 } from "lucide-react";

const featured = {
  slug: "truth-about-street-safety",
  title: "The Truth About Street Safety in Indian Cities",
  subtitle:
    "What 1,000 women told us about walking alone. And why existing solutions aren't working.",
  date: "March 1, 2026",
  readTime: "8 min read",
  category: "Research",
};

const posts = [
  {
    slug: "safe-shops-changing-communities",
    title: "How Safe Shops Are Changing Communities",
    date: "Feb 26, 2026",
    readTime: "5 min read",
    category: "Community Stories",
    excerpt:
      "The café owner who didn't know she'd become a guardian. The pharmacy that's helped 12 women this month.",
  },
  {
    slug: "5-things-walking-alone",
    title: "5 Things Every Woman Walking Alone Should Know",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    category: "Safety Tips",
    excerpt:
      "Practical advice from our safety advisors on staying aware without living in fear.",
  },
  {
    slug: "training-first-50-helpers",
    title: "Behind the Scenes: Training Our First 50 Helpers",
    date: "Feb 12, 2026",
    readTime: "6 min read",
    category: "Company News",
    excerpt:
      "What it takes to become a Guardian helper — and why the work is harder and more meaningful than anyone expected.",
  },
  {
    slug: "privacy-by-design",
    title: "Privacy by Design: How Guardian Keeps Your Data Safe",
    date: "Feb 5, 2026",
    readTime: "4 min read",
    category: "Product Updates",
    excerpt:
      "A deep dive into our zero-knowledge architecture and why we built it this way from day one.",
  },
  {
    slug: "chennai-launch",
    title: "Chennai Launch: 50 Shops, 1,000 Users, Day One",
    date: "Jan 28, 2026",
    readTime: "3 min read",
    category: "Company News",
    excerpt:
      "We launched in Chennai last Tuesday. Here's what happened.",
  },
  {
    slug: "why-not-police",
    title: "Why Guardian Doesn't Call Police Without Your Consent",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Safety Tips",
    excerpt:
      "A thoughtful exploration of why autonomous police escalation is the wrong design decision for safety apps.",
  },
];

const categories = [
  "All",
  "Safety Tips",
  "Product Updates",
  "Community Stories",
  "Research",
  "Company News",
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState<
    "idle" | "loading" | "done" | "error"
  >("idle");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  async function handleSubscribe() {
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) return;

    setSubState("loading");

    try {
      // Simulate success (no backend yet)
      await new Promise((r) => setTimeout(r, 700));
      setSubState("done");
    } catch {
      setSubState("error");
    }
  }

  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Stories. Insights.
            <br />
            <span className="text-red-500">Safety.</span>
          </>
        }
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
          <Link
            to={`/blog/${featured.slug}`}
            className="relative z-10 block p-6 md:p-16 space-y-6"
          >
            <span className="text-xs text-red-500 uppercase">
              {featured.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {featured.title}
            </h2>
            <p className="text-white/50 max-w-2xl">{featured.subtitle}</p>
          </Link>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 text-xs uppercase ${
                activeCategory === c
                  ? "bg-red-600 text-white"
                  : "border border-white/10 text-white/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-5 md:px-12 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="p-6 border border-white/5 hover:border-red-500/30 transition"
            >
              <h3 className="text-xl text-white font-bold">{post.title}</h3>
              <p className="text-white/40 mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h2 className="text-3xl text-white font-bold">
            Safety insights in your inbox
          </h2>

          {subState === "done" ? (
            <p className="text-green-400">You're subscribed!</p>
          ) : (
            <div className="flex gap-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-black border border-white/10 text-white"
              />
              <button
                onClick={handleSubscribe}
                disabled={subState === "loading"}
                className="px-4 py-3 bg-red-600 text-white"
              >
                {subState === "loading" ? (
                  <Loader2 className="animate-spin w-4 h-4" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
