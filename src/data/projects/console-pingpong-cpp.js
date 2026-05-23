export const page = {
  // --- Basic Information ---
  id: "console-pingpong-cpp",
  title: "Console Ping Pong",
  subtitle: "Minimalistic Pong in C++ with AI and MVC Approach",
  description:
    "Console-based Ping Pong implementation for Windows in C++ with AI controller support, keyboard controls, dynamic terminal resizing, and a simple controller-based architecture.",
  version: "1.2",
  license: "MIT",

  // --- Visual Appearance ---
  appearance: {
    theme: "dark",
    primaryColor: "#00ff99",
    accentColor: "#ffffff",
    logo: "/assets/logo.png",
    banner: "/assets/banner.png",
  },

  // --- Technology Stack ---
  techStack: [
    {
      name: "C++",
      version: "C++17",
      icon: "cplusplus"
    },
    {
      name: "WinAPI",
      version: "Windows Console API",
      icon: "windows"
    },
    {
      name: "STL",
      version: "GNU/MSVC STL",
      icon: "library"
    },
    {
      name: "Console Rendering",
      version: "UTF-8",
      icon: "terminal"
    }
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
      title: "AI Controller System",
      description:
        "AI bot support through an abstract Controller interface, allowing different behavior strategies to be plugged in.",
      icon: "bot"
    },
    {
      title: "Terminal Rendering",
      description:
        "Game rendering directly in the Windows console using WinAPI and UTF-8 characters.",
      icon: "terminal"
    },
    {
      title: "Dynamic Resize",
      description:
        "Automatic adaptation of the game field size to the current terminal window.",
      icon: "expand"
    }
  ],

  // --- Structured Content ---
  sections: [
    {
      type: "code_snippet",
      title: "AI Controller Example",
      language: "cpp",
      code: `
class AIController : public Controller {
private:
    short* ballY;
    short* paddleY;

public:
    void setBallTarget(short* ballY) {
        this->ballY = ballY;
    }

    short getMoveDirection() override {
        if (*ballY < *paddleY) return -1;
        if (*ballY > *paddleY) return 1;
        return 0;
    }
};
`
    },
    {
      type: "text_block",
      title: "Architecture",
      content:
        "The project uses a modular architecture with separation of input logic, rendering, AI, and game loop. Controllers inherit from the base Controller interface, making it easy to plug in both keyboard controls and artificial intelligence."
    },
    {
      type: "gallery",
      title: "Screenshots",
      images: [
        {
          url: "/assets/gameplay.png",
          caption: "Gameplay in the console"
        },
        {
          url: "/assets/ai-match.png",
          caption: "AI vs AI match"
        }
      ]
    }
  ],

  // --- Roadmap ---
  roadmap: [
    {
      task: "Add scoring system",
      status: "planned"
    },
    {
      task: "Implement angled bounce physics",
      status: "in-progress"
    },
    {
      task: "Add online multiplayer",
      status: "planned"
    }
  ],

  // --- SEO Metadata ---
  metadata: {
    keywords: [
      "cpp",
      "pong",
      "console game",
      "winapi",
      "terminal game",
      "ai",
      "ping pong",
      "c++ project"
    ],
    ogImage: "/assets/og-preview.png",
    author: "Anya"
  }
};