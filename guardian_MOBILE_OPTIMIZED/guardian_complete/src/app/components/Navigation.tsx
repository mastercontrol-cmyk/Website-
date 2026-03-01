import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll);
    if (!isHome) setVisible(true);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  if (!visible && isHome) return null;

  function handleNavLink(section: string) {
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  }

  return (
    <>
      {/* Main nav bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
        <div className="flex items-center justify-between px-5 py-3 backdrop-blur-md bg-black/60 border border-white/10 rounded-full">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/assets/guardian-wordmark.png" alt="Guardian" className="h-6 object-contain brightness-0 invert" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex gap-6 text-xs uppercase tracking-widest text-white/40">
            <button onClick={() => handleNavLink("system")} className="hover:text-white transition-colors">system</button>
            <button onClick={() => handleNavLink("control")} className="hover:text-white transition-colors">control</button>
            <Link to="/download" className="hover:text-white transition-colors">access</Link>
          </nav>

          <div className="hidden sm:flex items-center gap-2 text-xs text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            online
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white/60 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden mt-2 backdrop-blur-md bg-black/80 border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex flex-col py-2">
              <button
                onClick={() => handleNavLink("system")}
                className="px-6 py-4 text-left text-sm text-white/60 uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all"
              >
                System
              </button>
              <button
                onClick={() => handleNavLink("control")}
                className="px-6 py-4 text-left text-sm text-white/60 uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all"
              >
                Control
              </button>
              <Link
                to="/download"
                className="px-6 py-4 text-sm text-white/60 uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all"
              >
                Access
              </Link>
              <div className="mx-6 my-3 border-t border-white/10" />
              <Link to="/features" className="px-6 py-3 text-sm text-white/40 hover:text-white transition-colors">Features</Link>
              <Link to="/hardware" className="px-6 py-3 text-sm text-white/40 hover:text-white transition-colors">Hardware</Link>
              <Link to="/pricing" className="px-6 py-3 text-sm text-white/40 hover:text-white transition-colors">Pricing</Link>
              <Link to="/about" className="px-6 py-3 text-sm text-white/40 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="px-6 py-3 text-sm text-white/40 hover:text-white transition-colors">Contact</Link>
              <div className="px-6 py-4 flex items-center gap-2 text-xs text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                online
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
