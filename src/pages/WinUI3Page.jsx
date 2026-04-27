import React, { useEffect } from "react";
import "./WinUI3Page.css";
import { winui3PageConfig as cfg } from "./winui3PageConfig.js";
import Navbar from "../components/Navbar.jsx";
import { useTheme } from "../hooks/useTheme.js";
import {
  Keyboard,
  MousePointer2,
  Radio,
  Package,
  Palette,
  Puzzle,
} from "lucide-react";

const FEATURE_ICONS = {
  keyboard: Keyboard,
  mouse: MousePointer2,
  radio: Radio,
  puzzle: Puzzle,
  palette: Palette,
  package: Package,
};

const FONT_PRECONNECT_ID = "winui3-fonts-preconnect";
const FONT_GSTATIC_PRECONNECT_ID = "winui3-fonts-preconnect-gstatic";
const FONT_STYLESHEET_ID = "winui3-fonts-stylesheet";

export default function WinUI3Page() {
  const { theme, toggle } = useTheme();

  /* Sync data-theme whenever the user toggles */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.title = "WinUI3 — Console UI Library";
    document.body.classList.add("winui3-body");
    document.documentElement.classList.add("winui3-html");

    if (!document.getElementById(FONT_PRECONNECT_ID)) {
      const preconnect = document.createElement("link");
      preconnect.id = FONT_PRECONNECT_ID;
      preconnect.rel = "preconnect";
      preconnect.href = "https://fonts.googleapis.com";
      document.head.appendChild(preconnect);
    }

    if (!document.getElementById(FONT_GSTATIC_PRECONNECT_ID)) {
      const preconnect = document.createElement("link");
      preconnect.id = FONT_GSTATIC_PRECONNECT_ID;
      preconnect.rel = "preconnect";
      preconnect.href = "https://fonts.gstatic.com";
      preconnect.crossOrigin = "anonymous";
      document.head.appendChild(preconnect);
    }

    if (!document.getElementById(FONT_STYLESHEET_ID)) {
      const stylesheet = document.createElement("link");
      stylesheet.id = FONT_STYLESHEET_ID;
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Familjen+Grotesk:wght@400;500;600;700&display=swap";
      document.head.appendChild(stylesheet);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.body.classList.remove("winui3-body");
      document.documentElement.classList.remove("winui3-html");
    };
  }, []);

  return (
    <>
      <Navbar theme={theme} onThemeToggle={toggle} />
      <div className="winui3-page">

      <section id="hero">
        <div className="wrap">
          <div className="hero-inner">
            <p className="hero-eyebrow">{cfg.hero.eyebrow}</p>
            <h1>
              {cfg.hero.titleLines[0]}
              <br />
              {cfg.hero.titleLines[1]}
              <em>{cfg.hero.titleLines[2].em}</em>
              {cfg.hero.titleLines[3]}
            </h1>
            <p className="hero-sub">{cfg.hero.sub}</p>
            <div className="hero-actions">
              <a href="#quickstart" className="btn btn-primary">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                {cfg.hero.actions[0].label}
              </a>
              <a
                href={cfg.hero.actions[1].href}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {cfg.hero.actions[1].label}
              </a>
              <a href={cfg.hero.actions[2].href} className="btn btn-ghost">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                {cfg.hero.actions[2].label}
              </a>
            </div>
            <div className="hero-badges">
              {cfg.hero.badges.map((b) => (
                <span key={b} className="badge">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="wrap">
          <p className="sec-label reveal">{cfg.overview.label}</p>
          <h2 className="sec-title reveal reveal-d1">{cfg.overview.title}</h2>
          <p className="sec-desc reveal reveal-d2">{cfg.overview.desc}</p>

          <div className="stats-row reveal reveal-d3">
            {cfg.overview.stats.map((s) => (
              <div key={s.lbl} className="stat">
                <div className="stat-val">{s.val}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          <div className="features-grid" style={{ marginTop: "1.25rem" }}>
            {cfg.overview.features.map((f, idx) => (
              <div key={f.title} className={`feature reveal reveal-d${(idx % 3) + 1}`}>
                <span className="feature-icon" aria-hidden="true">
                  {(() => {
                    const Icon = FEATURE_ICONS[f.icon];
                    return Icon ? <Icon size={18} strokeWidth={2} color={f.color} /> : null;
                  })()}
                </span>
                <div className="feature-title">{f.title}</div>
                {f.isHtml ? (
                  <div className="feature-desc" dangerouslySetInnerHTML={{ __html: f.desc }} />
                ) : (
                  <div className="feature-desc">{f.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture">
        <div className="wrap">
          <p className="sec-label reveal">{cfg.architecture.label}</p>
          <h2 className="sec-title reveal reveal-d1">{cfg.architecture.title}</h2>
          <p className="sec-desc reveal reveal-d2">{cfg.architecture.desc}</p>

          <div className="arch-grid reveal reveal-d3">
            {cfg.architecture.layers.map((layer) => {
              if (layer.arrow) {
                return (
                  <div key={`arrow-${layer.arrow}`} className="arch-arrow">
                    {layer.arrow}
                  </div>
                );
              }

              return (
                <div key={layer.label} className="arch-layer">
                  <div className="arch-layer-label">{layer.label}</div>
                  <div className="arch-nodes">
                    {layer.nodes.map((n) => (
                      <div key={n.file} className="arch-node">
                        <div className="arch-node-name">{n.name}</div>
                        <div className="arch-node-file">{n.file}</div>
                        {n.isHtml ? (
                          <div className="arch-node-desc" dangerouslySetInnerHTML={{ __html: n.desc }} />
                        ) : (
                          <div className="arch-node-desc">{n.desc}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="sec-label reveal" style={{ marginTop: "3rem" }}>
            {cfg.architecture.eventFlowLabel}
          </p>
          <div className="flow reveal reveal-d1">
            {cfg.architecture.eventFlow.map((s, idx) => (
              <div key={s.num} className="flow-step">
                <div className="flow-num">{s.num}</div>
                <div className="flow-name">{s.name}</div>
                <div className="flow-desc">{s.desc}</div>
                {idx !== cfg.architecture.eventFlow.length - 1 && <div className="flow-arrow">›</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="controls">
        <div className="wrap">
          <p className="sec-label reveal">{cfg.controls.label}</p>
          <h2 className="sec-title reveal reveal-d1">{cfg.controls.title}</h2>
          <p className="sec-desc reveal reveal-d2" dangerouslySetInnerHTML={{ __html: cfg.controls.descHtml }} />

          <div className="controls-grid reveal reveal-d3">
            {cfg.controls.cards.map((c) => (
              <div key={c.name} className="ctrl-card">
                <div className="ctrl-head">
                  <span className="ctrl-name">{c.name}</span>
                  <span className="ctrl-type">{c.type}</span>
                </div>
                {c.descIsHtml ? (
                  <p className="ctrl-desc" dangerouslySetInnerHTML={{ __html: c.desc }} />
                ) : (
                  <p className="ctrl-desc">{c.desc}</p>
                )}
                <pre className="ctrl-snippet" dangerouslySetInnerHTML={{ __html: c.snippetHtml }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quickstart">
        <div className="wrap">
          <p className="sec-label reveal">{cfg.quickstart.label}</p>
          <h2 className="sec-title reveal reveal-d1">{cfg.quickstart.title}</h2>
          <p className="sec-desc reveal reveal-d2">{cfg.quickstart.desc}</p>

          <div className="code-window reveal reveal-d3">
            <div className="code-titlebar">
              <div className="code-dots">
                <div className="code-dot" />
                <div className="code-dot" />
                <div className="code-dot" />
              </div>
              <span className="code-filename">{cfg.quickstart.filename}</span>
            </div>
            <pre>
              <code dangerouslySetInnerHTML={{ __html: cfg.quickstart.codeHtml }} />
            </pre>
          </div>
        </div>
      </section>

      <section id="demos">
        <div className="wrap">
          <p className="sec-label reveal">{cfg.demos.label}</p>
          <h2 className="sec-title reveal reveal-d1">{cfg.demos.title}</h2>
          <p className="sec-desc reveal reveal-d2" dangerouslySetInnerHTML={{ __html: cfg.demos.descHtml }} />

          <div className="demos-grid">
            {cfg.demos.cards.map((d, idx) => (
              <div key={d.file} className={`demo-card reveal reveal-d${idx + 1}`}>
                <div className="demo-preview" dangerouslySetInnerHTML={{ __html: d.previewHtml }} />
                <div className="demo-info">
                  <div className="demo-file">{d.file}</div>
                  <div className="demo-name">{d.name}</div>
                  <div className="demo-desc">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="install">
        <div className="wrap">
          <p className="sec-label reveal">{cfg.install.label}</p>
          <h2 className="sec-title reveal reveal-d1">{cfg.install.title}</h2>
          <p className="sec-desc reveal reveal-d2">{cfg.install.desc}</p>

          <div className="install-steps reveal reveal-d3">
            {cfg.install.steps.map((s) => (
              <div key={s.num} className="install-step">
                <div className="install-step-head">
                  <div className="install-step-num">{s.num}</div>
                  <div className="install-step-title">{s.title}</div>
                </div>
                <div className="install-step-body">
                  {s.bodyHtml ? (
                    <p dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />
                  ) : (
                    <p>{s.body}</p>
                  )}
                  <code className="install-cmd">{s.cmd}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-left" dangerouslySetInnerHTML={{ __html: cfg.footer.leftHtml }} />
          <div className="footer-links">
            {cfg.footer.links.map((l) =>
              l.external ? (
                <a key={l.href} href={l.href} target="_blank" rel="noopener">
                  {l.label}
                </a>
              ) : (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
