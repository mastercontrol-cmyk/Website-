import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

const posts: Record<string, {
  title: string; category: string; date: string; readTime: string;
  body: { heading?: string; text: string }[];
}> = {
  "truth-about-street-safety": {
    title: "The Truth About Street Safety in Indian Cities",
    category: "Research",
    date: "March 1, 2026",
    readTime: "8 min read",
    body: [
      { text: "We surveyed 1,000 women across Mumbai, Delhi, Bangalore, and Chennai about their experiences walking alone. The results were revealing — not because the numbers were surprising, but because they confirmed what most of us already know from experience." },
      { heading: "What we asked", text: "We asked about frequency of walking alone, levels of comfort at different times of day, what existing tools they use, and what would make them feel genuinely safer." },
      { heading: "What we found", text: "84% of respondents said they modify their routes based on perceived safety — not actual incidents. 91% said they have a mental map of 'safe' and 'unsafe' streets. 67% said they'd used a phone call as a decoy to appear accompanied. Only 12% said existing safety apps made them feel meaningfully safer." },
      { heading: "The insight that changed our design", text: "When we asked 'what would make you feel safer walking home?', the top answer by far wasn't 'faster police response' or 'better lighting' — it was 'knowing someone was watching over me.' Not surveillance. Presence. That's what Guardian is built to provide." },
      { text: "People don't want an emergency button. They want a companion. Someone — or something — that knows their normal and notices when it changes. That's the gap Guardian fills." },
    ],
  },
  "privacy-by-design": {
    title: "Privacy by Design: How Guardian Keeps Your Data Safe",
    category: "Product Updates",
    date: "Feb 5, 2026",
    readTime: "4 min read",
    body: [
      { text: "When we started building Guardian, we faced a fundamental tension: how do you build a system that learns from your behavior without becoming a surveillance tool?" },
      { heading: "The answer: zero-knowledge architecture", text: "All AI processing happens on your device. Your routes, patterns, and behavioral data never leave your phone. We don't have a database of your movements. We can't access your data even if we wanted to." },
      { heading: "Hardware-backed encryption", text: "Data is encrypted using your device's Secure Enclave (iOS) or StrongBox (Android) — the same chip that protects your fingerprint and face data. Even if someone physically took your phone, they couldn't read your Guardian data without your biometric." },
      { heading: "You can see everything", text: "Every fact your AI agent knows is stored in human-readable files you can view, edit, and delete. There's no hidden model state. No black box. If your agent thinks you usually walk home at 8pm, you can see that — and change it." },
      { text: "This isn't just about legal compliance. It's about building a product we'd want to use ourselves." },
    ],
  },
  "safe-shops-changing-communities": {
    title: "How Safe Shops Are Changing Communities",
    category: "Community Stories",
    date: "Feb 26, 2026",
    readTime: "5 min read",
    body: [
      { text: "When Anita Sharma, owner of Coffee & Co. in Bandra, put the Guardian sticker in her window, she didn't fully understand what she was signing up for." },
      { heading: "The first time it mattered", text: "Three weeks after joining, she received an SMS: 'A Guardian user may need help nearby. Please be available.' A young woman came in, shaking, and asked if she could stay for a few minutes. 'She just sat. Ordered a tea. Calmed down. Then left,' Anita says. 'She didn't have to explain anything. That's what I signed up for.'" },
      { heading: "The numbers", text: "In the past three months, Safe Shops across our network have provided refuge in 847 incidents. 94% of users who entered a Safe Shop reported feeling safe within 5 minutes. 0 incidents escalated to police from a Safe Shop." },
      { text: "The Safe Shop network is proof that safety doesn't require technology. Sometimes it just requires a door that's open and a person who cares." },
    ],
  },
  "5-things-walking-alone": {
    title: "5 Things Every Woman Walking Alone Should Know",
    category: "Safety Tips",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    body: [
      { text: "Safety advice often falls into two traps: it's either patronizing or paranoid. We asked our safety advisors for practical, evidence-based guidance that respects your intelligence." },
      { heading: "1. Trust your gut, but understand it", text: "Your instincts process information faster than your conscious mind. If something feels wrong, it probably is. But also know that anxiety can be triggered by unfamiliarity, not danger. Learning the difference comes with experience and familiarity with routes." },
      { heading: "2. Vary your routes", text: "Not because you're being followed — but because familiarity with multiple routes gives you options. Knowing three ways home means you're never stuck with only one path." },
      { heading: "3. Know your nearest Safe Shop", text: "Open the Guardian app and identify the Safe Shops on your usual routes before you need them. Knowing where they are means you won't have to think in a stressful moment." },
      { heading: "4. Tell someone your route", text: "A simple WhatsApp to a friend: 'Walking home, taking MG Road, should be there by 9pm.' This is the oldest safety protocol and it still works." },
      { heading: "5. Have a plan, not a panic", text: "Decide in advance: if I feel uneasy, I'll walk into the nearest safe shop. Having a plan removes decision-making from a stressful moment." },
    ],
  },
  "training-first-50-helpers": {
    title: "Behind the Scenes: Training Our First 50 Helpers",
    category: "Company News",
    date: "Feb 12, 2026",
    readTime: "6 min read",
    body: [
      { text: "We trained our first cohort of Guardian helpers over two weekends in January. Fifty people. Two cities. A lot of uncomfortable conversations — and some of the most meaningful training we've ever witnessed." },
      { heading: "What helpers actually do", text: "Helpers are not security guards. They're not dispatchers. They're trained companions — people who watch over a user's journey, provide calm guidance via text if needed, and coordinate with Safe Shops or emergency contacts if a situation escalates." },
      { heading: "The hardest part of training", text: "The hardest module wasn't crisis management or de-escalation. It was consent. Teaching helpers to do nothing — to watch, wait, and only act when asked — goes against every instinct. 'I want to help more,' one helper said. That's the right instinct. The training is about channeling it correctly." },
      { heading: "What surprised us", text: "Of our first 50 helpers, 62% were women. 40% had personal experience with street harassment or assault. Every single one had a story about why they applied. This is not a gig. It's a calling." },
    ],
  },
  "chennai-launch": {
    title: "Chennai Launch: 50 Shops, 1,000 Users, Day One",
    category: "Company News",
    date: "Jan 28, 2026",
    readTime: "3 min read",
    body: [
      { text: "We launched in Chennai last Tuesday. Here's what happened." },
      { heading: "The numbers", text: "Day one: 1,247 downloads. 50 Safe Shops live in Anna Nagar, T. Nagar, Adyar, and Velachery. 8 watch-over sessions completed. 0 incidents escalated. 100% user satisfaction in post-session surveys." },
      { heading: "What we learned", text: "Chennai users are more likely to use Guardian for evening commutes than late-night walks. The Safe Shop network filled up faster than we expected — we had 50 shop applications before launch day." },
      { text: "Bangalore was our first city. Chennai is our fastest growing. Thank you, Chennai. We're just getting started." },
    ],
  },
  "why-not-police": {
    title: "Why Guardian Doesn't Call Police Without Your Consent",
    category: "Safety Tips",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    body: [
      { text: "When we first pitched Guardian, the most common question was: 'Why don't you auto-call police in an emergency?' The answer is both practical and philosophical." },
      { heading: "The practical reason", text: "Automatic police escalation creates more emergencies than it resolves. False positives — which will always exist in AI-based detection — can lead to police presence in situations where none is wanted or needed. For many users, unexpected police presence is itself a source of fear." },
      { heading: "The philosophical reason", text: "Guardian is built on the principle that you are in control of your own safety response. The AI helps you understand your situation. Helpers support you. But the decision about when to involve police — or any authority — belongs entirely to you." },
      { heading: "What we do instead", text: "We connect you to helpers first. Helpers connect to Safe Shops. Emergency contacts are notified. Only if you explicitly ask — verbally or via a specific gesture — does Guardian help you contact police. This is intentional design, not a limitation." },
      { text: "Safety is about agency. Guardian gives you more of it, not less." },
    ],
  },
};

export function BlogPost() {
  const { slug = "" } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="w-full bg-[#0B0F1A] min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase">Post not found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-sm hover:text-red-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0B0F1A] min-h-screen">
      <div className="relative pt-28 sm:pt-36 md:pt-40 pb-10 md:pb-16 px-5 md:px-12 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.06),transparent_60%)]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/30 hover:text-white text-xs font-mono tracking-widest uppercase mb-10 transition-colors group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-bold tracking-[0.3em] text-red-500 border border-red-500/30 px-2 py-1 uppercase">{post.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-[1.1]">{post.title}</h1>
            <div className="flex items-center gap-4 text-xs font-mono text-white/30">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-12 py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          {post.body.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-3">{block.heading}</h2>
              )}
              <p className="text-white/60 font-light leading-[1.9] text-lg">{block.text}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-20 pt-8 border-t border-white/5 flex items-center justify-between">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            All posts
          </Link>
        </div>
      </div>
    </div>
  );
}
