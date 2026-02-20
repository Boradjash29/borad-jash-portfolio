import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, category: "AI / ML", title: "AI-Assisted UI Generator", date: "Jan 2026 – Feb 2026",
    description: ["Converts natural language prompts into responsive React UI components via OpenAI API.", "Generates structured JSX with Tailwind CSS styling.", "Dynamic code rendering with live preview functionality."],
    tech: ["Next.js", "React", "Tailwind CSS", "OpenAI API"], link: "#" },
  { id: 2, category: "AI / ML", title: "Video Summarization Platform Using AI", date: "Jan 2026 – Feb 2026",
    description: ["Generates text and visual summaries from uploaded videos.", "Speech-to-text transcription using Whisper and audio extraction via MoviePy.", "Structured summaries, keywords, and timestamp-based highlights via OpenAI API."],
    tech: ["Python", "OpenAI API", "Whisper", "Streamlit"], link: "#" },
  { id: 3, category: "Software", title: "OS Task Manager with GUI", date: "April 2025",
    description: ["Real-time process monitoring and management with GUI.", "Search and sort by CPU, memory, and name.", "Dynamic system resource tracking with real-time metrics."],
    tech: ["Python", "Tkinter", "psutil"], link: "https://github.com/Boradjash29/TASK-MANAGER---OS-PROJECT" },
  { id: 4, category: "Software", title: "Real-Time Code Collaboration Platform", date: "Nov 2025 – Dec 2025",
    description: ["Browser-based collaborative code editor enabling real-time multi-user sync.", "WebSocket-based communication for instant change propagation.", "Monaco Editor with syntax highlighting and auto-completion."],
    tech: ["React", "Node.js", "WebSockets", "Docker"], link: "#" },
  { id: 5, category: "Software", title: "CustomerPlus – CRM Portal", date: "May 2025 – Jun 2025",
    description: ["Modern CRM portal with full CRUD and role-based access control.", "Django ORM database management with CSRF & session management.", "Responsive dark-themed UI with animated form interactions."],
    tech: ["Django", "Python", "Bootstrap", "SQLite"], link: "https://github.com/Boradjash29/CustomerPlus---Customer-Management-Portal-" },
  { id: 6, category: "Software", title: "Currency Converter (Django)", date: "May 2025 – Jun 2025",
    description: ["Supports 8+ currencies with real-time ExchangeRate-API rates.", "Form validation and comprehensive error handling.", "Responsive UI with CSRF-protected POST forms."],
    tech: ["Django", "Python", "ExchangeRate-API"], link: "https://github.com/Boradjash29/currency_converter" },
  { id: 7, category: "Robotics", title: "3-Wheeled Omni-Directional Robot (ROS 2)", date: "Oct 2024 – Nov 2024",
    description: ["Custom inverse kinematics model for velocity-to-wheel-speed conversion.", "Manual TF2 broadcasting: odom → base_link → chassis → wheels.", "Real-time joint state publishing in RViz2."],
    tech: ["ROS 2", "RViz2", "URDF", "Xacro", "TF2", "Gazebo"], link: "#" },
  { id: 8, category: "Robotics", title: "3D LiDAR Scanner with ESP32 & ROS 2", date: "Oct 2025",
    description: ["Servo-driven 2D LiDAR sweep extended into 3D RViz2 mapping.", "±90° motion with URDF-aligned spatial representation.", "Point cloud generation via LiDAR frequency calibration."],
    tech: ["ESP32", "micro-ROS", "ROS 2", "RViz2"], link: "#" },
  { id: 9, category: "Robotics", title: "Intel RealSense D435i RGB-D Pipeline", date: "Nov 2025",
    description: ["ROS 2 publishers for RGB, raw depth, and colormap frames.", "Real-time display of all frame types in a combined OpenCV window.", "CvBridge integration for seamless ROS ↔ OpenCV conversion."],
    tech: ["ROS 2 Humble", "RealSense D435i", "OpenCV", "Python"], link: "#" },
  { id: 10, category: "Robotics", title: "Micro-ROS + ESP32 Integration", date: "Jan 2025",
    description: ["Micro-ROS over serial bridge between ESP32 and ROS 2.", "Publisher and subscriber nodes exchanging messages seamlessly.", "Debugged build issues, validated with real-time message streams."],
    tech: ["ROS 2", "Micro-ROS", "ESP32", "C++"], link: "#" },
];

const categories = ["All", "Robotics", "Software", "AI / ML"];
const badgeStyles = {
  "AI / ML": "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Software: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Robotics: "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="mt-[110px] pt-2">
      <SectionHeading>Projects</SectionHeading>

      {/* Filters */}
      <div className="flex gap-2.5 flex-wrap mb-10">
        {categories.map(cat => (
          <motion.button key={cat} onClick={() => setActive(cat)}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-wide border transition-all duration-200
              ${active === cat
                ? "bg-blue-500 border-blue-500 text-white shadow-[0_4px_14px_rgba(59,130,246,0.4)]"
                : "glass text-slate-400 hover:text-white hover:border-blue-500/40"}`}>
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <AnimatePresence>
          {filtered.map(project => (
            <motion.div key={project.id} layout
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group glass rounded-2xl p-6 border border-white/[0.07] hover:border-blue-500/35
                hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 relative overflow-hidden">
              {/* Top shine on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-heading font-semibold text-white text-[17px] leading-snug">{project.title}</h3>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wider flex-shrink-0 mt-0.5 ${badgeStyles[project.category]}`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-500 text-xs">{project.date}</p>
              </div>

              <ul className="mb-4 space-y-1.5">
                {project.description.map((d, i) => (
                  <li key={i} className="text-slate-400 text-[13.5px] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-1.5 before:content-['›'] before:text-blue-400 before:text-base">
                    {d}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-500/[0.08] text-blue-300/90 border border-blue-500/[0.18] transition-all hover:bg-blue-500/[0.16]">{t}</span>
                ))}
              </div>

              <a href={project.link} target={project.link !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                className="inline-flex items-center gap-1. text-blue-400 text-[13.5px] font-medium hover:text-blue-300 transition-colors group/link">
                View on GitHub
                <span className="transition-transform duration-200 group-hover/link:translate-x-1 ml-1">→</span>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

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

export { SectionHeading };
