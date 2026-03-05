import { memo } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../data/constants";
import { experiences, education, interests } from "../data/profile";

// Reusable animated card wrapper
const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={`bg-bg-primary/50 border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-bg-primary transition-colors flex flex-col ${className}`}
  >
    {children}
  </motion.div>
);

const About = memo(function About() {
  return (
    <section id="about" className="relative bg-bg-secondary py-16 sm:py-20 lg:py-28 xl:py-36 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Centered Section Title matches Skills/Projects */}
        <motion.div 
          {...fadeUp} 
          className="flex flex-col items-center justify-center mb-12 sm:mb-16 lg:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-bg-primary/50 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-white/60 font-medium">OPEN TO WORK</span>
          </div>
          <h2 className="tracking-mono text-white/40 text-sm sm:text-base mb-4">
            ( ABOUT ME )
          </h2>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* 1. Bio Header Card (Full Width) */}
          <BentoCard className="lg:col-span-2 justify-center" delay={0.1}>
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white/90 leading-snug lg:leading-relaxed font-light max-w-4xl">
              My goal is to become a skilled software developer, building efficient, scalable
              applications. I&apos;m passionate about <span className="text-white font-medium">Full Stack Web Development</span>, <span className="text-white font-medium">Cloud Computing</span>, and <span className="text-white font-medium">Machine Learning</span>. Beyond coding,
              I love tinkering with <span className="text-white font-medium">Robotics</span> as
              a hobby &mdash; it&apos;s where I explore hardware, ROS, and real-world problem solving.
            </p>
            <p className="text-sm sm:text-base text-white/40 mt-6 lg:mt-8 tracking-wide font-mono border-l-2 border-accent/50 pl-4 py-1">
              Pursuing B.Tech CSE with 9.34 CGPA at G.H Patel College of Engineering & Technology.
            </p>
          </BentoCard>

          {/* 2. Experience Card */}
          <BentoCard delay={0.2} className="relative">
            <h3 className="tracking-mono text-white/40 text-sm mb-8 flex items-center gap-4">
              EXPERIENCE
              <div className="flex-1 h-px bg-white/5" />
            </h3>
            
            <div className="space-y-8 pl-4 border-l border-white/10">
              {experiences.map((exp) => (
                <div key={exp.title} className="relative group">
                  <div className="absolute -left-[21px] top-2 w-[10px] h-[10px] rounded-full bg-bg-secondary border-2 border-white/20 group-hover:bg-accent group-hover:border-accent transition-colors" />
                  
                  <div className="flex flex-col mb-2">
                    <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-accent transition-colors">
                      {exp.company}
                    </h4>
                    <p className="text-white/60 text-sm mt-1 sm:mt-0.5">
                      {exp.title} <span className="mx-2 text-white/20">|</span> <span className="text-xs font-mono tracking-widest uppercase text-white/40 bg-white/5 px-2 py-0.5 rounded">{exp.type}</span>
                    </p>
                  </div>
                  <span className="tracking-mono text-white/30 text-xs block mb-3">{exp.duration}</span>
                  
                  <ul className="space-y-2 mt-2">
                    {exp.details.map((d, j) => (
                      <li key={j} className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-white/20 mt-0.5">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 3. Education Card */}
          <BentoCard delay={0.3}>
            <h3 className="tracking-mono text-white/40 text-sm mb-8 flex items-center gap-4">
              EDUCATION
              <div className="flex-1 h-px bg-white/5" />
            </h3>

            <div className="space-y-6 flex-1 flex flex-col justify-between">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="group flex gap-4 sm:gap-6 pb-6 border-b border-white/5 last:border-0 last:pb-0 relative"
                >
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className={`text-base font-medium transition-colors ${edu.highlight ? "text-accent" : "text-white"}`}>
                        {edu.degree}
                      </h4>
                      <span className="tracking-mono text-white/30 text-xs shrink-0">{edu.year}</span>
                    </div>
                    <p className="text-white/40 text-sm leading-snug pr-4 mb-2">{edu.institute}</p>
                    <p className={`text-sm tracking-mono mt-1 ${edu.highlight ? "text-accent" : "text-white/50"}`}>
                      {edu.grade}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 4. Interests Card (Full Width) */}
          <BentoCard className="lg:col-span-2 justify-center" delay={0.4}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <h3 className="tracking-mono text-white/40 text-sm">INTERESTS</h3>
              <div className="flex-1 hidden sm:block h-px bg-white/5 mx-4" />
            </div>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-bg-secondary border border-white/5 text-white/70 text-sm transition-all hover:border-white/20 hover:text-white cursor-default group"
                >
                  <item.icon size={16} className="text-white/40 group-hover:text-accent transition-colors" />
                  <span className="font-medium tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </BentoCard>

        </div>

      </div>
    </section>
  );
});

export default About;

