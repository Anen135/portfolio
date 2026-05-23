export const page = {
  // --- Основная информация ---
  id: "link-navigation",
  title: "Link Navigation",
  subtitle: "Vim-style keyboard navigation for clickable elements",
  description:
    "Расширение Chrome для быстрого управления ссылками и кнопками с помощью клавиатурных подсказок в стиле Vim.",
  version: "1.0",
  license: "Unspecified",

  // --- Визуальное представление ---
  appearance: {
    theme: "vim-dark",
    primaryColor: "#111827",
    accentColor: "#facc15",
    logo: "/icons/icon128.png",
    banner: "/assets/banner.png",
  },

  // --- Технологический стек ---
  techStack: [
    {
      name: "JavaScript",
      version: "ES2022",
      icon: "logos:javascript",
    },
    {
      name: "Chrome Extensions API",
      version: "Manifest V3",
      icon: "logos:chrome",
    },
    {
      name: "HTML5",
      version: "5",
      icon: "logos:html-5",
    },
    {
      name: "CSS3",
      version: "3",
      icon: "logos:css-3",
    },
  ],

  // --- Ссылки и ресурсы ---
  links: {
    github: "https://github.com/Anen135/linkNavigation",
    documentation: "",
    discord: "",
    npm: "",
    demo: "",
  },

  // --- Ключевые особенности (Features) ---
  features: [
    {
      title: "Vim-style hints",
      description:
        "Показывает короткие метки над ссылками, кнопками и элементами с role=\"button\".",
      icon: "mdi:keyboard",
    },
    {
      title: "Управление с клавиатуры",
      description:
        "Позволяет активировать элементы без мыши, вводя комбинации клавиш.",
      icon: "mdi:cursor-default-click",
    },
    {
      title: "Вкл/выкл и подсказки",
      description:
        "Поддерживает отдельные команды для переключения расширения и показа/скрытия подсказок.",
      icon: "mdi:toggle-switch",
    },
  ],

  // --- Контент страницы (Structured Content) ---
  sections: [
    {
      type: "code_snippet",
      title: "Пример логики переключения",
      language: "javascript",
      code: `
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-extension") {
    enabled = !enabled;
    chrome.storage.local.set({ enabled });
    chrome.action.setBadgeText({ text: enabled ? "ON" : "OFF" });
  } else if (command === "toggle-hints") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { command: "toggle-hints" });
      }
    });
  }
});
      `,
    },
    {
      type: "text_block",
      title: "О проекте",
      content:
        "Link Navigation — это Chrome-расширение, которое добавляет Vim-подобную навигацию по веб-страницам. Оно находит видимые кликабельные элементы, показывает над ними подсказки и позволяет активировать нужный элемент с клавиатуры.",
    },
    {
      type: "gallery",
      title: "Иконки проекта",
      images: [
        {
          url: "/icons/icon16.png",
          caption: "Иконка 16×16",
        },
        {
          url: "/icons/icon48.png",
          caption: "Иконка 48×48",
        },
      ],
    },
  ],

  // --- Дорожная карта (Roadmap) ---
  roadmap: [
    {
      task: "Добавить настройку набора клавиш для hints",
      status: "planned",
    },
    {
      task: "Сделать поддержку более сложных комбинаций и фильтрации элементов",
      status: "planned",
    },
    {
      task: "Добавить страницу настроек расширения",
      status: "planned",
    },
  ],

  // --- SEO Метаданные ---
  metadata: {
    keywords: [
      "chrome extension",
      "vim navigation",
      "keyboard shortcuts",
      "link hints",
      "manifest v3",
      "javascript",
    ],
    ogImage: "/assets/og-image.png",
    author: "Anen",
  },
};