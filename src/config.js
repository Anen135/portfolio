/**
 * =============================================
 * PORTFOLIO CONFIGURATION FILE
 * Edit this file to personalize your portfolio
 * =============================================
 */

export const config = {
  // ── Personal Info ──────────────────────────
  name: "Anen Barno",
  title: "Unity Developer / System Engineer",
  tagline:
    "I build robust game systems and scalable architectures with a focus on clean code and performance. Specialist in Unity, C#, and high-level system design. Advocate for DI and decoupled architectures.",
  avatar: null, // Set a URL or relative path to your photo, e.g. "/avatar.jpg"

  // ── Contact ────────────────────────────────
  email: "whoyou1994j4920@gmail.com",
  github: "https://github.com/Anen135",
  linkedin: "https://linkedin.com/in/yourusername",
  telegram: "https://t.me/deadmaidenILS",
  cvUrl: "/cv.pdf", // Path to your CV file in /public folder

  // ── About Me ───────────────────────────────
  about: {
    bio: "I am a professional software developer and system engineer with a deep focus on Unity and game architecture. My approach is rooted in strict software patterns: I prioritize Dependency Injection and event-driven systems over global singletons. Beyond game dev, I have extensive experience in database design for SaaS and automation tools. I'm also passionate about mentoring the next generation of programmers, helping them navigate complex topics like asynchronous programming and clean API design.",
    highlights: [
      "Expertise in Unity (C#) & System Architecture",
      "Strong advocate for Dependency Injection (DI) & Decoupled Design",
      "Experienced in Database Architecture (SQL/SaaS) & API Design",
      "Technical Mentor for programming students",
    ],
  },

  // ── Skills ─────────────────────────────────
  skills: [
    { name: "C#", level: 95, category: "Language" },
    { name: "Python", level: 85, category: "Language" },
    { name: "JavaScript", level: 80, category: "Language" },
    { name: "Unity 3D", level: 95, category: "Engine" },
    { name: "Dependency Injection", level: 90, category: "Architecture" },
    { name: "SQL / PostgreSQL", level: 88, category: "Database" },
    { name: "Shader Programming", level: 75, category: "Graphics" },
    { name: "Git / LFS", level: 90, category: "DevOps" },
    { name: "PowerShell Automation", level: 82, category: "Tooling" },
    { name: "REST API Design", level: 85, category: "Backend" },
  ],

  // ── Projects ───────────────────────────────
  projects: [
    {
      title: "Lucy Framework",
      description:
        "A core architectural framework for Unity projects featuring custom state machines, entity management, and a robust audio service layer built with DI principles.",
      tags: ["C#", "Unity", "Architecture", "DI"],
      github: "https://github.com/Anen135/Lucy.Core",
      demo: null,
      featured: true,
    },
    {
      title: "Stoiki Project",
      description:
        "A complex Unity-based project focused on advanced scene management and Git LFS asset optimization.",
      tags: ["Unity", "C#", "Git LFS", "System Design"],
      github: "https://github.com/Anen135/Stoiki_project",
      demo: null,
      featured: true,
    },
    {
      title: "TASTAR",
      description:
        "Modern landing page and web interface project emphasizing clean design and structured content hierarchy.",
      tags: ["HTML/CSS", "JS", "UI/UX"],
      github: "https://github.com/Anen135/TASTAR",
      demo: null,
      featured: true,
    },
    {
      title: "YesUR",
      description:
        "Unity asset management and model integration project utilizing heavy Git history rewriting and LFS for large scale resources.",
      tags: ["Unity", "Asset Pipeline", "Git"],
      github: "https://github.com/Anen135/YesUR",
      demo: null,
      featured: false,
    },
    {
      title: "Custom PowerShell API Toolkit",
      description:
        "A set of command-line tools for rapid API testing and automated task management.",
      tags: ["PowerShell", "Automation", "API"],
      github: null,
      demo: null,
      featured: false,
    },
  ],

  // ── Experience / Education ─────────────────
  timeline: [
    {
      type: "work",
      year: "2024 – Present",
      title: "Unity Developer & System Engineer",
      org: "Freelance / Independent Projects",
      description:
        "Architecting game systems (Lucy core) with a focus on decoupling and performance. Managing complex version control environments and project infrastructures.",
    },
    {
      type: "work",
      year: "2023 – Present",
      title: "Programming Instructor & Mentor",
      org: "Educational Initiatives",
      description:
        "Teaching students database management (SQL), async/await patterns, and clean API request handling. Developing training materials and practical coding labs.",
    },
    {
      type: "work",
      year: "2021 – 2023",
      title: "Software Developer",
      org: "IT Startup / SaaS Development",
      description:
        "Designed multi-profile database schemas and implemented scalable backends for task management systems.",
    },
    {
      type: "edu",
      year: "2026 (In Progress)",
      title: "National Unified Testing (ENT) Prep",
      org: "Self-Study / Intensive Prep",
      description:
        "Focusing on Mathematics and Information Technology to advance academic credentials and technical foundation.",
    },
  ],
};