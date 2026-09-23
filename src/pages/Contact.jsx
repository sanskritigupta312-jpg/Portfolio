import React, { useState } from "react";
import { ArrowUpRight, Phone, Mail, Globe, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

/* ==========================================================================
   Contact Page: Sandeep.design Editorial Split Layout & Minimal Form
   ========================================================================== */
export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-view sd-inner-page">
      <div className="sd-tag-bar">
        <div className="sd-tag-left">
          <span>CONTACT &mdash; GET IN TOUCH</span>
        </div>
        <span className="sd-tag-right">OPEN FOR COLLABORATION</span>
      </div>

      <h1 className="sd-display-title">
        Let's build something <span className="sd-accent">worth using</span>.
      </h1>
      <p className="sd-sub-manifesto">
        Have a question, collaboration idea, or want to discuss a frontend engineering role? My inbox is always open.
      </p>

      <div className="sd-contact-grid">
        {/* Left Column: Direct Info & Socials */}
        <div>
          <a
            className="sd-contact-email-link"
            href="mailto:sanskritigupta312@gmail.com"
          >
            sanskritigupta312@gmail.com <ArrowUpRight size={26} />
          </a>

          <div className="sd-contact-info-list">
            <div className="sd-contact-item">
              <Phone size={18} className="sd-contact-item-icon" />
              <div>
                <span className="label">Phone / WhatsApp</span>
                <a href="tel:+919341445297">+91 9341445297</a>
              </div>
            </div>

            <div className="sd-contact-item">
              <Mail size={18} className="sd-contact-item-icon" />
              <div>
                <span className="label">Direct Inquiries</span>
                <a href="mailto:sanskritigupta312@gmail.com">sanskritigupta312@gmail.com</a>
              </div>
            </div>

            <div className="sd-contact-item">
              <Globe size={18} className="sd-contact-item-icon" />
              <div>
                <span className="label">Primary Locations</span>
                <p>Raipur, Chhattisgarh &bull; Jharkhand, India</p>
              </div>
            </div>
          </div>

          <div className="sd-social-strip">
            <a
              href="https://github.com/sanskritigupta312-jpg"
              target="_blank"
              rel="noreferrer"
              className="sd-social-link"
            >
              <Github size={15} /> GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/sanskriti-kumari-36273a355"
              target="_blank"
              rel="noreferrer"
              className="sd-social-link"
            >
              <Linkedin size={15} /> LinkedIn ↗
            </a>
            <a
              href="/Sanskriti_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="sd-social-link"
            >
              Resume PDF ↗
            </a>
          </div>
        </div>

        {/* Right Column: Clean Sandeep Form Box */}
        <div className="sd-form-box">
          <h3>Send a Direct Note</h3>

          {formSubmitted ? (
            <div className="sd-form-success">
              <CheckCircle2 size={24} />
              <div>
                <strong>Message Dispatched</strong>
                <p style={{ margin: "2px 0 0 0", fontSize: "13px" }}>
                  Thank you! Your note has been received. Sanskriti will get back to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit}>
              <div className="sd-form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                />
              </div>

              <div className="sd-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                />
              </div>

              <div className="sd-form-group">
                <label htmlFor="subject">Subject / Purpose</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Internship Offer / Project Collaboration"
                />
              </div>

              <div className="sd-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Hi Sanskriti, I'd like to talk about..."
                />
              </div>

              <button type="submit" className="sd-btn-black" style={{ width: "100%", justifyContent: "center" }}>
                Send Message <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
