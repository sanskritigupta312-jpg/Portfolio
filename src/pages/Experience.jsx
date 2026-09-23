import React from "react";
import { ArrowUpRight } from "lucide-react";
import { experienceData } from "../data/portfolioData";

/* ==========================================================================
   Experience Page: Sandeep.design Career Breakdown Table
   ========================================================================== */
export default function Experience({ navigateTo }) {
  return (
    <div className="page-view sd-inner-page">
      <div className="sd-tag-bar">
        <div className="sd-tag-left">
          <span>EXPERIENCE &mdash; INDUSTRY TRACK RECORD</span>
        </div>
        <span className="sd-tag-right">2 INTERNSHIPS</span>
      </div>

      <h1 className="sd-display-title">
        Hands-on industry <span className="sd-accent">engineering</span>.
      </h1>
      <p className="sd-sub-manifesto">
        Practical frontend software engineering experience building scalable, responsive web solutions for client and enterprise applications.
      </p>

      {/* Experience Table */}
      <div className="sd-cv-table" style={{ marginTop: "40px" }}>
        {experienceData.map((exp) => (
          <div className="sd-cv-row" key={exp.company} style={{ padding: "36px 16px" }}>
            <div>
              <span className="sd-cv-date">{exp.period}</span>
              <div
                style={{
                  display: "inline-block",
                  fontFamily: "var(--sd-font-mono)",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  color: "var(--sd-accent)",
                  marginTop: "8px"
                }}
              >
                [ {exp.type} ]
              </div>
            </div>

            <div className="sd-cv-entity">
              <h4>{exp.role}</h4>
              <p style={{ fontSize: "15px", color: "var(--sd-text)", fontWeight: "600" }}>{exp.company}</p>
            </div>

            <div className="sd-cv-desc">
              <ul>
                {exp.description.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "4px 10px",
                      background: "var(--sd-card-bg)",
                      border: "1px solid var(--sd-border)",
                      fontFamily: "var(--sd-font-mono)",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "var(--sd-text-secondary)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Box */}
      <div className="sd-inquiry-box" style={{ marginTop: "60px" }}>
        <span className="sd-avail-tag">
          <span className="sd-status-dot" /> IMMEDIATE AVAILABILITY
        </span>
        <h3>
          Looking for a dedicated <span className="sd-accent">Frontend Engineer?</span>
        </h3>
        <p>
          I am available for full-time frontend roles, freelance projects, and winter/summer engineering internships.
        </p>
        <button
          type="button"
          className="sd-btn-black"
          onClick={() => navigateTo("contact")}
        >
          Let's Talk <ArrowUpRight size={15} />
        </button>
      </div>
    </div>
  );
}
