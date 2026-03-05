import { useEffect, useRef, useState, memo } from "react";

const CustomCursor = memo(function CustomCursor() {
  const cursorRef = useRef({ x: 0, y: 0 });
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Skip on mobile/touch devices
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;

    let raf;
    let ringX = 0, ringY = 0;

    // Use passive event listener for better scroll performance
    const onMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        // Use translate3d for GPU acceleration
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const animate = () => {
      const { x, y } = cursorRef.current;
      ringX += (x - ringX) * 0.12; // Slightly slower for smoother feel
      ringY += (y - ringY) * 0.12;
      if (ringRef.current) {
        // Use translate3d for GPU acceleration
        ringRef.current.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    const onOverInteractive = () => setHovered(true);
    const onLeaveInteractive = () => setHovered(false);

    const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, .cursor-hover";

    const attachHoverListeners = () => {
      const els = document.querySelectorAll(INTERACTIVE_SELECTOR);
      els.forEach((el) => {
        el.addEventListener("mouseenter", onOverInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
      return els;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let currentEls = attachHoverListeners();
    raf = requestAnimationFrame(animate);

    // Throttled MutationObserver to reduce performance impact
    let mutationTimeout;
    const observer = new MutationObserver(() => {
      if (mutationTimeout) return;
      mutationTimeout = setTimeout(() => {
        currentEls.forEach((el) => {
          el.removeEventListener("mouseenter", onOverInteractive);
          el.removeEventListener("mouseleave", onLeaveInteractive);
        });
        currentEls = attachHoverListeners();
        mutationTimeout = null;
      }, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      if (mutationTimeout) clearTimeout(mutationTimeout);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
      currentEls.forEach((el) => {
        el.removeEventListener("mouseenter", onOverInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  // Early return for mobile - check at render time too
  const isMobile = typeof window !== "undefined" && 
    (window.matchMedia("(max-width: 768px)").matches || 
     window.matchMedia("(pointer: coarse)").matches);
  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#fff",
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.2s",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          width: hovered ? 60 : clicked ? 30 : 40,
          height: hovered ? 60 : clicked ? 30 : 40,
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "#EBDA28" : "rgba(255,255,255,0.5)"}`,
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.2s, width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s ease-out",
          marginLeft: hovered ? -10 : clicked ? 5 : 0,
          marginTop: hovered ? -10 : clicked ? 5 : 0,
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />
    </>
  );
});

export default CustomCursor;
