import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !window.matchMedia("(max-width: 768px)").matches) return;
    const link = nav.querySelector(`a[data-section="${activeSection}"]`);
    if (link) nav.scrollTo({ left: Math.max(0, link.offsetLeft - 12), behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="sidebar fixed top-0 left-0 h-screen w-[268px] flex flex-col z-50
      bg-[rgba(5,5,5,0.88)] backdrop-blur-xl border-r border-white/[0.07]
      overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden justify-between
      max-md:static max-md:w-full max-md:h-auto max-md:flex-row max-md:items-center max-md:overflow-x-visible max-md:overflow-y-visible max-md:justify-start">

      {/* Header */}
      <div className="text-center px-7 pt-8 pb-8 max-md:text-left max-md:flex max-md:items-center max-md:gap-3 max-md:px-4 max-md:pt-3 max-md:pb-3 flex-shrink-0">
        <div className="relative inline-block mb-5 max-md:mb-0">
          {/* Spinning glow ring */}
          <div className="absolute inset-[-4px] rounded-full spin-glow z-0"
            style={{ background: "conic-gradient(from 0deg, #3b82f6, transparent, #f97316, transparent, #3b82f6)", opacity: 0.55 }} />
          <img src="/images/Profile.png" alt="Jash Borad"
            className="relative z-10 w-[108px] h-[108px] rounded-full object-cover border-2 border-blue-500/40 max-md:w-9 max-md:h-9" />
        </div>
        <div>
          <h2 className="font-heading font-bold text-[21px] text-white tracking-tight max-md:text-[15px]">Jash Borad</h2>
          <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1 max-md:hidden">CSE Student &amp; Developer</p>
        </div>
      </div>

      {/* Nav */}
      <nav ref={navRef}
        className="flex-1 flex flex-col gap-0.5 px-4 max-md:flex-row max-md:overflow-x-auto max-md:gap-1 max-md:px-2 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
        {navItems.map(({ id, label }) => (
          <motion.a
            key={id}
            href={`#${id}`}
            data-section={id}
            onClick={() => setActiveSection(id)}
            whileHover={{ x: 3 }}
            className={`relative flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200
              max-md:whitespace-nowrap max-md:px-3.5 max-md:py-2
              ${activeSection === id
                ? "bg-blue-500/15 text-white font-semibold"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"}`}
          >
            <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 transition-all duration-200 max-md:hidden
              ${activeSection === id ? "bg-blue-400 shadow-[0_0_8px_#60a5fa]" : "bg-white/20"}`} />
            {label}
            {activeSection === id && (
              <motion.div layoutId="nav-pill"
                className="absolute inset-0 rounded-xl border border-blue-500/30 pointer-events-none"
                transition={{ type: "spring", bounce: 0.22, duration: 0.45 }} />
            )}
          </motion.a>
        ))}
      </nav>

      {/* Socials */}
      <div className="flex justify-center gap-3 px-5 py-5 flex-shrink-0 border-t border-white/[0.06] max-md:hidden">
        {[
          { href: "https://linkedin.com/in/borad-jash-h2901", label: "LinkedIn", hoverClass: "hover:text-[#0077B5] hover:border-[#0077B5]/35 hover:shadow-[0_0_14px_rgba(0,119,181,0.3)]",
            icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
          { href: "mailto:jashborad13@gmail.com", label: "Email", hoverClass: "hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]",
            icon: <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /> },
          { href: "https://github.com/Boradjash29", label: "GitHub", hoverClass: "hover:text-white hover:border-white/25 hover:shadow-[0_0_14px_rgba(255,255,255,0.1)]",
            icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> },
        ].map(s => (
          <motion.a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer" aria-label={s.label}
            whileHover={{ y: -3 }}
            className={`flex items-center justify-center w-9 h-9 rounded-xl glass text-slate-400 transition-all duration-250 ${s.hoverClass}`}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
