import React from "react";
import { config } from "../config.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./About.css";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Left: text */}
          <div className="about__text">
            <p className="section-label reveal">About Me</p>
            <h2 className="section-title reveal reveal-delay-1">
              Turning ideas into <span className="about__accent">real software</span>
            </h2>
            <p className="about__bio reveal reveal-delay-2">{config.about.bio}</p>

            {/* Highlights list */}
            <ul className="about__highlights">
              {config.about.highlights.map((item, i) => (
                <li key={i} className={`reveal reveal-delay-${i + 2}`}>
                  <span className="about__check"><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stat cards */}
          <div className="about__stats">
            {[
              { value: "4+", label: "Years of Experience" },
              { value: "10+", label: "Projects Shipped" },
              { value: "500+", label: "GitHub Stars" },
              { value: "∞", label: "Coffee Consumed" },
            ].map((stat, i) => (
              <div key={i} className={`glass-card about__stat-card reveal reveal-delay-${i + 1}`}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
