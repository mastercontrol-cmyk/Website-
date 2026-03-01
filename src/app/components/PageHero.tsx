import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 px-5 md:px-12 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08),transparent_60%)]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="relative z-10 max-w-5xl mx-auto">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-bold tracking-[0.4em] text-red-500 mb-4 md:mb-6 uppercase flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 bg-red-500 rounded-sm animate-pulse" />
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none mb-4 md:mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-xl text-white/50 max-w-2xl font-light leading-relaxed border-l border-red-500/20 pl-4 md:pl-6"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
