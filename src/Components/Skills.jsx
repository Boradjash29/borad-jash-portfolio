import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  capabilities, techStacks, certifications, skillTabs, Award,
} from "../data/profile";

const FLOAT_CLASSES = ["float-pill-1", "float-pill-2", "float-pill-3", "float-pill-4", "float-pill-5"];

const Skills = memo(function Skills() {
  const [activeTab, setActiveTab] = useState("capabilities");

  return (
    <section id="skills" className="relative z-10 bg-bg-secondary text-white py-16 sm:py-20 lg:py-28 xl:py-36 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Heading for SEO */}
        <h2 className="sr-only">Skills and Technical Stacks</h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 md:gap-6 mb-12 md:mb-16"
        >
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tracking-mono transition-all duration-300 pb-1 cursor-pointer ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {activeTab === tab.id ? `( ${tab.label} )` : tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "capabilities" && (
            <motion.div
              key="capabilities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
            >
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center items-center py-6 sm:py-8">
                {capabilities.map((cap, i) => {
                  // Stable random values based on index to satisfy purity
                  const randomRotate1 = ((i * 13) % 20) - 10;
                  const randomRotate2 = ((i * 7) % 8) - 4;
                  
                  return (
                    <motion.div
                      key={cap.label}
                      initial={{ opacity: 0, scale: 0.5, rotate: randomRotate1 }}
                      animate={{ opacity: 1, scale: 1, rotate: randomRotate2 }}
                      transition={{ duration: 0.5, delay: i * 0.06, type: "spring", stiffness: 120 }}
                      whileHover={{ scale: 1.1, rotate: 0, y: -5 }}
                      className={`${cap.color} ${FLOAT_CLASSES[i % FLOAT_CLASSES.length]} px-3 sm:px-5 lg:px-7 py-2 sm:py-3 lg:py-4 rounded-full text-xs sm:text-sm lg:text-lg font-semibold cursor-default flex items-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-xl transition-shadow min-h-[40px] sm:min-h-[44px]`}
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <cap.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span>{cap.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-white/40 text-xs sm:text-sm mt-6 sm:mt-8 hidden sm:block"
              >
                Hover to explore...
              </motion.p>
            </motion.div>
          )}

          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {techStacks.map((stack, i) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col lg:flex-row lg:items-start border-b border-white/10 pb-4 sm:pb-6"
                >
                  <h3 className="font-semibold text-base sm:text-lg text-white mb-2 sm:mb-3 lg:mb-0 lg:w-1/4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:w-3/4">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "certs" && (
            <motion.div
              key="certs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-0"
            >
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                  <Award size={18} className="sm:w-5 sm:h-5 text-accent" /> Certifications
                </h3>
              </div>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-5 border-b border-white/10 group"
                >
                  <div>
                    <strong className="text-white font-semibold text-sm sm:text-base group-hover:text-accent transition-colors">
                      {cert.name}
                    </strong>
                    <span className="text-white/50 text-xs sm:text-sm ml-1 sm:ml-2 block sm:inline mt-0.5 sm:mt-0">{cert.detail}</span>
                  </div>
                  <span className="tracking-mono text-white/30 text-xs sm:text-sm mt-1 sm:mt-0 flex-shrink-0">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

export default Skills;
