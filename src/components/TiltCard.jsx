import React, { useRef, useState } from "react";

/* ==========================================================================
   Interactive 3D Perspective Tilt Card with Dynamic Glass Glare
   ========================================================================== */
export default function TiltCard({ children, className = "", style = {}, onClick, ...props }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handlePointerMove = (e) => {
    if (e.pointerType === "touch") return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Elegant, smooth 3D tilt angles (max ~6 degrees)
    const rotateX = ((centerY - y) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTiltStyle({
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`,
      transition: "transform 0.08s ease-out"
    });
    setGlareStyle({
      opacity: 0.18,
      background: `radial-gradient(circle at ${(x / rect.width * 100).toFixed(1)}% ${(y / rect.height * 100).toFixed(1)}%, rgba(255, 255, 255, 0.28) 0%, transparent 60%)`
    });
  };

  const handlePointerLeave = () => {
    setTiltStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      transition: "transform 0.5s cubic-bezier(0.2, 0, 0, 1)"
    });
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-3d ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      style={{ ...style, ...tiltStyle }}
      {...props}
    >
      {children}
      <div className="tilt-glare" style={glareStyle} aria-hidden="true" />
    </div>
  );
}
