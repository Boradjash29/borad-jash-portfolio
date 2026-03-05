'use client'

import { Suspense, lazy, useState, useRef, useEffect, memo } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

// Check if device can handle 3D (low-end detection)
function isLowEndDevice() {
  if (typeof window === 'undefined') return false
  
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4
  if (cores <= 2) return true
  
  // Check device memory if available
  if (navigator.deviceMemory && navigator.deviceMemory < 2) return true
  
  // Check connection speed if available
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection && (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) {
    return true
  }
  
  return false
}

// Memoized static fallback for consistency
const StaticRobotFallback = memo(function StaticRobotFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 opacity-60">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white/20">
          <rect x="30" y="10" width="40" height="30" rx="5" fill="currentColor"/>
          <rect x="35" y="45" width="30" height="40" rx="3" fill="currentColor"/>
          <rect x="20" y="50" width="10" height="25" rx="2" fill="currentColor"/>
          <rect x="70" y="50" width="10" height="25" rx="2" fill="currentColor"/>
          <circle cx="42" cy="22" r="4" fill="#EBDA28" opacity="0.8"/>
          <circle cx="58" cy="22" r="4" fill="#EBDA28" opacity="0.8"/>
        </svg>
      </div>
    </div>
  )
})

// Loading spinner component
const LoadingSpinner = memo(function LoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <div className="w-10 h-10 border-2 border-white/10 border-t-white/30 rounded-full animate-spin" />
    </div>
  )
})

export const SplineScene = memo(function SplineScene({ scene, className }) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [useStatic, setUseStatic] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Skip 3D on low-end devices
    if (isLowEndDevice()) {
      setUseStatic(true)
      return
    }

    // Delay initial load to prioritize critical content
    const timer = setTimeout(() => {
      if (!containerRef.current) {
        setShouldLoad(true)
        return
      }
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '100px' // Start loading slightly before in view
        }
      )
      
      observer.observe(containerRef.current)
      return () => observer.disconnect()
    }, 500) // Reduced delay for faster perceived load
    
    return () => clearTimeout(timer)
  }, [])

  // Handle Spline load callback
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Static fallback for low-end devices
  if (useStatic) {
    return <StaticRobotFallback />
  }

  // Loading state - show placeholder
  if (!shouldLoad) {
    return (
      <div ref={containerRef} className="w-full h-full">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div 
        className={`${className} transition-opacity duration-700`}
        style={{ 
          opacity: isLoaded ? 1 : 0,
          willChange: isLoaded ? 'auto' : 'opacity'
        }}
      >
        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </Suspense>
  )
})
