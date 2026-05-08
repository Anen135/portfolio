export const page = {
  // --- Основная информация ---
  id: "wtf-ui",
  title: "WTF UI Library",
  subtitle: "Windows Terminal Friendly User Interface",
  description: "Легковесный header-only фреймворк для создания нативных интерфейсов в терминале Windows, использующий прямой доступ к WinAPI.",
  version: "0.2.4-alpha",
  license: "MIT",
  
  // --- Визуальное представление ---
  appearance: {
    theme: "dark",
    primaryColor: "#0078d4",
    accentColor: "#f5ba1a",
    logo: "/assets/logos/wtf-ui-logo.svg",
    banner: "/assets/banners/hero-preview.png",
  },

  // --- Технологический стек ---
  techStack: [
    { name: "C++", version: "20", icon: "cpp" },
    { name: "WinAPI", version: "Native", icon: "windows" },
    { name: "CMake", version: "3.20+", icon: "cmake" },
    { name: "Windows Terminal", version: "Latest", icon: "terminal" }
  ],

  // --- Ссылки и ресурсы ---
  links: {
    github: "https://github.com/user/wtf-ui",
    documentation: "https://docs.wtf-ui.dev",
    discord: "https://discord.gg/yourlink",
    npm: "", // Пусто, если не применимо
    demo: "https://youtube.com/watch?v=example",
  },

  // --- Ключевые особенности (Features) ---
  features: [
    {
      title: "Native Performance",
      description: "Никаких тяжелых зависимостей. Прямое взаимодействие с консольными дескрипторами Windows.",
      icon: "zap"
    },
    {
      title: "Header-Only",
      description: "Простая интеграция: просто подключите заголовочные файлы в ваш проект.",
      icon: "package"
    },
    {
      title: "Event-Driven",
      description: "Удобная система обработки ввода (мышь, клавиатура, изменение размера) через коллбэки.",
      icon: "mouse-pointer"
    }
  ],

  // --- Контент страницы (Structured Content) ---
  sections: [
    {
      type: "code_snippet",
      title: "Быстрый старт",
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
      title: "Архитектура",
      content: "WTF UI построена на принципах изоляции функциональных модулей и минимального оверхеда. Библиотека использует современные стандарты C++ для обеспечения безопасности типов при работе с низкоуровневыми системными вызовами."
    },
    {
      type: "gallery",
      title: "Скриншоты",
      images: [
        { url: "/img/demo1.png", caption: "Пример кастомных кнопок" },
        { url: "/img/demo2.png", caption: "Работа с таблицами и слоями" }
      ]
    }
  ],

  // --- Дорожная карта (Roadmap) ---
  roadmap: [
    { task: "Поддержка Unicode/UTF-8", status: "completed" },
    { task: "Система анимаций", status: "in-progress" },
    { task: "Кроссплатформенность (Linux/VT100)", status: "planned" }
  ],

  // --- SEO Метаданные ---
  metadata: {
    keywords: ["C++", "Terminal UI", "WinAPI", "TUI", "Windows Terminal", "Header-only"],
    ogImage: "https://wtf-ui.dev/og-image.png",
    author: "YourName / TeamName"
  }
};