import React from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  ChevronRight,
  Download
} from "lucide-react";
import CursorCharacter from "../components/CursorCharacter";
import BrandMarquee from "../components/BrandMarquee";
import TiltCard from "../components/TiltCard";
import { projectsData, experienceData } from "../data/portfolioData";

/* ==========================================================================
   Home Page Component (Exact Hero Content Preserved + 3D Tracking Character)
   ========================================================================== */
export default function Home({ navigateTo }) {
  return (
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

      {/* Editorial Brutalist Brand & Tech Marquee Carousel */}
      <BrandMarquee />

      {/* Royal Narrative & Manifesto Section ("Philosophy & Metrics") */}
      <section className="section royal-manifesto-section">
        <div className="manifesto-inner">
          <div className="manifesto-header">
            <p className="royal-sub-eyebrow">ONWARD &bull; PHILOSOPHY</p>
            <h2 className="royal-serif-heading">
              Bridging Technical Rigor &amp; <em>Royal Creative Finesse</em>.
            </h2>
            <p className="manifesto-paragraph">
              Engineering is more than writing syntax—it is the architecture of modern interaction. From sub-millisecond canvas animations to resilient cloud-connected web applications, I design digital experiences that feel intuitive, performant, and enduring.
            </p>
          </div>

          <div className="royal-stats-bar">
            <TiltCard className="royal-stat-item">
              <span className="stat-num">07+</span>
              <span className="stat-label">Engineered Platforms</span>
            </TiltCard>
            <TiltCard className="royal-stat-item">
              <span className="stat-num">13+</span>
              <span className="stat-label">Accredited Honors</span>
            </TiltCard>
            <TiltCard className="royal-stat-item">
              <span className="stat-num">02</span>
              <span className="stat-label">Industry Internships</span>
            </TiltCard>
            <TiltCard className="royal-stat-item">
              <span className="stat-num">60 FPS</span>
              <span className="stat-label">Zero-Lag Fluidity</span>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Quick Portfolio Highlights Section */}
      <section className="section highlights-section">
        <div className="section-head">
          <p className="royal-sub-eyebrow">CURATED PILLARS</p>
          <h2>Engineering with passion &amp; precision.</h2>
        </div>

        <div className="highlights-grid">
          <TiltCard className="highlight-card" onClick={() => navigateTo("experience")}>
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
          </TiltCard>

          <TiltCard className="highlight-card" onClick={() => navigateTo("about")}>
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
          </TiltCard>

          <TiltCard className="highlight-card" onClick={() => navigateTo("projects")}>
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
          </TiltCard>

          <TiltCard className="highlight-card" onClick={() => navigateTo("certificates")}>
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
          </TiltCard>
        </div>
      </section>

      {/* Selected Works Showcase on Home */}
      <section className="section royal-works-section">
        <div className="section-head-split">
          <div>
            <p className="royal-sub-eyebrow">BROWSE THE WORK &bull; 01</p>
            <h2 className="royal-serif-heading">Selected Creations.</h2>
          </div>
          <button
            type="button"
            className="royal-outline-btn"
            onClick={() => navigateTo("projects")}
          >
            View All 7 Works <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="project-grid">
          {projectsData.slice(0, 4).map((p, i) => (
            <TiltCard className="project-card" key={p.title}>
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
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Career & Experience Showcase on Home */}
      <section className="section royal-experience-section">
        <div className="section-head-split">
          <div>
            <p className="royal-sub-eyebrow">CAREER ARCHITECTURE &bull; 02</p>
            <h2 className="royal-serif-heading">Experience &amp; Internships.</h2>
          </div>
          <button
            type="button"
            className="royal-outline-btn"
            onClick={() => navigateTo("experience")}
          >
            Career Details <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="experience-list">
          {experienceData.map((exp) => (
            <TiltCard className="exp-card" key={exp.company}>
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
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Royal Inquiry Banner (Styled after Reference Screenshot) */}
      <section className="section royal-inquiry-section">
        <TiltCard className="inquiry-box">
          <p className="royal-sub-eyebrow">RATHER TALK IT THROUGH</p>
          <h2 className="inquiry-title">GET IN TOUCH.</h2>
          <p className="inquiry-subtitle">
            Available for frontend engineering internships, creative coding collaborations, and full-stack software development roles.
          </p>
          <div className="inquiry-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigateTo("contact")}
            >
              Initiate Conversation <ArrowUpRight size={16} />
            </button>
            <a
              className="btn btn-secondary"
              href="/Sanskriti_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} /> Download Curriculum Vitae
            </a>
          </div>
        </TiltCard>
      </section>
    </div>
  );
}
