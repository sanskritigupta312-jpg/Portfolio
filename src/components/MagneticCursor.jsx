import React, { useEffect, useRef } from "react";

/* ==========================================================================
   Magnetic Custom Cursor
   ========================================================================== */
export default function MagneticCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let raf = 0;

    const handlePointerMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target;
      const isInteractive = target && (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".project-card") ||
        target.closest(".cert-card") ||
        target.closest(".exp-card") ||
        target.closest(".highlight-card") ||
        target.closest("[role='button']")
      );

      if (isInteractive !== isHovering) {
        isHovering = !!isInteractive;
        if (ringRef.current) {
          if (isHovering) {
            ringRef.current.classList.add("cursor-hover");
          } else {
            ringRef.current.classList.remove("cursor-hover");
          }
        }
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    raf = requestAnimationFrame(animateRing);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
