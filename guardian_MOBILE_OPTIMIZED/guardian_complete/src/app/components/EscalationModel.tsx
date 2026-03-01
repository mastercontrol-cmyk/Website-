import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

const steps = [
  { level: "0", title: "Observe", desc: "Passive monitoring of context and environment.", color: "text-blue-400", border: "border-blue-500" },
  { level: "1", title: "Prepare", desc: "Anomalies detected. Resources pre-loaded.", color: "text-cyan-400", border: "border-cyan-500" },
  { level: "2", title: "Suggest", desc: "Proactive notification to user. Confirmation requested.", color: "text-yellow-400", border: "border-yellow-500" },
  { level: "3", title: "Assist", desc: "Active intervention. Contacts notified. Services pinged.", color: "text-orange-400", border: "border-orange-500" },
  { level: "4", title: "Emergency", desc: "Full escalation. Authorities alerted. Location broadcast.", color: "text-red-500", border: "border-red-500" },
];

export function EscalationModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} className="py-20 md:py-32 w-full px-5 md:px-12 max-w-6xl mx-auto">
      <div className="mb-12 md:mb-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3 md:mb-4 uppercase">Escalation Protocol</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">Calm until <span className="text-red-500">Action</span>.</h3>
        </div>
        <div className="sm:text-right">
          <div className="text-xs font-mono text-white/30">SYSTEM STATUS</div>
          <div className="text-base md:text-xl font-mono text-white">AUTO_RESPONSE_READY</div>
        </div>
      </div>

      <div className="relative border-l border-white/10 pl-8 md:pl-16 lg:pl-32 space-y-16 md:space-y-32">
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-yellow-500 to-red-500"
        />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2, x: -20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className={clsx(
              "absolute -left-[2.6rem] md:-left-[4.6rem] lg:-left-[8.6rem] top-3 w-4 h-4 rounded-full bg-[#0B0F1A] border-2 transition-all duration-500 z-10",
              step.border,
              "group-hover:scale-150 group-hover:bg-white"
            )} />

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
              <span className={clsx("text-xs font-mono tracking-widest opacity-70", step.color)}>LVL {step.level}</span>
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">{step.title}</h4>
            </div>

            <p className="mt-3 md:mt-4 md:ml-[5rem] lg:ml-[8rem] text-base md:text-xl text-white/50 max-w-md font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300 border-l border-white/10 pl-4 md:pl-6">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
