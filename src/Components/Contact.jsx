import { motion } from "framer-motion";

function SectionHeading({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="font-heading font-bold text-[38px] text-white tracking-tight mb-12 flex items-center gap-4">
      {children}
      <span className="inline-block h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-500 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
    </motion.h2>
  );
}

const contacts = [
  {
    label: "Email", value: "jashborad13@gmail.com", href: "mailto:jashborad13@gmail.com",
    hoverBorder: "hover:border-blue-500/40", hoverShadow: "hover:shadow-[0_8px_28px_rgba(59,130,246,0.15)]",
    iconColor: "text-blue-400",
    icon: <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />,
  },
  {
    label: "GitHub", value: "github.com/Boradjash29", href: "https://github.com/Boradjash29", external: true,
    hoverBorder: "hover:border-white/20", hoverShadow: "hover:shadow-[0_8px_28px_rgba(255,255,255,0.06)]",
    iconColor: "text-slate-300",
    icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
  },
  {
    label: "LinkedIn", value: "linkedin.com/in/borad-jash-h2901", href: "https://linkedin.com/in/borad-jash-h2901", external: true,
    hoverBorder: "hover:border-[#0077B5]/40", hoverShadow: "hover:shadow-[0_8px_28px_rgba(0,119,181,0.15)]",
    iconColor: "text-[#0077B5]",
    icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
  },
  {
    label: "Phone", value: "+91-9773435148", href: "tel:+919773435148",
    hoverBorder: "hover:border-green-500/30", hoverShadow: "hover:shadow-[0_8px_28px_rgba(74,222,128,0.1)]",
    iconColor: "text-green-400",
    icon: <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mt-[110px] pt-2 pb-28">
      <SectionHeading>Get In Touch</SectionHeading>

      <p className="text-slate-400 text-base mb-10 max-w-xl leading-relaxed">
        I'm currently open to new opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((c, i) => (
          <motion.div key={c.label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className={`glass rounded-2xl p-5 border border-white/[0.07] flex gap-4 items-start transition-all duration-300 ${c.hoverBorder} ${c.hoverShadow} hover:bg-white/[0.06]`}>
            <div className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${c.iconColor}`}>
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">{c.icon}</svg>
            </div>
            <div className="min-w-0">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-medium mb-1">{c.label}</p>
              <a href={c.href} target={c.external ? "_blank" : undefined} rel="noopener noreferrer"
                className="text-slate-200 text-sm hover:text-white transition-colors break-all">
                {c.value}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
