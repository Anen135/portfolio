export const projectRegistry = {
  "project-1": () => import("@/data/projects/project-1.js"),
  "pinterest-video-downloader": () => import("@/data/projects/pinterest-video-downloader.js"),
  "link-navigation": () => import("@/data/projects/link-navigation.js"),
  "console-pingpong-cpp": () => import("@/data/projects/console-pingpong-cpp.js"),
  "terminal-snake-ai": () => import("@/data/projects/terminal-snake-ai.js"),
};