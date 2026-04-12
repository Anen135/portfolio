/**
 * =============================================
 * PORTFOLIO CONFIGURATION FILE
 * =============================================
 */

export const config = {
  // ── Personal Info ──────────────────────────
  name: "Anen Barno",
  title: "Systems Engineer | Unity & C# Developer | Fullstack Expert",
  tagline:
    "Senior-level C++ background transitioning into high-performance Unity systems and modern Fullstack architectures. Specialist in engine design, automation, and pixel-perfect UI.",
  avatar: null, 

  // ── Contact ────────────────────────────────
  email: "whoyou1994j4920@gmail.com",
  github: "https://github.com/Anen135",
  linkedin: "https://linkedin.com/in/yourusername",
  telegram: "https://t.me/deadmaidenILS",
  cvUrl: "/cv.pdf",

  // ── About Me ───────────────────────────────
  about: {
    bio: "I am a systems-oriented developer with a 7-year foundation in C++. My transition from low-level engineering (ASM, Reverse Engineering) to modern frameworks like Unity, Next.js, and Vue has shaped my unique approach: combining raw performance with elegant, modern interfaces. Whether I'm architecting a decoupled Unity system or building a sleek UI with Tailwind and Shadcn, I focus on scalability, performance, and my 'Code Manifesto' of architectural purity.",
    highlights: [
      "7+ years of C-family programming (Expert C++, C#, JS/TS)",
      "High-performance Unity development (DI-focused) & Multi-engine expertise",
      "Modern Web Stack: Next.js, Vue, Vite, and Tailwind CSS",
      "UI/UX Implementation: Shadcn, Bootstrap, and pixel-perfect design",
      "Mobile development expert using Expo and .NET MAUI",
    ],
  },

  // ── Skills ─────────────────────────────────
  skills: [
    { name: "C++ (Senior)", level: 98, category: "Language" },
    { name: "C# / .NET", level: 90, category: "Language" },
    { name: "Unity 3D", level: 90, category: "Engine" },
    { name: "Ren'Py", level: 85, category: "Engine" },
    { name: "Game Maker Studio", level: 80, category: "Engine" },
    { name: "JavaScript / TypeScript", level: 92, category: "Language" },
    { name: "Next.js / Vue", level: 88, category: "Frontend" },
    { name: "React JS", level: 90, category: "Frontend" },
    { name: "Electron", level: 80, category: "Frontend" },
    { name: "Tailwind / Shadcn", level: 95, category: "UI/UX" },
    { name: "Bootstrap", level: 85, category: "UI/UX" },
    { name: "Vite", level: 90, category: "Tooling" },
    { name: "Expo / React Native", level: 85, category: "Mobile" },
    { name: ".NET MAUI", level: 85, category: "Mobile" },
    { name: "Python", level: 90, category: "Language" },
    { name: "System Architecture (DI)", level: 95, category: "Architecture" },
    { name: "Git / CI-CD / LFS", level: 90, category: "DevOps" },
  ],

  // ── Projects ───────────────────────────────
  projects: [
    {
      title: "Lucy Framework",
      description:
        "A modular architectural core for Unity. Enforces strict decoupling through custom State Machines and DI-based services. Focuses on logic/engine separation.",
      tags: ["C#", "Unity", "Architecture", "DI"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "GovTech Interface Bridge",
      description:
        "Engineered a critical bridge between legacy kernels and modern web interfaces. Solved complex undocumented API challenges in high-compliance environments.",
      tags: ["Angular", "Lua", "Reverse Engineering", "Enterprise"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "Landing Page & UI Kit",
      description:
        "A high-performance web projects demonstrating modern UI/UX principles using Vite, Tailwind, and advanced component structures.",
      tags: ["Vite", "Tailwind", "Shadcn", "UI/UX"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "Automation & LLM Tools",
      description:
        "Python-based suite for automating interactive web-tasks. Features intelligent parsing and automated data flow management.",
      tags: ["Python", "LLM", "Automation", "JS"],
      github: null,
      demo: null,
      featured: false,
    },
  ],

  // ── Experience / Education ─────────────────
  timeline: [
    {
      type: "work",
      year: "2025 – Present",
      title: "Unity Systems & Fullstack Developer",
      org: "Independent Projects",
      description:
        "Refactoring codebases for scalability. Building modern web tools with Next.js, Vite, and Shadcn, ensuring high performance across all platforms.",
    },
    {
      type: "work",
      year: "2024 – 2025",
      title: "Software Engineer",
      org: "GovTech IT Corporation",
      description:
        "Integrated modern frontends with legacy kernels. Managed strict bureaucratic and technical constraints while maintaining system integrity.",
    },
    {
      type: "work",
      year: "2022 – 2024",
      title: "Fullstack & Automation Developer",
      org: "Freelance",
      description:
        "Built business-focused mobile apps with Expo and automated complex workflows using Python. Focus on bridging the gap between back-end logic and front-end usability.",
    },
    {
      type: "edu",
      year: "2019 – 2026",
      title: "Advanced Systems Engineering",
      org: "Self-Directed Research",
      description:
        "7-year deep dive into C-family languages, security, and networking. Established a career-spanning focus on architectural clean-code (Code Manifesto).",
    },
  ],
};