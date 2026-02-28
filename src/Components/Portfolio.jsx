import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import ArrowIcon from "./ArrowIcon";

gsap.registerPlugin(ScrollTrigger);

const VH_PER_TRANSITION = 100;
const NUM_TRANSITIONS = projects.length - 1;
const TOTAL_VH = NUM_TRANSITIONS * VH_PER_TRANSITION + 100;

export default function Portfolio() {
  const stickyRef = useRef(null);

  useEffect(() => {
    if (!stickyRef.current) return;

    const cards = gsap.utils.toArray(".stack-card", stickyRef.current);
    if (cards.length === 0) return;

    const section = stickyRef.current.closest("#projects");
    if (!section) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (i === 0) return;

        gsap.set(card, { yPercent: 100 });

        const transStart = ((i - 1) * VH_PER_TRANSITION) / TOTAL_VH;
        const transEnd = ((i - 1) * VH_PER_TRANSITION + VH_PER_TRANSITION * 0.7) / TOTAL_VH;

        gsap.to(card, {
          yPercent: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: () => `top+=${transStart * TOTAL_VH}vh top`,
            end: () => `top+=${transEnd * TOTAL_VH}vh top`,
            scrub: 1.5,
          },
        });

        const prevContent = cards[i - 1].querySelector(".card-content");
        if (prevContent) {
          gsap.to(prevContent, {
            scale: 0.92,
            filter: "brightness(0.25)",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: section,
              start: () => `top+=${transStart * TOTAL_VH}vh top`,
              end: () => `top+=${transEnd * TOTAL_VH}vh top`,
              scrub: 1.5,
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative bg-[#101318]">
      <div style={{ height: `${TOTAL_VH}vh` }} className="relative">
        <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="stack-card absolute inset-0 w-full h-full"
              style={{ zIndex: i + 1 }}
            >
              <div
                className="card-content relative w-full h-full overflow-hidden flex flex-col"
                style={{ backgroundColor: project.bg }}
              >
                {/* Decorative background */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.08] pointer-events-none overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(${project.accent}40 1px, transparent 1px), linear-gradient(90deg, ${project.accent}40 1px, transparent 1px)`,
                      backgroundSize: "60px 60px",
                    }}
                  />
                  <div
                    className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                    style={{ background: `radial-gradient(circle, ${project.accent}30, transparent 70%)` }}
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className="absolute right-0 top-0 w-2/3 h-full pointer-events-none"
                  style={{ background: `linear-gradient(90deg, ${project.bg} 0%, transparent 100%)` }}
                />

                {/* Top bar */}
                <div className="relative z-10 flex items-start justify-between p-4 md:p-8 lg:p-10">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-0 md:w-full md:justify-between">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/15 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="tracking-mono text-white/40 text-[6px] md:text-[8px]">PROJECT</span>
                      <span className="text-white font-semibold text-xs md:text-base">
                        {String(i + 1).padStart(2, "0")}{" "}
                        <span className="text-white/30 font-normal">|</span>{" "}
                        <span className="text-white/40 font-normal">{String(projects.length).padStart(2, "0")}</span>
                      </span>
                    </div>
                    <p className="tracking-mono text-xs md:text-base font-medium" style={{ color: project.accent }}>
                      {project.type}
                    </p>
                  </div>
                </div>

                {/* Main content */}
                <div className="relative z-10 mt-auto p-4 md:p-8 lg:p-10 pb-6 md:pb-12 lg:pb-14 max-w-2xl">
                  <div className="w-10 md:w-16 h-1 rounded-full mb-4 md:mb-6" style={{ backgroundColor: project.accent }} />

                  <h3 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-3 md:mb-5 tracking-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-3 md:mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tracking-mono text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-white/10 text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/50 text-xs sm:text-sm md:text-lg max-w-lg leading-relaxed mb-4 md:mb-8">
                    {project.description}
                  </p>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                      <span className="tracking-mono text-white/70 group-hover:text-white transition-colors text-xs md:text-sm">
                        ( VISIT SITE
                      </span>
                      <ArrowIcon className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      <span className="tracking-mono text-white/70 group-hover:text-white transition-colors text-xs md:text-sm">
                        )
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
