import React, { useEffect } from "react";
import "./WinUI3Page.css";

const FONT_PRECONNECT_ID = "winui3-fonts-preconnect";
const FONT_GSTATIC_PRECONNECT_ID = "winui3-fonts-preconnect-gstatic";
const FONT_STYLESHEET_ID = "winui3-fonts-stylesheet";

export default function WinUI3Page() {
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
    <div className="winui3-page">
      <nav>
        <div className="nav-inner">
          <a className="nav-logo" href="#">
            WinUI3
          </a>
          <div className="nav-links">
            <a href="#overview">Overview</a>
            <a href="#controls">Controls</a>
            <a href="#quickstart">Quick Start</a>
            <a href="#demos">Demos</a>
            <a href="#install">Install</a>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="wrap">
          <div className="hero-inner">
            <p className="hero-eyebrow">C++ / Windows Console</p>
            <h1>
              Console UI,<br />
              done <em>properly</em>.
            </h1>
            <p className="hero-sub">
              WinUI3 is a lightweight, header-only C++ library for building interactive terminal
              interfaces on Windows — with focus management, event-driven input, and composable
              controls. Zero dependencies beyond the Windows SDK.
            </p>
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
                Get Started
              </a>
              <a href="https://github.com" className="btn btn-ghost" target="_blank" rel="noopener">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              <a href="architecture.md" className="btn btn-ghost">
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
                Docs
              </a>
            </div>
            <div className="hero-badges">
              <span className="badge">C++17</span>
              <span className="badge">Windows 10 / 11</span>
              <span className="badge">Header-only</span>
              <span className="badge">MIT License</span>
              <span className="badge">No dependencies</span>
              <span className="badge">CMake ready</span>
            </div>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="wrap">
          <p className="sec-label reveal">Overview</p>
          <h2 className="sec-title reveal reveal-d1">Everything a console app needs</h2>
          <p className="sec-desc reveal reveal-d2">
            A complete toolkit for building rich terminal UIs — from a single interactive button to
            full multi-screen applications with tab navigation and modal dialogs.
          </p>

          <div className="stats-row reveal reveal-d3">
            <div className="stat">
              <div className="stat-val">9</div>
              <div className="stat-lbl">UI Controls</div>
            </div>
            <div className="stat">
              <div className="stat-val">5</div>
              <div className="stat-lbl">Core Classes</div>
            </div>
            <div className="stat">
              <div className="stat-val">5</div>
              <div className="stat-lbl">Demo Apps</div>
            </div>
            <div className="stat">
              <div className="stat-val">0</div>
              <div className="stat-lbl">Dependencies</div>
            </div>
          </div>

          <div className="features-grid" style={{ marginTop: "1.25rem" }}>
            <div className="feature reveal reveal-d1">
              <span className="feature-icon">⌨️</span>
              <div className="feature-title">Focus Management</div>
              <div className="feature-desc">
                Tab / Shift+Tab navigation between controls out of the box. Register once, navigate
                automatically.
              </div>
            </div>
            <div className="feature reveal reveal-d2">
              <span className="feature-icon">🖱️</span>
              <div className="feature-title">Mouse Support</div>
              <div className="feature-desc">
                Hover detection, click handling, and visual state changes driven by the Windows
                console mouse API.
              </div>
            </div>
            <div className="feature reveal reveal-d3">
              <span className="feature-icon">📡</span>
              <div className="feature-title">Event System</div>
              <div className="feature-desc">
                Type-safe handler registration for keyboard, mouse, window resize, and focus events
                via a background thread.
              </div>
            </div>
            <div className="feature reveal reveal-d1">
              <span className="feature-icon">🧩</span>
              <div className="feature-title">Composable Controls</div>
              <div className="feature-desc">
                Container lays out children automatically — vertical stacks, horizontal rows,
                padding, spacing, alignment.
              </div>
            </div>
            <div className="feature reveal reveal-d2">
              <span className="feature-icon">🎨</span>
              <div className="feature-title">Visual States</div>
              <div className="feature-desc">
                Each control renders distinct default, hovered, and focused appearances using
                Windows console color attributes.
              </div>
            </div>
            <div className="feature reveal reveal-d3">
              <span className="feature-icon">📦</span>
              <div className="feature-title">Header-only</div>
              <div className="feature-desc">
                Drop the headers into your project and include them — no precompiled libraries, no
                linker flags beyond <code style={{ color: "var(--amber)" }}>kernel32</code>.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture">
        <div className="wrap">
          <p className="sec-label reveal">Architecture</p>
          <h2 className="sec-title reveal reveal-d1">Clean separation of concerns</h2>
          <p className="sec-desc reveal reveal-d2">
            Four core classes handle all infrastructure. Controls inherit from the base and
            implement only their drawing and interaction logic.
          </p>

          <div className="arch-grid reveal reveal-d3">
            <div className="arch-layer">
              <div className="arch-layer-label">Core</div>
              <div className="arch-nodes">
                <div className="arch-node">
                  <div className="arch-node-name">Control</div>
                  <div className="arch-node-file">Core/Control.h</div>
                  <div className="arch-node-desc">
                    Abstract base. Holds rect, focus, hover state. Defines the draw / onMouse / onKey
                    interface.
                  </div>
                </div>
                <div className="arch-node">
                  <div className="arch-node-name">Render</div>
                  <div className="arch-node-file">Core/Render.h</div>
                  <div className="arch-node-desc">
                    Static drawing utilities — box outlines, fill, centered and left-aligned text,
                    screen clear.
                  </div>
                </div>
                <div className="arch-node">
                  <div className="arch-node-name">FocusManager</div>
                  <div className="arch-node-file">Core/FocusManager.h</div>
                  <div className="arch-node-desc">
                    Tracks registered controls, routes Tab/Shift+Tab, exposes getFocused() and
                    redrawAll().
                  </div>
                </div>
                <div className="arch-node">
                  <div className="arch-node-name">EventManager</div>
                  <div className="arch-node-file">Core/EventManager.h</div>
                  <div className="arch-node-desc">
                    Singleton. Processes console input on a background thread, dispatches typed
                    handlers.
                  </div>
                </div>
                <div className="arch-node">
                  <div className="arch-node-name">InputState</div>
                  <div className="arch-node-file">Core/InputState.h</div>
                  <div className="arch-node-desc">
                    Polls virtual key state synchronously. Used for main-loop exit conditions.
                  </div>
                </div>
              </div>
            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-layer">
              <div className="arch-layer-label">BasicElements — inherit Control + Render</div>
              <div className="arch-nodes">
                <div className="arch-node">
                  <div className="arch-node-name">Button</div>
                  <div className="arch-node-file">BasicElements/Button.h</div>
                  <div className="arch-node-desc">
                    Base button. Subclassed by CFButton (virtual action) and FIButton (lambda
                    callback).
                  </div>
                </div>
                <div className="arch-node">
                  <div className="arch-node-name">TextBox</div>
                  <div className="arch-node-file">BasicElements/TextBox.h</div>
                  <div className="arch-node-desc">
                    Text input. Subscribes keyboard on focus, unsubscribes on blur. CFTextBox /
                    FITextBox variants.
                  </div>
                </div>
                <div className="arch-node">
                  <div className="arch-node-name">CheckBox</div>
                  <div className="arch-node-file">BasicElements/CheckBox.h</div>
                  <div className="arch-node-desc">
                    Toggle control. <code style={{ color: "var(--amber)" }}>checked</code> bool flips
                    on Space or click. Renders [ ] / [X].
                  </div>
                </div>
                <div className="arch-node">
                  <div className="arch-node-name">Label</div>
                  <div className="arch-node-file">BasicElements/Label.h</div>
                  <div className="arch-node-desc">
                    Static display. Type flags control border (bit 0) and center alignment (bit 1).
                  </div>
                </div>
                <div className="arch-node">
                  <div className="arch-node-name">Container</div>
                  <div className="arch-node-file">BasicElements/Container.h</div>
                  <div className="arch-node-desc">
                    Layout wrapper. Auto-arranges children vertically or horizontally with padding and
                    alignment.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="sec-label reveal" style={{ marginTop: "3rem" }}>
            Event Flow
          </p>
          <div className="flow reveal reveal-d1">
            <div className="flow-step">
              <div className="flow-num">01</div>
              <div className="flow-name">Console Input</div>
              <div className="flow-desc">Windows INPUT_RECORD stream from ReadConsoleInput</div>
              <div className="flow-arrow">›</div>
            </div>
            <div className="flow-step">
              <div className="flow-num">02</div>
              <div className="flow-name">EventManager</div>
              <div className="flow-desc">
                Background thread dispatches typed events to all registered handlers
              </div>
              <div className="flow-arrow">›</div>
            </div>
            <div className="flow-step">
              <div className="flow-num">03</div>
              <div className="flow-name">Handlers</div>
              <div className="flow-desc">
                Your callbacks — e.g. Tab → FocusManager::nextFocus()
              </div>
              <div className="flow-arrow">›</div>
            </div>
            <div className="flow-step">
              <div className="flow-num">04</div>
              <div className="flow-name">FocusManager</div>
              <div className="flow-desc">
                Updates focus state, calls setFocus(true/false) on controls
              </div>
              <div className="flow-arrow">›</div>
            </div>
            <div className="flow-step">
              <div className="flow-num">05</div>
              <div className="flow-name">Control::draw()</div>
              <div className="flow-desc">Control redraws itself with updated visual state</div>
            </div>
          </div>
        </div>
      </section>

      <section id="controls">
        <div className="wrap">
          <p className="sec-label reveal">Controls</p>
          <h2 className="sec-title reveal reveal-d1">Nine ready-to-use elements</h2>
          <p className="sec-desc reveal reveal-d2">
            Each control comes in a Classic (CF) variant with virtual method override, and a
            Functional (FI) variant with <code style={{ color: "var(--amber)" }}>std::function</code>{" "}
            callback.
          </p>

          <div className="controls-grid reveal reveal-d3">
            <div className="ctrl-card">
              <div className="ctrl-head">
                <span className="ctrl-name">FIButton</span>
                <span className="ctrl-type">interactive</span>
              </div>
              <p className="ctrl-desc">
                Click button with lambda callback. Visual states for default, hover (blue), and
                focused (green).
              </p>
              <pre className="ctrl-snippet">
                <span className="k">auto</span> btn = <span className="fn">make_shared</span>&lt;
                <span className="t">FIButton</span>&gt;({"\n"}  rect, <span className="s">L"Login"</span>, [
                <span className="k">this</span>]() {"{"} validate(); {"}"} );
              </pre>
            </div>

            <div className="ctrl-card">
              <div className="ctrl-head">
                <span className="ctrl-name">FITextBox</span>
                <span className="ctrl-type">input</span>
              </div>
              <p className="ctrl-desc">
                Text input with Enter callback. Subscribes keyboard events automatically on focus
                gain.
              </p>
              <pre className="ctrl-snippet">
                <span className="k">auto</span> tb = <span className="fn">make_shared</span>&lt;
                <span className="t">FITextBox</span>&gt;({"\n"}  rect, <span className="s">L"Username"</span>, [](
                wstring v) {"{}"} );
              </pre>
            </div>

            <div className="ctrl-card">
              <div className="ctrl-head">
                <span className="ctrl-name">CheckBox</span>
                <span className="ctrl-type">toggle</span>
              </div>
              <p className="ctrl-desc">
                Toggle control. Reads <code style={{ fontSize: ".72rem" }}>checked</code> bool after
                form submit. Renders [ ] or [X] with label.
              </p>
              <pre className="ctrl-snippet">
                <span className="k">if</span> (rememberMe-&gt;checked) {"{\n"}  <span className="fn">
                  savePrefs
                </span>
                (login-&gt;text);{"\n"}
                {"}"}
              </pre>
            </div>

            <div className="ctrl-card">
              <div className="ctrl-head">
                <span className="ctrl-name">Label</span>
                <span className="ctrl-type">display</span>
              </div>
              <p className="ctrl-desc">
                Static text display. Type flag bits control border (0x01) and center alignment (0x02).
                Supports live text updates.
              </p>
              <pre className="ctrl-snippet">
                <span className="k">auto</span> lbl = <span className="fn">make_shared</span>&lt;
                <span className="t">Label</span>&gt;(rect, <span className="s">L"Title"</span>, <span className="n">
                  3
                </span>
                );{"\n"}lbl-&gt;text = <span className="s">L"Updated"</span>; lbl-&gt;
                <span className="fn">updateText</span>();
              </pre>
            </div>

            <div className="ctrl-card">
              <div className="ctrl-head">
                <span className="ctrl-name">Container</span>
                <span className="ctrl-type">layout</span>
              </div>
              <p className="ctrl-desc">
                Auto-arranges child controls vertically or horizontally. Supports padding, spacing,
                and Start / Center / End alignment.
              </p>
              <pre className="ctrl-snippet">
                root.<span className="fn">addControl</span>(row);
                {"\n"}root.<span className="fn">rearrangeControls</span>();
                {"\n"}root.<span className="fn">draw</span>();
              </pre>
            </div>

            <div className="ctrl-card">
              <div className="ctrl-head">
                <span className="ctrl-name">CFButton / CFTextBox</span>
                <span className="ctrl-type">classic</span>
              </div>
              <p className="ctrl-desc">
                Virtual method variants. Override <code style={{ fontSize: ".72rem" }}>action()</code>{" "}
                or <code style={{ fontSize: ".72rem" }}>onEnter()</code> in a subclass for
                object-oriented design patterns.
              </p>
              <pre className="ctrl-snippet">
                <span className="k">void</span> <span className="t">CFButton</span>::<span className="fn">
                  action
                </span>
                () {"{\n"}  <span className="fn">MessageBoxW</span>(<span className="n">NULL</span>,{" "}
                <span className="s">L"Clicked!"</span>, ...);{"\n"}
                {"}"}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="quickstart">
        <div className="wrap">
          <p className="sec-label reveal">Quick Start</p>
          <h2 className="sec-title reveal reveal-d1">Up and running in minutes</h2>
          <p className="sec-desc reveal reveal-d2">
            A complete login form — two text inputs, a checkbox, and a submit button with validation —
            in under 50 lines.
          </p>

          <div className="code-window reveal reveal-d3">
            <div className="code-titlebar">
              <div className="code-dots">
                <div className="code-dot" />
                <div className="code-dot" />
                <div className="code-dot" />
              </div>
              <span className="code-filename">demo1.cpp — Login Form</span>
            </div>
            <pre>
              <code>
                <span className="c">
                  // Include headers — add Core/ and BasicElements/ to include path
                </span>
                {"\n"}
                <span className="k">#include</span> <span className="s">"EventManager.h"</span>
                {"\n"}
                <span className="k">#include</span> <span className="s">"FocusManager.h"</span>
                {"\n"}
                <span className="k">#include</span> <span className="s">"../BasicElements/FiButton.h"</span>
                {"\n"}
                <span className="k">#include</span> <span className="s">"../BasicElements/TextBox.h"</span>
                {"\n"}
                <span className="k">#include</span> <span className="s">"../BasicElements/CheckBox.h"</span>
                {"\n\n"}
                <span className="k">int</span> <span className="fn">main</span>() {"{"}
                {"\n"}  <span className="c">
                  // 1. Create controls with SMALL_RECT{"{left, top, right, bottom}"}
                </span>
                {"\n"}  <span className="k">auto</span> login    = <span className="fn">make_shared</span>&lt;
                <span className="t">TextBox</span>&gt;(<span className="t">SMALL_RECT</span>
                {"{"}
                <span className="n">10,4,50,6</span>
                {"}"}
                {")"},  <span className="s">L"Login"</span>);
                {"\n"}  <span className="k">auto</span> password = <span className="fn">make_shared</span>&lt;
                <span className="t">TextBox</span>&gt;(<span className="t">SMALL_RECT</span>
                {"{"}
                <span className="n">10,8,50,10</span>
                {"}"}
                {")"}, <span className="s">L"Password"</span>);
                {"\n"}  <span className="k">auto</span> remember = <span className="fn">make_shared</span>&lt;
                <span className="t">CheckBox</span>&gt;(<span className="t">SMALL_RECT</span>
                {"{"}
                <span className="n">10,12,50,14</span>
                {"}"}
                {")"},<span className="s">L"Remember Me"</span>);
                {"\n"}  <span className="k">auto</span> submit   = <span className="fn">make_shared</span>&lt;
                <span className="t">FIButton</span>&gt;(<span className="t">SMALL_RECT</span>
                {"{"}
                <span className="n">20,16,40,18</span>
                {"}"}
                {")"},<span className="s">L"Login"</span>);
                {"\n\n"}  <span className="c">// 2. Attach callback</span>
                {"\n"}  submit-&gt;onClick = [&amp;]() {"{"}
                {"\n"}    <span className="k">if</span> (login-&gt;text == <span className="s">L"admin"</span> &amp;&amp; password-&gt;text == <span className="s">L"1234"</span>)
                {"\n"}      <span className="fn">MessageBoxW</span>(<span className="n">NULL</span>, <span className="s">L"Welcome!"</span>, <span className="s">L"Success"</span>, <span className="n">MB_OK</span>);
                {"\n"}    <span className="k">else</span>
                {"\n"}      <span className="fn">MessageBoxW</span>(<span className="n">NULL</span>, <span className="s">L"Invalid credentials"</span>, <span className="s">L"Error"</span>, <span className="n">MB_ICONERROR</span>);
                {"\n"}  {"};"}
                {"\n\n"}  <span className="c">// 3. Register &amp; draw</span>
                {"\n"}  <span className="t">FocusManager</span>::<span className="fn">registerControl</span>(login);
                {"\n"}  <span className="t">FocusManager</span>::<span className="fn">registerControl</span>(password);
                {"\n"}  <span className="t">FocusManager</span>::<span className="fn">registerControl</span>(remember);
                {"\n"}  <span className="t">FocusManager</span>::<span className="fn">registerControl</span>(submit);
                {"\n"}  <span className="t">FocusManager</span>::<span className="fn">nextFocus</span>();
                {"\n"}  <span className="t">FocusManager</span>::<span className="fn">redrawAll</span>();
                {"\n\n"}  <span className="c">// 4. Enable mouse + keyboard input</span>
                {"\n"}  <span className="t">HANDLE</span> hin = <span className="fn">GetStdHandle</span>(<span className="n">STD_INPUT_HANDLE</span>);
                {"\n"}  <span className="t">DWORD</span> mode; <span className="fn">GetConsoleMode</span>(hin, &amp;mode);
                {"\n"}  <span className="fn">SetConsoleMode</span>(hin, <span className="n">ENABLE_EXTENDED_FLAGS</span> | <span className="n">ENABLE_WINDOW_INPUT</span> | <span className="n">ENABLE_MOUSE_INPUT</span>);
                {"\n\n"}  <span className="c">// 5. Wire events &amp; start</span>
                {"\n"}  <span className="k">auto</span>&amp; em = <span className="t">EventManager</span>::<span className="fn">getInstance</span>();
                {"\n"}  em.<span className="fn">addHandler</span>&lt;<span className="t">KEY_EVENT_RECORD</span>&gt;([](const <span className="t">KEY_EVENT_RECORD</span>&amp; ker) {"{"}
                {"\n"}    <span className="k">if</span> (ker.bKeyDown &amp;&amp; ker.wVirtualKeyCode == <span className="n">VK_TAB</span>)
                {"\n"}      <span className="t">FocusManager</span>::<span className="fn">nextFocus</span>();
                {"\n"}    <span className="k">if</span> (ker.bKeyDown &amp;&amp; ker.wVirtualKeyCode == <span className="n">VK_SPACE</span>)
                {"\n"}      <span className="t">FocusManager</span>::<span className="fn">getFocused</span>()-&gt;<span className="fn">action</span>();
                {"\n"}  {"});"}
                {"\n"}  em.<span className="fn">start</span>();
                {"\n\n"}  <span className="c">// 6. Main loop — exit on ESC</span>
                {"\n"}  <span className="k">while</span> (!<span className="t">InputState</span>::<span className="fn">isKeyPressed</span>(<span className="n">VK_ESCAPE</span>))
                {"\n"}    <span className="t">this_thread</span>::<span className="fn">sleep_for</span>(<span className="fn">milliseconds</span>(<span className="n">100</span>));
                {"\n\n"}  em.<span className="fn">stop</span>(); <span className="fn">SetConsoleMode</span>(hin, mode);
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section id="demos">
        <div className="wrap">
          <p className="sec-label reveal">Demos</p>
          <h2 className="sec-title reveal reveal-d1">Five example applications</h2>
          <p className="sec-desc reveal reveal-d2">
            Each demo is a standalone <code style={{ color: "var(--amber)" }}>.cpp</code> file in{" "}
            <code style={{ color: "var(--amber)" }}>src/</code> — build and run to see the library in
            action.
          </p>

          <div className="demos-grid">
            {/* Demo cards ported from HTML */}
            <div className="demo-card reveal reveal-d1">
              <div className="demo-preview">
                <span className="box">┌────────────────────┐</span>
                {"\n"}
                <span className="box">│</span> <span className="g">[  Click  Me   ]</span>{" "}
                <span className="box">│</span>
                {"\n"}
                <span className="box">└────────────────────┘</span>
                {"\n"}
                <span className="box">┌────────────────────┐</span>
                {"\n"}
                <span className="box">│</span> <span className="w">password_       </span>{" "}
                <span className="box">│</span>
                {"\n"}
                <span className="box">└────────────────────┘</span>
                {"\n"}
                <span className="box">[ ]</span> <span className="w">Remember Me</span>
              </div>
              <div className="demo-info">
                <div className="demo-file">src/demo.cpp</div>
                <div className="demo-name">Basic Controls</div>
                <div className="demo-desc">
                  CFButton, CFTextBox, CheckBox. Tab navigation and Space to activate.
                </div>
              </div>
            </div>

            <div className="demo-card reveal reveal-d2">
              <div className="demo-preview">
                <span className="box">┌──────────────────────┐</span>
                {"\n"}
                <span className="box">│</span> <span className="dim">Login</span>{" "}
                <span className="box">             │</span>
                {"\n"}
                <span className="box">│</span> <span className="w">admin_             </span>
                <span className="box">│</span>
                {"\n"}
                <span className="box">│</span> <span className="dim">Password</span>{" "}
                <span className="box">          │</span>
                {"\n"}
                <span className="box">│</span> <span className="w">••••_              </span>
                <span className="box">│</span>
                {"\n"}
                <span className="box">│</span> <span className="box">[X]</span>{" "}
                <span className="w">Remember Me    </span>
                <span className="box">│</span>
                {"\n"}
                <span className="box">│</span>    <span className="g">[ Login ]</span>{" "}
                <span className="box">      │</span>
                {"\n"}
                <span className="box">└──────────────────────┘</span>
              </div>
              <div className="demo-info">
                <div className="demo-file">src/demo1.cpp</div>
                <div className="demo-name">Login Form</div>
                <div className="demo-desc">
                  Full form with validation. FIButton callback checks credentials.
                </div>
              </div>
            </div>

            <div className="demo-card reveal reveal-d3">
              <div className="demo-preview">
                <span className="box">┌──────────────────┐</span>
                {"\n"}
                <span className="box">│</span> <span className="w">  42 + 7 =        </span>
                <span className="box">│</span>
                {"\n"}
                <span className="box">├────┬────┬────┬───┤</span>
                {"\n"}
                <span className="box">│</span> <span className="w"> 7 </span>
                <span className="box">│</span> <span className="w"> 8 </span>
                <span className="box">│</span> <span className="w"> 9 </span>
                <span className="box">│</span> <span className="b"> / </span>
                <span className="box">│</span>
                {"\n"}
                <span className="box">│</span> <span className="w"> 4 </span>
                <span className="box">│</span> <span className="g"> 5 </span>
                <span className="box">│</span> <span className="w"> 6 </span>
                <span className="box">│</span> <span className="b"> * </span>
                <span className="box">│</span>
                {"\n"}
                <span className="box">│</span> <span className="w"> 1 </span>
                <span className="box">│</span> <span className="w"> 2 </span>
                <span className="box">│</span> <span className="w"> 3 </span>
                <span className="box">│</span> <span className="b"> - </span>
                <span className="box">│</span>
                {"\n"}
                <span className="box">└────┴────┴────┴───┘</span>
              </div>
              <div className="demo-info">
                <div className="demo-file">src/demo2.cpp</div>
                <div className="demo-name">Calculator</div>
                <div className="demo-desc">
                  Arrow key focus movement across a 4×4 button grid. Numpad and keyboard input.
                </div>
              </div>
            </div>

            <div className="demo-card reveal reveal-d4">
              <div className="demo-preview">
                <span className="box">📁</span> <span className="b">C:\Users\dev\projects</span>
                {"\n"}
                <span className="box">├─</span> <span className="b">📁 src</span>
                {"\n"}
                <span className="box">├─</span> <span className="b">📁 include</span>
                {"\n"}
                <span className="box">├─</span> <span className="w">📄 README.md</span>
                {"\n"}
                <span className="box">├─</span> <span className="g">📄 main.cpp   ◀</span>
                {"\n"}
                <span className="box">├─</span> <span className="w">📄 CMakeLists.txt</span>
                {"\n"}
                <span className="dim">  [F9] prev  [F10] next</span>
              </div>
              <div className="demo-info">
                <div className="demo-file">src/demo3.cpp</div>
                <div className="demo-name">File Explorer</div>
                <div className="demo-desc">
                  Custom FileButton control. Click to open files, enter folders, paginate large
                  directories.
                </div>
              </div>
            </div>

            <div className="demo-card reveal reveal-d5">
              <div className="demo-preview">
                <span className="box">┌───────────────────────┐</span>
                {"\n"}
                <span className="box">│</span>  <span className="g">[A] [B] [C] [D] [E]</span>{" "}
                <span className="box">  │</span>
                {"\n"}
                <span className="box">│</span>  <span className="w">[F] [G] [H] [I] [J]</span>{" "}
                <span className="box">  │</span>
                {"\n"}
                <span className="box">│</span>  <span className="w">[K] [L] [M] [N] [O]</span>{" "}
                <span className="box">  │</span>
                {"\n"}
                <span className="box">│</span>  <span className="w">[P] [Q] [R] [S] [T]</span>{" "}
                <span className="box">  │</span>
                {"\n"}
                <span className="box">│</span>  <span className="w">[U] [V] [W] [X] [Y]</span>{" "}
                <span className="box">  │</span>
                {"\n"}
                <span className="box">└───────────────────────┘</span>
              </div>
              <div className="demo-info">
                <div className="demo-file">src/demo4.cpp</div>
                <div className="demo-name">Container Layout</div>
                <div className="demo-desc">
                  Nested vertical + horizontal Containers. Center alignment, custom CharacterElement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="install">
        <div className="wrap">
          <p className="sec-label reveal">Install</p>
          <h2 className="sec-title reveal reveal-d1">Three ways to add WinUI3</h2>
          <p className="sec-desc reveal reveal-d2">
            No package manager required. Copy headers, point your compiler at them, and you're done.
          </p>

          <div className="install-steps reveal reveal-d3">
            <div className="install-step">
              <div className="install-step-head">
                <div className="install-step-num">1</div>
                <div className="install-step-title">Clone the repository</div>
              </div>
              <div className="install-step-body">
                <p>
                  Clone or download the repo and copy the{" "}
                  <code style={{ color: "var(--amber)" }}>Core/</code> and{" "}
                  <code style={{ color: "var(--amber)" }}>BasicElements/</code> folders into your
                  project.
                </p>
                <code className="install-cmd">git clone https://github.com/you/winui3</code>
              </div>
            </div>

            <div className="install-step">
              <div className="install-step-head">
                <div className="install-step-num">2</div>
                <div className="install-step-title">Add include paths</div>
              </div>
              <div className="install-step-body">
                <p>Tell your compiler where to find the headers. CMake example:</p>
                <code className="install-cmd">include_directories(Core BasicElements)</code>
              </div>
            </div>

            <div className="install-step">
              <div className="install-step-head">
                <div className="install-step-num">3</div>
                <div className="install-step-title">CMake build</div>
              </div>
              <div className="install-step-body">
                <p>Configure and build with CMake (Visual Studio or Ninja):</p>
                <code className="install-cmd">cmake .. -G "Visual Studio 17 2022"</code>
              </div>
            </div>

            <div className="install-step">
              <div className="install-step-head">
                <div className="install-step-num">4</div>
                <div className="install-step-title">Or compile directly</div>
              </div>
              <div className="install-step-body">
                <p>
                  Single-file compile with MSVC — no linker flags beyond the default Windows libs.
                </p>
                <code className="install-cmd">cl /EHsc /W4 /std:c++17 main.cpp</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            <span>WinUI3</span> — Console UI Library · MIT License
          </div>
          <div className="footer-links">
            <a href="getting-started.md">Getting Started</a>
            <a href="architecture.md">Architecture</a>
            <a href="basic-elements.md">Controls Ref</a>
            <a href="examples.md">Examples</a>
            <a href="https://github.com" target="_blank" rel="noopener">
              GitHub ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
