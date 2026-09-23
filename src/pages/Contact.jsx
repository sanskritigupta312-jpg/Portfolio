import React, { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  Globe,
  Github,
  Linkedin,
  Send,
  CheckCircle2
} from "lucide-react";
import TiltCard from "../components/TiltCard";

/* ==========================================================================
   PAGE 6: CONTACT (Direct Info, Social Links & Interactive Form)
   ========================================================================== */
export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-view inner-page contact-page">
      <div className="section-head">
        <p className="eyebrow">Get In Touch</p>
        <h2>
          Let's make something<br />
          <em>worth scrolling for.</em>
        </h2>
        <p className="section-sub">
          Have a question, collaboration idea, or want to discuss a frontend role? My inbox is always open.
        </p>
      </div>

      <div className="contact-layout">
        {/* Left Column: Direct Info */}
        <div className="contact-info-col">
          <a className="contact-email" href="mailto:sanskritigupta312@gmail.com">
            sanskritigupta312@gmail.com <ArrowUpRight size={24} />
          </a>

          <div className="contact-details-list">
            <div className="contact-item">
              <Phone size={18} className="contact-item-icon" />
              <div>
                <span className="contact-item-label">Phone</span>
                <a href="tel:+919341445297">+91 9341445297</a>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={18} className="contact-item-icon" />
              <div>
                <span className="contact-item-label">Email</span>
                <a href="mailto:sanskritigupta312@gmail.com">sanskritigupta312@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <Globe size={18} className="contact-item-icon" />
              <div>
                <span className="contact-item-label">Location</span>
                <p>Raipur, Chhattisgarh &bull; Jharkhand, India</p>
              </div>
            </div>
          </div>

          <div className="socials">
            <a
              href="https://github.com/sanskritigupta312-jpg"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanskriti-kumari-36273a355"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="mailto:sanskritigupta312@gmail.com">
              <Mail size={18} /> Direct Email
            </a>
          </div>
        </div>

        {/* Right Column: Message Form */}
        <div className="contact-form-col">
          <TiltCard className="contact-card-form">
            <form onSubmit={handleContactSubmit}>
              <h3>Send a Quick Message</h3>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <CheckCircle2 size={24} />
                  <p>Thank you! Your message has been noted. Sanskriti will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Project Discussion / Internship Offer"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Hi Sanskriti, I'd like to talk about..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <Send size={16} /> Send Message
                  </button>
                </>
              )}
            </form>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}
