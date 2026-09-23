import React from "react";
import { Award, ArrowUpRight } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { certificatesData, getCertLink } from "../data/portfolioData";

/* ==========================================================================
   PAGE 5: CERTIFICATES (13 Accredited Honors & Certifications)
   ========================================================================== */
export default function Certificates() {
  return (
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
          <TiltCard className="cert-card" key={c.title + i}>
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
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
