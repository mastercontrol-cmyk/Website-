import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 px-5 md:px-12 bg-[#050608] border-t border-white/5 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-3">
            <img src="/assets/guardian-wordmark.png" alt="Guardian" className="h-10 object-contain brightness-0 invert" />
          </div>
          <p className="text-sm text-white/40 leading-relaxed">
            Personal AI Safety Agent. <br/>
            Protected by local intelligence. Zero-knowledge architecture.
          </p>
          <div className="flex gap-4 mt-2">
             <a href="https://twitter.com/guardianai" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </a>
             <a href="https://github.com/guardian-ai" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="sr-only">GitHub</span>
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
             </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
            <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs">Product</h4>
                <Link to="/features" className="text-sm text-white/50 hover:text-white transition-colors">Features</Link>
                <Link to="/hardware" className="text-sm text-white/50 hover:text-white transition-colors">Hardware</Link>
                <Link to="/app" className="text-sm text-white/50 hover:text-white transition-colors">App</Link>
                <Link to="/pricing" className="text-sm text-white/50 hover:text-white transition-colors">Pricing</Link>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs">Company</h4>
                <Link to="/about" className="text-sm text-white/50 hover:text-white transition-colors">About</Link>
                <Link to="/careers" className="text-sm text-white/50 hover:text-white transition-colors">Careers</Link>
                <Link to="/blog" className="text-sm text-white/50 hover:text-white transition-colors">Blog</Link>
                <Link to="/contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs">Legal</h4>
                <Link to="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="text-sm text-white/50 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-white/20">
          © 2026 Guardian AI. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-white/40 font-mono">ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>
    </footer>
  );
}
