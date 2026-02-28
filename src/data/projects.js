/** All project data — single source of truth for Portfolio + Marquee */

export const projects = [
  {
    id: 1,
    title: "AI-Assisted UI Generator",
    type: "AI PLATFORM",
    description:
      "Converts natural language prompts into responsive React UI components via OpenAI API with live preview.",
    tech: ["Next.js", "React", "Tailwind CSS", "OpenAI API"],
    link: "#",
    bg: "#1a1535",
    accent: "#7c3aed",
  },
  {
    id: 2,
    title: "Video Summarization Platform",
    type: "AI TOOL",
    description:
      "Generates text and visual summaries from uploaded videos using Whisper transcription and OpenAI.",
    tech: ["Python", "OpenAI API", "Whisper", "Streamlit"],
    link: "#",
    bg: "#1f1428",
    accent: "#a855f7",
  },
  {
    id: 3,
    title: "OS Task Manager",
    type: "DESKTOP APP",
    description:
      "Real-time process monitoring with CPU/memory tracking and dynamic system resource visualization.",
    tech: ["Python", "Tkinter", "psutil"],
    link: "https://github.com/Boradjash29/TASK-MANAGER---OS-PROJECT",
    bg: "#0f1f1a",
    accent: "#10b981",
  },
  {
    id: 4,
    title: "Real-Time Code Collaboration",
    type: "WEB APP",
    description:
      "Browser-based collaborative code editor with WebSocket sync, Monaco Editor, and Docker support.",
    tech: ["React", "Node.js", "WebSockets", "Docker"],
    link: "#",
    bg: "#0f1724",
    accent: "#3b82f6",
  },
  {
    id: 5,
    title: "CustomerPlus CRM",
    type: "WEB APP",
    description:
      "Modern CRM portal with full CRUD, role-based access control, and animated form interactions.",
    tech: ["Django", "Python", "Bootstrap", "SQLite"],
    link: "https://github.com/Boradjash29/CustomerPlus---Customer-Management-Portal-",
    bg: "#1f1710",
    accent: "#f59e0b",
  },
  {
    id: 6,
    title: "Currency Converter API",
    type: "WEB APP",
    description:
      "Supports 8+ currencies with real-time exchange rates, form validation, and error handling.",
    tech: ["Django", "Python", "ExchangeRate-API"],
    link: "https://github.com/Boradjash29/currency_converter",
    bg: "#1c1a0f",
    accent: "#eab308",
  },
  {
    id: 7,
    title: "Omni-Directional Robot",
    type: "ROBOTICS",
    description:
      "Custom inverse kinematics for omni-drive with manual TF2 broadcasting and real-time RViz2 visualization.",
    tech: ["ROS 2", "RViz2", "URDF", "Xacro", "TF2", "Gazebo"],
    link: "#",
    bg: "#1f0f14",
    accent: "#ef4444",
  },
  {
    id: 8,
    title: "3D LiDAR Scanner",
    type: "ROBOTICS",
    description:
      "Servo-driven 2D LiDAR sweep extended into 3D mapping with point cloud generation in RViz2.",
    tech: ["ESP32", "micro-ROS", "ROS 2", "RViz2"],
    link: "#",
    bg: "#0f1820",
    accent: "#06b6d4",
  },
  {
    id: 9,
    title: "Intel RealSense Pipeline",
    type: "ROBOTICS",
    description:
      "ROS 2 publishers for RGB/depth frames with real-time OpenCV display and CvBridge integration.",
    tech: ["ROS 2 Humble", "RealSense D435i", "OpenCV", "Python"],
    link: "#",
    bg: "#0f1a18",
    accent: "#14b8a6",
  },
];

/** Marquee preview data — derived from projects, lighter version */
export const projectPreviews = projects.map(({ title, type, accent, bg }) => ({
  title: title.length > 22 ? title.slice(0, 22) : title,
  type: type.charAt(0) + type.slice(1).toLowerCase(),
  accent,
  bg,
}));
