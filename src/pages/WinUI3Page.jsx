import React, { useEffect } from "react";
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

// Reusable tailwind class strings
const clsWrap = "max-w-[900px] mx-auto px-6";
const clsSection = "py-20";
const clsSecLabel = "font-winui-code text-[0.68rem] tracking-[0.14em] uppercase text-winui-green mb-[0.6rem]";
const clsSecTitle = "font-winui-ui text-[clamp(1.5rem,3vw,2rem)] font-bold text-winui-bright mb-[0.9rem]";
const clsSecDesc = "text-[0.95rem] text-winui-dim max-w-[560px] leading-[1.75]";
const clsReveal = "reveal opacity-0 translate-y-[18px] transition-all duration-[600ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0";

export default function WinUI3Page() {
  const { theme, toggle } = useTheme();

  /* Sync data-theme whenever the user toggles */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.title = "WinUI3 — Console UI Library";
    
    // Add Tailwind body classes directly instead of 'winui3-body'
    const bodyClasses = [
      "bg-winui-bg", "text-winui-text", "font-winui-ui", "leading-[1.6]", "overflow-x-hidden",
      "selection:bg-winui-green-mid", "selection:text-winui-bright"
    ];
    document.body.classList.add(...bodyClasses);
    document.documentElement.classList.add("scroll-smooth");

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
      document.body.classList.remove(...bodyClasses);
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return (
    <>
      <Navbar theme={theme} onThemeToggle={toggle} />
      <div className="w-full relative">
        {/* Scanline overlay */}
        <div className="fixed inset-0 z-[999] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.07)_2px,rgba(0,0,0,0.07)_4px)]"></div>
        
        {/* Scrollbar styling */}
        <style dangerouslySetInnerHTML={{__html: `
          body::-webkit-scrollbar { width: 5px; }
          body::-webkit-scrollbar-track { background: #0b0e0f; }
          body::-webkit-scrollbar-thumb { background: #3d4d55; border-radius: 3px; }
        `}} />

        <section id="hero" className="py-24 pb-16 relative overflow-hidden">
          {/* Hero pseudo-elements */}
          <div className="absolute inset-0 opacity-50 bg-[linear-gradient(#1e2529_1px,transparent_1px),linear-gradient(90deg,#1e2529_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,black_30%,transparent_100%)] pointer-events-none"></div>
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,255,176,0.08)_0%,transparent_70%)] pointer-events-none"></div>

          <div className={`${clsWrap} relative z-10`}>
            <p className="font-winui-code text-[0.72rem] tracking-[0.14em] uppercase text-winui-green mb-5 flex items-center gap-[0.6rem] before:content-[''] before:inline-block before:w-[28px] before:h-[1px] before:bg-winui-green">
              {cfg.hero.eyebrow}
            </p>
            <h1 className="font-winui-code text-[clamp(2.6rem,6vw,4.2rem)] max-sm:text-[2rem] font-medium text-winui-bright leading-[1.05] tracking-[-0.02em] mb-5">
              {cfg.hero.titleLines[0]}
              <br />
              {cfg.hero.titleLines[1]}
              <em className="not-italic text-winui-green">{cfg.hero.titleLines[2].em}</em>
              {cfg.hero.titleLines[3]}
            </h1>
            <p className="text-[1.05rem] text-winui-dim max-w-[540px] mb-9 leading-[1.7]">
              {cfg.hero.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={cfg.hero.actions[1].href}
                className="inline-flex items-center gap-2 font-winui-code text-[0.8rem] py-[0.6rem] px-[1.3rem] rounded-winui no-underline transition-all duration-200 border border-winui-muted bg-transparent text-winui-text hover:border-winui-green hover:text-winui-green hover:-translate-y-[1px] cursor-pointer"
                target="_blank"
                rel="noopener"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {cfg.hero.actions[1].label}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-10">
              {cfg.hero.badges.map((b) => (
                <span key={b} className="font-winui-code text-[0.68rem] py-1 px-[0.7rem] rounded-full border border-winui-muted text-winui-dim whitespace-nowrap">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className={clsSection}>
          <div className={clsWrap}>
            <p className={`${clsSecLabel} ${clsReveal}`}>{cfg.overview.label}</p>
            <h2 className={`${clsSecTitle} ${clsReveal} delay-[100ms]`}>{cfg.overview.title}</h2>
            <p className={`${clsSecDesc} ${clsReveal} delay-[200ms]`}>{cfg.overview.desc}</p>

            <div className={`grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-winui-line border border-winui-line rounded-winui overflow-hidden mt-12 ${clsReveal} delay-[300ms]`}>
              {cfg.overview.stats.map((s) => (
                <div key={s.lbl} className="bg-winui-bg2 py-[1.4rem] px-[1.25rem] text-center">
                  <div className="font-winui-code text-[1.8rem] text-winui-green leading-none mb-[0.3rem]">{s.val}</div>
                  <div className="text-[0.75rem] text-winui-dim tracking-[0.05em]">{s.lbl}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-winui-line border border-winui-line rounded-winui overflow-hidden mt-5">
              {cfg.overview.features.map((f, idx) => (
                <div key={f.title} className={`bg-winui-bg2 py-[1.6rem] px-[1.4rem] transition-colors duration-200 hover:bg-winui-bg3 ${clsReveal} delay-[${((idx % 3) + 1) * 100}ms]`}>
                  <span className="mb-[0.85rem] inline-flex items-center text-winui-bright block" aria-hidden="true">
                    {(() => {
                      const Icon = FEATURE_ICONS[f.icon];
                      return Icon ? <Icon size={18} strokeWidth={2} color={f.color} /> : null;
                    })()}
                  </span>
                  <div className="font-winui-ui font-semibold text-[0.92rem] text-winui-bright mb-[0.4rem]">{f.title}</div>
                  {f.isHtml ? (
                    <div className="text-[0.82rem] text-winui-dim leading-[1.6]" dangerouslySetInnerHTML={{ __html: f.desc }} />
                  ) : (
                    <div className="text-[0.82rem] text-winui-dim leading-[1.6]">{f.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className={`${clsSection} bg-winui-bg2 border-y border-winui-line`}>
          <div className={clsWrap}>
            <p className={`${clsSecLabel} ${clsReveal}`}>{cfg.architecture.label}</p>
            <h2 className={`${clsSecTitle} ${clsReveal} delay-[100ms]`}>{cfg.architecture.title}</h2>
            <p className={`${clsSecDesc} ${clsReveal} delay-[200ms]`}>{cfg.architecture.desc}</p>

            <div className={`grid grid-cols-1 gap-6 mt-12 ${clsReveal} delay-[300ms]`}>
              {cfg.architecture.layers.map((layer) => {
                if (layer.arrow) {
                  return (
                    <div key={`arrow-${layer.arrow}`} className="flex items-center justify-center p-[0.6rem] text-winui-muted text-[1rem]">
                      {layer.arrow}
                    </div>
                  );
                }

                return (
                  <div key={layer.label} className="border border-winui-line rounded-winui overflow-hidden">
                    <div className="bg-winui-bg3 border-b border-winui-line py-2 px-4 text-[0.68rem] tracking-[0.12em] uppercase text-winui-muted">{layer.label}</div>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-0">
                      {layer.nodes.map((n) => (
                        <div key={n.file} className="flex-[1_1_140px] p-4 sm:py-[1rem] sm:px-[1.25rem] border-b sm:border-b-0 sm:border-r border-winui-line last:border-b-0 sm:last:border-r-0">
                          <div className="text-winui-bright font-medium text-[0.82rem] mb-[0.35rem]">{n.name}</div>
                          <div className="text-winui-muted text-[0.72rem]">{n.file}</div>
                          {n.isHtml ? (
                            <div className="text-winui-dim text-[0.75rem] mt-[0.35rem] font-winui-ui leading-[1.5]" dangerouslySetInnerHTML={{ __html: n.desc }} />
                          ) : (
                            <div className="text-winui-dim text-[0.75rem] mt-[0.35rem] font-winui-ui leading-[1.5]">{n.desc}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className={`${clsSecLabel} ${clsReveal} mt-12`}>
              {cfg.architecture.eventFlowLabel}
            </p>
            <div className={`mt-12 flex flex-col md:flex-row items-stretch gap-0 border border-winui-line rounded-winui overflow-hidden ${clsReveal} delay-[100ms]`}>
              {cfg.architecture.eventFlow.map((s, idx) => (
                <div key={s.num} className="flex-1 bg-winui-bg2 py-[1.4rem] px-[1.2rem] border-b md:border-b-0 md:border-r border-winui-line relative transition-colors duration-200 hover:bg-winui-bg3 last:border-b-0 md:last:border-r-0">
                  <div className="font-winui-code text-[0.65rem] text-winui-muted mb-2">{s.num}</div>
                  <div className="font-semibold text-[0.88rem] text-winui-bright mb-[0.4rem]">{s.name}</div>
                  <div className="text-[0.78rem] text-winui-dim leading-[1.5]">{s.desc}</div>
                  {idx !== cfg.architecture.eventFlow.length - 1 && <div className="hidden md:flex absolute -right-[10px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-winui-bg border border-winui-line rounded-full items-center justify-center text-[0.65rem] text-winui-green z-10">›</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="controls" className={clsSection}>
          <div className={clsWrap}>
            <p className={`${clsSecLabel} ${clsReveal}`}>{cfg.controls.label}</p>
            <h2 className={`${clsSecTitle} ${clsReveal} delay-[100ms]`}>{cfg.controls.title}</h2>
            <p className={`${clsSecDesc} ${clsReveal} delay-[200ms]`} dangerouslySetInnerHTML={{ __html: cfg.controls.descHtml }} />

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-winui-line border border-winui-line rounded-winui overflow-hidden mt-12 ${clsReveal} delay-[300ms]`}>
              {cfg.controls.cards.map((c) => (
                <div key={c.name} className="bg-winui-bg2 py-[1.25rem] px-[1.4rem] transition-colors duration-200 cursor-default hover:bg-winui-bg3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-winui-code text-[0.85rem] text-winui-green">{c.name}</span>
                    <span className="font-winui-code text-[0.65rem] text-winui-muted bg-winui-bg py-[0.15rem] px-2 rounded-[4px] border border-winui-line">{c.type}</span>
                  </div>
                  {c.descIsHtml ? (
                    <p className="text-[0.82rem] text-winui-dim leading-[1.6] mb-[0.65rem]" dangerouslySetInnerHTML={{ __html: c.desc }} />
                  ) : (
                    <p className="text-[0.82rem] text-winui-dim leading-[1.6] mb-[0.65rem]">{c.desc}</p>
                  )}
                  <pre className="font-winui-code text-[0.7rem] text-winui-muted bg-winui-bg py-2 px-3 rounded-[4px] border border-winui-line whitespace-pre overflow-x-auto" dangerouslySetInnerHTML={{ __html: c.snippetHtml }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quickstart" className={`${clsSection} border-t border-winui-line`}>
          <div className={clsWrap}>
            <p className={`${clsSecLabel} ${clsReveal}`}>{cfg.quickstart.label}</p>
            <h2 className={`${clsSecTitle} ${clsReveal} delay-[100ms]`}>{cfg.quickstart.title}</h2>
            <p className={`${clsSecDesc} ${clsReveal} delay-[200ms]`}>{cfg.quickstart.desc}</p>

            <div className={`mt-10 border border-winui-line rounded-winui overflow-hidden ${clsReveal} delay-[300ms]`}>
              <div className="bg-winui-bg3 border-b border-winui-line py-[0.6rem] px-4 flex items-center gap-3">
                <div className="flex gap-[0.4rem]">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#28ca41]" />
                </div>
                <span className="font-winui-code text-[0.72rem] text-winui-dim">{cfg.quickstart.filename}</span>
              </div>
              <pre className="bg-winui-bg2 py-6 px-7 overflow-x-auto leading-[1.7] [&_.k]:text-[#ff7eb6] [&_.t]:text-winui-blue [&_.s]:text-winui-amber [&_.c]:text-winui-muted [&_.c]:italic [&_.fn]:text-winui-green [&_.n]:text-winui-text [&_.p]:text-winui-dim">
                <code className="font-winui-code text-[0.78rem]" dangerouslySetInnerHTML={{ __html: cfg.quickstart.codeHtml }} />
              </pre>
            </div>
          </div>
        </section>

        <section id="demos" className={`${clsSection} bg-winui-bg2 border-y border-winui-line`}>
          <div className={clsWrap}>
            <p className={`${clsSecLabel} ${clsReveal}`}>{cfg.demos.label}</p>
            <h2 className={`${clsSecTitle} ${clsReveal} delay-[100ms]`}>{cfg.demos.title}</h2>
            <p className={`${clsSecDesc} ${clsReveal} delay-[200ms]`} dangerouslySetInnerHTML={{ __html: cfg.demos.descHtml }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {cfg.demos.cards.map((d, idx) => (
                <div key={d.file} className={`bg-winui-bg border border-winui-line rounded-winui overflow-hidden transition-all duration-200 hover:border-winui-green hover:-translate-y-[3px] ${clsReveal} delay-[${(idx + 1) * 100}ms]`}>
                  <div className="bg-black pt-4 px-4 pb-3 font-winui-code text-[0.65rem] leading-[1.5] min-h-[100px] border-b border-winui-line overflow-hidden whitespace-pre [&_.g]:text-[#28ca41] [&_.b]:text-winui-blue [&_.w]:text-[#ddd] [&_.dim]:text-[#555] [&_.box]:text-winui-muted" dangerouslySetInnerHTML={{ __html: d.previewHtml }} />
                  <div className="p-4">
                    <div className="font-winui-code text-[0.65rem] text-winui-muted mb-[0.3rem]">{d.file}</div>
                    <div className="font-semibold text-[0.9rem] text-winui-bright mb-[0.3rem]">{d.name}</div>
                    <div className="text-[0.78rem] text-winui-dim leading-[1.5]">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="install" className={clsSection}>
          <div className={clsWrap}>
            <p className={`${clsSecLabel} ${clsReveal}`}>{cfg.install.label}</p>
            <h2 className={`${clsSecTitle} ${clsReveal} delay-[100ms]`}>{cfg.install.title}</h2>
            <p className={`${clsSecDesc} ${clsReveal} delay-[200ms]`}>{cfg.install.desc}</p>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 ${clsReveal} delay-[300ms]`}>
              {cfg.install.steps.map((s) => (
                <div key={s.num} className="border border-winui-line rounded-winui overflow-hidden">
                  <div className="bg-winui-bg3 border-b border-winui-line py-[0.65rem] px-4 flex items-center gap-3">
                    <div className="font-winui-code text-[0.68rem] text-winui-green bg-winui-green-dim border border-winui-green-mid w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0">{s.num}</div>
                    <div className="text-[0.84rem] font-semibold text-winui-bright">{s.title}</div>
                  </div>
                  <div className="p-4 px-5 [&_p]:text-[0.82rem] [&_p]:text-winui-dim [&_p]:leading-[1.6] [&_p]:mb-[0.65rem]">
                    {s.bodyHtml ? (
                      <p dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />
                    ) : (
                      <p>{s.body}</p>
                    )}
                    <code className="font-winui-code text-[0.75rem] text-winui-green bg-winui-bg py-2 px-[0.85rem] rounded-[4px] border border-winui-line block">{s.cmd}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-winui-line py-8">
          <div className="max-w-[900px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
            <div className="font-winui-code text-[0.75rem] text-winui-muted [&_span]:text-winui-green" dangerouslySetInnerHTML={{ __html: cfg.footer.leftHtml }} />
            <div className="flex gap-5">
              {cfg.footer.links.map((l) =>
                l.external ? (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener" className="text-[0.78rem] text-winui-dim no-underline transition-colors duration-200 hover:text-winui-green">
                    {l.label}
                  </a>
                ) : (
                  <a 
                    key={l.href} 
                    href={l.href}
                    className="text-[0.78rem] text-winui-dim no-underline transition-colors duration-200 hover:text-winui-green"
                    onClick={(e) => {
                      if (l.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
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
