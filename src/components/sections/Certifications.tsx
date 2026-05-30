import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { certifications } from '../../data/portfolio';
import type { Certification } from '../../types';

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ fill: 'var(--gold)' }}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const CertItem: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={styles.item}
      initial={{ opacity: 0, x: -10 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ background: 'var(--cream)' }}
    >
      <div style={styles.badge}>
        <StarIcon />
      </div>
      <div style={styles.name}>{cert.name}</div>
      <div style={styles.issuer}>{cert.issuer}</div>
    </motion.div>
  );
};

export const Certifications: React.FC = () => (
  <section id="certifications" style={styles.section}>
    <SectionHeader num="05" title="Credentials" />
    <div style={styles.list}>
      {certifications.map((cert, i) => (
        <CertItem key={cert.id} cert={cert} index={i} />
      ))}
    </div>
  </section>
);

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: 'var(--cream-dark)',
    padding: '5.5rem 4rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column' as const,
    border: '1px solid var(--border)',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.4rem 2rem',
    borderBottom: '1px solid var(--border)',
    transition: 'background 0.2s',
    cursor: 'default',
  },
  badge: {
    width: 40,
    height: 40,
    background: 'var(--navy)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  name: {
    fontFamily: 'var(--sans)',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: 'var(--navy)',
    flex: 1,
  },
  issuer: {
    fontFamily: 'var(--mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: 'var(--muted)',
  },
};
