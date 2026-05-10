import React from 'react';
import { useTheme } from '../hooks/useTheme.js';

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export default function SimpleNavbar({ title = "Template", backUrl = "/portfolio/", backText = "Back to Portfolio" }) {
  const { theme, toggle } = useTheme();

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      borderBottom: '1px solid var(--border, rgba(255,255,255,0.1))',
      background: 'var(--bg-card, rgba(0,0,0,0.5))',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <a href={backUrl} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        color: 'var(--text-secondary, #888)',
        fontFamily: 'var(--font-mono, monospace)',
        textDecoration: 'none',
        transition: 'color 0.3s ease'
      }}
      onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary, #fff)'}
      onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary, #888)'}
      >
        <ArrowLeftIcon />
        {backText}
      </a>

      <div style={{
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 'bold',
        color: 'var(--text-muted, #555)'
      }}>
        {title}
      </div>

      <button 
        onClick={toggle}
        title="Toggle Theme"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary, #888)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'color 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent, #00d4ff)'}
        onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary, #888)'}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
}
