import React from "react";

/* ==========================================================================
   Editorial Brutalist-Luxury Footer
   ========================================================================== */
export default function EditorialFooter({ navigateTo }) {
  return (
    <footer className="editorial-footer">
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
  );
}
