import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "ROS Lead @ GCET Robocon",
  "ML Enthusiast",
  "Cloud Computing Explorer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (!deleting && charIndex < current.length) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 65);
    } else if (!deleting && charIndex === current.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated background orbs */}
      <div className="absolute w-[520px] h-[520px] rounded-full pointer-events-none orb-drift"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 68%)", top: "-120px", right: "-100px" }} />
      <div className="absolute w-[380px] h-[380px] rounded-full pointer-events-none orb-drift-2"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 68%)", bottom: "-80px", left: "-80px" }} />
      <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none orb-drift-3"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 68%)", top: "40%", left: "30%" }} />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div variants={item}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-green-500/25 text-green-400 text-xs font-medium tracking-wider mb-9">
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" style={{ boxShadow: "0 0 8px #4ade80" }} />
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="font-heading font-extrabold text-6xl md:text-7xl tracking-tight mb-5 leading-[1.05]">
          <span className="text-gradient">Jash Borad</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={item} className="font-heading text-xl md:text-2xl font-semibold text-blue-400 h-9 flex items-center gap-0.5 mb-7">
          <AnimatePresence mode="wait">
            <span key={displayed}>{displayed}</span>
          </AnimatePresence>
          <span className="blink text-blue-400 font-light ml-0.5">|</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={item} className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
          Passionate about Full Stack Web Development, Robotics, Cloud Computing &amp; Machine Learning.
          Pursuing B.Tech CSE with{" "}
          <span className="text-blue-400 font-bold neon-text">9.34 CGPA</span>{" "}
          at G.H Patel College of Engineering &amp; Technology, Anand.
        </motion.p>

        {/* Stats */}
        <motion.div variants={item}
          className="flex items-center glass rounded-2xl px-8 py-5 mb-10 divide-x divide-white/10">
          {[
            { val: "9.34", label: "CGPA" },
            { val: "10+", label: "Projects Built" },
            { val: "2×", label: "ABU Robocon" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center px-7 first:pl-0 last:pr-0">
              <span className="font-heading text-3xl font-bold text-blue-400 neon-text leading-none">{s.val}</span>
              <span className="text-slate-500 text-[10px] uppercase tracking-widest mt-1.5">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="flex gap-4 flex-wrap justify-center">
          <motion.a
            href="/documents/Jash_Borad_Resume.pdf"
            download
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-500 text-white font-semibold text-sm tracking-wide transition-colors hover:bg-blue-600"
            style={{ boxShadow: "0 4px 20px rgba(59,130,246,0.4)" }}
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-blue-500/40 text-slate-200 font-semibold text-sm tracking-wide hover:border-blue-400 hover:text-white transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
