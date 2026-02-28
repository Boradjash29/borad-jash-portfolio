/** Shared design tokens and configuration */

export const COLORS = {
  dark: "#101318",
  accent: "#EBDA28",
};

export const EASE_OUT = [0.16, 1, 0.3, 1];

export const NAV_ITEMS = [
  { id: "projects", label: "PROJECTS" },
  { id: "about", label: "ABOUT ME" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export const SOCIAL_LINKS = {
  email: "jashborad13@gmail.com",
  github: "https://github.com/Boradjash29",
  linkedin: "https://linkedin.com/in/borad-jash-h2901",
  resume: "/documents/Jash_Borad_Resume.pdf",
};

/** Reusable fade-up animation preset for Framer Motion spread props */
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: EASE_OUT },
};
