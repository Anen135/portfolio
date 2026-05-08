import React, { useEffect, useRef, useState } from "react";
import { config } from "../config.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "@/styles/Skills.css";

/* Group skills by category */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

function SkillBar({ name, level, delay }) {
  const [animated, setAnimated] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay matches the reveal stagger
          setTimeout(() => setAnimated(true), delay * 1000 + 200);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="skill-bar" ref={barRef}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useScrollReveal();
  const grouped = groupBy(config.skills, "category");

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Skills</p>
        <h2 className="section-title reveal reveal-delay-1">Tech Stack</h2>
        <p className="section-subtitle reveal reveal-delay-2">
          Technologies I work with on a daily basis — from frontend to DevOps.
        </p>

        <div className="skills__grid">
          {Object.entries(grouped).map(([category, items], catIdx) => (
            <div key={category} className={`glass-card skills__group reveal reveal-delay-${catIdx + 1}`}>
              <h3 className="skills__group-title">{category}</h3>
              <div className="skills__bars">
                {items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={(catIdx + i) * 0.08}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
