import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import ArrowIcon from "./ArrowIcon";

gsap.registerPlugin(ScrollTrigger);

// How many vh of scroll each card transition occupies
const VH_PER_CARD = 140; 
const TOTAL_VH = (projects.length - 1) * VH_PER_CARD + 100;

export default function Portfolio() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    if (!stickyRef.current) return;

    const cards = gsap.utils.toArray(".project-card", stickyRef.current);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
      });

      cards.forEach((card, i) => {
        if (i === 0) {
          // First card starts visible, just handle its own parallax
          gsap.fromTo(
            card.querySelector(".card-parallax-bg"),
            { yPercent: -15 },
            {
              yPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${VH_PER_CARD}vh`,
                scrub: true,
              }
            }
          );
          return;
        }

        // Subsequent cards slide in from bottom
        const startOffset = i * VH_PER_CARD;

        // Slide in
        gsap.fromTo(card, 
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: "none", // Critical for 1:1 proportional scroll
            scrollTrigger: {
              trigger: containerRef.current,
              start: () => `top+=${startOffset}vh top`,
              end: () => `top+=${startOffset + 100}vh top`,
              scrub: true,
            }
          }
        );

        // Previous card scales down/dims as this one covers it
        const prevCard = cards[i - 1];
        gsap.to(prevCard.querySelector(".card-content"), {
          scale: 0.9,
          filter: "brightness(0.3)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${startOffset}vh top`,
            end: () => `top+=${startOffset + 100}vh top`,
            scrub: true,
          }
        });

        // Parallax for this card's background
        gsap.fromTo(
          card.querySelector(".card-parallax-bg"),
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: () => `top+=${startOffset}vh top`,
              end: () => `top+=${startOffset + VH_PER_CARD}vh top`,
              scrub: true,
            }
          }
        );
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative bg-[#101318]">
      {/* Scrollable height container */}
      <div style={{ height: `${TOTAL_VH}vh` }} className="relative">
        <div ref={stickyRef} className="h-screen w-full flex flex-col">
          {/* Header (stays fixed or moves slightly) */}
          <div className="absolute top-0 left-0 w-full z-[100] px-6 md:px-14 lg:px-20 pt-8 pb-4 pointer-events-none">
            <p className="tracking-mono text-xs text-white/30 uppercase mb-2">Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Projects<span className="text-yellow-400">.</span>
            </h2>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="project-card absolute inset-0 w-full h-full overflow-hidden"
                style={{ zIndex: i + 1 }}
              >
                <div className="card-content relative w-full h-full overflow-hidden">
                  {/* Parallax Background */}
                  <div 
                    className="card-parallax-bg absolute inset-0 scale-[1.4]"
                    style={{ backgroundColor: project.bg }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                      }}
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
                      style={{ backgroundColor: project.accent }}
                    />
                    <span 
                      className="absolute right-0 bottom-[-5%] text-[24vw] font-black leading-none opacity-[0.03] select-none"
                      style={{ color: project.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />

                  {/* Text Content */}
                  <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-14 lg:p-20 max-w-4xl">
                    <div 
                      className="w-12 h-1 mb-6 rounded-full" 
                      style={{ backgroundColor: project.accent }}
                    />
                    <p className="tracking-mono text-sm uppercase mb-2 font-medium" style={{ color: project.accent }}>
                      {project.type}
                    </p>
                    <h3 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-[0.9]">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-white/10 rounded-full text-white/50 bg-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                      {project.description}
                    </p>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4 w-fit px-8 py-4 rounded-full border border-white/20 hover:border-white/50 transition-all"
                      >
                        <span className="text-white font-medium uppercase text-sm tracking-wider">Explore Project</span>
                        <ArrowIcon className="text-white group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
