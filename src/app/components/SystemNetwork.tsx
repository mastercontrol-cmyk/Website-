import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const nodes = [
  { id: "orchestrator", label: "Orchestrator", x: 50, y: 50, description: "Central intelligence hub. Processes all inputs." },
  { id: "sentinel", label: "Sentinel", x: 20, y: 30, description: "Real-time threat monitoring and anomaly detection." },
  { id: "navigator", label: "Navigator", x: 80, y: 30, description: "Safe route planning and physical context awareness." },
  { id: "learner", label: "Learner", x: 20, y: 70, description: "Pattern recognition engine. Adapts to your behavior." },
  { id: "coordinator", label: "Coordinator", x: 80, y: 70, description: "Escalation management and human-layer bridging." },
];

export function SystemNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const activeData = nodes.find((n) => n.id === activeNode);

  return (
    <section className="py-20 md:py-32 w-full min-h-screen bg-[#0A0B0F] relative overflow-hidden flex flex-col items-center">
      <div className="text-center mb-10 md:mb-16 relative z-10 px-5">
        <h2 className="text-xs font-bold tracking-[0.3em] text-red-500 mb-4 uppercase flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-sm animate-pulse" />
          System Architecture
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
          Distributed <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Intelligence</span>
        </h3>
      </div>

      <div className="relative w-full max-w-6xl aspect-square sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden group px-4 sm:px-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(239, 68, 68, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[
            { x1: "50%", y1: "50%", x2: "20%", y2: "30%" },
            { x1: "50%", y1: "50%", x2: "80%", y2: "30%" },
            { x1: "50%", y1: "50%", x2: "20%", y2: "70%" },
            { x1: "50%", y1: "50%", x2: "80%", y2: "70%" },
            { x1: "20%", y1: "30%", x2: "20%", y2: "70%" },
            { x1: "80%", y1: "30%", x2: "80%", y2: "70%" },
          ].map((line, i) => (
            <g key={i}>
              <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <motion.line
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                stroke="url(#line-gradient)"
                strokeWidth="2"
                strokeDasharray="100 100"
                strokeDashoffset="200"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
              />
            </g>
          ))}
        </svg>

        <div className="absolute inset-0">
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <button onClick={() => setActiveNode(activeNode === node.id ? null : node.id)} className="relative group focus:outline-none">
                <div
                  className={clsx(
                    "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300",
                    activeNode === node.id ? "bg-red-500/20 scale-110" : "bg-white/5 hover:bg-white/10"
                  )}
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  <div className={clsx("w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300", activeNode === node.id ? "bg-red-500 shadow-[0_0_15px_#ef4444]" : "bg-white/30")} />
                </div>
                {activeNode === node.id && (
                  <div className="absolute inset-[-10px] border border-red-500/30 rounded-full animate-spin-slow pointer-events-none" />
                )}
                <div className={clsx(
                  "absolute top-12 sm:top-14 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] font-mono tracking-widest uppercase whitespace-nowrap transition-colors duration-300 bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/5",
                  activeNode === node.id ? "text-red-400 border-red-500/30" : "text-white/40"
                )}>
                  {node.label}
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Info Panel — bottom sheet on mobile, side panel on desktop */}
        {activeData && (
          <>
            {/* Desktop side panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="hidden md:flex absolute top-0 right-0 w-80 lg:w-96 h-full bg-[#0B0F1A]/80 backdrop-blur-2xl border-l border-white/5 p-8 flex-col justify-center z-20"
            >
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
              <div className="text-xs font-mono text-red-500 mb-2">ID: {activeData.id.toUpperCase()}_01</div>
              <h4 className="text-2xl lg:text-3xl text-white font-bold mb-4 tracking-tight uppercase">{activeData.label}</h4>
              <p className="text-white/70 leading-relaxed font-light border-l-2 border-white/10 pl-4 mb-8">{activeData.description}</p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 font-mono text-xs">
                <div className="text-white/30 uppercase">Status</div>
                <div className="text-green-400 uppercase text-right flex items-center justify-end gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Operational
                </div>
                <div className="text-white/30 uppercase">Uptime</div>
                <div className="text-white/60 text-right">99.99%</div>
                <div className="text-white/30 uppercase">Load</div>
                <div className="w-full bg-white/10 h-2 rounded-full mt-1 col-span-2 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} className="h-full bg-red-500" />
                </div>
              </div>
              <button onClick={() => setActiveNode(null)} className="mt-8 w-full py-3 bg-white/5 border border-white/10 text-white text-xs tracking-widest uppercase hover:bg-white/10 transition-colors">
                Close Panel
              </button>
            </motion.div>

            {/* Mobile bottom sheet */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden absolute bottom-0 left-0 right-0 bg-[#0B0F1A]/95 backdrop-blur-2xl border-t border-white/10 p-5 z-20 rounded-t-2xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[10px] font-mono text-red-500 mb-1">ID: {activeData.id.toUpperCase()}_01</div>
                  <h4 className="text-xl text-white font-bold tracking-tight uppercase">{activeData.label}</h4>
                </div>
                <button onClick={() => setActiveNode(null)} className="text-white/40 hover:text-white text-xs font-mono uppercase border border-white/10 px-2 py-1">✕</button>
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-light border-l-2 border-white/10 pl-3">{activeData.description}</p>
              <div className="flex items-center gap-2 mt-3 text-xs font-mono text-green-400">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Operational — Uptime 99.99%
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
