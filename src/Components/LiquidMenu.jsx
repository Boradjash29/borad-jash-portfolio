import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "../data/constants";

/**
 * LiquidMenu — Fullscreen overlay with a morphing SVG path reveal.
 */
export default function LiquidMenu({ isOpen, toggle, scrollTo }) {
  // SVG Path variants for the liquid reveal
  // We use a "curve" that flattens out to cover the screen
  const curveVariants = {
    initial: {
      d: "M0 0 L100 0 L100 0 Q50 0 0 0 Z",
    },
    opened: {
      d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: "M0 100 L100 100 L100 100 Q50 100 0 100 Z",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial="initial"
          animate="opened"
          exit="exit"
        >
          {/* Morphing SVG Background */}
          <svg className="absolute top-0 w-full h-[calc(100%+100px)] fill-[#101318]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path variants={curveVariants} />
          </svg>

          {/* Menu Content */}
          <div 
            className="relative z-10 h-full w-full flex flex-col items-center justify-center pointer-events-auto px-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) toggle();
            }}
          >
            <div className="flex flex-col gap-6 md:gap-10 items-center">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.id} className="overflow-hidden">
                  <motion.button
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 80, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: isOpen ? 0.35 + (i * 0.08) : 0, 
                      ease: [0.33, 1, 0.68, 1] 
                    }}
                    onClick={() => {
                        scrollTo(item.id);
                    }}
                    className="group relative text-4xl md:text-7xl font-bold tracking-tighter text-white/40 hover:text-white transition-colors duration-300 py-2"
                  >
                    <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-sm font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 text-[#EBDA28]">
                      0{i + 1}
                    </span>
                    {item.label}
                    <motion.div 
                        className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#EBDA28] group-hover:w-full transition-all duration-500"
                    />
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Bottom Credits/Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-px bg-white/20" />
              <p className="text-white/20 text-[10px] tracking-widest uppercase">Jash Borad &mdash; Portfolio 2026</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
