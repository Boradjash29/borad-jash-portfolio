'use client'

import { SplineScene } from "@/Components/ui/splite";
import { Spotlight } from "@/Components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <section className="relative min-h-[100svh] w-full bg-[#101318] overflow-hidden">
      {/* Spotlight effect - desktop only for performance */}
      <div className="hidden lg:block">
        <Spotlight
          className="-top-40 left-0 lg:left-60 lg:-top-20 opacity-15"
          fill="white"
        />
      </div>
      
      {/* Background grid - subtle premium aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main content container - responsive padding */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Responsive grid: stack on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[100svh] items-center gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left column - Hero text content */}
          <div className="flex flex-col justify-center pt-20 sm:pt-24 lg:pt-0 pb-8 lg:pb-0 pr-0 lg:pr-8 xl:pr-12 order-1">
            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-[0.15em] sm:tracking-[0.2em] text-white/50 text-[10px] sm:text-[11px] uppercase font-medium">Open to Work</span>
              </div>
              <span className="text-white/20 text-[10px] sm:text-[11px]">•</span>
              <span className="tracking-[0.15em] sm:tracking-[0.2em] text-white/40 text-[10px] sm:text-[11px] uppercase font-medium">Est. 2023</span>
            </div>
            
            {/* Hero heading - responsive fluid typography */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="hero-title-primary italic cursor-default select-none">
                Full Stack
              </h1>
              <h2 className="hero-title-secondary italic cursor-default select-none flex items-baseline flex-wrap">
                developer
                <span 
                  className="text-[#EBDA28] inline-block ml-1"
                  style={{ 
                    fontSize: '0.5em',
                    lineHeight: 1,
                    transform: 'translateY(-0.1em)'
                  }}
                >
                  ■
                </span>
              </h2>
            </div>
            
            {/* Description - responsive spacing and sizing */}
            <p className="mt-6 sm:mt-8 lg:mt-12 text-white/60 max-w-[420px] text-sm sm:text-base lg:text-lg leading-relaxed">
              I'm <span className="text-white font-medium">Jash Borad</span>, a software developer passionate about 
              building scalable web apps — with robotics as my creative hobby.
            </p>
          </div>

          {/* Right column - 3D Robot model (hidden on mobile for performance) */}
          <div className="hidden lg:flex items-center justify-center h-full relative order-2">
            {/* Robot container - centered vertically, fully visible */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ willChange: 'transform', contain: 'layout style paint' }}
            >
              <div className="w-full h-[85%] max-h-[650px] relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile/Tablet - 3D Robot */}
          <div className="flex lg:hidden items-center justify-center h-[250px] sm:h-[320px] relative order-2 mb-4 sm:mb-8">
            <div className="w-full h-full max-w-[350px] sm:max-w-[450px] relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - bottom center with responsive spacing */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div 
          className="w-5 h-8 sm:w-6 sm:h-10 border border-white/25 rounded-full flex items-start justify-center pt-1.5 sm:pt-2 transition-opacity hover:border-white/40"
          style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
        >
          <div className="w-1 h-1.5 sm:h-2 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Scroll indicator animation */}
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}
