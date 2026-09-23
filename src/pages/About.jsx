import React from "react";
import { GraduationCap, Sparkles, Download } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { educationData, skillsCategories } from "../data/portfolioData";

/* ==========================================================================
   PAGE 2: ABOUT (Education, Bio & Skills)
   ========================================================================== */
export default function About({ navigateTo }) {
  return (
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
            <TiltCard className="timeline-card" key={edu.degree}>
              <div className="timeline-badge">{edu.badge}</div>
              <span className="timeline-period">{edu.period}</span>
              <h4>{edu.degree}</h4>
              <p className="timeline-inst">
                {edu.institution}, {edu.location}
              </p>
              <p className="timeline-field">{edu.field}</p>
              <p className="timeline-desc">{edu.details}</p>
            </TiltCard>
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
              <TiltCard className="skill-cat-card" key={cat.category}>
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
              </TiltCard>
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
  );
}
