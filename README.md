# Jash Borad - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my work as a Full Stack Developer and ROS Lead at GCET Team Robocon.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Two-Column Hero**: Image showcase with professional introduction
- **Active Navigation**: Scroll-based section highlighting in sidebar
- **Project Showcase**: Detailed portfolio section with tech stack tags
- **Skills & Experience**: Comprehensive display of technical abilities and work history
- **Contact Section**: Easy-to-access contact information with social links

## 📁 Project Structure

```
borad-portfolio/
├── public/
│   ├── images/          # Add your images here
│   │   ├── profile.jpg  # Your profile photo (300x300px recommended)
│   │   └── robocon.jpg  # Hero section image (800x600px recommended)
│   └── documents/
│       └── Jash_Borad_Resume.pdf  # Your resume PDF
├── src/
│   ├── Components/
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   ├── Hero.jsx         # Hero/About section
│   │   ├── Portfolio.jsx    # Projects showcase
│   │   ├── Skills.jsx       # Technical skills
│   │   ├── Experience.jsx   # Work experience
│   │   ├── Education.jsx    # Education history
│   │   └── Contact.jsx      # Contact information
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
└── package.json
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to `public/images/`:
   - `profile.jpg` - Your profile photo for the sidebar
   - `robocon.jpg` - Your hero section image/video thumbnail

3. Ensure your resume PDF is at:
   - `public/documents/Jash_Borad_Resume.pdf`

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Customization

### Colors
The main accent color is cyan (#00d4ff). To change it, search and replace in `src/index.css`.

### Content
Update your information in the respective component files:
- Personal info: `Hero.jsx`
- Projects: `Portfolio.jsx`
- Skills: `Skills.jsx`
- Work history: `Experience.jsx`
- Education: `Education.jsx`
- Contact: `Contact.jsx` and `Sidebar.jsx`

## 📝 Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Custom CSS with modern layout techniques
- **Icons**: Inline SVG icons
- **Deployment**: Compatible with Vercel, Netlify, GitHub Pages

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy

### Netlify
1. Run `npm run build`
2. Deploy the `dist` folder

### GitHub Pages
1. Add to `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```
2. Run `npm run build`
3. Deploy the `dist` folder to gh-pages branch

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Jash Borad**
- Email: jashborad13@gmail.com
- GitHub: [@Boradjash29](https://github.com/Boradjash29)
- LinkedIn: [borad-jash-h2901](https://linkedin.com/in/borad-jash-h2901)
