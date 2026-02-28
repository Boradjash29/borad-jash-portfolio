import { motion } from "framer-motion";
import { fadeUp } from "../data/constants";
import { experiences, education, interests } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="relative bg-[#101318] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">

        <motion.p {...fadeUp} className="tracking-mono text-white/40 mb-12 md:mb-16">
          ( ABOUT ME )
        </motion.p>

        {/* Bio */}
        <motion.div {...fadeUp} className="mb-20 md:mb-28">
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed max-w-3xl">
            My goal is to become a skilled software developer, building efficient, scalable
            applications. I&apos;m passionate about{" "}
            <span className="text-white font-semibold">Full Stack Web Development</span>,{" "}
            <span className="text-white font-semibold">Cloud Computing</span>, and{" "}
            <span className="text-white font-semibold">Machine Learning</span>. Beyond coding,
            I love tinkering with <span className="text-white font-semibold">Robotics</span> as
            a hobby &mdash; it&apos;s where I explore hardware, ROS, and real-world problem solving.
          </p>
          <p className="text-base md:text-lg text-white/50 mt-6 max-w-2xl">
            Pursuing B.Tech CSE with 9.34 CGPA at G.H Patel College of Engineering & Technology.
          </p>
        </motion.div>

        {/* Interests */}
        <motion.div {...fadeUp} className="mb-20 md:mb-28">
          <p className="tracking-mono text-white/40 mb-8">INTERESTS</p>
          <div className="flex flex-wrap gap-3">
            {interests.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm cursor-default hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <item.icon size={16} className="opacity-70" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div {...fadeUp} className="mb-20 md:mb-28">
          <p className="tracking-mono text-white/40 mb-8">EXPERIENCE</p>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group py-8 border-b border-white/8 hover:border-white/15 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-white/90 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">
                      {exp.title}
                      <span className="ml-3 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-wider uppercase">
                        {exp.type}
                      </span>
                    </p>
                  </div>
                  <span className="tracking-mono text-white/30 mt-2 md:mt-0 flex-shrink-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.details.map((d, j) => (
                    <li
                      key={j}
                      className="text-white/50 text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-white/20"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div {...fadeUp}>
          <p className="tracking-mono text-white/40 mb-8">EDUCATION</p>
          <div className="space-y-0">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group py-6 border-b border-white/8 hover:border-white/15 transition-colors flex flex-col sm:flex-row justify-between"
              >
                <div className="sm:w-2/3">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-white/40 text-sm">{edu.institute}</p>
                </div>
                <div className="flex flex-row sm:flex-col justify-between sm:items-end sm:w-1/3 mt-3 sm:mt-0">
                  <span className="tracking-mono text-white/30">{edu.year}</span>
                  <p className={`text-sm font-semibold ${edu.highlight ? "text-emerald-400" : "text-white/60"}`}>
                    {edu.grade}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
