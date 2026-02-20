import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      <Sidebar />
      {/* Main content — offset by sidebar width on desktop */}
      <main className="ml-[268px] w-[calc(100%-268px)] px-14 py-10 max-md:ml-0 max-md:w-full max-md:px-5 max-md:py-6">
        <Hero />
        <Portfolio />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
