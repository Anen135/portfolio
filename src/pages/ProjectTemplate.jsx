import React, { useEffect, useState } from "react";
import { projectRegistry } from "../data/projects/page-registry";

// Вспомогательный компонент для отрисовки разных типов контента
const SectionRenderer = ({ section }) => {
  switch (section.type) {
    case "code_snippet":
      return (
        <div className="section-code">
          <h4>{section.title}</h4>
          <pre style={{ background: "#1e1e1e", color: "#dcdcdc", padding: "1rem", borderRadius: "8px", overflowX: "auto" }}>
            <code>{section.code}</code>
          </pre>
        </div>
      );
    case "text_block":
      return (
        <div className="section-text">
          <h4>{section.title}</h4>
          <p style={{ lineHeight: "1.6", color: "#444" }}>{section.content}</p>
        </div>
      );
    case "gallery":
      return (
        <div className="section-gallery">
          <h4>{section.title}</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {section.images.map((img, idx) => (
              <figure key={idx}>
                <img src={img.url} alt={img.caption} style={{ width: "100%", borderRadius: "4px" }} />
                <figcaption style={{ fontSize: "0.8rem", textAlign: "center" }}>{img.caption}</figcaption>
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
    <div style={{ 
      padding: "2rem", 
      maxWidth: "900px", 
      margin: "0 auto", 
      fontFamily: "sans-serif",
      borderTop: `8px solid ${appearance?.primaryColor || "#ccc"}`
    }}>
      {/* Header */}
      <header style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h1 style={{ marginBottom: "0.5rem" }}>{data.title}</h1>
          <span style={{ color: "#888", fontSize: "0.9rem" }}>{data.version}</span>
        </div>
        <h2 style={{ color: "#666", fontWeight: "400" }}>{data.subtitle}</h2>
        <p style={{ fontSize: "1.1rem", margin: "1.5rem 0" }}>{data.description}</p>
        
        {/* Links */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {links?.github && <a href={links.github} className="btn-link">GitHub</a>}
          {links?.documentation && <a href={links.documentation} className="btn-link">Docs</a>}
        </div>
      </header>

      <hr />

      {/* Tech Stack */}
      <section style={{ margin: "2rem 0" }}>
        <h3>Стек технологий</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {techStack.map((tech) => (
            <span key={tech.name} style={{ 
              background: "#f0f0f0", 
              padding: "4px 12px", 
              borderRadius: "15px", 
              fontSize: "0.85rem" 
            }}>
              {tech.name} <small style={{ color: "#888" }}>{tech.version}</small>
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", margin: "2rem 0" }}>
        {features?.map((f, i) => (
          <div key={i} style={{ padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>{f.title}</strong>
            <small>{f.description}</small>
          </div>
        ))}
      </section>

      {/* Dynamic Sections */}
      <section style={{ margin: "3rem 0" }}>
        {sections?.map((s, i) => (
          <div key={i} style={{ marginBottom: "2.5rem" }}>
            <SectionRenderer section={s} />
          </div>
        ))}
      </section>

      {/* Roadmap */}
      {roadmap && (
        <section style={{ background: "#f9f9f9", padding: "1.5rem", borderRadius: "8px" }}>
          <h3>Roadmap</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {roadmap.map((item, i) => (
              <li key={i} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                <span style={{ 
                  marginRight: "10px", 
                  color: item.status === "completed" ? "green" : item.status === "in-progress" ? "orange" : "#ccc" 
                }}>
                  {item.status === "completed" ? "✔" : "●"}
                </span>
                <span style={{ textDecoration: item.status === "completed" ? "line-through" : "none" }}>
                  {item.task}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer style={{ marginTop: "4rem", fontSize: "0.8rem", color: "#aaa" }}>
        License: {data.license} | {data.metadata?.author}
      </footer>
    </div>
  );
};

export default ProjectTemplate;