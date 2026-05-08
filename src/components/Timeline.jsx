import React from "react";
import { config } from "../config.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "@/styles/Timeline.css";

const WorkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
);

const EduIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

export default function Timeline() {
  const ref = useScrollReveal();

  return (
    <section id="timeline" className="section timeline-section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Journey</p>
        <h2 className="section-title reveal reveal-delay-1">Experience &amp; Education</h2>
        <p className="section-subtitle reveal reveal-delay-2">
          The path that shaped me as a developer.
        </p>

        <div className="timeline">
          {config.timeline.map((item, i) => (
            <div key={i} className={`timeline__item reveal reveal-delay-${(i % 4) + 1}`}>
              {/* Left: year */}
              <div className="timeline__year">
                <span>{item.year}</span>
              </div>

              {/* Centre: icon + line */}
              <div className="timeline__spine">
                <div className={`timeline__dot timeline__dot--${item.type}`}>
                  {item.type === "work" ? <WorkIcon /> : <EduIcon />}
                </div>
                {i < config.timeline.length - 1 && (
                  <div className="timeline__line" />
                )}
              </div>

              {/* Right: card */}
              <div className="glass-card timeline__card">
                <div className="timeline__card-header">
                  <h3 className="timeline__card-title">{item.title}</h3>
                  <span className={`timeline__type-badge timeline__type-badge--${item.type}`}>
                    {item.type === "work" ? "Work" : "Education"}
                  </span>
                </div>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
