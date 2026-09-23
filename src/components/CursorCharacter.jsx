import React, { useEffect, useMemo, useRef } from "react";

/* ==========================================================================
   Ultra-Smooth 60 FPS Canvas Cursor Character
   - Pre-optimized WebP frames (~1.68 MB total)
   - Instant visual response (center.webp displayed in <50ms)
   - Motionless body, seamless rich royal velvet red blend
   - Responsive framing for small/mobile and desktop viewports
   ========================================================================== */
export default function CursorCharacter() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Generate 64 WebP frame paths
  const framePaths = useMemo(
    () => Array.from({ length: 64 }, (_, i) => `/frames/frame-${String(i).padStart(2, "0")}.webp?v=960`),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    let cancelled = false;

    const images = new Array(64).fill(null);
    let centerImg = null;
    let fallbackImg = null;

    // Load fallback image
    const placeholder = new Image();
    placeholder.src = "/character-placeholder.png";
    fallbackImg = placeholder;

    // Tracking physics & state
    let targetAngle = 0;
    let currentAngle = 0;
    let targetDist = 9999;
    let currentDist = 9999;
    let mousePos = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.4 };
    let rafId = 0;

    // Canvas sizing (DPR aware)
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    };

    // 1. FAST INITIAL LOAD: Load center image FIRST for instant display (<50ms)
    const center = new Image();
    center.src = "/frames/center.webp?v=960";
    center.onload = () => {
      if (cancelled) return;
      centerImg = center;
    };

    // 2. Preload 64 directional frames asynchronously in the background
    framePaths.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!cancelled) images[idx] = img;
      };
    });

    // Cursor tracking
    const updateTarget = (clientX, clientY) => {
      mousePos = { x: clientX, y: clientY };
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 860;

      // Dynamic anchor: on mobile, face is positioned in the upper portion
      const faceX = w * 0.50;
      const faceY = isMobile ? h * 0.28 : h * 0.44;

      const dx = mousePos.x - faceX;
      const dy = mousePos.y - faceY;
      targetDist = Math.hypot(dx, dy);
      targetAngle = Math.atan2(dy, dx);
    };

    const handlePointerMove = (e) => {
      updateTarget(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updateTarget(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    // Shortest-path circular angular lerp
    const lerpAngle = (start, end, factor) => {
      const tau = Math.PI * 2;
      let diff = (end - start + Math.PI) % tau - Math.PI;
      if (diff < -Math.PI) diff += tau;
      return start + diff * factor;
    };

    // 60 FPS Render loop
    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 860;

      // Fluid interpolation (~30ms response)
      currentDist += (targetDist - currentDist) * 0.24;
      currentAngle = lerpAngle(currentAngle, targetAngle, 0.26);

      // Deadzone check (narrow deadzone so character tracks cursor responsively)
      const deadzoneRadius = Math.min(w, h) * (isMobile ? 0.08 : 0.055);
      const inDeadzone = currentDist < deadzoneRadius;

      // Solid seamless canvas background
      ctx.fillStyle = "#e6090a";
      ctx.fillRect(0, 0, w, h);

      // Frame selection: deadzone or directional frame
      let activeImage = null;

      if (inDeadzone && (centerImg || fallbackImg)) {
        activeImage = centerImg || fallbackImg;
      } else {
        const tau = Math.PI * 2;
        const normalized = ((currentAngle % tau + tau) % tau) / tau;
        const frameIndex = Math.min(63, Math.max(0, Math.round(normalized * 64) % 64));
        activeImage = images[frameIndex] || centerImg || fallbackImg;
      }

      // Draw crisp frame with responsive framing
      if (activeImage && activeImage.complete && activeImage.naturalWidth) {
        const nw = activeImage.naturalWidth;
        const nh = activeImage.naturalHeight;

        if (isMobile) {
          // Mobile framing: scale and frame in top 52% of viewport without overlapping copy
          const scale = Math.max(w / nw * 1.30, (h * 0.58) / nh);
          const dw = nw * scale;
          const dh = nh * scale;
          const posX = (w - dw) / 2;
          const posY = Math.max(-15, (h * 0.50 - dh) * 0.32);
          ctx.drawImage(activeImage, posX, posY, dw, dh);
        } else {
          // Desktop framing: full cover with character horizontally centered
          const scale = Math.max(w / nw, h / nh);
          const dw = nw * scale;
          const dh = nh * scale;
          const posX = (w - dw) / 2;
          const posY = Math.min(0, (h - dh) * 0.20);
          ctx.drawImage(activeImage, posX, posY, dw, dh);
        }
      }

      rafId = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [framePaths]);

  return (
    <div ref={containerRef} className="character-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="character-canvas" />
      {/* Luxury Royal Velvet Atmospheric Vignette & Color Depth Overlay */}
      <div className="hero-royal-vignette" />
    </div>
  );
}
