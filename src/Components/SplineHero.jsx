import { Spotlight } from "@/Components/ui/spotlight"
import { motion } from "framer-motion"
import { GLSLHills } from "@/Components/ui/glsl-hills"
 
export function SplineSceneBasic() {
  return (
    <section className="relative min-h-[100svh] w-full bg-bg-secondary overflow-hidden flex items-center justify-center">
      {/* GLSL Hills Background Animation */}
      <div className="absolute inset-0 z-0 opacity-40">
        <GLSLHills speed={0.4} />
      </div>

      {/* Spotlight effect - subtle overlay */}
      <div className="hidden lg:block pointer-events-none z-10">
        <Spotlight
          className="-top-40 left-0 lg:left-60 lg:-top-20 opacity-10"
          fill="white"
        />
      </div>
      
      {/* Main content container - DemoOne Style */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Status badges */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="tracking-[0.2em] text-white/40 text-[10px] sm:text-[11px] uppercase font-medium">Jash Borad • Available for Projects</span>
          </div>
        </motion.div>
        
        {/* Hero heading - Balanced & Professional */}
        <div className="space-y-2 sm:space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold text-5xl sm:text-7xl lg:text-9xl whitespace-pre-wrap leading-[0.9] text-white tracking-tighter"
          >
            <span className="italic font-extralight text-3xl sm:text-5xl lg:text-7xl block mb-2 sm:mb-4 opacity-60 tracking-normal">
              Full Stack
            </span>
            <span className="block">Developer</span>
            <span className="block text-accent font-black italic">
              <span className="text-white font-thin opacity-30 not-italic mr-2">&</span>
              <span className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl align-middle">Robotics Enthusiast</span>
            </span>
          </motion.h1>
        </div>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 sm:mt-14 mx-auto text-white/50 max-w-[600px] text-sm sm:text-base lg:text-lg leading-relaxed font-light"
        >
          I'm <span className="text-white font-medium">Jash Borad</span>. Specialized in building complex web ecosystems
          by day and engineering robotic systems as my creative passion.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div 
          className="w-5 h-8 sm:w-6 sm:h-10 border border-white/10 rounded-full flex items-start justify-center pt-1.5 sm:pt-2 transition-opacity hover:border-white/30"
          style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
        >
          <div className="w-1 h-1.5 sm:h-2 bg-accent/40 rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}
