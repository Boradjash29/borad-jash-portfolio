import { Bot, Brain, Cloud, Gamepad2, Dumbbell, BookOpen } from "lucide-react";
import {
  Monitor,
  Globe,
  Sparkles,
  Zap,
  Building2,
  Clapperboard,
  Radio,
  Database,
  Link2,
  Award,
} from "lucide-react";

/** About section data */

export const experiences = [
  {
    title: "Python Developer Trainee",
    company: "BrainyBeam Technologies",
    duration: "May 2025 – Jun 2025",
    type: "Internship",
    details: [
      "Django MVT architecture, ORM, and relational database integration.",
      "Developed CustomerPlus — full CRUD portal.",
    ],
  },
  {
    title: "ROS Lead",
    company: "GCET Team Robocon",
    duration: "Jan 2024 – Present",
    type: "Leadership",
    details: [
      "Led ROS development for ABU Robocon 2025 and 2026.",
      "Omni-directional drive robot using ROS2, TF2, Nav2, and Visual Odometry.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institute: "G.H Patel College of Engineering & Technology, Anand",
    year: "2023 – 2027",
    grade: "CGPA: 9.34",
    highlight: true,
  },
  {
    degree: "Senior Secondary (12th)",
    institute: "AshaDeep International School, Surat (GSEB)",
    year: "2023",
    grade: "Percentage: 72%",
  },
  {
    degree: "Secondary (10th)",
    institute: "J.B. & KARP Vidya Sankul, Surat (GSEB)",
    year: "2021",
    grade: "Percentage: 79%",
  },
];

export const interests = [
  { icon: Bot, label: "Robotics" },
  { icon: Brain, label: "AI / ML" },
  { icon: Cloud, label: "Cloud" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: BookOpen, label: "Learning" },
];

/** Skills section data */

export const capabilities = [
  { label: "Full-stack", icon: Monitor, color: "bg-gray-400/80 text-gray-900" },
  { label: "Web Apps", icon: Globe, color: "bg-orange-400/80 text-orange-900" },
  { label: "Robotics", icon: Bot, color: "bg-emerald-400/80 text-emerald-900" },
  { label: "AI / ML", icon: Brain, color: "bg-indigo-400/80 text-indigo-900" },
  {
    label: "Creative Frontend",
    icon: Sparkles,
    color: "bg-orange-300/80 text-orange-900",
  },
  { label: "Performance", icon: Zap, color: "bg-gray-400/80 text-gray-900" },
  {
    label: "Cloud Computing",
    icon: Cloud,
    color: "bg-sky-400/80 text-sky-900",
  },
  {
    label: "System Design",
    icon: Building2,
    color: "bg-pink-400/80 text-pink-900",
  },
  {
    label: "Motion & Animation",
    icon: Clapperboard,
    color: "bg-emerald-400/80 text-emerald-900",
  },
  {
    label: "IoT & Sensors",
    icon: Radio,
    color: "bg-violet-400/80 text-violet-900",
  },
  {
    label: "Database Design",
    icon: Database,
    color: "bg-pink-300/80 text-pink-900",
  },
  { label: "API Design", icon: Link2, color: "bg-blue-400/80 text-blue-900" },
];

export const techStacks = [
  { category: "Languages", items: ["C", "C++", "JavaScript", "Python", "SQL"] },
  {
    category: "Frameworks",
    items: ["Node.js", "Express.js", "React.js", "Django", "Next.js"],
  },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "SQLite"] },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  },
  {
    category: "Robotics",
    items: [
      "ROS2",
      "TF2",
      "Navigation2",
      "Visual Odometry",
      "Linux",
      "Jetson Orin Nano",
      "Raspberry Pi",
    ],
  },
];

export const certifications = [
  {
    name: "Introduction to Internet of Things",
    detail: "(Gold + Elite) — NPTEL",
    date: "May 2025",
  },
  { name: "Mastering Linux", detail: "— Udemy", date: "Mar 2025" },
  { name: "SQL (Basic)", detail: "— HackerRank", date: "Oct 2024" },
  {
    name: "Programming in C",
    detail: "— Red & White Skill Education",
    date: "Jul 2023",
  },
];

export const skillTabs = [
  { id: "capabilities", label: "CORE CAPABILITIES" },
  { id: "tech", label: "TECH STACKS" },
  { id: "certs", label: "CERTIFICATIONS" },
];

export { Award };
