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

const education = [
  { degree: "B.Tech in Computer Science and Engineering", institute: "G.H Patel College of Engineering & Technology, Anand", year: "2023 – 2027", grade: "CGPA: 9.34", highlight: true },
  { degree: "Senior Secondary (12th)", institute: "AshaDeep International School, Surat (GSEB)", year: "2023", grade: "Percentage: 72%" },
  { degree: "Secondary (10th)", institute: "J.B. & KARP Vidya Sankul, Surat (GSEB)", year: "2021", grade: "Percentage: 79%" },
];

export default function Education() {
  return (
    <section id="education" className="mt-[110px] pt-2">
      <SectionHeading>Education</SectionHeading>

      <div className="flex flex-col gap-5">
        {education.map((edu, i) => (
          <motion.div key={edu.degree}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ x: 5 }}
            className="glass rounded-2xl p-6 border border-white/[0.07] border-l-[3px] border-l-blue-500/70
              hover:bg-white/[0.06] hover:border-l-blue-400 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <h3 className="font-heading font-semibold text-white text-lg leading-snug">{edu.degree}</h3>
              <span className="text-[12px] font-medium text-blue-400 bg-blue-500/[0.12] border border-blue-500/25 rounded-full px-3 py-0.5 flex-shrink-0">
                {edu.year}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-2">{edu.institute}</p>
            <p className={edu.highlight
              ? "text-green-400 font-bold text-sm shadow-[0_0_12px_rgba(74,222,128,0.3)] inline-block"
              : "text-slate-400 text-sm font-medium"}>
              {edu.grade}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
