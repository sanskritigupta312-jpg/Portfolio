import React from "react";
import { ArrowUpRight, Github, ExternalLink, Download } from "lucide-react";
import CursorCharacter from "../components/CursorCharacter";
import { projectsData, experienceData } from "../data/portfolioData";

/* ==========================================================================
   Home Page: Sandeep.design Layout & Color Architecture
   - Strict Hero Content & 60fps Canvas Character Preserved
   - Warm Greige (#e5e3dc), Charcoal (#111111) & Red (#e63b2e) Accent
   ========================================================================== */
export default function Home({ navigateTo }) {
  const featuredProject = projectsData[0]; // Modern Shoe Store UI

  return (
    <div className="page-view home-view">
      {/* ====================================================================
          HERO SECTION (Strictly Preserved - Canvas Character & Unchanged Text)
          ==================================================================== */}
      <section id="home" className="hero">
        <CursorCharacter />

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

      {/* Seamless Minimalist Ribbon between Hero and Sandeep Greige Body */}
      <div className="sd-hero-transition-strip">
        <div className="sd-transition-inner">
          <span>
            <span className="sd-status-dot" /> Available for Production Roles &amp; Internships
          </span>
          <span>Full Stack &bull; React.js &bull; 60fps Canvas &bull; Scalable Web Architecture</span>
          <span>Raipur &bull; Jharkhand &bull; Remote</span>
        </div>
      </div>

      {/* ====================================================================
          SECTION 01: FEATURED WORK (Split Card with Highlights & Mockup)
          ==================================================================== */}
      <section className="sd-section">
        <div className="sd-tag-bar">
          <div className="sd-tag-left">
            <span>01 &mdash; FEATURED WORK</span>
          </div>
          <span className="sd-tag-right">[ CASE STUDY 01 ]</span>
        </div>

        <div className="sd-featured-card">
          <div className="sd-featured-info">
            <div>
              <span className="sd-pill-badge">[ {featuredProject.type} ]</span>
              <h3>{featuredProject.title}</h3>

              <div className="sd-highlights-list">
                <p className="hl-label">Key Highlights</p>
                <ul>
                  <li>Dynamic footwear showcase with interactive sneaker previews &amp; angle transitions.</li>
                  <li>Real-time cart state management with instant quantity and pricing calculations.</li>
                  <li>Modular architecture engineered with React.js, Tailwind CSS, and lightning-fast Vite tooling.</li>
                </ul>
              </div>
            </div>

            <div className="sd-featured-actions">
              <a
                href={featuredProject.demo}
                target="_blank"
                rel="noreferrer"
                className="sd-btn-black"
              >
                View Live Demo <ArrowUpRight size={15} />
              </a>
              <a
                href={featuredProject.source}
                target="_blank"
                rel="noreferrer"
                className="sd-btn-outline"
              >
                <Github size={15} /> Source Code
              </a>
            </div>
          </div>

          <div className="sd-featured-preview">
            <div className="sd-mockup-frame">
              <div className="sd-mockup-topbar">
                <div className="sd-mockup-dot" />
                <div className="sd-mockup-dot" />
                <div className="sd-mockup-dot" />
              </div>
              <div className="sd-mockup-screen">
                <span className="sd-screen-tag">REACT &bull; E-COMMERCE UI &bull; PRODUCTION READY</span>
                <h4 className="sd-screen-headline">Next-Generation Footwear Store</h4>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: "0", lineHeight: "1.5" }}>
                  Interactive sneaker discovery catalog with high-fidelity animations, responsive mobile design, and fluid cart micro-interactions.
                </p>
                <div className="sd-screen-stats">
                  <div className="sd-screen-stat-box">
                    <span>Performance</span>
                    <strong>100%</strong>
                  </div>
                  <div className="sd-screen-stat-box">
                    <span>Framerate</span>
                    <strong>60 FPS</strong>
                  </div>
                  <div className="sd-screen-stat-box">
                    <span>Stack</span>
                    <strong>React + Vite</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: SELECTED WORKS (Sandeep Table List Rows)
          ==================================================================== */}
      <section className="sd-section">
        <div className="sd-tag-bar">
          <div className="sd-tag-left">
            <span>02 &mdash; SELECTED WORKS</span>
          </div>
          <span className="sd-tag-right">7 WORKS INDEX</span>
        </div>

        <h2 className="sd-display-title">
          Things I've engineered with <span className="sd-accent">precision</span>.
        </h2>
        <p className="sd-sub-manifesto">
          A curated index of responsive web platforms, full-stack clones, interactive utilities, and algorithmic systems.
        </p>

        <div className="sd-works-table">
          {projectsData.map((project, idx) => (
            <div
              key={project.title}
              className="sd-work-row"
              onClick={() => window.open(project.demo, "_blank")}
              title={`View ${project.title}`}
            >
              <span className="sd-work-index">P.0{idx + 1}</span>

              <div className="sd-work-title-wrap">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <span className="sd-work-cat">{project.type}</span>
              <span className="sd-work-year">2025&ndash;26</span>
              <span className="sd-work-arrow">↗</span>
            </div>
          ))}
        </div>

        <div className="sd-table-footer-action">
          <button
            type="button"
            className="sd-btn-outline"
            onClick={() => navigateTo("projects")}
          >
            Explore All 7 Projects <ArrowUpRight size={14} />
          </button>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: WHY WORK WITH ME (3-Column Bento Grid)
          ==================================================================== */}
      <section className="sd-section">
        <div className="sd-tag-bar">
          <div className="sd-tag-left">
            <span>03 &mdash; WHY WORK WITH ME?</span>
          </div>
          <span className="sd-tag-right">PHILOSOPHY &amp; RIGOR</span>
        </div>

        <h2 className="sd-display-title">
          Engineering with <span className="sd-accent">rigor &amp; craft</span>, at scale.
        </h2>
        <p className="sd-sub-manifesto">
          I build web applications where performance, architecture, and visual fluidity unite. My focus is eliminating friction between complex state logic and responsive user experience.
        </p>

        <div className="sd-why-grid">
          <div className="sd-why-col">
            <span className="sd-letter-badge">A</span>
            <h4>Architecture first, screens second.</h4>
            <p>
              I start with component hierarchy, data contracts, and scalable state machines. Screens feel intuitive because the underlying system is robust and modular.
            </p>
          </div>

          <div className="sd-why-col">
            <span className="sd-letter-badge">B</span>
            <h4>Speed &amp; 60 FPS are non-negotiable.</h4>
            <p>
              From sub-millisecond canvas character tracking to lightweight bundle sizes and pre-optimized assets, I engineer for zero latency and fluid interactivity.
            </p>
          </div>

          <div className="sd-why-col">
            <span className="sd-letter-badge">C</span>
            <h4>Full-stack technical cohesion.</h4>
            <p>
              Bridging React, Vite, Node.js, REST APIs, and modern CSS so frontend interfaces integrate smoothly with enterprise backends and database layers.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: WORKING STYLE & PROCESS (2-Column Grid)
          ==================================================================== */}
      <section className="sd-section">
        <div className="sd-tag-bar">
          <div className="sd-tag-left">
            <span>04 &mdash; WORKING STYLE</span>
          </div>
          <span className="sd-tag-right">PROCESS &amp; DISCIPLINE</span>
        </div>

        <div className="sd-process-layout">
          <div className="sd-process-left">
            <h3>
              How collaboration <span className="sd-accent">actually looks</span>.
            </h3>
            <p>
              I work closely with engineering teams, communicate proactively, prototype rapidly, and maintain clean documentation so that ideas turn into production code with speed and predictability.
            </p>
          </div>

          <div className="sd-process-right">
            <div className="sd-process-row">
              <span className="sd-process-num">H.01</span>
              <div className="sd-process-info">
                <h4>Transparent iteration &amp; rapid prototyping</h4>
                <p>
                  I keep discovery visible, sharing early interactive builds, component states, and responsive edge cases before polish is finalized.
                </p>
              </div>
            </div>

            <div className="sd-process-row">
              <span className="sd-process-num">H.02</span>
              <div className="sd-process-info">
                <h4>Code documented, not just written</h4>
                <p>
                  I don't just push code that passes tests. I make reasoning visible, component props clear, and state flow maintainable for any engineer who joins later.
                </p>
              </div>
            </div>

            <div className="sd-process-row">
              <span className="sd-process-num">H.03</span>
              <div className="sd-process-info">
                <h4>Design-system fidelity &amp; clean specs</h4>
                <p>
                  Translating design concepts into pixel-perfect, accessible React components with structured tokens, responsive rules, and zero design debt.
                </p>
              </div>
            </div>

            <div className="sd-process-row">
              <span className="sd-process-num">H.04</span>
              <div className="sd-process-info">
                <h4>Performance &amp; cross-browser rigor</h4>
                <p>
                  Testing across mobile viewports, touch interactions, bundle optimization, and fast load times so the final build holds up reliably in production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 05: TECHNICAL ARSENAL
          ==================================================================== */}
      <section className="sd-section">
        <div className="sd-tag-bar">
          <div className="sd-tag-left">
            <span>05 &mdash; TECHNICAL ARSENAL</span>
          </div>
          <span className="sd-tag-right">CORE PLATFORMS</span>
        </div>

        <div className="sd-arsenal-grid">
          {[
            { name: "React.js", cat: "Frontend" },
            { name: "JavaScript (ES6+)", cat: "Language" },
            { name: "Tailwind CSS", cat: "Styling" },
            { name: "Vite", cat: "Build Tool" },
            { name: "HTML5 Canvas (60fps)", cat: "Creative Dev" },
            { name: "Node.js & Express", cat: "Backend" },
            { name: "MongoDB & Firebase", cat: "Databases" },
            { name: "RESTful APIs", cat: "Integration" },
            { name: "Git & GitHub", cat: "Version Control" },
            { name: "Figma", cat: "UI/UX Design" }
          ].map((tool) => (
            <div className="sd-arsenal-item" key={tool.name}>
              <span>{tool.name}</span>
              <span className="tool-cat">{tool.cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          SECTION 06: CAREER ARCHITECTURE (Sandeep CV Table)
          ==================================================================== */}
      <section className="sd-section">
        <div className="sd-tag-bar">
          <div className="sd-tag-left">
            <span>06 &mdash; CAREER ARCHITECTURE</span>
          </div>
          <span className="sd-tag-right">EXPERIENCE &amp; EDUCATION</span>
        </div>

        <div className="sd-cv-table">
          <div className="sd-cv-row">
            <span className="sd-cv-date">May 2026 &mdash; Present</span>
            <div className="sd-cv-entity">
              <h4>CodeAir Software Solutions</h4>
              <p>Frontend Developer Intern</p>
            </div>
            <div className="sd-cv-desc">
              Developing high-performance, accessible, and responsive user interfaces using React.js, JavaScript, and Tailwind CSS; engineering reusable custom component libraries and integrating REST APIs.
            </div>
          </div>

          <div className="sd-cv-row">
            <span className="sd-cv-date">Nov 2025 &mdash; Feb 2026</span>
            <div className="sd-cv-entity">
              <h4>CodeWebx Technologies</h4>
              <p>Web Development Intern</p>
            </div>
            <div className="sd-cv-desc">
              Built interactive web applications and responsive components utilizing React, HTML5, CSS3, and Bootstrap; engineered modular component hierarchy for client deliverables.
            </div>
          </div>

          <div className="sd-cv-row">
            <span className="sd-cv-date">2024 &mdash; Present</span>
            <div className="sd-cv-entity">
              <h4>Kalinga University, Raipur</h4>
              <p>B.Tech &bull; Computer Science &amp; Engineering</p>
            </div>
            <div className="sd-cv-desc">
              Undergraduate engineering studies focused on Data Structures, Algorithms, Web Engineering, and Modern Database Management Systems.
            </div>
          </div>
        </div>

        <div className="sd-table-footer-action">
          <button
            type="button"
            className="sd-btn-outline"
            onClick={() => navigateTo("experience")}
          >
            View Detailed Career Path <ArrowUpRight size={14} />
          </button>
        </div>
      </section>

      {/* ====================================================================
          SECTION 07: INQUIRY BANNER (Sandeep Inset Box)
          ==================================================================== */}
      <section className="sd-section">
        <div className="sd-tag-bar">
          <div className="sd-tag-left">
            <span>07 &mdash; NEXT STEPS</span>
          </div>
          <span className="sd-tag-right">INITIATE INQUIRY</span>
        </div>

        <div className="sd-inquiry-box">
          <span className="sd-avail-tag">
            <span className="sd-status-dot" /> AVAILABLE FOR FRONTEND ROLES &amp; INTERNSHIPS
          </span>

          <h3>
            Have a project or opportunity that needs a <span className="sd-accent">clear next move?</span>
          </h3>

          <p>
            Available for full-time frontend engineering roles, internships, and creative web collaborations. Let's build something exceptional together.
          </p>

          <div className="sd-featured-actions">
            <button
              type="button"
              className="sd-btn-black"
              onClick={() => navigateTo("contact")}
            >
              Initiate Conversation <ArrowUpRight size={15} />
            </button>
            <a
              href="/Sanskriti_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="sd-btn-outline"
            >
              <Download size={15} /> Download Curriculum Vitae
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
