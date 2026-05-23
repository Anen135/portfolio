export const page = {
  // --- Basic Information ---
  id: "terminal-snake-ai",
  title: "Terminal Snake AI",
  subtitle: "Cross-platform Snake with ANSI rendering and built-in AI",
  description:
    "Minimalistic yet powerful implementation of the classic Snake game in C++ with Windows/Linux support, ANSI rendering, edge teleportation, and a simple AI autopilot.",

  version: "1.0.0",
  license: "MIT",

  // --- Visual Appearance ---
  appearance: {
    theme: "retro-terminal",
    primaryColor: "#32CD32",
    accentColor: "#00FFFF",
    logo: "/assets/logo.png",
    banner: "/assets/banner.png",
  },

  // --- Technology Stack ---
  techStack: [
    {
      name: "C++",
      version: "C++17",
      icon: "cplusplus",
    },
    {
      name: "WinAPI",
      version: "Windows Console API",
      icon: "windows",
    },
    {
      name: "POSIX",
      version: "termios / ANSI",
      icon: "linux",
    },
    {
      name: "STL",
      version: "Modern STL",
      icon: "code",
    },
  ],

  // --- Links and Resources ---
  links: {
    github: "",
    documentation: "",
    discord: "",
    npm: "",
    demo: "",
  },

  // --- Key Features ---
  features: [
    {
      title: "Cross-platform Engine",
      description:
        "Windows and Linux support via WinAPI and POSIX termios without third-party libraries.",
      icon: "monitor",
    },
    {
      title: "AI Mode",
      description:
        "Built-in SimpleAI automatically analyzes safe directions and guides the snake toward the fruit.",
      icon: "cpu",
    },
    {
      title: "ANSI Rendering",
      description:
        "Colorful terminal interface with cursor control and dynamic rendering.",
      icon: "terminal",
    },
  ],

  // --- Structured Content ---
  sections: [
    {
      type: "code_snippet",
      title: "Main Game Loop",
      language: "cpp",
      code: `
int main() {
    initterminal();
    Setup();

    while (true) {
        Logic();
        sleep_ms(100);
    }

    return 0;
}
      `,
    },

    {
      type: "text_block",
      title: "About the Architecture",
      content:
        "The project is split into platform-dependent modules for Windows and Linux. Direct terminal control is used via ANSI escape sequences and WinAPI Console API. The game logic is completely platform-independent.",
    },

    {
      type: "gallery",
      title: "Screenshots",
      images: [
        {
          url: "/assets/gameplay-linux.png",
          caption: "Linux terminal gameplay",
        },
        {
          url: "/assets/gameplay-win.png",
          caption: "Windows console gameplay",
        },
      ],
    },
  ],

  // --- Roadmap ---
  roadmap: [
    {
      task: "Add BFS/A* pathfinding AI",
      status: "planned",
    },
    {
      task: "Implement multiplayer via sockets",
      status: "in-progress",
    },
    {
      task: "Add level system and obstacles",
      status: "planned",
    },
  ],

  // --- SEO Metadata ---
  metadata: {
    keywords: [
      "snake",
      "cpp",
      "terminal game",
      "ansi",
      "winapi",
      "linux",
      "console game",
      "ai snake",
      "retro game",
    ],

    ogImage: "/assets/og-image.png",
    author: "Anen135",
  },
};