import { useState } from "react";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      category: "AI / ML",
      title: "AI-Assisted UI Generator",
      date: "Jan 2026 – Feb 2026",
      description: [
        "Developed a full-stack application that converts natural language prompts into responsive React UI components.",
        "Integrated OpenAI API to generate structured JSX with Tailwind CSS styling.",
        "Implemented secure backend API routes and dynamic code rendering with live preview functionality."
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "OpenAI API"],
      link: "#"
    },
    {
      id: 2,
      category: "AI / ML",
      title: "Video Summarization Platform Using AI",
      date: "Jan 2026 – Feb 2026",
      description: [
        "Developed an AI-based platform that generates text and visual summaries from uploaded videos.",
        "Implemented speech-to-text transcription using Whisper and audio extraction via MoviePy.",
        "Integrated OpenAI API to produce structured summaries, keywords, and timestamp-based highlights."
      ],
      tech: ["Python", "OpenAI API", "Whisper", "Streamlit"],
      link: "#"
    },
    {
      id: 3,
      category: "Software",
      title: "Operating System Task Manager with GUI",
      date: "April 2025",
      description: [
        "Developed a comprehensive GUI-based task manager that monitors and manages system processes in real-time.",
        "Implemented process termination functionality to handle unresponsive or resource-consuming tasks efficiently.",
        "Built search and sorting capabilities to filter processes by name, CPU usage, and memory consumption.",
        "Integrated dynamic system resource tracking to display real-time CPU and memory utilization metrics."
      ],
      tech: ["Python", "Tkinter", "psutil", "Operating Systems"],
      link: "https://github.com/Boradjash29/TASK-MANAGER---OS-PROJECT"
    },
    {
      id: 4,
      category: "Software",
      title: "Real-Time Code Collaboration Platform",
      date: "Nov 2025 – Dec 2025",
      description: [
        "Developed a browser-based collaborative code editor enabling real-time multi-user code editing and synchronization.",
        "Implemented WebSocket-based communication for instant change propagation across connected clients.",
        "Integrated Monaco Editor for IDE-like functionality including syntax highlighting and auto-completion."
      ],
      tech: ["React", "Node.js", "WebSockets", "Docker"],
      link: "#"
    },
    {
      id: 5,
      category: "Software",
      title: "CustomerPlus – Customer Management Portal",
      date: "May 2025 – Jun 2025",
      description: [
        "Developed a modern CRM portal with dark-themed UI for managing customers, products, and orders efficiently.",
        "Implemented complete CRUD functionality for customers, orders, and products with secure authentication and role-based access control.",
        "Designed responsive interface using Bootstrap with custom dark theme styling and animated form interactions.",
        "Integrated Django ORM-based database management with form validation, CSRF protection, and session management."
      ],
      tech: ["Django", "Python", "HTML5", "CSS3", "Bootstrap", "SQLite"],
      link: "https://github.com/Boradjash29/CustomerPlus---Customer-Management-Portal-"
    },
    {
      id: 6,
      category: "Software",
      title: "Currency Converter (Django)",
      date: "May 2025 – Jun 2025",
      description: [
        "Built a Django-based currency converter web application supporting 8+ major currencies with real-time exchange rates.",
        "Integrated ExchangeRate-API to fetch live conversion rates with comprehensive error handling and user-friendly messages.",
        "Implemented form validation to ensure positive amounts and prevent invalid currency conversions.",
        "Designed responsive HTML/CSS interface with POST-based form submission and CSRF protection for secure transactions."
      ],
      tech: ["Django", "Python", "HTML5", "CSS3", "ExchangeRate-API", "Requests"],
      link: "https://github.com/Boradjash29/currency_converter"
    },
    {
      id: 7,
      category: "Robotics",
      title: "3-Wheeled Omni-Directional Robot Simulation in ROS 2",
      date: "Oct 2024 – Nov 2024",
      description: [
        "Designed a custom inverse kinematics model to convert velocity commands (/cmd_vel) into individual wheel speeds.",
        "Manually broadcasted all necessary TF transforms including odom → base_link → chassis → motor shafts → wheels.",
        "Published real-time joint states to reflect wheel rotations accurately in RViz2.",
        "Modeled accurate wheel placement and orientation consistent with URDF specifications, preparing for Gazebo integration."
      ],
      tech: ["ROS 2", "RViz2", "URDF", "Xacro", "TF2", "ros2_control", "Gazebo"],
      link: "#"
    },
    {
      id: 8,
      category: "Robotics",
      title: "3D LiDAR Scanner with ESP32 and ROS 2",
      date: "Oct 2025",
      description: [
        "Implemented a servo-driven 2D LiDAR sweep extended into 3D mapping with real-time visualization in RViz2.",
        "Achieved smooth ±90° motion and accurate URDF mapping for precise spatial representation.",
        "Published joint states over ROS 2 for real-time data visualization and monitoring.",
        "Calibrated motion speed with LiDAR frequency to generate accurate 3D point clouds."
      ],
      tech: ["ESP32", "micro-ROS", "ROS 2", "RViz2", "URDF"],
      link: "#"
    },
    {
      id: 9,
      category: "Robotics",
      title: "Intel RealSense D435i RGB-D Pipeline with ROS 2",
      date: "Nov 2025",
      description: [
        "Developed ROS 2 publishers for RGB, raw depth (16-bit), and depth-colormap frames from Intel RealSense D435i.",
        "Implemented subscribers for real-time display of all frame types in a combined OpenCV window.",
        "Created frame saving functionality that captures color, depth, colormap, and combined frames simultaneously.",
        "Integrated CvBridge for seamless ROS ↔ OpenCV conversion and handled 16-bit depth images correctly."
      ],
      tech: ["ROS 2 Humble", "Intel RealSense D435i", "OpenCV", "Python", "CvBridge"],
      link: "#"
    },
    {
      id: 10,
      category: "Robotics",
      title: "Micro-ROS and ESP32 Integration with ROS 2",
      date: "Jan 2025",
      description: [
        "Established a robust communication system between ESP32 microcontroller and ROS 2 using Micro-ROS over serial bridge.",
        "Set up Micro-ROS agent and successfully configured ESP32 node connections with proper initialization.",
        "Implemented publisher and subscriber nodes to exchange messages seamlessly between ESP32 and ROS 2 ecosystem.",
        "Debugged and resolved build issues, validated system functionality with real-time message publishing and receiving."
      ],
      tech: ["ROS 2", "Micro-ROS", "ESP32", "Serial Communication", "C++"],
      link: "#"
    }
  ];

  const categories = ["All", "Robotics", "Software", "AI / ML"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section">
      <h2>Projects</h2>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card">
            <div className="card-header">
              <h3>{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            <ul className="project-details">
              {project.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View on GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
