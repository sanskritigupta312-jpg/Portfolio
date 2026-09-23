import React from "react";
import { ArrowUpRight } from "lucide-react";
import { certificatesData, getCertLink } from "../data/portfolioData";

/* ==========================================================================
   Certificates Page: Sandeep.design Editorial Honors Table
   ========================================================================== */
export default function Certificates() {
  return (
    <div className="page-view sd-inner-page">
      <div className="sd-tag-bar">
        <div className="sd-tag-left">
          <span>MILESTONES &mdash; ACCREDITED CERTIFICATIONS</span>
        </div>
        <span className="sd-tag-right">{certificatesData.length} CREDENTIALS</span>
      </div>

      <h1 className="sd-display-title">
        Validated technical <span className="sd-accent">competencies</span>.
      </h1>
      <p className="sd-sub-manifesto">
        13 accredited industry credentials spanning cloud computing, prompt engineering, cybersecurity, modern web engineering, and robotics.
      </p>

      {/* Sandeep Certificates Table */}
      <div className="sd-certs-table">
        {certificatesData.map((c, i) => (
          <div className="sd-cert-row" key={c.title + i}>
            <span className="sd-cert-index">C.{String(i + 1).padStart(2, "0")}</span>

            <div className="sd-cert-title-col">
              <h4>{c.title}</h4>
              <p>{c.org}</p>
            </div>

            <div className="sd-cert-desc">{c.description}</div>

            <span className="sd-cert-year">{c.year}</span>

            <a
              href={getCertLink(c.file)}
              target="_blank"
              rel="noreferrer"
              className="sd-cert-link"
            >
              View Credential <ArrowUpRight size={13} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
