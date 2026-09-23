import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import EditorialFooter from "./components/EditorialFooter";
import MagneticCursor from "./components/MagneticCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

/* ==========================================================================
   Root Application Component
   - Modular architecture with clean routing, dynamic 3D cursor & ambient orbs
   - Seamless royal velvet red theme & responsive layouts
   ========================================================================== */
export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    const validPages = ["home", "about", "experience", "projects", "certificates", "contact"];
    return validPages.includes(hash) ? hash : "home";
  });

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const validPages = ["home", "about", "experience", "projects", "certificates", "contact"];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="app">
      {/* 3D Magnetic Dual-Dot Cursor */}
      <MagneticCursor />

      {/* Frosted Glass Navigation Pill */}
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />

      {/* Dynamic Page Router */}
      <main className="page-wrapper">
        {currentPage === "home" && <Home navigateTo={navigateTo} />}
        {currentPage === "about" && <About navigateTo={navigateTo} />}
        {currentPage === "experience" && <Experience navigateTo={navigateTo} />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "certificates" && <Certificates />}
        {currentPage === "contact" && <Contact />}
      </main>

      {/* Balanced Editorial Brutalist-Luxury Footer */}
      <EditorialFooter navigateTo={navigateTo} />
    </div>
  );
}
