export const page = {
  // --- Basic Information ---
  id: "wtf-ui",
  title: "WTF UI Library",
  subtitle: "Windows Terminal Friendly User Interface",
  description: "A lightweight header-only framework for creating native interfaces in the Windows terminal, using direct WinAPI access.",
  version: "0.2.4-alpha",
  license: "MIT",
  
  // --- Visual Appearance ---
  appearance: {
    theme: "dark",
    primaryColor: "#0078d4",
    accentColor: "#f5ba1a",
    logo: "/assets/logos/wtf-ui-logo.svg",
    banner: "/assets/banners/hero-preview.png",
  },

  // --- Technology Stack ---
  techStack: [
    { name: "C++", version: "20", icon: "cpp" },
    { name: "WinAPI", version: "Native", icon: "windows" },
    { name: "CMake", version: "3.20+", icon: "cmake" },
    { name: "Windows Terminal", version: "Latest", icon: "terminal" }
  ],

  // --- Links and Resources ---
  links: {
    github: "https://github.com/Anen135/winui3/",
    documentation: "",
    discord: "",
    npm: "", 
    demo: "",
  },

  // --- Key Features ---
  features: [
    {
      title: "Native Performance",
      description: "No heavy dependencies. Direct interaction with Windows console handles.",
      icon: "zap"
    },
    {
      title: "Header-Only",
      description: "Simple integration: just include the header files in your project.",
      icon: "package"
    },
    {
      title: "Event-Driven",
      description: "Convenient input handling system (mouse, keyboard, resize) via callbacks.",
      icon: "mouse-pointer"
    }
  ],

  // --- Structured Content ---
  sections: [
    {
      type: "code_snippet",
      title: "Quick Start",
      language: "cpp",
      code: `#include "wtf_ui.hpp"

int main() {
  WTF::Application app;
  app.add_component<WTF::Button>("Click Me", []() {
      // Handle click
  });
  return app.run();
}`
    },
    {
      type: "text_block",
      title: "Architecture",
      content: "WTF UI is built on the principles of functional module isolation and minimal overhead. The library uses modern C++ standards to ensure type safety when working with low-level system calls."
    },
    {
      type: "gallery",
      title: "Screenshots",
      images: [
        { url: "/img/demo1.png", caption: "Custom buttons example" },
        { url: "/img/demo2.png", caption: "Working with tables and layers" }
      ]
    }
  ],

  // --- Roadmap ---
  roadmap: [
    { task: "Unicode/UTF-8 support", status: "completed" },
    { task: "Animation system", status: "in-progress" },
    { task: "Cross-platform (Linux/VT100)", status: "planned" }
  ],

  // --- SEO Metadata ---
  metadata: {
    keywords: ["C++", "Terminal UI", "WinAPI", "TUI", "Windows Terminal", "Header-only"],
    ogImage: "https://wtf-ui.dev/og-image.png",
    author: "Anen135"
  }
};