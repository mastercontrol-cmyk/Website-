import { motion } from "framer-motion";
import { useRef } from "react";
import { Shield, Cpu, Activity, Zap } from "lucide-react";
import clsx from "clsx";

const features = [
  { icon: Shield, title: "Always-On", description: "AI detects risk before you act. Constant vigilance without intrusion.", color: "text-red-500", border: "group-hover:border-red-500/50" },
  { icon: Cpu, title: "Local & Private", description: "Runs on your devices, not the cloud. Your data never leaves your control.", color: "text-red-400", border: "group-hover:border-red-400/50" },
  { icon: Activity, title: "Human Backup", description: "Trained helpers intervene when AI isn't enough.", color: "text-red-600", border: "group-hover:border-red-600/50" },
  { icon: Zap, title: "Physical World", description: "Safe Shops, hardware integration, and real-world action.", color: "text-red-500", border: "group-hover:border-red-500/50" },
];

export function WhatIsGuardian() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="py-20 md:py-48 px-5 md:px-12 w-full max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative pt-8 md:pt-12 border-t border-white/5 overflow-hidden transition-all duration-700"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-700 ease-in-out" />
            <div className={clsx("relative z-10 p-2 rounded-sm w-fit mb-5 md:mb-8 border border-white/10 group-hover:border-red-500/40 transition-all duration-500", feature.color)}>
              <feature.icon className="w-5 h-5" />
            </div>
            <h3 className="relative z-10 text-[11px] font-bold text-white mb-3 md:mb-4 tracking-[0.4em] uppercase group-hover:text-red-500 transition-colors duration-500">{feature.title}</h3>
            <p className="relative z-10 text-[13px] text-white/40 leading-relaxed font-mono group-hover:text-white/60 transition-colors duration-500">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 md:mt-64 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="space-y-8 md:space-y-16 pl-5 md:pl-8 relative">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-red-600 via-red-600/20 to-transparent" />
          {["Sovereign Neural Core", "Pattern-Adaptive Intelligence", "Localized Machine Context", "Proactive Threat Neutralization", "Graceful System Escalation"].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="group"
            >
              <h4 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                {text}
              </h4>
              <div className="w-8 h-[1px] bg-white/10 mt-3 md:mt-4 group-hover:w-24 group-hover:bg-red-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Holographic Cube - hidden on small mobile, shown from sm up */}
        <div className="hidden sm:flex relative h-[300px] md:h-[400px] w-full items-center justify-center perspective-[1000px]">
          <motion.div
            animate={{ rotateY: 360, rotateX: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-48 md:w-64 h-48 md:h-64 transform-style-3d"
          >
            {["translateZ(96px)", "translateZ(-96px)", "rotateY(90deg) translateZ(96px)", "rotateY(-90deg) translateZ(96px)", "rotateX(90deg) translateZ(96px)", "rotateX(-90deg) translateZ(96px)"].map((transform, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-red-500/30 bg-red-500/5 backdrop-blur-sm flex items-center justify-center"
                style={{ transform }}
              >
                <div className="w-4 h-4 border border-white/20 rounded-full" />
              </div>
            ))}
          </motion.div>
          <div className="absolute bottom-0 text-center">
            <div className="text-[10px] font-mono text-white/30 tracking-[0.5em] uppercase animate-pulse">Neural Core V.1.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}
