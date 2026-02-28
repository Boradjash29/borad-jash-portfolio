import { motion } from "framer-motion";
import { projectPreviews } from "../data/projects";
import ArrowIcon from "./ArrowIcon";

export default function Marquee() {
  const items = [...projectPreviews, ...projectPreviews];

  return (
    <section className="relative bg-[#101318] py-6 overflow-hidden border-t border-b border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#101318] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#101318] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 md:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
        style={{ width: "max-content" }}
      >
        {items.map((project, i) => (
          <div
            key={`${project.title}-${i}`}
            className="group relative flex-shrink-0 w-[280px] md:w-[340px] h-[160px] md:h-[200px] rounded-xl overflow-hidden cursor-pointer"
            style={{ backgroundColor: project.bg }}
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(${project.accent}40 1px, transparent 1px), linear-gradient(90deg, ${project.accent}40 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle, ${project.accent}, transparent 70%)` }}
            />

            <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">
              <div className="flex items-center justify-between">
                <span className="tracking-mono text-[10px] uppercase" style={{ color: project.accent }}>
                  {project.type}
                </span>
                <ArrowIcon className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg md:text-xl leading-tight group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <div
                  className="w-0 group-hover:w-12 h-[2px] mt-3 transition-all duration-500"
                  style={{ backgroundColor: project.accent }}
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
