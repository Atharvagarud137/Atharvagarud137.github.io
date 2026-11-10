import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { stats } from '../../data/portfolio';
import type { Stat } from '../../types';

const StatCard: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={styles.statCard}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ background: 'var(--cream-dark)' }}
    >
      <div style={styles.statNum}>
        {stat.num}{stat.suffix && <span style={styles.statSuffix}>{stat.suffix}</span>}
      </div>
      <div style={styles.statLabel}>{stat.label}</div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const isMobile = useIsMobile();
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" style={{ ...styles.section, padding: isMobile ? '4rem 1.25rem' : '5.5rem 4rem' }}>
      <SectionHeader num="01" title="About" />
      <div style={{ ...styles.grid, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2.5rem' : '5rem' }}>
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, x: -20 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={styles.para}>
            I'm an <strong>SDET &amp; Automation Engineer</strong> at <strong>Worldline Global Services</strong>, with 2+ years of experience designing high-volume payment transaction testing for global financial networks including Mastercard, VISA, CUP, Diners, and JCB. I'm ISTQB Certified and hold a B.Tech in Information Technology from PCCOE, Pune.
          </p>
          <p style={styles.para}>
            My work focuses on <strong>Python-based automation, transaction validation, API and regression testing</strong>, and maintaining traceable test records under PCI-DSS requirements. Recent work includes automating 30+ daily payment flow types and reducing defect detection and reporting time from 1.5 hours to 30 minutes per flow.
          </p>
          <p style={styles.para}>
            Outside my day-to-day role, I build QA-focused payment and diagnostic platforms, and explore AI-assisted incident analysis using RAG, vector search, and LLM integrations.
          </p>
        </motion.div>

        <div style={styles.statsGrid}>
          {stats.map((stat, i) => <StatCard key={stat.num + stat.label} stat={stat} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: { background: 'var(--cream)' },
  grid: { display: 'grid', alignItems: 'start' },
  para: { color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' },
  statCard: { background: 'var(--cream)', padding: '1.75rem', transition: 'background 0.4s', cursor: 'default' },
  statNum: { fontFamily: 'var(--serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--navy)', lineHeight: 1, marginBottom: '0.4rem' },
  statSuffix: { color: 'var(--gold)', fontSize: '1.2rem' },
  statLabel: { fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--muted)' },
};
