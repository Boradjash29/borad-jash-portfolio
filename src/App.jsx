import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { NAV_ITEMS } from "./data/constants";
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import CustomCursor from "./Components/CustomCursor";
import { MagneticWrap } from "./Components/Animations";
import HamburgerMenu from "./Components/HamburgerMenu";
import LiquidMenu from "./Components/LiquidMenu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inProjects, setInProjects] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        const rect = projectsEl.getBoundingClientRect();
        setInProjects(rect.top < 60 && rect.bottom > 60);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled && !inProjects
    ? "bg-[#101318]/90 backdrop-blur-xl border-b border-white/5"
    : "bg-transparent";

  return (
    <div className="min-h-screen bg-[#101318] text-white font-primary relative">
      <CustomCursor />

      {/* Page load overlay */}
      <motion.div
        className="fixed inset-0 bg-[#101318] z-[100] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${navBg}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <MagneticWrap strength={0.4}>
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              animate={{ opacity: (inProjects || menuOpen) ? 0 : 1, x: (inProjects || menuOpen) ? -20 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white font-bold text-lg tracking-tight"
              style={{ pointerEvents: (inProjects || menuOpen) ? "none" : "auto" }}
            >
              || JB ||
            </motion.a>
          </MagneticWrap>

          {/* Desktop nav */}
          <motion.div
            animate={{ opacity: (inProjects || menuOpen) ? 0 : 1, x: (inProjects || menuOpen) ? 20 : 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center gap-10"
            style={{ pointerEvents: (inProjects || menuOpen) ? "none" : "auto" }}
          >
            {NAV_ITEMS.map((item) => (
              <MagneticWrap key={item.id} strength={0.25}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="group relative tracking-mono text-white/50 hover:text-white transition-colors duration-300 cursor-pointer py-1 px-2"
                >
                  <span className="absolute right-[calc(100%+0.4rem)] top-1/2 -translate-y-1/2 text-white/0 group-hover:text-white/70 group-hover:right-[calc(100%+0.6rem)] transition-all duration-200 ease-out text-xs font-light">
                    ||
                  </span>
                  {item.label}
                  <span className="absolute left-[calc(100%+0.4rem)] top-1/2 -translate-y-1/2 text-white/0 group-hover:text-white/70 group-hover:left-[calc(100%+0.6rem)] transition-all duration-200 ease-out text-xs font-light">
                    ||
                  </span>
                </button>
              </MagneticWrap>
            ))}
          </motion.div>

          {/* Desktop hamburger — projects section only */}
          <AnimatePresence>
            {inProjects && (
              <HamburgerMenu 
                isOpen={menuOpen} 
                toggle={() => setMenuOpen(!menuOpen)} 
                className="hidden md:block"
              />
            )}
          </AnimatePresence>

          {/* Mobile hamburger */}
          <HamburgerMenu 
            isOpen={menuOpen} 
            toggle={() => setMenuOpen(!menuOpen)} 
            className="md:hidden"
          />
        </div>
      </nav>

      {/* New Liquid Fullscreen Menu Reveal */}
      <LiquidMenu 
        isOpen={menuOpen} 
        toggle={() => setMenuOpen(!menuOpen)} 
        scrollTo={scrollTo}
      />

      <Hero />
      <About />
      <Portfolio />
      <Marquee />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
