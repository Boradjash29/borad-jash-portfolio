# Jash Borad — Portfolio

A modern, animated portfolio website built with React, Vite, and GSAP — showcasing my work as a Full Stack Developer & ROS Lead at GCET Team Robocon.

## ✨ Features

- **3D Text Shadow** — Interactive hover/tap effect on hero typography
- **Scroll-Stacking Cards** — GSAP-powered project cards that stack on scroll
- **Custom Cursor** — Dot + trailing ring with hover states (desktop only)
- **Smooth Scrolling** — Lenis-powered inertial scrolling
- **Magnetic Navigation** — Cursor-following effect on nav links
- **Floating Skill Pills** — Animated capability badges with CSS keyframes
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Dark Theme** — Premium dark UI with accent colors per project

## 📁 Project Structure

```
src/
├── data/
│   ├── constants.js       # Nav items, social links, animation presets
│   ├── projects.js        # Project data (Portfolio + Marquee)
│   └── profile.js         # Experience, education, skills, certifications
├── Components/
│   ├── Animations.jsx     # TextReveal, SlideReveal, MagneticWrap
│   ├── ArrowIcon.jsx      # Shared arrow SVG component
│   ├── CustomCursor.jsx   # Desktop custom cursor
│   ├── Hero.jsx           # Hero section with 3D text effect
│   ├── About.jsx          # Bio, interests, experience, education
│   ├── Portfolio.jsx      # GSAP scroll-stacking project cards
│   ├── Marquee.jsx        # Infinite scrolling project strip
│   ├── Skills.jsx         # Tabbed skills, tech stacks, certifications
│   └── Contact.jsx        # CTA, footer, social links
├── App.jsx                # Layout, navigation, Lenis smooth scroll
├── index.css              # Global styles, utilities, keyframes
└── main.jsx               # Entry point
```

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + GSAP + Lenis
- **Icons**: Lucide React
- **Font**: Manrope (Google Fonts)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📦 Required Assets

Place these files in the `public/` directory:

- `public/images/Profile.png` — Profile photo
- `public/documents/Jash_Borad_Resume.pdf` — Downloadable resume
- `public/favicon.svg` — Custom JB favicon (included)

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Deploy — zero config needed

### Netlify

1. `npm run build`
2. Deploy the `dist/` folder

### GitHub Pages

Add base path to `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/borad-jash-portfolio/",
});
```

## 👤 Author

**Jash Borad** — Full Stack Developer & Robotics Enthusiast

- 📧 [jashborad13@gmail.com](mailto:jashborad13@gmail.com)
- 🐙 [GitHub](https://github.com/Boradjash29)
- 💼 [LinkedIn](https://linkedin.com/in/borad-jash-h2901)
