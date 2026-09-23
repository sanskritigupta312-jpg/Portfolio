import React, { useState, useMemo } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/portfolioData";

/* ==========================================================================
   Projects Page: Sandeep.design Editorial Directory Layout
   ========================================================================== */
export default function Projects() {
  const [projectFilter, setProjectFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return projectsData;
    return projectsData.filter((p) => p.category === projectFilter);
  }, [projectFilter]);

  return (
    <div className="page-view sd-inner-page">
      <div className="sd-tag-bar">
        <div className="sd-tag-left">
          <span>PORTFOLIO &mdash; WORKS DIRECTORY</span>
        </div>
        <span className="sd-tag-right">{filteredProjects.length} / {projectsData.length} WORKS</span>
      </div>

      <h1 className="sd-display-title">
        All Works &amp; <span className="sd-accent">Engineered Systems</span>.
      </h1>
      <p className="sd-sub-manifesto">
        A directory of production-ready web platforms, full-stack architectures, interactive utilities, and algorithmic logic.
      </p>

      {/* Filter Tabs in Sandeep Minimal Style */}
      <div className="sd-filter-bar">
        <button
          type="button"
          className={`sd-filter-btn ${projectFilter === "all" ? "active" : ""}`}
          onClick={() => setProjectFilter("all")}
        >
          All Works ({projectsData.length})
        </button>
        <button
          type="button"
          className={`sd-filter-btn ${projectFilter === "web" ? "active" : ""}`}
          onClick={() => setProjectFilter("web")}
        >
          Web &amp; Full Stack (4)
        </button>
        <button
          type="button"
          className={`sd-filter-btn ${projectFilter === "interactive" ? "active" : ""}`}
          onClick={() => setProjectFilter("interactive")}
        >
          Interactive &amp; Games (3)
        </button>
      </div>

      {/* Sandeep Works Table */}
      <div className="sd-works-table">
        {filteredProjects.map((p, idx) => (
          <div key={p.title} className="sd-work-row">
            <span className="sd-work-index">P.0{idx + 1}</span>

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

            <span className="sd-work-year">2025&ndash;26</span>
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
    </div>
  );
}
