
/**
 * MagneticWrap — makes children subtly follow the cursor on hover.
 */
export function MagneticWrap({ children, strength = 0.3, className = "" }) {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
    e.currentTarget.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    setTimeout(() => {
      if (e.currentTarget) e.currentTarget.style.transition = "";
    }, 400);
  };

  return (
    <div
      className={`inline-block cursor-hover ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
