import React from "react";

const partnersList = [
  "CodeAir Software Solutions",
  "Deloitte Australia",
  "Kalinga University",
  "IIIT Naya Raipur",
  "CodeWebx Technologies",
  "Tech Mahindra Foundation",
  "IEEE KU SB",
  "AICTE & MoE",
  "AWS Educate",
  "Oracle Academy"
];

const techList = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "PostgreSQL",
  "HTML5 & CSS3",
  "Vite",
  "Canvas 2D",
  "Git & GitHub",
  "REST APIs"
];

/* ==========================================================================
   Editorial Brutalist Brand & Tech Marquee
   ========================================================================== */
export default function BrandMarquee() {
  return (
    <section className="editorial-marquee-section" aria-label="Experience and Technologies">
      <div className="marquee-header-box">
        <h2 className="marquee-headline">
          Based in Raipur, India. Crafting scalable web platforms &amp; creative digital experiences.
        </h2>
      </div>

      {/* Row 1: Partners & Experience */}
      <div className="marquee-group">
        <div className="marquee-tag-container">
          <span className="editorial-badge">selected collaborations</span>
        </div>
        <div className="marquee-strip-outer">
          <div className="marquee-strip-track">
            {[...partnersList, ...partnersList, ...partnersList].map((name, i) => (
              <span className="marquee-pill-item" key={i}>
                <span className="marquee-bullet">&#10022;</span>
                <span className="marquee-text">{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Core Technologies (Reverse Direction) */}
      <div className="marquee-group">
        <div className="marquee-tag-container">
          <span className="editorial-badge">core architectural stack</span>
        </div>
        <div className="marquee-strip-outer">
          <div className="marquee-strip-track marquee-track-reverse">
            {[...techList, ...techList, ...techList].map((tech, i) => (
              <span className="marquee-pill-item" key={i}>
                <span className="marquee-bullet">&#10022;</span>
                <span className="marquee-text">{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
