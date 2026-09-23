import React, { useState, useMemo } from "react";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { projectsData } from "../data/portfolioData";

/* ==========================================================================
   PAGE 4: PROJECTS (Interactive Filter Tabs & 3D Perspective Tilt Cards)
   ========================================================================== */
export default function Projects() {
  const [projectFilter, setProjectFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return projectsData;
    return projectsData.filter((p) => p.category === projectFilter);
  }, [projectFilter]);

  return (
    <div className="page-view inner-page projects-page">
      <div className="section-head">
        <p className="eyebrow">Portfolio Works</p>
        <h2>Things I've engineered.</h2>
        <p className="section-sub">
          A showcase of modern web platforms, clones, responsive UI concepts, and interactive tools built with clean architecture.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-pill-bar">
        <button
          type="button"
          className={`filter-btn ${projectFilter === "all" ? "active" : ""}`}
          onClick={() => setProjectFilter("all")}
        >
          All Projects ({projectsData.length})
        </button>
        <button
          type="button"
          className={`filter-btn ${projectFilter === "web" ? "active" : ""}`}
          onClick={() => setProjectFilter("web")}
        >
          Web &amp; Full Stack (4)
        </button>
        <button
          type="button"
          className={`filter-btn ${projectFilter === "interactive" ? "active" : ""}`}
          onClick={() => setProjectFilter("interactive")}
        >
          Interactive &amp; Games (3)
        </button>
      </div>

      {/* Projects Grid */}
      <div className="project-grid">
        {filteredProjects.map((p, i) => (
          <TiltCard className="project-card" key={p.title}>
            <div className="project-number">0{i + 1}</div>
            <p className="project-type">{p.type}</p>
            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="tags">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <div className="card-links">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo <ExternalLink size={15} />
              </a>
              <a
                href={p.source}
                target="_blank"
                rel="noreferrer"
                className="project-sublink"
              >
                <Github size={15} /> Code
              </a>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
