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

const experiences = [
  {
    title: "Python Developer Trainee",
    company: "BrainyBeam Technologies Pvt. Ltd.",
    duration: "May 2025 – Jun 2025",
    location: "Remote",
    type: "Internship",
    details: [
      "Completed a structured 30-day internship focused on Python and Django backend development.",
      "Worked with Django MVT architecture, ORM, authentication, and relational database integration.",
      "Developed CustomerPlus — full CRUD portal with relational models using Django ORM.",
      "Implemented reusable backend modules and applied scalable application design principles.",
    ],
  },
  {
    title: "ROS Lead",
    company: "GCET Team Robocon",
    duration: "Jan 2024 – Present",
    location: "ABU Robocon 2025 & 2026",
    type: "Leadership",
    details: [
      "Led ROS development for ABU Robocon 2025 and currently serving as ROS Lead for Robocon 2026.",
      "Secured institutional grants of Rs. 6,05,000 (2025) and Rs. 7,00,000 (2026) from Charutar Vidya Mandal.",
      "Designed omni-directional drive robot controller using ROS2, TF2, and Navigation2 frameworks.",
      "Implemented Visual Odometry and the Navigation2 stack for real-time robot localization.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-[110px] pt-2">
      <SectionHeading>Experience</SectionHeading>

      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <motion.div key={exp.title}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ x: 5 }}
            className="glass rounded-2xl p-7 border border-white/[0.07] border-l-[3px] border-l-orange-500/70
              hover:bg-white/[0.06] hover:border-l-orange-400 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-heading font-semibold text-white text-xl mb-1">{exp.title}</h3>
                <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full
                  bg-orange-500/15 text-orange-400 border border-orange-500/30">{exp.type}</span>
                <span className="text-slate-400 text-xs">{exp.duration}</span>
                <span className="text-slate-600 text-[11px]">{exp.location}</span>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.details.map((d, j) => (
                <li key={j} className="text-slate-400 text-sm leading-relaxed pl-5 relative
                  before:absolute before:left-0 before:content-['▹'] before:text-orange-400 before:text-base before:leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
