import React from "react";

/* ==========================================================================
   Centered Floating Frosted Glass Header Navigation Pill
   ========================================================================== */
export default function Navbar({ currentPage, navigateTo }) {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "contact", label: "CONTACT" }
  ];

  return (
    <header className="nav-container">
      <nav className="nav-pill" aria-label="Main Navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={currentPage === item.id ? "active" : ""}
            onClick={() => navigateTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
