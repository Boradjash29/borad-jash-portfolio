import { motion } from "framer-motion";

const categories = [
  { icon: "⌨️", title: "Programming Languages", skills: ["C", "C++", "JavaScript", "Python", "SQL"] },
  { icon: "⚙️", title: "Frameworks & Libraries", skills: ["Node.js", "Express.js", "React.js", "Django"] },
  { icon: "🗄️", title: "Databases", skills: ["MongoDB", "PostgreSQL", "SQLite"] },
  { icon: "🛠️", title: "Developer Tools", skills: ["Git", "GitHub", "VS Code", "Postman"] },
  { icon: "🤖", title: "Robotics & Systems", skills: ["ROS2", "TF2", "Navigation2", "Visual Odometry", "Linux", "Jetson Orin Nano", "Raspberry Pi"] },
  { icon: "🌐", title: "Areas of Interest", skills: ["Full Stack Development", "Cloud Computing", "System Design", "Machine Learning", "Big Data Analysis"] },
];

const certifications = [
  { name: "Introduction to Internet of Things", detail: "(Gold + Elite) — NPTEL", date: "May 2025" },
  { name: "Mastering Linux", detail: "— Udemy", date: "Mar 2025" },
  { name: "SQL (Basic)", detail: "— HackerRank", date: "Oct 2024" },
  { name: "Programming in C", detail: "— Red & White Skill Education", date: "Jul 2023" },
];

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

export default function Skills() {
  return (
    <section id="skills" className="mt-[110px] pt-2">
      <SectionHeading>Technical Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
        {categories.map((cat, i) => (
          <motion.div key={cat.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
            className="glass rounded-2xl p-5 border border-white/[0.07] hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300">
            <h3 className="font-heading font-semibold text-blue-400 text-[15px] flex items-center gap-2 mb-4">
              <span>{cat.icon}</span>{cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <motion.span key={skill} whileHover={{ scale: 1.06 }}
                  className="px-3 py-1.5 rounded-lg text-[12.5px] font-medium bg-white/[0.05] text-slate-300 border border-white/[0.07]
                  hover:bg-blue-500/[0.12] hover:text-blue-300 hover:border-blue-500/30 hover:shadow-[0_0_10px_rgba(59,130,246,0.14)] transition-all duration-150 cursor-default">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.45 }}
        className="glass rounded-2xl p-6 border border-white/[0.07] hover:border-blue-500/25 hover:bg-white/[0.06] transition-all duration-300">
        <h3 className="font-heading font-semibold text-blue-400 text-[18px] mb-5">🏆 Certifications</h3>
        <ul className="space-y-3.5">
          {certifications.map(cert => (
            <li key={cert.name} className="text-slate-400 text-sm leading-relaxed pl-5 relative
              before:absolute before:left-0 before:top-0.5 before:content-['✓'] before:text-green-400 before:font-bold">
              <strong className="text-slate-200">{cert.name}</strong>{" "}
              <span className="text-slate-500">{cert.detail}</span>
              <span className="ml-2 text-xs text-slate-600 bg-white/[0.04] border border-white/[0.07] rounded-full px-2 py-0.5">{cert.date}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
