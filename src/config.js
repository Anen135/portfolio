/**
 * =============================================
 *  PORTFOLIO CONFIGURATION FILE
 *  Edit this file to personalize your portfolio
 * =============================================
 */

export const config = {
  // ── Personal Info ──────────────────────────
  name: "Anen Barno",
  title: "Frontend / Backend / Fullstack Developer",
  tagline:
    "I craft high-performance web applications with clean code and thoughtful UX. Passionate about solving complex problems through elegant solutions. Open to exciting opportunities worldwide.",
  avatar: null, // Set a URL or relative path to your photo, e.g. "/avatar.jpg"

  // ── Contact ────────────────────────────────
  email: "whoyou1994j4920@gmail.com",
  github: "https://github.com/Anen135",
  linkedin: "https://linkedin.com/in/yourusername",
  telegram: "https://t.me/deadmaidenILS",
  cvUrl: "/cv.pdf", // Path to your CV file in /public folder

  // ── About Me ───────────────────────────────
  about: {
    bio: "I'm a fullstack developer with 4+ years of experience building scalable web applications. I specialize in React and Node.js ecosystems, but I'm comfortable across the stack — from database design to pixel-perfect UI. I believe great software is born at the intersection of clean architecture and great user experience.",
    highlights: [
      "4+ years of professional development experience",
      "Built and shipped 10+ production applications",
      "Contributed to open-source projects with 500+ GitHub stars",
      "Passionate about performance optimization and clean code",
    ],
  },

  // ── Skills ─────────────────────────────────
  skills: [
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Python", level: 80, category: "Language" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 88, category: "Frontend" },
    { name: "CSS / Tailwind", level: 90, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Express", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "Docker", level: 72, category: "DevOps" },
    { name: "Git / CI-CD", level: 90, category: "DevOps" },
  ],

  // ── Projects ───────────────────────────────
  projects: [
    {
      title: "CloudTask",
      description:
        "A real-time collaborative task management platform with team workspaces, Kanban boards, and advanced analytics dashboard.",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com/yourusername/cloudtask",
      demo: "https://cloudtask.demo.com",
      featured: true,
    },
    {
      title: "SwiftAPI",
      description:
        "A developer toolkit for scaffolding RESTful and GraphQL APIs with auto-generated documentation and testing suites.",
      tags: ["Node.js", "TypeScript", "GraphQL", "OpenAPI"],
      github: "https://github.com/yourusername/swiftapi",
      demo: null,
      featured: true,
    },
    {
      title: "PixelVault",
      description:
        "An AI-powered image organization app with semantic search, auto-tagging, and smart album suggestions.",
      tags: ["Python", "React", "TensorFlow", "FastAPI"],
      github: "https://github.com/yourusername/pixelvault",
      demo: "https://pixelvault.demo.com",
      featured: true,
    },
    {
      title: "DevMetrics",
      description:
        "GitHub activity visualizer that surfaces coding patterns, productivity insights, and contribution heatmaps.",
      tags: ["Next.js", "D3.js", "GitHub API"],
      github: "https://github.com/yourusername/devmetrics",
      demo: "https://devmetrics.demo.com",
      featured: false,
    },
    {
      title: "NoteFlow",
      description:
        "A Markdown-first note-taking app with bidirectional linking, graph view, and offline-first architecture.",
      tags: ["React", "IndexedDB", "TypeScript"],
      github: "https://github.com/yourusername/noteflow",
      demo: null,
      featured: false,
    },
    {
      title: "ShopForge",
      description:
        "Headless e-commerce starter kit with Stripe payments, inventory management, and a customizable storefront.",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      github: "https://github.com/yourusername/shopforge",
      demo: "https://shopforge.demo.com",
      featured: false,
    },
  ],

  // ── Experience / Education ─────────────────
  timeline: [
    {
      type: "work",
      year: "2023 – Present",
      title: "Senior Frontend Developer",
      org: "TechCorp Inc.",
      description:
        "Lead frontend development for a SaaS platform serving 50k+ users. Reduced bundle size by 40%, improved Core Web Vitals scores to 95+.",
    },
    {
      type: "work",
      year: "2021 – 2023",
      title: "Fullstack Developer",
      org: "StartupXYZ",
      description:
        "Built and maintained three client-facing products from scratch. Architected a microservices backend handling 1M+ requests/day.",
    },
    {
      type: "work",
      year: "2020 – 2021",
      title: "Junior Web Developer",
      org: "Digital Agency Co.",
      description:
        "Developed responsive websites and landing pages for 20+ clients. Introduced a component library that cut development time by 30%.",
    },
    {
      type: "edu",
      year: "2016 – 2020",
      title: "B.Sc. Computer Science",
      org: "State University",
      description:
        "Graduated with honors. Thesis on distributed systems and consensus algorithms. Active member of the ACM student chapter.",
    },
  ],
};
