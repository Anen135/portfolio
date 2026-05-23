import React, { useEffect, useState } from "react";
import { projectRegistry } from "../data/projects/page-registry";
import SimpleNavbar from "../components/SimpleNavbar.jsx";
import { motion } from "framer-motion";


// Вспомогательный компонент для отрисовки разных типов контента
const SectionRenderer = ({ section }) => {
  switch (section.type) {
    case "code_snippet":
      return (
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem', fontSize: '1.1rem' }}>{section.title}</h4>
          <pre style={{
            background: "rgba(0,0,0,0.3)",
            color: "var(--text-primary)",
            padding: "1.25rem",
            borderRadius: "var(--radius)",
            overflowX: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
            border: "1px solid var(--border)"
          }}>
            <code>{section.code}</code>
          </pre>
        </div>
      );
    case "text_block":
      return (
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem', fontSize: '1.3rem', color: 'var(--text-primary)' }}>{section.title}</h4>
          <p style={{ lineHeight: "1.8", color: "var(--text-secondary)", fontSize: '1.05rem' }}>{section.content}</p>
        </div>
      );
    case "gallery":
      return (
        <div style={{ marginBottom: '3rem' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>{section.title}</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {section.images.map((img, idx) => (
              <figure key={idx} className="glass-card" style={{ padding: '0.5rem', overflow: 'hidden', margin: 0 }}>
                <img src={img.url} alt={img.caption} style={{ width: "100%", borderRadius: "calc(var(--radius) - 4px)", display: 'block' }} />
                <figcaption style={{
                  fontSize: "0.85rem",
                  textAlign: "center",
                  padding: "0.75rem",
                  color: "var(--text-muted)"
                }}>
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ProjectTemplate = () => {
  const projectId = window.location.pathname.split("/").filter(Boolean).pop();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const loader = projectRegistry[projectId];
        if (!loader) throw new Error("Project not found");
        const module = await loader();
        // Берем объект проекта (в примере выше он был вложен в ключ wtf_ui)
        const projectData = module.page;
        setData(projectData);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };
    loadConfig();
  }, [projectId]);

  if (error) return <div style={{ textAlign: "center", marginTop: "50px" }}>Проект не найден (404)</div>;
  if (!data) return <div style={{ textAlign: "center", marginTop: "50px" }}>Загрузка компонентов...</div>;

  const { appearance, techStack, links, features, sections, roadmap } = data;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg, #f5f7fa)", color: "var(--text-primary, #000)" }}>
      <SimpleNavbar title={data.title || "Project"} backUrl="/portfolio/templates" backText="Back to Templates" />
      <div style={{
        padding: "4rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--accent-dim)', color: 'var(--accent)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
            {data.version}
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>{data.title}</h1>
          <h2 style={{ color: "var(--accent)", fontWeight: "400", fontSize: '1.5rem', marginBottom: '1.5rem' }}>{data.subtitle}</h2>
          <p style={{ fontSize: "1.1rem", color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.8' }}>{data.description}</p>

          {/* Links */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            {links?.github && <a href={links.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub</a>}
            {links?.documentation && <a href={links.documentation} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Docs</a>}
            {links?.discord && <a href={links.documentation} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Discord</a>}
            {links?.demo && <a href={links.documentation} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>}
          </div>
        </motion.header>

        <div className="divider" style={{ margin: '4rem 0' }} />

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ margin: "4rem 0" }}
        >
          <p className="section-label" style={{ textAlign: 'center' }}>Technologies</p>
          <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tech Stack</h3>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: 'center' }}>
            {techStack.map((tech) => (
              <span key={tech.name} className="tag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', padding: '0.4rem 1rem' }}>
                {tech.name} <small style={{ opacity: 0.7, fontWeight: 'normal' }}>{tech.version}</small>
              </span>
            ))}
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ margin: "4rem 0" }}
        >
          <p className="section-label">Highlights</p>
          <h3 className="section-title" style={{ marginBottom: '2rem' }}>Key Features</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {features?.map((f, i) => (
              <div key={i} className="glass-card" style={{ padding: "1.5rem" }}>
                <strong style={{ display: "block", marginBottom: "0.75rem", fontSize: '1.1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>{f.title}</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Dynamic Sections */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ margin: "4rem 0" }}
        >
          {sections?.map((s, i) => (
            <div key={i} style={{ marginBottom: "3rem" }}>
              <SectionRenderer section={s} />
            </div>
          ))}
        </motion.section>

        {/* Roadmap */}
        {roadmap && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: "2.5rem", margin: "4rem 0" }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Roadmap</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {roadmap.map((item, i) => {
                const isCompleted = item.status === "completed";
                const isInProgress = item.status === "in-progress";
                return (
                  <li key={i} style={{ 
                    marginBottom: "1rem", 
                    display: "flex", 
                    alignItems: "center",
                    padding: "1rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)"
                  }}>
                    <span style={{ 
                      marginRight: "1rem", 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isCompleted ? 'rgba(34, 197, 94, 0.15)' : isInProgress ? 'var(--accent-dim)' : 'transparent',
                      border: `1px solid ${isCompleted ? 'rgba(34, 197, 94, 0.5)' : isInProgress ? 'var(--accent)' : 'var(--border)'}`,
                      color: isCompleted ? '#22c55e' : isInProgress ? 'var(--accent)' : 'var(--text-muted)',
                      fontSize: '0.8rem'
                    }}>
                      {isCompleted ? "✓" : isInProgress ? "●" : "○"}
                    </span>
                    <span style={{ 
                      color: isCompleted ? 'var(--text-muted)' : 'var(--text-primary)',
                      textDecoration: isCompleted ? "line-through" : "none" 
                    }}>
                      {item.task}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.section>
        )}

        <footer style={{ 
          marginTop: "6rem", 
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          fontSize: "0.85rem", 
          color: "var(--text-muted)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span>License: {data.license}</span>
          <span>{data.metadata?.author}</span>
        </footer>
      </div>
    </div>
  );
};

export default ProjectTemplate;