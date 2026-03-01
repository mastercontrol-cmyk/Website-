import { motion } from "framer-motion";
import { Lock, Smartphone, ShieldCheck, Key } from "lucide-react";
import { useEffect, useRef } from "react";

export function PrivacyVault() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix Rain Effect for the vault background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.clientWidth || 300;
    let height = canvas.height = canvas.parentElement?.clientHeight || 300;
    
    const columns = Math.floor(width / 10);
    const drops: number[] = [];
    for(let i=0; i<columns; i++) drops[i] = 1;


    let animationId: number;

    function draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(11, 15, 26, 0.1)";
        ctx.fillRect(0, 0, width, height);
        
        ctx.fillStyle = "rgba(220, 38, 38, 0.5)";
        ctx.font = "8px monospace";
        
        for(let i=0; i<drops.length; i++) {
            const text = Math.random() > 0.5 ? "0" : "1";
            ctx.fillText(text, i*12, drops[i]*12);
            
            if(drops[i]*12 > height && Math.random() > 0.98) drops[i] = 0;
            drops[i]++;
        }
        animationId = requestAnimationFrame(draw);
    }
    
    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 md:py-32 w-full px-5 md:px-12 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Visual Vault Representation - More integrated, less "cardy" */}
        <div className="w-full md:w-1/2 flex justify-center perspective-[1200px]">
          <motion.div 
            initial={{ rotateY: 0 }}
            whileInView={{ rotateY: 15 }}
            transition={{ duration: 2 }}
            className="relative w-72 h-80 md:w-96 md:h-[550px] flex items-center justify-center overflow-visible"
          >
             {/* Background glow instead of box */}
             <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-full scale-110" />
             
             {/* Matrix Rain Canvas with feathered edges */}
             <div className="absolute inset-0 mask-image-radial-gradient">
                <canvas ref={canvasRef} className="absolute inset-0 opacity-40 mix-blend-screen" />
             </div>
             
             {/* Vault Lock Interface - High Tech HUD feel */}
             <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/5 flex items-center justify-center">
                {/* Rotating HUD circles */}
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 border-t border-b border-red-500/30 rounded-full scale-[0.98]"
                />
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-4 border-l border-r border-red-500/20 rounded-full scale-[1.05]"
                />
                
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-red-900/10 backdrop-blur-2xl flex flex-col items-center justify-center border border-white/10 shadow-[0_0_80px_rgba(220,38,38,0.15)]">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Lock className="w-10 h-10 text-red-500/80 mb-3" />
                    </motion.div>
                    <span className="text-[9px] text-red-500/60 font-mono tracking-[0.4em] uppercase">Security Vault</span>
                    <span className="text-[8px] text-white/30 font-mono mt-1 uppercase tracking-widest">Active State</span>
                </div>
             </div>
             
             {/* Floating Info Labels */}
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="hidden md:block absolute top-10 left-[-40px] text-[8px] font-mono text-white/30 uppercase tracking-[0.3em] bg-black/40 backdrop-blur px-2 py-1 border border-white/5"
             >
                Encryption: GCM-AES
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="hidden md:block absolute bottom-20 right-[-40px] text-[8px] font-mono text-red-500/50 uppercase tracking-[0.3em] bg-black/40 backdrop-blur px-2 py-1 border border-red-500/20"
             >
                Zero-Knowledge Proof
             </motion.div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 space-y-12">
            <div>
                <h2 className="text-[10px] font-bold tracking-[0.5em] text-red-500 mb-4 uppercase flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-sm animate-pulse" />
                    Neural Security Layers
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-none uppercase tracking-tighter">
                    Absolute <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">Privacy</span>.
                </h3>
            </div>
            
            <p className="text-base text-white/50 leading-relaxed font-light border-l border-red-500/20 pl-6 max-w-lg">
                Guardian is engineered on a sovereign principles: your data never leaves your physical environment. Intelligence is localized. Memory is ephemeral. Control is absolute.
            </p>

            <div className="space-y-6">
                {[
                    { icon: Smartphone, title: "Edge Processing", desc: "No cloud latency. No data leaks. All intelligence stays local." },
                    { icon: ShieldCheck, title: "Cryptographic Sovereignty", desc: "Even we cannot access your system logs without your physical key." },
                    { icon: Key, title: "Decentralized Auth", desc: "Biometric and physical hardware tokens manage all access layers." }
                ].map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-start gap-6 p-1 transition-all cursor-default"
                    >
                        <div className="mt-1 p-2 border border-white/10 text-white/40 group-hover:text-red-500 group-hover:border-red-500/40 transition-all">
                            <feature.icon className="w-5 h-5" />
                        </div>
                        <div className="border-b border-white/5 pb-4 w-full">
                            <h4 className="text-white/80 font-bold uppercase text-[10px] tracking-[0.3em]">{feature.title}</h4>
                            <p className="text-white/30 text-[11px] font-mono mt-2 leading-relaxed">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
