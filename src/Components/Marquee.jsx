import { memo } from "react";
import { motion } from "framer-motion";
import { projectPreviews } from "../data/projects";
import ArrowIcon from "./ArrowIcon";

const Marquee = memo(function Marquee() {
  const items = [...projectPreviews, ...projectPreviews];

  return (
    <section className="relative bg-bg-secondary py-4 sm:py-6 overflow-hidden border-t border-b border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-3 sm:gap-4 lg:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
        style={{ width: "max-content" }}
      >
        {items.map((project, i) => (
          <div
            key={`${project.title}-${i}`}
            className="group relative flex-shrink-0 w-[220px] sm:w-[280px] lg:w-[340px] h-[130px] sm:h-[160px] lg:h-[200px] rounded-lg sm:rounded-xl overflow-hidden cursor-pointer bg-bg-primary border border-white/5 hover:border-accent/30 transition-colors"
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(color-mix(in srgb, var(--color-accent) 40%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 40%, transparent) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle, var(--color-accent), transparent 70%)` }}
            />

            <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5 lg:p-6">
              <div className="flex items-center justify-between">
                <span className="tracking-mono text-[9px] sm:text-[10px] uppercase text-accent">
                  {project.type}
                </span>
                <ArrowIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <div>
                <h3 className="text-white font-semibold text-base sm:text-lg lg:text-xl leading-tight group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <div
                  className="w-0 group-hover:w-10 sm:group-hover:w-12 h-[2px] mt-2 sm:mt-3 bg-accent transition-all duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
});

export default Marquee;
