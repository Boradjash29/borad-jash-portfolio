import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  capabilities, techStacks, certifications, skillTabs, Award,
} from "../data/profile";

const FLOAT_CLASSES = ["float-pill-1", "float-pill-2", "float-pill-3", "float-pill-4", "float-pill-5"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("capabilities");

  return (
    <section id="skills" className="relative z-10 bg-[#f5f5f0] text-[#1a1a1a] py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

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
                  ? "text-[#1a1a1a] border-b-2 border-[#1a1a1a]"
                  : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70"
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
              className="relative min-h-[400px] md:min-h-[500px]"
            >
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center py-8">
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
                      className={`${cap.color} ${FLOAT_CLASSES[i % FLOAT_CLASSES.length]} px-5 md:px-7 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold cursor-default flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow`}
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <cap.icon size={18} />
                      <span>{cap.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-[#1a1a1a]/40 text-sm mt-8"
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
              className="space-y-8"
            >
              {techStacks.map((stack, i) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col md:flex-row md:items-start border-b border-[#1a1a1a]/10 pb-6"
                >
                  <h3 className="font-semibold text-lg text-[#1a1a1a] mb-3 md:mb-0 md:w-1/4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:w-3/4">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#1a1a1a]/5 text-[#1a1a1a]/70 border border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/10 hover:border-[#1a1a1a]/20 transition-colors cursor-default"
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
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#1a1a1a] flex items-center gap-2">
                  <Award size={20} className="text-amber-500" /> Certifications
                </h3>
              </div>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-[#1a1a1a]/10 group"
                >
                  <div>
                    <strong className="text-[#1a1a1a] font-semibold group-hover:text-indigo-600 transition-colors">
                      {cert.name}
                    </strong>
                    <span className="text-[#1a1a1a]/50 text-sm ml-2">{cert.detail}</span>
                  </div>
                  <span className="tracking-mono text-[#1a1a1a]/30 mt-1 sm:mt-0 flex-shrink-0">
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
}
