import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  ChevronRight,
  Send,
  Download,
  CheckCircle2,
  Layers,
  Cpu,
  Globe
} from "lucide-react";
import "./styles.css";

/* ==========================================================================
   Real Data from Sanskriti's Portfolio
   ========================================================================== */

const educationData = [
  {
    institution: "Kalinga University",
    location: "Raipur, Chhattisgarh",
    period: "2024 – Present",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    details: "Currently pursuing B.Tech with focus on Data Structures, Algorithms, Web Engineering, and Modern Database Management Systems.",
    badge: "Pursuing"
  },
  {
    institution: "Adarsh Vidya Mandir",
    location: "Jharkhand",
    period: "2022 – 2024",
    degree: "Senior Secondary (Class XII)",
    field: "Science Stream (PCM)",
    details: "Completed Higher Secondary education with 69.4% aggregate, focusing on Physics, Chemistry, and Mathematics.",
    badge: "69.4%"
  },
  {
    institution: "Adarsh Vidya Mandir",
    location: "Jharkhand",
    period: "2020 – 2022",
    degree: "Secondary School (Class X)",
    field: "General Academics",
    details: "Completed Secondary School examination with 78.6% aggregate, building strong foundational mathematics and logical reasoning.",
    badge: "78.6%"
  }
];

const experienceData = [
  {
    company: "CodeAir Software Solutions",
    role: "Frontend Developer Intern",
    period: "May 2026 – Present",
    type: "Internship",
    description: [
      "Developing high-performance, accessible, and responsive user interfaces using React.js, JavaScript, and Tailwind CSS.",
      "Building modular, reusable component libraries and integrating REST APIs with streamlined state management.",
      "Collaborating directly with senior engineers to optimize frontend bundle performance and cross-browser responsiveness."
    ],
    stack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "Git & GitHub"]
  },
  {
    company: "CodeWebx Technologies",
    role: "Web Development Intern",
    period: "Nov 2025 – Feb 2026",
    type: "Internship",
    description: [
      "Built interactive web applications and responsive components utilizing React, HTML5, CSS3, and Bootstrap.",
      "Engineered reusable custom hooks and modular component hierarchy for scalable frontend architecture.",
      "Participated in Agile sprint planning, code reviews, and API testing to deliver production-ready client deliverables."
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "REST APIs"]
  }
];

const skillsCategories = [
  {
    category: "Frontend Development",
    icon: Code2,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Bootstrap", "Vite"]
  },
  {
    category: "Backend & Databases",
    icon: Layers,
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "PostgreSQL", "RESTful APIs"]
  },
  {
    category: "Tools & Platforms",
    icon: Cpu,
    skills: ["Git", "GitHub", "Vercel", "Postman", "Figma", "VS Code", "npm"]
  },
  {
    category: "Core Strengths",
    icon: Globe,
    skills: ["Responsive UI Architecture", "Clean Code Standards", "Agile Workflows", "Problem Solving", "Rapid Prototyping"]
  }
];

const projectsData = [
  {
    title: "Modern Shoe Store UI",
    type: "E-Commerce Experience",
    category: "web",
    description: "A sleek and modern footwear e-commerce UI built using React.js. Features dynamic product showcases, interactive cart previews, responsive layouts, and fluid transitions inspired by premium sneaker brands.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    demo: "https://modern-shoe-web-ui-react.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/modern-shoe-web-UI-react.git"
  },
  {
    title: "Personal Portfolio Website",
    type: "Motion & Creative Dev",
    category: "web",
    description: "High-end luxury portfolio website featuring an ultra-smooth, zero-ghosting 60 FPS cursor-tracking character animation, frosted glass navigation pill, and responsive layouts.",
    stack: ["React.js", "HTML5 Canvas", "Tailwind CSS", "Vite"],
    demo: "https://my-portfolio-psi-liard-97.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/My-Portfolio.git"
  },
  {
    title: "Typing Speed Test",
    type: "Interactive Web Tool",
    category: "interactive",
    description: "A real-time typing speed test application that measures WPM (Words Per Minute), accuracy percentages, interactive error highlighting, and countdown session timer.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://sanskritigupta312-jpg.github.io/Typing-Test/",
    source: "https://github.com/sanskritigupta312-jpg/Typing-Test"
  },
  {
    title: "Amazon Clone",
    type: "Full Stack Clone",
    category: "web",
    description: "Comprehensive desktop replica of the Amazon shopping platform featuring product catalog navigation, shopping cart operations, user sign-in simulation, and item filtering.",
    stack: ["React.js", "Tailwind CSS", "Firebase"],
    demo: "https://sanskritigupta312-jpg.github.io/Amazon-clone/",
    source: "https://github.com/sanskritigupta312-jpg/Amazon-clone"
  },
  {
    title: "Flipkart Clone",
    type: "E-Commerce Clone",
    category: "web",
    description: "Responsive clone of Flipkart's shopping interface highlighting promotional carousels, categorized product display grids, banner promos, and brand showcase sections.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://sanskritigupta312-jpg.github.io/Flipkart-Clone-Designing-Web/",
    source: "https://github.com/sanskritigupta312-jpg/Flipkart-Clone-Designing-Web"
  },
  {
    title: "Tic-Tac-Toe Game",
    type: "Interactive Game",
    category: "interactive",
    description: "Classic two-player Tic-Tac-Toe web game featuring interactive board states, automatic win detection logic, turn indicators, winning line visual cues, and score tracking.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://sanskritigupta312-jpg.github.io/Tic-Tac-Toe/",
    source: "https://github.com/sanskritigupta312-jpg/Tic-Tac-Toe.git"
  },
  {
    title: "Rock-Paper-Scissors Game",
    type: "Interactive Game",
    category: "interactive",
    description: "Fun, animated Rock-Paper-Scissors game featuring computerized choice generation, real-time score keeping, victory alerts, and interactive gesture selection.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://sanskritigupta312-jpg.github.io/Rock-Paper-Scissors/",
    source: "https://github.com/sanskritigupta312-jpg/Rock-Paper-Scissors.git"
  }
];

const certificatesData = [
  {
    title: "Prompt Coding Certificate",
    org: "IIIT, Naya Raipur",
    year: "April, 2026",
    description: "Successfully completed Prompt Coding certification, mastering prompt engineering principles and AI-assisted software development workflows.",
    file: "Prompt Coding.pdf"
  },
  {
    title: "React JS Developer Internship",
    org: "CodeWebx Technologies",
    year: "February 27, 2026",
    description: "Completed an intensive 4-month React JS Developer internship program, building real-world production web platforms using React and Tailwind CSS.",
    file: "CodeWebx Internship.pdf"
  },
  {
    title: "Bootcamp on Data Empowerment",
    org: "Kalinga University & IIIT Hyderabad",
    year: "January 31, 2026",
    description: "Participated in hands-on bootcamp focused on Data Empowerment for Local Innovation and Tech Entrepreneurship.",
    file: "Data-Empowerment.pdf"
  },
  {
    title: "Cloud Computing & DevOps Value Added Course",
    org: "Kalinga University",
    year: "January 30, 2026",
    description: "Completed comprehensive 30-hour course covering Cloud Computing architectures, DevOps pipelines, AWS, Azure, and Google Cloud services.",
    file: "Cloud-Computing.pdf"
  },
  {
    title: "Technology Job Simulation",
    org: "Deloitte Australia / Forage",
    year: "January 9, 2026",
    description: "Completed practical simulation tasks in software architecture, client requirement analysis, and practical coding exercises.",
    file: "Certificate.pdf"
  },
  {
    title: "Innovation Ambassador (IA) Training",
    org: "MoE's Innovation Cell & AICTE",
    year: "November 27, 2025",
    description: "Completed Foundation Level training consisting of 16 comprehensive sessions and 30 contact hours in tech innovation management.",
    file: "IA Online Training Certificate (2).pdf"
  },
  {
    title: "ICSTDTSD International Conference",
    org: "Kalinga University",
    year: "October 31, 2025",
    description: "Participated and presented technical paper at the International Conference on Smart Technologies and Digital Transformation for Sustainable Development.",
    file: "International-Conference .pdf"
  },
  {
    title: "Hands-on Training on Auto-ML Basics and EDA",
    org: "Kalinga University",
    year: "August 22, 2025",
    description: "Hands-on training session on Automated Machine Learning (Auto-ML) and Exploratory Data Analysis (EDA) leveraging modern AI frameworks.",
    file: "Sanskriti Kumari.pdf"
  },
  {
    title: "Cybersecurity Skilling Course",
    org: "Tech Mahindra Foundation & Skill India",
    year: "August 2, 2025",
    description: "Completed intensive 10-hour skilling course covering modern cybersecurity protocols, network hygiene, and defensive fundamentals.",
    file: "Cyber-Security-Certificate.pdf"
  },
  {
    title: "ICETSD International Conference",
    org: "Kalinga University",
    year: "April 18, 2025",
    description: "Attended and presented research paper at the International Conference on Emerging Technologies for Sustainable Development.",
    file: "International-Conference-1.pdf"
  },
  {
    title: "Two-Day Certification Program on Web Development",
    org: "Faculty of CS & IT, Kalinga University",
    year: "February 25, 2025",
    description: "Completed intensive two-day hands-on workshop focused on full-stack web development methodologies and best practices.",
    file: "Web-Dev.pdf"
  },
  {
    title: "Hands-on Training on Python, Coding & Robotics",
    org: "IEEE KU SB & BDS Education",
    year: "January 25, 2025",
    description: "Comprehensive hands-on training covering Python scripting, algorithmic coding logic, and microcontroller robotics integration.",
    file: "One-Day.pdf"
  },
  {
    title: "Robotics Training - 3rd Position Winner",
    org: "IEEE KU SB",
    year: "September 20, 2024",
    description: "Secured 3rd position for the 'IR Remote Controlled Robot' project during a competitive one-week hands-on robotics training.",
    file: "Robotics-3rd.pdf"
  }
];

/* Helper to generate certificate view link */
const getCertLink = (filename) => {
  return `https://my-portfolio-psi-liard-97.vercel.app/certificates/${encodeURIComponent(filename)}`;
};

/* ==========================================================================
   Ultra-Smooth 60 FPS Canvas Cursor Character
   - Pre-optimized WebP frames (~1.68 MB total)
   - Instant visual response (center.webp displayed in <50ms)
   - Motionless body, seamless solid red background (#e6090a)
   - Responsive framing for small/mobile and desktop viewports
   ========================================================================== */
function CursorCharacter() {
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
    </div>
  );
}

/* ==========================================================================
   Magnetic Custom Cursor
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

      const target = e.target;
      const isInteractive = target && (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".project-card") ||
        target.closest(".cert-card") ||
        target.closest(".exp-card") ||
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

/* ==========================================================================
   Main Application with Dedicated Pages
   ========================================================================== */
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [projectFilter, setProjectFilter] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (["home", "about", "experience", "projects", "certificates", "contact"].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage("home");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return projectsData;
    return projectsData.filter((p) => p.category === projectFilter);
  }, [projectFilter]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="app">
      <MagneticCursor />

      {/* Floating Frosted-Glass Navigation Pill Centered at Top */}
      <header className="nav-container">
        <nav className="nav-pill" aria-label="Main Navigation">
          <button
            type="button"
            className={currentPage === "home" ? "active" : ""}
            onClick={() => navigateTo("home")}
          >
            HOME
          </button>
          <button
            type="button"
            className={currentPage === "about" ? "active" : ""}
            onClick={() => navigateTo("about")}
          >
            ABOUT
          </button>
          <button
            type="button"
            className={currentPage === "experience" ? "active" : ""}
            onClick={() => navigateTo("experience")}
          >
            EXPERIENCE
          </button>
          <button
            type="button"
            className={currentPage === "projects" ? "active" : ""}
            onClick={() => navigateTo("projects")}
          >
            PROJECTS
          </button>
          <button
            type="button"
            className={currentPage === "certificates" ? "active" : ""}
            onClick={() => navigateTo("certificates")}
          >
            CERTIFICATES
          </button>
          <button
            type="button"
            className={currentPage === "contact" ? "active" : ""}
            onClick={() => navigateTo("contact")}
          >
            CONTACT
          </button>
        </nav>
      </header>

      <main className="page-wrapper">
        {/* ====================================================================
            PAGE 1: HOME (Exact Hero Content Preserved + 3D Tracking Character)
            ==================================================================== */}
        {currentPage === "home" && (
          <div className="page-view home-view">
            <section id="home" className="hero">
              <CursorCharacter />

              {/* Strict Requirement: Hero Content Unchanged */}
              <div className="hero-copy">
                <p className="eyebrow">HI, I'M</p>
                <h1>Sanskriti</h1>
                <p className="bio">
                  Crafting modern full-stack web experiences with clean code, creative motion, and scalable digital architecture.
                </p>

                <div className="hero-actions">
                  <a
                    className="btn btn-primary"
                    href="/Sanskriti_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume <ArrowUpRight size={16} />
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigateTo("contact")}
                  >
                    Let's Talk
                  </button>
                </div>
              </div>

              <div className="scroll-hint">
                <span /> Explore Portfolio
              </div>
            </section>

            {/* Quick Portfolio Highlights Section */}
            <section className="section highlights-section">
              <div className="section-head">
                <p className="eyebrow">Quick Highlights</p>
                <h2>Engineering with passion &amp; precision.</h2>
              </div>

              <div className="highlights-grid">
                <div className="highlight-card" onClick={() => navigateTo("experience")}>
                  <div className="highlight-icon">
                    <Briefcase size={26} />
                  </div>
                  <h3>Frontend Developer Intern</h3>
                  <p className="highlight-meta">CodeAir Software Solutions • Present</p>
                  <p className="highlight-desc">
                    Building production web interfaces with React, JavaScript, and Tailwind CSS.
                  </p>
                  <span className="card-cta">
                    View Experience <ChevronRight size={16} />
                  </span>
                </div>

                <div className="highlight-card" onClick={() => navigateTo("about")}>
                  <div className="highlight-icon">
                    <GraduationCap size={26} />
                  </div>
                  <h3>B.Tech in CSE</h3>
                  <p className="highlight-meta">Kalinga University • 2024–Present</p>
                  <p className="highlight-desc">
                    Computer Science undergraduate with a passion for scalable web platforms.
                  </p>
                  <span className="card-cta">
                    About My Journey <ChevronRight size={16} />
                  </span>
                </div>

                <div className="highlight-card" onClick={() => navigateTo("projects")}>
                  <div className="highlight-icon">
                    <Code2 size={26} />
                  </div>
                  <h3>7 Featured Projects</h3>
                  <p className="highlight-meta">Full Stack, Web Apps &amp; Games</p>
                  <p className="highlight-desc">
                    Shoe Store UI, Amazon Clone, Typing Test, Games with live demos &amp; source code.
                  </p>
                  <span className="card-cta">
                    Browse All Projects <ChevronRight size={16} />
                  </span>
                </div>

                <div className="highlight-card" onClick={() => navigateTo("certificates")}>
                  <div className="highlight-icon">
                    <Award size={26} />
                  </div>
                  <h3>13 Certifications</h3>
                  <p className="highlight-meta">IIIT Raipur, Deloitte, Tech Mahindra</p>
                  <p className="highlight-desc">
                    Accredited coursework in prompt engineering, cloud computing, and web engineering.
                  </p>
                  <span className="card-cta">
                    View Certifications <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ====================================================================
            PAGE 2: ABOUT (Education, Bio & Skills)
            ==================================================================== */}
        {currentPage === "about" && (
          <div className="page-view inner-page about-page">
            <div className="section-head">
              <p className="eyebrow">About Me</p>
              <h2>Code, design &amp; curiosity.</h2>
              <p className="section-sub">
                I am a Computer Science Engineering student at Kalinga University passionate about crafting intuitive, high-performance web applications and digital interfaces.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="sub-section">
              <div className="sub-head">
                <GraduationCap size={24} className="accent-icon" />
                <h3>Education Journey</h3>
              </div>
              <div className="timeline-grid">
                {educationData.map((edu) => (
                  <div className="timeline-card" key={edu.degree}>
                    <div className="timeline-badge">{edu.badge}</div>
                    <span className="timeline-period">{edu.period}</span>
                    <h4>{edu.degree}</h4>
                    <p className="timeline-inst">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="timeline-field">{edu.field}</p>
                    <p className="timeline-desc">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Matrix */}
            <div className="sub-section">
              <div className="sub-head">
                <Sparkles size={24} className="accent-icon" />
                <h3>Technical Arsenal</h3>
              </div>
              <div className="skills-grid">
                {skillsCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div className="skill-cat-card" key={cat.category}>
                      <div className="cat-title-row">
                        <Icon size={20} className="cat-icon" />
                        <h4>{cat.category}</h4>
                      </div>
                      <div className="skill-tags">
                        {cat.skills.map((skill) => (
                          <span className="skill-pill" key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="page-cta-box">
              <h3>Interested in collaborating?</h3>
              <p>Check out my complete CV or reach out directly for internships and opportunities.</p>
              <div className="cta-actions">
                <a
                  className="btn btn-primary"
                  href="/Sanskriti_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={16} /> Download Resume
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigateTo("contact")}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================================
            PAGE 3: EXPERIENCE (CodeAir & CodeWebx Internships)
            ==================================================================== */}
        {currentPage === "experience" && (
          <div className="page-view inner-page experience-page">
            <div className="section-head">
              <p className="eyebrow">Work Experience</p>
              <h2>Industry experience &amp; internships.</h2>
              <p className="section-sub">
                Hands-on frontend engineering experience building scalable, responsive web solutions for client and enterprise applications.
              </p>
            </div>

            <div className="experience-list">
              {experienceData.map((exp, idx) => (
                <article className="exp-card" key={exp.company}>
                  <div className="exp-header">
                    <div>
                      <div className="exp-type-tag">{exp.type}</div>
                      <h3>{exp.role}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>

                  <ul className="exp-points">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="exp-tech-row">
                    <span className="tech-label">Technologies:</span>
                    <div className="tags">
                      {exp.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="page-cta-box">
              <h3>Looking for a dedicated Frontend Developer?</h3>
              <p>I am available for internships, freelance projects, and full-time opportunities.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigateTo("contact")}
              >
                Let's Talk <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ====================================================================
            PAGE 4: PROJECTS (All 7 Real Projects with Filters)
            ==================================================================== */}
        {currentPage === "projects" && (
          <div className="page-view inner-page projects-page">
            <div className="section-head">
              <p className="eyebrow">Portfolio Works</p>
              <h2>Things I've engineered.</h2>
              <p className="section-sub">
                A showcase of modern web platforms, clones, responsive UI concepts, and interactive tools built with clean architecture.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="filter-pill-bar">
              <button
                type="button"
                className={`filter-btn ${projectFilter === "all" ? "active" : ""}`}
                onClick={() => setProjectFilter("all")}
              >
                All Projects ({projectsData.length})
              </button>
              <button
                type="button"
                className={`filter-btn ${projectFilter === "web" ? "active" : ""}`}
                onClick={() => setProjectFilter("web")}
              >
                Web &amp; Full Stack (4)
              </button>
              <button
                type="button"
                className={`filter-btn ${projectFilter === "interactive" ? "active" : ""}`}
                onClick={() => setProjectFilter("interactive")}
              >
                Interactive &amp; Games (3)
              </button>
            </div>

            {/* Projects Grid */}
            <div className="project-grid">
              {filteredProjects.map((p, i) => (
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

                  <div className="card-links">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live Demo <ExternalLink size={15} />
                    </a>
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noreferrer"
                      className="project-sublink"
                    >
                      <Github size={15} /> Code
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ====================================================================
            PAGE 5: CERTIFICATES (13 Real Certificates)
            ==================================================================== */}
        {currentPage === "certificates" && (
          <div className="page-view inner-page certificates-page">
            <div className="section-head">
              <p className="eyebrow">Milestones</p>
              <h2>Licenses &amp; Certifications.</h2>
              <p className="section-sub">
                13 accredited certifications spanning prompt engineering, cloud computing, cybersecurity, web development, and robotics.
              </p>
            </div>

            <div className="certs-grid">
              {certificatesData.map((c, i) => (
                <article className="cert-card" key={c.title + i}>
                  <div className="cert-header">
                    <div className="cert-badge">
                      <Award size={20} />
                    </div>
                    <span className="cert-date">{c.year}</span>
                  </div>

                  <h3>{c.title}</h3>
                  <p className="cert-org">{c.org}</p>
                  <p className="cert-desc">{c.description}</p>

                  <a
                    href={getCertLink(c.file)}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link"
                  >
                    View Credential <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ====================================================================
            PAGE 6: CONTACT (Direct Info & Interactive Form)
            ==================================================================== */}
        {currentPage === "contact" && (
          <div className="page-view inner-page contact-page">
            <div className="section-head">
              <p className="eyebrow">Get In Touch</p>
              <h2>
                Let's make something<br />
                <em>worth scrolling for.</em>
              </h2>
              <p className="section-sub">
                Have a question, collaboration idea, or want to discuss a frontend role? My inbox is always open.
              </p>
            </div>

            <div className="contact-layout">
              {/* Left Column: Direct Info */}
              <div className="contact-info-col">
                <a className="contact-email" href="mailto:sanskritigupta312@gmail.com">
                  sanskritigupta312@gmail.com <ArrowUpRight size={24} />
                </a>

                <div className="contact-details-list">
                  <div className="contact-item">
                    <Phone size={18} className="contact-item-icon" />
                    <div>
                      <span className="contact-item-label">Phone</span>
                      <a href="tel:+919341445297">+91 9341445297</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Mail size={18} className="contact-item-icon" />
                    <div>
                      <span className="contact-item-label">Email</span>
                      <a href="mailto:sanskritigupta312@gmail.com">sanskritigupta312@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Globe size={18} className="contact-item-icon" />
                    <div>
                      <span className="contact-item-label">Location</span>
                      <p>Raipur, Chhattisgarh &bull; Jharkhand, India</p>
                    </div>
                  </div>
                </div>

                <div className="socials">
                  <a
                    href="https://github.com/sanskritigupta312-jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanskriti-kumari-36273a355"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a href="mailto:sanskritigupta312@gmail.com">
                    <Mail size={18} /> Direct Email
                  </a>
                </div>
              </div>

              {/* Right Column: Message Form */}
              <div className="contact-form-col">
                <form className="contact-card-form" onSubmit={handleContactSubmit}>
                  <h3>Send a Quick Message</h3>

                  {formSubmitted ? (
                    <div className="form-success-banner">
                      <CheckCircle2 size={24} />
                      <p>Thank you! Your message has been noted. Sanskriti will get back to you shortly.</p>
                    </div>
                  ) : (
                    <>
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="alex@example.com"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          id="subject"
                          type="text"
                          required
                          placeholder="Project Discussion / Internship Offer"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          placeholder="Hi Sanskriti, I'd like to talk about..."
                        />
                      </div>

                      <button type="submit" className="btn btn-primary form-submit-btn">
                        <Send size={16} /> Send Message
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="editorial-footer">
        <div className="footer-top-line" />

        <div className="footer-cols-wrap">
          {/* Column 1: Get in Touch & Location */}
          <div className="footer-col col-contact">
            <p className="footer-label">get in touch</p>
            <a className="footer-email-link" href="mailto:sanskritigupta312@gmail.com">
              sanskritigupta312@gmail.com
            </a>
            <div className="footer-address">
              <p className="address-name">Sanskriti Kumari</p>
              <p>Frontend &amp; Full Stack Developer</p>
              <p>Kalinga University, Raipur</p>
              <p>Jharkhand &amp; Chhattisgarh, India</p>
              <a className="footer-phone-link" href="tel:+919341445297">
                +91 9341445297
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & Social Links */}
          <div className="footer-col col-links">
            <a
              href="https://www.linkedin.com/in/sanskriti-kumari-36273a355"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sanskritigupta312-jpg"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="/Sanskriti_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <button type="button" onClick={() => navigateTo("projects")}>
              Projects
            </button>
            <button type="button" onClick={() => navigateTo("experience")}>
              Experience
            </button>
            <button type="button" onClick={() => navigateTo("certificates")}>
              Certificates
            </button>
            <button type="button" onClick={() => navigateTo("about")}>
              About
            </button>
            <button type="button" onClick={() => navigateTo("contact")}>
              Contact
            </button>
          </div>

          {/* Column 3: Copyright & Status */}
          <div className="footer-col col-meta">
            <p className="footer-copy">© 2024 – 2026</p>
            <p className="footer-brand-name">Sanskriti Kumari</p>
            <p className="footer-submeta">Available for Roles &amp; Internships</p>
            <p className="footer-submeta">Engineered with React &amp; 60fps Canvas</p>
          </div>
        </div>

        {/* Big Brutalist-Luxury Brand Wordmark Box */}
        <div
          className="footer-giant-box"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          title="Back to Top"
        >
          <span className="giant-brand-text">sanskriti.</span>
          <div className="giant-brand-icon" aria-hidden="true">
            <svg
              viewBox="0 0 160 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="footer-eye-svg"
            >
              <path
                d="M80 6C35 6 4 42 4 42C4 42 35 78 80 78C125 78 156 42 156 42C156 42 125 6 80 6Z"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M80 60C90 60 98 52 98 42C98 32 90 24 80 24C73 24 67 28 64 34L80 42L64 50C67 56 73 60 80 60Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
