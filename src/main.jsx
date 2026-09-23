import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "StaffGo",
    type: "Web Platform",
    description: "Enterprise workforce management and responsive web platform built with Next.js, PostgreSQL and interactive dashboard analytics.",
    stack: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    link: "#contact"
  },
  {
    title: "PixelGo",
    type: "Client Project",
    description: "High-conversion modern interface focused on slick micro-interactions, responsive design systems, and rapid page speeds.",
    stack: ["React", "Tailwind CSS", "Firebase"],
    link: "#contact"
  },
  {
    title: "Modern Shoe UI",
    type: "Interactive Experience",
    description: "3D product showcase and immersive e-commerce experience designed with smooth transitions and gesture controls.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    link: "#contact"
  },
  {
    title: "Motion Lab",
    type: "Creative Coding",
    description: "Experimental UI repository exploring physics-based animation, magnetic cursor mechanics, and 60fps canvas shaders.",
    stack: ["Canvas 2D", "JavaScript", "Framer Motion"],
    link: "#contact"
  }
];

const skills = [
  "React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS",
  "Next.js", "Node.js", "PostgreSQL", "Firebase", "REST APIs", "Git & GitHub"
];

/* ==========================================================================
   Zero-Ghosting 60 FPS Canvas Renderer (guide.pdf Technical Constraints)
   - No CSS 3D transforms (motionless body)
   - Pre-extracted WebP frame array
   - Shortest-path angular lerp (~0.26 factor)
   - Center eye contact deadzone (~12% radius)
   - Single crisp frame at 100% opacity (no alpha ghosting)
   ========================================================================== */
function CursorCharacter() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [framesAvailable, setFramesAvailable] = useState(false);
  const [mobile, setMobile] = useState(false);

  // Generate 64 WebP frame paths
  const framePaths = useMemo(
    () => Array.from({ length: 64 }, (_, i) => `/frames/frame-${String(i).padStart(2, "0")}.webp`),
    []
  );

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 860);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false }); // High-performance opaque context
    let cancelled = false;

    const images = [];
    let centerImg = null;
    let fallbackImg = null;

    // Load fallback placeholder image
    const placeholder = new Image();
    placeholder.src = "/character-placeholder.png";
    fallbackImg = placeholder;

    // Preload center neutral pose and 64 directional frames
    const preloadFrames = async () => {
      const [centerLoaded, ...loaded] = await Promise.all([
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = "/frames/center.webp";
        }),
        ...framePaths.map((src) => new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = src;
        }))
      ]);
      if (cancelled) return;
      if (centerLoaded) centerImg = centerLoaded;
      images.push(...loaded);
      const hasAnyFrames = loaded.some(Boolean);
      setFramesAvailable(hasAnyFrames);
    };

    preloadFrames();

    // Tracking physics & state
    let targetAngle = 0;
    let currentAngle = 0;
    let targetDist = 9999;
    let currentDist = 9999;
    let mousePos = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
    let rafId = 0;

    // Canvas sizing (DPR aware)
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Cursor tracking
    const handlePointerMove = (e) => {
      mousePos = { x: e.clientX, y: e.clientY };

      const w = window.innerWidth;
      const h = window.innerHeight;

      // Character face position anchor - centered on screen
      const faceX = w * 0.50;
      const faceY = h * 0.44;

      const dx = mousePos.x - faceX;
      const dy = mousePos.y - faceY;
      targetDist = Math.hypot(dx, dy);
      targetAngle = Math.atan2(dy, dx);
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

      // Smooth interpolation for both distance and angle (~35ms response, ultra-fluid)
      currentDist += (targetDist - currentDist) * 0.22;
      currentAngle = lerpAngle(currentAngle, targetAngle, 0.24);

      // Deadzone check based on smoothed distance (tight deadzone ~5.5% so she tracks cursor everywhere)
      const deadzoneRadius = Math.min(w, h) * 0.055;
      const inDeadzone = currentDist < deadzoneRadius;

      // Clear with exact seamless background color
      ctx.fillStyle = "#e6090a";
      ctx.fillRect(0, 0, w, h);

      // Frame selection: either center deadzone, directional frame, or placeholder
      const validFrames = images.filter(Boolean);
      let activeImage = null;

      if (inDeadzone && (centerImg || fallbackImg)) {
        activeImage = centerImg || fallbackImg;
      } else if (validFrames.length > 0) {
        // Map angle (-PI..PI) to circular index (0..63)
        const tau = Math.PI * 2;
        const normalized = ((currentAngle % tau + tau) % tau) / tau;
        const frameIndex = Math.min(63, Math.max(0, Math.round(normalized * 64) % 64));
        activeImage = images[frameIndex] || validFrames[0];
      } else {
        activeImage = fallbackImg;
      }

      // Draw rock-solid crisp frame covering viewport seamlessly (no box seam, no hair cut)
      if (activeImage && activeImage.complete && activeImage.naturalWidth) {
        const nw = activeImage.naturalWidth;
        const nh = activeImage.naturalHeight;

        // Object-fit: cover ensures the video frame fills 100% of the viewport from edge to edge
        const scale = Math.max(w / nw, h / nh);
        const dw = nw * scale;
        const dh = nh * scale;

        // Position character exactly centered horizontally
        const posX = (w - dw) / 2;
        // Position top edge at or slightly above viewport so hair top flows naturally without any cut
        const posY = Math.min(0, (h - dh) * 0.20);

        ctx.drawImage(activeImage, posX, posY, dw, dh);
      }

      rafId = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [framePaths, mobile]);

  return (
    <div ref={containerRef} className="character-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="character-canvas" />
    </div>
  );
}

/* ==========================================================================
   Magnetic Custom Cursor (guide.pdf requirement)
   - Glowing white center dot
   - Smooth trailing aura ring
   - Hover scaling on interactive elements
   ========================================================================== */
function MagneticCursor() {
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

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target && (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".project-card") ||
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

    // Smooth trailing physics for aura ring
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

/* ==========================================================================
   Main Application
   ========================================================================== */
function App() {
  return (
    <div className="app">
      <MagneticCursor />

      {/* Floating Frosted-Glass Navigation Pill Centered at Top (guide.pdf requirement) */}
      <div className="nav-container">
        <nav className="nav-pill" aria-label="Main Navigation">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>

      <main>
        {/* Full-Screen Hero Section */}
        <section id="home" className="hero">
          <CursorCharacter />

          {/* Hero Typography (Bottom-Left) */}
          <div className="hero-copy">
            <p className="eyebrow">HI, I'M</p>
            <h1>Sanskriti</h1>
            <p className="bio">
              Crafting modern full-stack web experiences with clean code, creative motion, and scalable digital architecture.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="/Sanskriti_Resume.pdf" target="_blank" rel="noreferrer">
                Resume <ArrowUpRight size={16} />
              </a>
              <a className="btn btn-secondary" href="#contact">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="scroll-hint">
            <span /> Scroll to explore
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="section work">
          <div className="section-head">
            <p className="eyebrow">Selected Work</p>
            <h2>Things I've built.</h2>
          </div>

          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <p className="project-type">{p.type}</p>
                <h3>{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <a href={p.link} className="project-link">
                  View project <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about">
          <div>
            <p className="eyebrow">About Me</p>
            <h2>Code, design &amp; curiosity.</h2>
          </div>
          <div className="about-copy">
            <p>
              I'm a developer who enjoys turning ideas into polished, high-performing web experiences.
              I bridge the gap between creative visual design and scalable full stack engineering.
            </p>
            <p>
              My toolkit spans modern React architectures, state management, REST APIs, and responsive design systems
              engineered for real-world reliability.
            </p>
            <div className="skill-cloud">
              {skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <p className="eyebrow">Have a project?</p>
          <h2>
            Let's make something<br />
            <em>worth scrolling for.</em>
          </h2>

          <a className="contact-email" href="mailto:sanskriti@example.com">
            sanskriti@example.com <ArrowUpRight size={24} />
          </a>

          <div className="socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="mailto:sanskriti@example.com">
              <Mail size={18} /> Email
            </a>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Sanskriti Kumari. Designed &amp; built with modern React.
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
