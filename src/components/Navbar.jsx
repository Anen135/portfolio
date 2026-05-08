import React, { useState, useEffect } from "react";
import { config } from "../config.js";
import "@/styles/Navbar.css";

/* ── SVG Icons ──────────────────────────────────────────────── */
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ── Navigation ─────────────────────────────────────────────── */

const PAGE_LINKS = [
  { label: "Portfolio", href: "/portfolio/" },
  { label: "WinUI3", href: "/portfolio/winui3" },
];

function getCurrentPath() {
  return window.location.pathname.toLowerCase();
}

export default function Navbar({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(getCurrentPath());

  /* Scroll blur */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Track URL changes */
  useEffect(() => {
    const onLocationChange = () => {
      setActivePage(getCurrentPath());
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  /* Navigation */
  const navigate = (e, href) => {
    e.preventDefault();

    window.history.pushState({}, "", href);

    setActivePage(href);
    setMenuOpen(false);

    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <a
          id="nav-logo"
          href="#/"
          className="navbar__logo"
          onClick={(e) => navigate(e, "/portfolio/")}
        >
          <span className="navbar__logo-bracket">&lt;</span>
          {config.name.split(" ")[0] || "Dev"}
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {PAGE_LINKS.map((link) => {
            const isActive = activePage == link.href || activePage.startsWith(link.href + "/");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__page-link ${
                    isActive ? "navbar__page-link--active" : ""
                  }`}
                  onClick={(e) => navigate(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="navbar__controls">
          <button
            id="nav-theme-toggle"
            className="navbar__theme-btn"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile hamburger */}
          <button
            id="nav-hamburger"
            className="navbar__hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}>
        {PAGE_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__mobile-link ${activePage === link.href ? "navbar__mobile-link--active" : ""}`}
            onClick={(e) => handlePageLink(e, link.href)}
            aria-current={activePage === link.href ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}