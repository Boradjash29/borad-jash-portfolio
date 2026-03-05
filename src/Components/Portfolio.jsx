import { memo } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ArrowIcon from "./ArrowIcon";

const Portfolio = memo(function Portfolio() {
  return (
    <section id="projects" className="relative bg-bg-primary py-24 sm:py-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 sm:mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter"
          >
            Projects<span className="text-accent">.</span>
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 sm:gap-40">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Project Image/Visual representation */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden relative group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ 
                    backgroundColor: "var(--color-bg-secondary)",
                    backgroundImage: `linear-gradient(color-mix(in srgb, var(--color-accent) 15%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 15%, transparent) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px"
                  }}
                />
                
                {/* Number Indicator */}
                <div className="absolute top-6 left-6 font-serif italic text-6xl font-black text-white/10 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Tech Stack Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 backdrop-blur-sm">
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-2 text-xs sm:text-sm uppercase tracking-widest border border-white/20 bg-white/10 text-white rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <p className="tracking-mono text-xs sm:text-sm uppercase mb-4 sm:mb-6 font-medium" style={{ color: "var(--color-accent)" }}>
                  {project.type}
                </p>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 font-light">
                  {project.description}
                </p>
                
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-bold uppercase text-sm tracking-widest hover:bg-accent transition-colors"
                  >
                    View Project
                    <ArrowIcon className="w-5 h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
