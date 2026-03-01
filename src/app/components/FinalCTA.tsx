import { motion } from "framer-motion";
import { Link } from "react-router";
import { GuardianLogo } from "./GuardianLogo";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 w-full px-5 flex flex-col items-center justify-center text-center bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 md:space-y-10 max-w-4xl relative z-10 w-full"
      >
        <motion.div
          className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-8 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <GuardianLogo className="w-full h-full" />
        </motion.div>

        <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold text-white leading-none tracking-tighter">
          Safety is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">presence</span>.
        </h2>

        <p className="text-base md:text-xl text-white/50 max-w-2xl mx-auto font-light px-4">
          Join the network. Protect yourself. Protect your city.
        </p>

        <div className="pt-4 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link
            to="/waitlist-confirmation"
            className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-red-600 overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] hover:scale-105"
          >
            <span className="relative z-10 text-white font-bold tracking-widest uppercase text-sm">Request Early Access</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            to="/blog/truth-about-street-safety"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent border border-white/10 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white/5 transition-all duration-300 text-sm"
          >
            Read Manifesto
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
