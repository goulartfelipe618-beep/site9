import { Link, useLocation } from "react-router-dom";
import { Menu, X, Anchor } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Transfer" },
    { to: "/grupos", label: "Grupos" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      {/* Reading progress bar */}
      <div className="reading-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6">
          <div className="py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Anchor size={16} className="text-primary-foreground" />
              </div>
              <span className="text-lg text-foreground font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
                Riviera
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm transition-colors duration-300 ${
                    location.pathname === l.to
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block summer-btn-coral !py-2.5 !px-6 !text-sm"
            >
              Reservar
            </a>

            <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[65px] left-0 right-0 z-40 overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm py-2 ${
                    location.pathname === l.to ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="summer-btn-coral text-center !text-sm mt-2"
              >
                Reservar
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Anchor floating button */}
      <a
        href="#cotacao"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        style={{ boxShadow: '0 8px 30px hsl(10, 80%, 62%, 0.35)' }}
        aria-label="Cotação rápida"
      >
        <Anchor size={22} />
      </a>
    </>
  );
};
