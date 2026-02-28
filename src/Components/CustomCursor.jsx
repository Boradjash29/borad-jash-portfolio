import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef({ x: 0, y: 0 });
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let raf;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      const { x, y } = cursorRef.current;
      ringX += (x - ringX) * 0.15;
      ringY += (y - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
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

    const observer = new MutationObserver(() => {
      currentEls.forEach((el) => {
        el.removeEventListener("mouseenter", onOverInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      currentEls = attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
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

  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
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
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.5)",
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.2s, width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
          ...(hovered ? { width: 60, height: 60, borderColor: "#EBDA28", marginLeft: -10, marginTop: -10 } : {}),
          ...(clicked ? { width: 30, height: 30, marginLeft: 5, marginTop: 5 } : {}),
        }}
      />
    </>
  );
}
