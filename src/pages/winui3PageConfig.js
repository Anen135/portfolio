export const winui3PageConfig = {
  nav: {
    logoText: "WinUI3",
    logoHref: "#",
    links: [
      { href: "#overview", label: "Overview" },
      { href: "#controls", label: "Controls" },
      { href: "#quickstart", label: "Quick Start" },
      { href: "#demos", label: "Demos" },
      { href: "#install", label: "Install" },
    ],
  },

  hero: {
    eyebrow: "C++ / Windows Console",
    titleLines: ["Console UI,", "done ", { em: "properly" }, "."],
    sub: [
      "WinUI3 is a lightweight, header-only C++ library for building interactive terminal",
      "interfaces on Windows — with focus management, event-driven input, and composable",
      "controls. Zero dependencies beyond the Windows SDK.",
    ].join(" "),
    actions: [
      { type: "primary", href: "#quickstart", label: "Get Started" },
      { type: "ghost", href: "https://github.com", label: "View on GitHub", external: true },
      { type: "ghost", href: "architecture.md", label: "Docs" },
    ],
    badges: ["C++17", "Windows 10 / 11", "Header-only", "MIT License", "No dependencies", "CMake ready"],
  },

  overview: {
    label: "Overview",
    title: "Everything a console app needs",
    desc:
      "A complete toolkit for building rich terminal UIs — from a single interactive button to full multi-screen applications with tab navigation and modal dialogs.",
    stats: [
      { val: "9", lbl: "UI Controls" },
      { val: "5", lbl: "Core Classes" },
      { val: "5", lbl: "Demo Apps" },
      { val: "0", lbl: "Dependencies" },
    ],
    features: [
      {
        icon: "keyboard",
        color: "white",
        title: "Focus Management",
        desc: "Tab / Shift+Tab navigation between controls out of the box. Register once, navigate automatically.",
      },
      {
        icon: "mouse",
        color: "cyan",
        title: "Mouse Support",
        desc: "Hover detection, click handling, and visual state changes driven by the Windows console mouse API.",
      },
      {
        icon: "radio",
        color: "#f0f",
        title: "Event System",
        desc: "Type-safe handler registration for keyboard, mouse, window resize, and focus events via a background thread.",
      },
      {
        icon: "puzzle",
        color: "lime",
        title: "Composable Controls",
        desc: "Container lays out children automatically — vertical stacks, horizontal rows, padding, spacing, alignment.",
      },
      {
        icon: "palette",
        color: "orange",
        title: "Visual States",
        desc: "Each control renders distinct default, hovered, and focused appearances using Windows console color attributes.",
      },
      {
        icon: "package",
        color: "skyblue",
        title: "Header-only",
        desc:
          'Drop the headers into your project and include them — no precompiled libraries, no linker flags beyond <code style="color:var(--amber)">kernel32</code>.',
        isHtml: true,
      },
    ],
  },

  architecture: {
    label: "Architecture",
    title: "Clean separation of concerns",
    desc:
      "Four core classes handle all infrastructure. Controls inherit from the base and implement only their drawing and interaction logic.",
    layers: [
      {
        label: "Core",
        nodes: [
          {
            name: "Control",
            file: "Core/Control.h",
            desc: "Abstract base. Holds rect, focus, hover state. Defines the draw / onMouse / onKey interface.",
          },
          {
            name: "Render",
            file: "Core/Render.h",
            desc: "Static drawing utilities — box outlines, fill, centered and left-aligned text, screen clear.",
          },
          {
            name: "FocusManager",
            file: "Core/FocusManager.h",
            desc: "Tracks registered controls, routes Tab/Shift+Tab, exposes getFocused() and redrawAll().",
          },
          {
            name: "EventManager",
            file: "Core/EventManager.h",
            desc: "Singleton. Processes console input on a background thread, dispatches typed handlers.",
          },
          {
            name: "InputState",
            file: "Core/InputState.h",
            desc: "Polls virtual key state synchronously. Used for main-loop exit conditions.",
          },
        ],
      },
      {
        arrow: "↓",
      },
      {
        label: "BasicElements — inherit Control + Render",
        nodes: [
          {
            name: "Button",
            file: "BasicElements/Button.h",
            desc: "Base button. Subclassed by CFButton (virtual action) and FIButton (lambda callback).",
          },
          {
            name: "TextBox",
            file: "BasicElements/TextBox.h",
            desc: "Text input. Subscribes keyboard on focus, unsubscribes on blur. CFTextBox / FITextBox variants.",
          },
          {
            name: "CheckBox",
            file: "BasicElements/CheckBox.h",
            desc:
              'Toggle control. <code style="color:var(--amber)">checked</code> bool flips on Space or click. Renders [ ] / [X].',
            isHtml: true,
          },
          {
            name: "Label",
            file: "BasicElements/Label.h",
            desc: "Static display. Type flags control border (bit 0) and center alignment (bit 1).",
          },
          {
            name: "Container",
            file: "BasicElements/Container.h",
            desc: "Layout wrapper. Auto-arranges children vertically or horizontally with padding and alignment.",
          },
        ],
      },
    ],
    eventFlowLabel: "Event Flow",
    eventFlow: [
      {
        num: "01",
        name: "Console Input",
        desc: "Windows INPUT_RECORD stream from ReadConsoleInput",
      },
      {
        num: "02",
        name: "EventManager",
        desc: "Background thread dispatches typed events to all registered handlers",
      },
      {
        num: "03",
        name: "Handlers",
        desc: "Your callbacks — e.g. Tab → FocusManager::nextFocus()",
      },
      {
        num: "04",
        name: "FocusManager",
        desc: "Updates focus state, calls setFocus(true/false) on controls",
      },
      {
        num: "05",
        name: "Control::draw()",
        desc: "Control redraws itself with updated visual state",
      },
    ],
  },

  controls: {
    label: "Controls",
    title: "Nine ready-to-use elements",
    descHtml:
      'Each control comes in a Classic (CF) variant with virtual method override, and a Functional (FI) variant with <code style="color:var(--amber)">std::function</code> callback.',
    cards: [
      {
        name: "FIButton",
        type: "interactive",
        desc: "Click button with lambda callback. Visual states for default, hover (blue), and focused (green).",
        snippetHtml:
          '<span class="k">auto</span> btn = <span class="fn">make_shared</span>&lt;<span class="t">FIButton</span>&gt;(\n  rect, <span class="s">L"Login"</span>, [<span class="k">this</span>]() { validate(); });',
      },
      {
        name: "FITextBox",
        type: "input",
        desc: "Text input with Enter callback. Subscribes keyboard events automatically on focus gain.",
        snippetHtml:
          '<span class="k">auto</span> tb = <span class="fn">make_shared</span>&lt;<span class="t">FITextBox</span>&gt;(\n  rect, <span class="s">L"Username"</span>, [](wstring v) {});',
      },
      {
        name: "CheckBox",
        type: "toggle",
        desc:
          'Toggle control. Reads <code style="font-size:.72rem">checked</code> bool after form submit. Renders [ ] or [X] with label.',
        descIsHtml: true,
        snippetHtml:
          '<span class="k">if</span> (rememberMe-&gt;checked) {\n  <span class="fn">savePrefs</span>(login-&gt;text);\n}',
      },
      {
        name: "Label",
        type: "display",
        desc:
          'Static text display. Type flag bits control border (0x01) and center alignment (0x02). Supports live text updates.',
        snippetHtml:
          '<span class="k">auto</span> lbl = <span class="fn">make_shared</span>&lt;<span class="t">Label</span>&gt;(rect, <span class="s">L"Title"</span>, <span class="n">3</span>);\nlbl-&gt;text = <span class="s">L"Updated"</span>; lbl-&gt;<span class="fn">updateText</span>();',
      },
      {
        name: "Container",
        type: "layout",
        desc:
          "Auto-arranges child controls vertically or horizontally. Supports padding, spacing, and Start / Center / End alignment.",
        snippetHtml:
          'root.<span class="fn">addControl</span>(row);\nroot.<span class="fn">rearrangeControls</span>();\nroot.<span class="fn">draw</span>();',
      },
      {
        name: "CFButton / CFTextBox",
        type: "classic",
        desc:
          'Virtual method variants. Override <code style="font-size:.72rem">action()</code> or <code style="font-size:.72rem">onEnter()</code> in a subclass for object-oriented design patterns.',
        descIsHtml: true,
        snippetHtml:
          '<span class="k">void</span> <span class="t">CFButton</span>::<span class="fn">action</span>() {\n  <span class="fn">MessageBoxW</span>(<span class="n">NULL</span>, <span class="s">L"Clicked!"</span>, ...);\n}',
      },
    ],
  },

  quickstart: {
    label: "Quick Start",
    title: "Up and running in minutes",
    desc:
      "A complete login form — two text inputs, a checkbox, and a submit button with validation — in under 50 lines.",
    filename: "demo1.cpp — Login Form",
    codeHtml: [
      '<span class="c">// Include headers — add Core/ and BasicElements/ to include path</span>',
      '<span class="k">#include</span> <span class="s">"EventManager.h"</span>',
      '<span class="k">#include</span> <span class="s">"FocusManager.h"</span>',
      '<span class="k">#include</span> <span class="s">"../BasicElements/FiButton.h"</span>',
      '<span class="k">#include</span> <span class="s">"../BasicElements/TextBox.h"</span>',
      '<span class="k">#include</span> <span class="s">"../BasicElements/CheckBox.h"</span>',
      "",
      '<span class="k">int</span> <span class="fn">main</span>() {',
      '  <span class="c">// 1. Create controls with SMALL_RECT{left, top, right, bottom}</span>',
      '  <span class="k">auto</span> login    = <span class="fn">make_shared</span>&lt;<span class="t">TextBox</span>&gt;(<span class="t">SMALL_RECT</span>{<span class="n">10,4,50,6</span>},  <span class="s">L"Login"</span>);',
      '  <span class="k">auto</span> password = <span class="fn">make_shared</span>&lt;<span class="t">TextBox</span>&gt;(<span class="t">SMALL_RECT</span>{<span class="n">10,8,50,10</span>}, <span class="s">L"Password"</span>);',
      '  <span class="k">auto</span> remember = <span class="fn">make_shared</span>&lt;<span class="t">CheckBox</span>&gt;(<span class="t">SMALL_RECT</span>{<span class="n">10,12,50,14</span>},<span class="s">L"Remember Me"</span>);',
      '  <span class="k">auto</span> submit   = <span class="fn">make_shared</span>&lt;<span class="t">FIButton</span>&gt;(<span class="t">SMALL_RECT</span>{<span class="n">20,16,40,18</span>},<span class="s">L"Login"</span>);',
      "",
      "  <span class=\"c\">// 2. Attach callback</span>",
      "  submit-&gt;onClick = [&amp;]() {",
      '    <span class="k">if</span> (login-&gt;text == <span class="s">L"admin"</span> &amp;&amp; password-&gt;text == <span class="s">L"1234"</span>)',
      '      <span class="fn">MessageBoxW</span>(<span class="n">NULL</span>, <span class="s">L"Welcome!"</span>, <span class="s">L"Success"</span>, <span class="n">MB_OK</span>);',
      "    <span class=\"k\">else</span>",
      '      <span class="fn">MessageBoxW</span>(<span class="n">NULL</span>, <span class="s">L"Invalid credentials"</span>, <span class="s">L"Error"</span>, <span class="n">MB_ICONERROR</span>);',
      "  };",
      "",
      "  <span class=\"c\">// 3. Register &amp; draw</span>",
      '  <span class="t">FocusManager</span>::<span class="fn">registerControl</span>(login);',
      '  <span class="t">FocusManager</span>::<span class="fn">registerControl</span>(password);',
      '  <span class="t">FocusManager</span>::<span class="fn">registerControl</span>(remember);',
      '  <span class="t">FocusManager</span>::<span class="fn">registerControl</span>(submit);',
      '  <span class="t">FocusManager</span>::<span class="fn">nextFocus</span>();',
      '  <span class="t">FocusManager</span>::<span class="fn">redrawAll</span>();',
      "",
      "  <span class=\"c\">// 4. Enable mouse + keyboard input</span>",
      '  <span class="t">HANDLE</span> hin = <span class="fn">GetStdHandle</span>(<span class="n">STD_INPUT_HANDLE</span>);',
      '  <span class="t">DWORD</span> mode; <span class="fn">GetConsoleMode</span>(hin, &amp;mode);',
      '  <span class="fn">SetConsoleMode</span>(hin, <span class="n">ENABLE_EXTENDED_FLAGS</span> | <span class="n">ENABLE_WINDOW_INPUT</span> | <span class="n">ENABLE_MOUSE_INPUT</span>);',
      "",
      "  <span class=\"c\">// 5. Wire events &amp; start</span>",
      '  <span class="k">auto</span>&amp; em = <span class="t">EventManager</span>::<span class="fn">getInstance</span>();',
      '  em.<span class="fn">addHandler</span>&lt;<span class="t">KEY_EVENT_RECORD</span>&gt;([](const <span class="t">KEY_EVENT_RECORD</span>&amp; ker) {',
      '    <span class="k">if</span> (ker.bKeyDown &amp;&amp; ker.wVirtualKeyCode == <span class="n">VK_TAB</span>)',
      '      <span class="t">FocusManager</span>::<span class="fn">nextFocus</span>();',
      '    <span class="k">if</span> (ker.bKeyDown &amp;&amp; ker.wVirtualKeyCode == <span class="n">VK_SPACE</span>)',
      '      <span class="t">FocusManager</span>::<span class="fn">getFocused</span>()-&gt;<span class="fn">action</span>();',
      "  });",
      '  em.<span class="fn">start</span>();',
      "",
      "  <span class=\"c\">// 6. Main loop — exit on ESC</span>",
      '  <span class="k">while</span> (!<span class="t">InputState</span>::<span class="fn">isKeyPressed</span>(<span class="n">VK_ESCAPE</span>))',
      '    <span class="t">this_thread</span>::<span class="fn">sleep_for</span>(<span class="fn">milliseconds</span>(<span class="n">100</span>));',
      "",
      '  em.<span class="fn">stop</span>(); <span class="fn">SetConsoleMode</span>(hin, mode);',
      "}",
    ].join("\n"),
  },

  demos: {
    label: "Demos",
    title: "Five example applications",
    descHtml:
      'Each demo is a standalone <code style="color:var(--amber)">.cpp</code> file in <code style="color:var(--amber)">src/</code> — build and run to see the library in action.',
    cards: [
      {
        file: "src/demo.cpp",
        name: "Basic Controls",
        desc: "CFButton, CFTextBox, CheckBox. Tab navigation and Space to activate.",
        previewHtml: [
          '<span class="box">┌────────────────────┐</span>',
          '<span class="box">│</span> <span class="g">  [ Click Me ]  </span> <span class="box">│</span>',
          '<span class="box">└────────────────────┘</span>',
          '<span class="box">┌────────────────────┐</span>',
          '<span class="box">│</span> <span class="w">password_       </span> <span class="box">│</span>',
          '<span class="box">└────────────────────┘</span>',
          '<span class="box">[ ]</span> <span class="w">Remember Me</span>',
        ].join("\n"),
      },
      {
        file: "src/demo1.cpp",
        name: "Login Form",
        desc: "Full form with validation. FIButton callback checks credentials.",
        previewHtml: [
          '<span class="box">┌──────────────────────┐</span>',
          '<span class="box">│</span> <span class="dim">Login</span>              <span class="box">│</span>',
          '<span class="box">│</span> <span class="w">admin_             </span><span class="box">│</span>',
          '<span class="box">│</span> <span class="dim">Password</span>           <span class="box">│</span>',
          '<span class="box">│</span> <span class="w">••••_              </span><span class="box">│</span>',
          '<span class="box">│</span> <span class="box">[X]</span> <span class="w">Remember Me    </span><span class="box">│</span>',
          '<span class="box">│</span>    <span class="g">[ Login ]</span>       <span class="box">│</span>',
          '<span class="box">└──────────────────────┘</span>',
        ].join("\n"),
      },
      {
        file: "src/demo2.cpp",
        name: "Calculator",
        desc: "Arrow key focus movement across a 4×4 button grid. Numpad and keyboard input.",
        previewHtml: [
          '<span class="box">┌──────────────────┐</span>',
          '<span class="box">│</span> <span class="w">  42 + 7 =        </span><span class="box">│</span>',
          '<span class="box">├────┬────┬────┬───┤</span>',
          '<span class="box">│</span> <span class="w"> 7 </span><span class="box">│</span> <span class="w"> 8 </span><span class="box">│</span> <span class="w"> 9 </span><span class="box">│</span> <span class="b"> / </span><span class="box">│</span>',
          '<span class="box">│</span> <span class="w"> 4 </span><span class="box">│</span> <span class="g"> 5 </span><span class="box">│</span> <span class="w"> 6 </span><span class="box">│</span> <span class="b"> * </span><span class="box">│</span>',
          '<span class="box">│</span> <span class="w"> 1 </span><span class="box">│</span> <span class="w"> 2 </span><span class="box">│</span> <span class="w"> 3 </span><span class="box">│</span> <span class="b"> - </span><span class="box">│</span>',
          '<span class="box">└────┴────┴────┴───┘</span>',
        ].join("\n"),
      },
      {
        file: "src/demo3.cpp",
        name: "File Explorer",
        desc: "Custom FileButton control. Click to open files, enter folders, paginate large directories.",
        previewHtml: [
          '<span class="box">[dir]</span> <span class="b">C:\\Users\\dev\\projects</span>',
          '<span class="box">├─</span> <span class="b">[dir] src</span>',
          '<span class="box">├─</span> <span class="b">[dir] include</span>',
          '<span class="box">├─</span> <span class="w">[file] README.md</span>',
          '<span class="box">├─</span> <span class="g">[file] main.cpp   ◀</span>',
          '<span class="box">├─</span> <span class="w">[file] CMakeLists.txt</span>',
          '<span class="dim">  [F9] prev  [F10] next</span>',
        ].join("\n"),
      },
      {
        file: "src/demo4.cpp",
        name: "Container Layout",
        desc: "Nested vertical + horizontal Containers. Center alignment, custom CharacterElement.",
        previewHtml: [
          '<span class="box">┌───────────────────────┐</span>',
          '<span class="box">│</span>  <span class="g">[A] [B] [C] [D] [E]</span>  <span class="box">│</span>',
          '<span class="box">│</span>  <span class="w">[F] [G] [H] [I] [J]</span>  <span class="box">│</span>',
          '<span class="box">│</span>  <span class="w">[K] [L] [M] [N] [O]</span>  <span class="box">│</span>',
          '<span class="box">│</span>  <span class="w">[P] [Q] [R] [S] [T]</span>  <span class="box">│</span>',
          '<span class="box">│</span>  <span class="w">[U] [V] [W] [X] [Y]</span>  <span class="box">│</span>',
          '<span class="box">└───────────────────────┘</span>',
        ].join("\n"),
      },
    ],
  },

  install: {
    label: "Install",
    title: "Three ways to add WinUI3",
    desc: "No package manager required. Copy headers, point your compiler at them, and you're done.",
    steps: [
      {
        num: "1",
        title: "Clone the repository",
        bodyHtml:
          'Clone or download the repo and copy the <code style="color:var(--amber)">Core/</code> and <code style="color:var(--amber)">BasicElements/</code> folders into your project.',
        cmd: "git clone https://github.com/you/winui3",
      },
      {
        num: "2",
        title: "Add include paths",
        body: "Tell your compiler where to find the headers. CMake example:",
        cmd: "include_directories(Core BasicElements)",
      },
      {
        num: "3",
        title: "CMake build",
        body: "Configure and build with CMake (Visual Studio or Ninja):",
        cmd: 'cmake .. -G "Visual Studio 17 2022"',
      },
      {
        num: "4",
        title: "Or compile directly",
        body: "Single-file compile with MSVC — no linker flags beyond the default Windows libs.",
        cmd: "cl /EHsc /W4 /std:c++17 main.cpp",
      },
    ],
  },

  footer: {
    leftHtml: '<span>WinUI3</span> — Console UI Library · MIT License',
    links: [
      { href: "getting-started.md", label: "Getting Started" },
      { href: "architecture.md", label: "Architecture" },
      { href: "basic-elements.md", label: "Controls Ref" },
      { href: "examples.md", label: "Examples" },
      { href: "https://github.com", label: "GitHub ↗", external: true },
    ],
  },
};

