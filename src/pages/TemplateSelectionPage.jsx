import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Layers, ArrowRight } from 'lucide-react';
import SimpleNavbar from '../components/SimpleNavbar.jsx';

const templates = [
  {
    id: 'universal',
    title: 'Universal Project Template',
    description: 'A versatile, dynamic component that fetches project data from a centralized registry and automatically renders beautiful documentation sections.',
    icon: Layers,
    href: '/portfolio/projects/project-1',
    tags: ['Data-Driven', 'React', 'Dynamic']
  }
];

export default function TemplateSelectionPage() {
  useEffect(() => {
    document.title = "Template Selection — Portfolio";
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text-primary)' }}>
      <SimpleNavbar title="Template Gallery" backUrl="/portfolio/" backText="Back to Portfolio" />

      <main className="container section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Gallery</p>
          <h1 className="section-title">Select a Template</h1>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            Explore different ways to showcase your work. Choose between highly customized layouts and our flexible, data-driven universal template.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {templates.map((tpl, i) => (
            <motion.a
              key={tpl.id}
              href={tpl.href}
              className="glass-card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '1rem',
                  background: 'var(--accent-dim)',
                  color: 'var(--accent)',
                  borderRadius: 'var(--radius)'
                }}>
                  <tpl.icon size={28} strokeWidth={1.5} />
                </div>
                <ArrowRight size={20} style={{ color: 'var(--text-muted)' }} />
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                {tpl.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1, lineHeight: '1.6' }}>
                {tpl.description}
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {tpl.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
}
