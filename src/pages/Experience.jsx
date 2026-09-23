import React from "react";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { experienceData } from "../data/portfolioData";

/* ==========================================================================
   PAGE 3: EXPERIENCE (CodeAir & CodeWebx Internships)
   ========================================================================== */
export default function Experience({ navigateTo }) {
  return (
    <div className="page-view inner-page experience-page">
      <div className="section-head">
        <p className="eyebrow">Work Experience</p>
        <h2>Industry experience &amp; internships.</h2>
        <p className="section-sub">
          Hands-on frontend engineering experience building scalable, responsive web solutions for client and enterprise applications.
        </p>
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
  );
}
