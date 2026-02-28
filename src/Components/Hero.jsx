import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { EASE_OUT } from "../data/constants";

const SHADOW_LAYERS = 20;
const SHADOW_COLOR = "rgb(235, 218, 40)";

function buildShadow(progress) {
  const shadows = [];
  for (let i = 1; i <= SHADOW_LAYERS; i++) {
    const offset = i * progress;
    shadows.push(`${offset}px ${offset}px 0px ${SHADOW_COLOR}`);
  }
  return shadows.join(", ");
}

export default function Hero() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const animateShadow = useCallback((ref, progress, duration, ease) => {
    if (!ref.current) return;
    gsap.to(ref.current, { textShadow: buildShadow(progress), duration, ease });
  }, []);

  const handleMouseEnter = useCallback((ref) => animateShadow(ref, 1, 0.4, "power2.out"), [animateShadow]);
  const handleMouseLeave = useCallback((ref) => animateShadow(ref, 0, 0.3, "power2.in"), [animateShadow]);

  const handleTap = useCallback((ref) => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      textShadow: buildShadow(1),
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(ref.current, {
          textShadow: buildShadow(0),
          duration: 0.6,
          delay: 1,
          ease: "power2.in",
        });
      },
    });
  }, []);


  return (
    <section className="relative h-[100svh] flex flex-col justify-center md:justify-end overflow-hidden bg-[#101318] px-6 md:px-12 pb-10 md:pb-16">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top info bar */}
      <div className="absolute top-16 left-6 right-6 md:top-28 md:left-12 md:right-12">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-[260px] md:max-w-xs"
          >
            <p className="text-white/60 text-xs md:text-base leading-relaxed">
              I&apos;m <span className="text-white font-medium">Jash Borad</span>,
              a software developer passionate about building scalable web apps &mdash; with robotics as my creative hobby.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden md:block text-right"
          >
            <div className="flex items-center gap-2 justify-end mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-mono text-white/30 text-[10px]">OPEN TO WORK</span>
            </div>
            <p className="tracking-mono text-white/20 text-[10px]">EST. 2023</p>
          </motion.div>
        </div>
      </div>

      {/* Main hero typography */}
      <div className="relative w-full max-w-[1400px] mx-auto mt-32 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
          className="flex items-baseline justify-between"
        >
          <h1 
            ref={line1Ref}
            className="hero-title italic cursor-default select-none"
            onMouseEnter={() => handleMouseEnter(line1Ref)}
            onMouseLeave={() => handleMouseLeave(line1Ref)}
            onClick={() => handleTap(line1Ref)}
            style={{ textShadow: buildShadow(0) }}
          >
            <span className="sr-only">Jash Borad - </span>
            Full Stack
          </h1>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden md:block tracking-mono text-white/20 text-xs pb-4"
          >
            FULL STACK<br />DEVELOPER
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE_OUT }}
          className="flex items-baseline gap-6 md:gap-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: EASE_OUT }}
            className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mt-auto mb-6 origin-left"
          />
          <h2 // Changed from h1 for SEO (semantic structure)
            ref={line2Ref}
            className="hero-title italic cursor-default select-none"
            onMouseEnter={() => handleMouseEnter(line2Ref)}
            onMouseLeave={() => handleMouseLeave(line2Ref)}
            onClick={() => handleTap(line2Ref)}
            style={{ textShadow: buildShadow(0) }}
          >
            developer<span className="text-[#EBDA28]">.</span>
          </h2>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
