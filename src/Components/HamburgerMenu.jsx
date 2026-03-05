import { motion } from "framer-motion";
import { MagneticWrap } from "./Animations";

/**
 * Very Unique Liquid Gooey Hamburger Menu.
 * Uses SVG filters and path morphing for a mercury-like effect.
 */
export default function HamburgerMenu({ isOpen, toggle, className = "" }) {
  // SVG Filter ID must be unique
  const filterId = "gooey-menu-filter";

  const variants = {
    top: {
      closed: { d: "M 5 7 L 25 7", rotate: 0, y: 0 },
      open: { d: "M 7 23 L 23 7", rotate: 0, y: 0 },
    },
    bottom: {
      closed: { d: "M 5 23 L 25 23", rotate: 0, y: 0 },
      open: { d: "M 7 7 L 23 23", rotate: 0, y: 0 },
    },
    // Middle bar stretches and dissolves into the gooey mass
    middle: {
      closed: { opacity: 1, scaleX: 1, x: 0 },
      open: { opacity: 0, scaleX: 0.2, x: 5 },
    }
  };

  return (
    <MagneticWrap strength={0.4} className={className}>
      <button
        onClick={toggle}
        className="relative z-50 p-4 group cursor-pointer focus:outline-none"
        aria-label="Toggle menu"
      >
        {/* SVG with Liquid Filter */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="relative z-10"
          style={{ filter: `url(#${filterId})` }}
        >
          <defs>
            <filter id={filterId}>
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>

          <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
            <motion.path
              d={variants.top.closed.d}
              variants={variants.top}
              animate={isOpen ? "open" : "closed"}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            />
            <motion.path
              d="M 5 15 L 25 15"
              variants={variants.middle}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d={variants.bottom.closed.d}
              variants={variants.bottom}
              animate={isOpen ? "open" : "closed"}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            />
          </g>
        </svg>

        {/* Dynamic Background Halo */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 border border-white/0 group-hover:border-white/10 transition-all duration-500"
          animate={isOpen ? { scale: 1.1, backgroundColor: "rgba(235, 218, 40, 0.05)", borderColor: "rgba(235, 218, 40, 0.2)" } : { scale: 1 }}
        />

        {/* Ripple effect on click/hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent/30 pointer-events-none"
          initial={{ scale: 0.5, opacity: 0 }}
          whileHover={{ scale: 1.4, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </button>
    </MagneticWrap>
  );
}
