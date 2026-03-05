import { memo, useCallback } from "react";

/**
 * MagneticWrap — makes children subtly follow the cursor on hover.
 * GPU-accelerated with translate3d for smooth performance.
 */
export const MagneticWrap = memo(function MagneticWrap({ children, strength = 0.3, className = "" }) {
  const handleMouseMove = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    // Use translate3d for GPU acceleration
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, [strength]);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = "translate3d(0px, 0px, 0)";
    e.currentTarget.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    const target = e.currentTarget;
    setTimeout(() => {
      if (target) target.style.transition = "";
    }, 400);
  }, []);

  return (
    <div
      className={`inline-block cursor-hover ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
    >
      {children}
    </div>
  );
});
