import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, fadeUp } from "../data/constants";
import ArrowIcon from "./ArrowIcon";

export default function Contact() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="relative z-10 bg-[#101318] pt-24 md:pt-36 pb-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">

        {/* CTA */}
        <motion.div {...fadeUp} className="mb-20 md:mb-28">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            <span className="tracking-mono text-white/70 group-hover:text-white transition-colors">
              ( LET&apos;S WORK TOGETHER
            </span>
            <ArrowIcon
              size={16}
              className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            />
            <span className="tracking-mono text-white/70 group-hover:text-white transition-colors">)</span>
          </a>
        </motion.div>

        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Footer grid */}
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div className="space-y-3">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="tracking-mono text-white/50 hover:text-white transition-colors block">
              {SOCIAL_LINKS.email.toUpperCase()}
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="tracking-mono text-white/50 hover:text-white transition-colors block">
              GITHUB
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="tracking-mono text-white/50 hover:text-white transition-colors block">
              LINKEDIN
            </a>
          </div>

          <div className="space-y-3">
            <p className="tracking-mono text-white/40">IST — {time}</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="tracking-mono text-white/50 hover:text-white transition-colors cursor-pointer block"
            >
              BACK TO TOP
            </button>
            <a href={SOCIAL_LINKS.resume} download className="tracking-mono text-white/50 hover:text-white transition-colors block">
              DOWNLOAD RESUME ↓
            </a>
          </div>

          <div className="space-y-3">
            <p className="tracking-mono text-white/40 text-right sm:text-right">© JASH BORAD 2026</p>
            <p className="tracking-mono text-white/30 text-right sm:text-right">FULL STACK DEV & ROBOTICS</p>
          </div>
        </motion.div>

        {/* Decorative name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative py-8 md:py-12 overflow-hidden"
        >
          <h2
            className="text-center font-extrabold leading-none select-none whitespace-nowrap w-full"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.15)",
              textShadow: "0 0 40px rgba(255,255,255,0.03), 0 4px 0 rgba(255,255,255,0.05)",
            }}
          >
            || જશ બોરડ ||
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
