import { motion } from "framer-motion";
import { EASE_OUT } from "../data/constants";

/**
 * TextReveal — reveals text word-by-word or character-by-character
 * on scroll with staggered delays and blur effect.
 */
export function TextReveal({ children, className = "", delay = 0, by = "word" }) {
  const text = typeof children === "string" ? children : "";
  const items = by === "char" ? text.split("") : text.split(" ");

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: by === "char" ? 0.02 : 0.04, delayChildren: delay },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: EASE_OUT } },
          }}
          className="inline-block"
          style={{ marginRight: by === "char" ? 0 : "0.3em" }}
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * SlideReveal — slides content in with a clip-path mask reveal effect.
 */
export function SlideReveal({ children, className = "", delay = 0, direction = "up" }) {
  const clipPaths = {
    up: "inset(100% 0 0 0)",
    left: "inset(0 100% 0 0)",
    down: "inset(0 0 100% 0)",
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { clipPath: clipPaths[direction] || clipPaths.up, opacity: 0 },
        visible: { clipPath: "inset(0 0 0 0)", opacity: 1, transition: { duration: 0.8, ease: EASE_OUT, delay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * MagneticWrap — makes children subtly follow the cursor on hover.
 */
export function MagneticWrap({ children, strength = 0.3, className = "" }) {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
    e.currentTarget.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    setTimeout(() => {
      if (e.currentTarget) e.currentTarget.style.transition = "";
    }, 400);
  };

  return (
    <div
      className={`inline-block cursor-hover ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
