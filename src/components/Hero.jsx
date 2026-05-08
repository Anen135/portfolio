import React, { useEffect, useState } from "react";
import { config } from "../config.js";
import "@/styles/Hero.css";

/* ── Typing effect for the title ── */
function useTypingEffect(text, speed = 55) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    // Small initial delay so the animation starts after page renders
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(timer);
    }, 400);
    return () => clearTimeout(delay);
  }, [text, speed]);

  return { displayed, done };
}

/* ── Icons ── */
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Hero() {
  const { displayed, done } = useTypingEffect(config.title, 45);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      {/* Animated gradient orbs in the background */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        {/* Status badge */}
        <div className="hero__badge reveal">
          <span className="hero__badge-dot" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="hero__name reveal reveal-delay-1">
          {config.name}
        </h1>

        {/* Animated title */}
        <p className="hero__title reveal reveal-delay-2">
          <span className="hero__title-text">{displayed}</span>
          <span className={`hero__cursor ${done ? "hero__cursor--blink" : ""}`}>|</span>
        </p>

        {/* Tagline */}
        <p className="hero__tagline reveal reveal-delay-3">
          {config.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="hero__buttons reveal reveal-delay-4">
          <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            <MailIcon /> Contact Me
          </a>
          <a href={config.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <GithubIcon /> GitHub
          </a>
          <a href={config.cvUrl} download className="btn btn-outline">
            <DownloadIcon /> Download CV
          </a>
        </div>

        {/* Scroll cue */}
        <button className="hero__scroll-cue reveal reveal-delay-5" onClick={scrollDown} aria-label="Scroll down">
          Scroll to explore <ArrowIcon />
        </button>
      </div>
    </section>
  );
}
