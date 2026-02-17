import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Hero />
        <Portfolio />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
