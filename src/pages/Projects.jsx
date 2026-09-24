import React, { useState, useMemo } from "react";
import { ArrowUpRight, Github, ExternalLink, LayoutGrid, ListFilter, Sparkles } from "lucide-react";
import { projectsData } from "../data/portfolioData";

/* ==========================================================================
   Projects Page: Sandeep.design Editorial Directory & Visual Showcase
   - Displays ALL repositories from Sanskriti's GitHub with full screenshots
   - Rich filter tabs across categories
   - Dual view modes: Visual Showcase (Screenshot Cards) & Directory Index (Table)
   ========================================================================== */
export default function Projects() {
  const [projectFilter, setProjectFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'table'

  const categories = useMemo(() => [
    { id: "all", label: "All Works", count: projectsData.length },
    { id: "ai", label: "AI & 3D WebGL", count: projectsData.filter((p) => p.category === "ai").length },
    { id: "web", label: "Full Stack & Web", count: projectsData.filter((p) => p.category === "web").length },
    { id: "creative", label: "Creative & Portfolios", count: projectsData.filter((p) => p.category === "creative").length },
    { id: "interactive", label: "Interactive Games & Tools", count: projectsData.filter((p) => p.category === "interactive").length },
    { id: "automation", label: "Automation", count: projectsData.filter((p) => p.category === "automation").length }
  ], []);

  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return projectsData;
    return projectsData.filter((p) => p.category === projectFilter);
  }, [projectFilter]);

  return (
    <div className="page-view sd-inner-page">
      {/* Top Breadcrumb Tag Bar */}
      <div className="sd-tag-bar">
        <div className="sd-tag-left">
          <span>PORTFOLIO &mdash; GITHUB WORKS DIRECTORY</span>
        </div>
        <span className="sd-tag-right">
          {filteredProjects.length} / {projectsData.length} REPOSITORIES
        </span>
      </div>

      {/* Page Title & Manifesto */}
      <h1 className="sd-display-title">
        All Works &amp; <span className="sd-accent">Engineered Systems</span>.
      </h1>
      <p className="sd-sub-manifesto">
        A comprehensive gallery of production web platforms, 3D WebGL architectures, full-stack clones, and algorithmic tools engineered by Sanskriti Gupta &mdash; complete with live deployments, full interface screenshots, and open-source GitHub repositories.
      </p>

      {/* Filter and View Controls Bar */}
      <div className="sd-directory-controls">
        <div className="sd-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`sd-filter-btn ${projectFilter === cat.id ? "active" : ""}`}
              onClick={() => setProjectFilter(cat.id)}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* View Mode Toggle (Visual Grid vs Table Index) */}
        <div className="sd-view-toggle">
          <button
            type="button"
            className={`sd-view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
            title="Visual Cards View"
          >
            <LayoutGrid size={15} />
            <span>Showcase</span>
          </button>
          <button
            type="button"
            className={`sd-view-btn ${viewMode === "table" ? "active" : ""}`}
            onClick={() => setViewMode("table")}
            title="Directory Table View"
          >
            <ListFilter size={15} />
            <span>Index</span>
          </button>
        </div>
      </div>

      {/* ====================================================================
          VIEW MODE 1: VISUAL SHOWCASE (High-Resolution Screenshot Cards)
          ==================================================================== */}
      {viewMode === "grid" && (
        <div className="sd-projects-visual-grid">
          {filteredProjects.map((p, idx) => (
            <article key={p.slug || p.title} className="sd-project-visual-card">
              {/* Browser Window Chrome Header */}
              <div className="sd-card-browser-bar">
                <div className="sd-browser-dots">
                  <span className="sd-browser-dot red" />
                  <span className="sd-browser-dot yellow" />
                  <span className="sd-browser-dot green" />
                </div>
                <div className="sd-browser-url-pill">
                  <span className="sd-url-protocol">https://</span>
                  <span className="sd-url-host">
                    {p.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="sd-browser-external"
                  title="Open Live Website"
                >
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Full Screenshot Image Container with Hover Overlay */}
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="sd-card-image-wrap"
                aria-label={`Open demo for ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={`${p.title} full interface screenshot`}
                  className="sd-card-img"
                  loading="lazy"
                />
                <div className="sd-card-overlay">
                  <span className="sd-overlay-pill">
                    View Live Project <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>

              {/* Card Body Details */}
              <div className="sd-card-body">
                <div className="sd-card-meta">
                  <span className="sd-card-index">P.0{idx + 1}</span>
                  <span className="sd-card-badge">{p.type}</span>
                  <span className="sd-card-year">{p.year}</span>
                </div>

                <h2 className="sd-card-title">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    {p.title}
                  </a>
                </h2>

                <p className="sd-card-desc">{p.description}</p>

                {/* Tech Stack Pills */}
                <div className="sd-card-tags">
                  {p.stack.map((tech) => (
                    <span key={tech} className="sd-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions: Live Demo & GitHub Code */}
                <div className="sd-card-actions">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="sd-btn-live"
                  >
                    Live Demo <ExternalLink size={13} />
                  </a>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    className="sd-btn-code"
                  >
                    <Github size={13} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ====================================================================
          VIEW MODE 2: DIRECTORY TABLE (Sandeep Minimal Row View)
          ==================================================================== */}
      {viewMode === "table" && (
        <div className="sd-works-table">
          {filteredProjects.map((p, idx) => (
            <div key={p.title} className="sd-work-row">
              <span className="sd-work-index">P.0{idx + 1}</span>

              {/* Thumbnail Preview */}
              <div className="sd-row-thumb-wrap">
                <img
                  src={p.image}
                  alt={p.title}
                  className="sd-row-thumb"
                  loading="lazy"
                />
              </div>

              <div className="sd-work-title-wrap">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span className="sd-work-cat">{p.type}</span>
                <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "11.5px",
                      fontWeight: "700",
                      fontFamily: "var(--sd-font-mono)",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "var(--sd-accent)"
                    }}
                  >
                    Live <ExternalLink size={12} />
                  </a>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "11.5px",
                      fontWeight: "700",
                      fontFamily: "var(--sd-font-mono)",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "var(--sd-text-muted)"
                    }}
                  >
                    Code <Github size={12} />
                  </a>
                </div>
              </div>

              <span className="sd-work-year">{p.year}</span>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="sd-work-arrow"
                title="Open Live Demo"
              >
                ↗
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
