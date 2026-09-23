import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { educationData, skillsCategories } from "../data/portfolioData";

/* ==========================================================================
   About Page: Sandeep.design CV Table & Capabilities Matrix
   ========================================================================== */
export default function About({ navigateTo }) {
  return (
    <div className="page-view sd-inner-page">
      <div className="sd-tag-bar">
        <div className="sd-tag-left">
          <span>ABOUT &mdash; BACKGROUND &amp; CAPABILITIES</span>
        </div>
        <span className="sd-tag-right">SANSKRITI KUMARI</span>
      </div>

      <h1 className="sd-display-title">
        Code, architecture &amp; <span className="sd-accent">creative discipline</span>.
      </h1>
      <p className="sd-sub-manifesto">
        I am a Computer Science Engineering student at Kalinga University passionate about crafting intuitive, high-performance web applications, interactive motion graphics, and resilient full-stack systems.
      </p>

      {/* Education Journey CV Table */}
      <div style={{ marginTop: "40px", marginBottom: "70px" }}>
        <div className="sd-tag-bar" style={{ marginBottom: "16px" }}>
          <span>ACADEMIC BACKGROUND</span>
          <span className="sd-tag-right">2020 &mdash; PRESENT</span>
        </div>

        <div className="sd-cv-table">
          {educationData.map((edu) => (
            <div className="sd-cv-row" key={edu.degree}>
              <span className="sd-cv-date">{edu.period}</span>
              <div className="sd-cv-entity">
                <h4>{edu.degree}</h4>
                <p>{edu.institution}, {edu.location}</p>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--sd-font-mono)",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "var(--sd-accent)",
                    marginTop: "6px"
                  }}
                >
                  {edu.badge}
                </span>
              </div>
              <div className="sd-cv-desc">
                <p style={{ margin: "0 0 6px 0", fontStyle: "italic", color: "var(--sd-text)" }}>
                  {edu.field}
                </p>
                {edu.details}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Arsenal 4-Bento Grid */}
      <div style={{ marginBottom: "70px" }}>
        <div className="sd-tag-bar" style={{ marginBottom: "24px" }}>
          <span>TECHNICAL ARSENAL &amp; PLATFORMS</span>
          <span className="sd-tag-right">4 CORE PILLARS</span>
        </div>

        <div className="sd-why-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {skillsCategories.map((cat, i) => {
            const letter = String.fromCharCode(65 + i); // A, B, C, D
            return (
              <div className="sd-why-col" key={cat.category}>
                <span className="sd-letter-badge">{letter}</span>
                <h4>{cat.category}</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "6px 12px",
                        background: "var(--sd-card-bg)",
                        border: "1px solid var(--sd-border)",
                        fontFamily: "var(--sd-font-mono)",
                        fontSize: "11.5px",
                        fontWeight: "600",
                        color: "var(--sd-text)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inquiry Box */}
      <div className="sd-inquiry-box">
        <span className="sd-avail-tag">
          <span className="sd-status-dot" /> COLLABORATION READY
        </span>
        <h3>
          Interested in bringing this <span className="sd-accent">rigor to your team?</span>
        </h3>
        <p>
          I am actively exploring frontend and full-stack software developer opportunities and internships.
        </p>
        <div className="sd-featured-actions">
          <a
            href="/Sanskriti_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="sd-btn-black"
          >
            <Download size={15} /> Download Resume
          </a>
          <button
            type="button"
            className="sd-btn-outline"
            onClick={() => navigateTo("contact")}
          >
            Initiate Conversation <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
