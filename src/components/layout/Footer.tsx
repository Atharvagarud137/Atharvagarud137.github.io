import React from 'react';

export const Footer: React.FC = () => (
  <footer style={styles.footer}>
    <span style={styles.logo}>
      A<span style={{ color: 'var(--gold)' }}>.</span>Garud
    </span>
    <p style={styles.text}>© 2025 Atharva Garud · QA Automation Engineer · Pune, India</p>
    <p style={styles.text}>atharvagarud137.github.io</p>
  </footer>
);

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: 'var(--navy)',
    padding: '2.5rem 4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  logo: {
    fontFamily: 'var(--serif)',
    fontSize: '1.1rem',
    fontWeight: 300,
    color: 'rgba(245,242,235,0.6)',
  },
  text: {
    fontFamily: 'var(--mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.08em',
    color: 'rgba(245,242,235,0.35)',
    textTransform: 'uppercase' as const,
  },
};
