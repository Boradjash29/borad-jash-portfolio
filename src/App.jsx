import { useState, useEffect, lazy, Suspense, useCallback, memo, Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { NAV_ITEMS } from "./data/constants";

// Critical components - load immediately
import { MagneticWrap } from "./Components/Animations";
import HamburgerMenu from "./Components/HamburgerMenu";

// Lazy load heavy components for code splitting
const SplineSceneBasic = lazy(() => 
  import("./Components/SplineHero").then(m => ({ default: m.SplineSceneBasic }))
);
const Marquee = lazy(() => import("./Components/Marquee"));
const About = lazy(() => import("./Components/About"));
const Portfolio = lazy(() => import("./Components/Portfolio"));
const Skills = lazy(() => import("./Components/Skills"));
const Contact = lazy(() => import("./Components/Contact"));
const CustomCursor = lazy(() => import("./Components/CustomCursor"));
const LiquidMenu = lazy(() => import("./Components/LiquidMenu"));

// Error boundary to catch and display errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-900 text-white p-8">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <pre className="bg-black/50 p-4 rounded overflow-auto text-sm">
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Loading fallback component
const SectionLoader = memo(function SectionLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-bg-secondary">
      <div className="w-8 h-8 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
    </div>
  );
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoized Lenis initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Performance optimizations
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Throttled scroll event dispatch
    let lastScrollTime = 0;
    lenis.on("scroll", () => {
      const now = performance.now();
      if (now - lastScrollTime > 16) { // ~60fps throttle
        window.dispatchEvent(new Event("scroll"));
        lastScrollTime = now;
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoized callbacks to prevent re-renders
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
  
  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const navBg = "bg-transparent pointer-events-none";

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-bg-secondary text-white font-primary relative">
      {/* Custom cursor - lazy loaded, desktop only */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Page load overlay - GPU accelerated */}
      <motion.div
        className="fixed inset-0 bg-bg-secondary z-[100] pointer-events-none will-change-[opacity]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${navBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <MagneticWrap strength={0.4} className="pointer-events-auto">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              animate={{ opacity: (scrolled || menuOpen) ? 0 : 1, x: (scrolled || menuOpen) ? -20 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white font-bold text-lg sm:text-xl tracking-tight hover:text-white/90 transition-colors min-h-[44px] flex items-center"
              style={{ pointerEvents: (scrolled || menuOpen) ? "none" : "auto" }}
            >
              || JB ||
            </motion.a>
          </MagneticWrap>

          {/* Desktop nav - hidden when scrolled or menu open */}
          <motion.div
            animate={{ opacity: (scrolled || menuOpen) ? 0 : 1, x: (scrolled || menuOpen) ? 20 : 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center gap-10"
            style={{ pointerEvents: (scrolled || menuOpen) ? "none" : "auto" }}
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

          {/* Hamburger menu */}
          <div 
            className="hamburger-wrapper pointer-events-auto"
            data-show-desktop={scrolled || menuOpen ? "true" : "false"}
          >
            <HamburgerMenu 
              isOpen={menuOpen} 
              toggle={toggleMenu} 
            />
          </div>
        </div>
      </nav>

      {/* Liquid Fullscreen Menu */}
      <Suspense fallback={null}>
        <LiquidMenu 
          isOpen={menuOpen} 
          toggle={toggleMenu} 
          scrollTo={scrollTo}
        />
      </Suspense>

      {/* Hero Section - Critical, loads first */}
      <Suspense fallback={<SectionLoader />}>
        <SplineSceneBasic />
      </Suspense>
      
      {/* Below-fold sections - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Marquee />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </div>
    </ErrorBoundary>
  );
}

export default App;
