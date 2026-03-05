import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, fadeUp } from "../data/constants";
import ArrowIcon from "./ArrowIcon";

// Reusable animated card wrapper matching About.jsx
const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={`bg-bg-primary/50 border border-white/5 rounded-3xl p-6 sm:p-8 hover:bg-bg-primary transition-colors flex flex-col justify-between ${className}`}
  >
    {children}
  </motion.div>
);

const Contact = memo(function Contact() {
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
    <section id="contact" className="relative z-10 bg-bg-secondary pt-16 sm:pt-20 lg:pt-28 xl:pt-36 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Title */}
        <motion.div 
          {...fadeUp} 
          className="flex flex-col items-center justify-center mb-10 sm:mb-12 text-center"
        >
          <h2 className="tracking-mono text-white/40 text-sm sm:text-base">
            ( CONTACT )
          </h2>
        </motion.div>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          
          {/* Main CTA Card (Spans 2 columns on lg) */}
          <BentoCard className="md:col-span-2" delay={0.1}>
            <div className="flex flex-col h-full justify-between gap-12 sm:gap-16">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-bg-secondary/50 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] text-white/60 font-medium">AVAILABLE FOR HIRE</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white/90 leading-tight">
                  Have a great idea? <br />
                  <span className="font-medium text-white">Let's build it together.</span>
                </h3>
              </div>
              
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-bg-secondary border border-white/5 hover:border-white/20 transition-all duration-300 w-full lg:w-3/4"
              >
                <span className="tracking-mono text-white/70 group-hover:text-white transition-colors text-xs sm:text-sm">
                  {SOCIAL_LINKS.email}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                  <ArrowIcon
                    size={14}
                    className="text-white/50 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </a>
            </div>
          </BentoCard>

          {/* Socials Card */}
          <BentoCard delay={0.2}>
            <h4 className="tracking-mono text-white/40 text-xs sm:text-sm mb-6 flex items-center gap-4">
              SOCIALS
              <div className="flex-1 h-px bg-white/5" />
            </h4>
            
            <div className="space-y-4 flex-1">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-bg-secondary transition-all">
                <span className="tracking-wide text-white/80 group-hover:text-white text-sm">GitHub</span>
                <ArrowIcon size={12} className="text-white/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-bg-secondary transition-all">
                <span className="tracking-wide text-white/80 group-hover:text-white text-sm">LinkedIn</span>
                <ArrowIcon size={12} className="text-white/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </BentoCard>

          {/* Info Card (Full width on md, 1 col on lg) */}
          <BentoCard className="md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-6" delay={0.3}>
            <div className="space-y-2 mb-6 lg:mb-0">
              <p className="tracking-mono text-white/40 text-xs sm:text-sm uppercase">Local Time</p>
              <p className="text-white/80 text-lg font-mono tracking-wider">{time} <span className="text-white/40 text-sm ml-2">IST</span></p>
            </div>
            
            <div className="flex flex-col justify-center mb-6 lg:mb-0 lg:items-center">
              <a href={SOCIAL_LINKS.resume} download className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <span className="tracking-mono text-xs sm:text-sm">DOWNLOAD RESUME</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <span className="font-mono text-xs">↓</span>
                </div>
              </a>
            </div>

            <div className="flex flex-col justify-end lg:items-end space-y-1">
              <p className="tracking-mono text-white/40 text-xs text-right">© JASH BORAD 2026</p>
              <p className="tracking-mono text-white/30 text-[10px] text-right">FULL STACK DEV & ROBOTICS</p>
            </div>
          </BentoCard>

        </div>

        {/* Decorative name Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative py-4 lg:py-8 overflow-hidden border-t border-white/5"
        >
          <div className="flex items-center justify-between absolute right-0 top-0 left-0 p-4">
             <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="tracking-mono text-white/40 hover:text-white transition-colors cursor-pointer text-[10px] uppercase ml-auto border border-white/5 rounded-full px-4 py-2 hover:bg-white/5"
            >
              Back to Top ↑
            </button>
          </div>
          
          <h2
            className="text-center font-extrabold leading-none select-none whitespace-nowrap w-full mt-12"
            style={{
              fontSize: "clamp(2.5rem, 12vw, 12rem)",
              letterSpacing: "-0.02em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.1)",
              textShadow: "0 0 40px rgba(255,255,255,0.02), 0 4px 0 rgba(255,255,255,0.03)",
            }}
          >
            || જશ બોરડ ||
          </h2>
        </motion.div>

      </div>
    </section>
  );
});

export default Contact;
