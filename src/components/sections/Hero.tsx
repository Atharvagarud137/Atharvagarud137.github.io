import React from 'react';
import { motion } from 'framer-motion';
import atharvaPhoto from '../../assets/atharva.png';

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const delays = [0.2, 0.35, 0.5, 0.65, 0.8];

export const Hero: React.FC = () => (
  <section id="hero" style={styles.section}>
    <div style={styles.bgLines} aria-hidden="true">
      <svg viewBox="0 0 600 800" fill="none" style={styles.bgSvg}>
        {[0, 100, 200, 300, 400, 500].map((x) => (
          <line key={x} x1={x} y1={0} x2={600} y2={800 - x} stroke="#0D1B2A" strokeWidth="0.5" />
        ))}
        {[130, 200, 280].map((r) => (
          <circle key={r} cx={300} cy={400} r={r} stroke="#0D1B2A" strokeWidth="0.5" />
        ))}
      </svg>
    </div>

    <div style={styles.content}>
      <motion.p style={styles.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: delays[0] }}>
        QA Automation Engineer
      </motion.p>
      <motion.h1 style={styles.name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: delays[1] }}>
        Atharva<em style={styles.nameItalic}>Garud</em>
      </motion.h1>
      <motion.p style={styles.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: delays[2] }}>
        ISTQB Certified &nbsp;·&nbsp; Fintech & Payments &nbsp;·&nbsp; Pune, India
      </motion.p>
      <motion.p style={styles.desc} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: delays[3] }}>
        Building robust test automation frameworks for high-volume payment systems.
        2+ years turning complex fintech pipelines into reliable, thoroughly validated software.
      </motion.p>
      <motion.div style={styles.actions} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: delays[4] }}>
        <a href="#experience" onClick={(e) => scrollTo(e, '#experience')} style={styles.btnPrimary}>View Experience</a>
        <a href="mailto:atharvag289@gmail.com" style={styles.btnGhost}>Get in Touch →</a>
      </motion.div>
    </div>

    <motion.div style={styles.visual} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
      <div style={styles.photoFrame}>
        <div style={styles.photoInner}>
          <img src={atharvaPhoto} alt="Atharva Garud" style={styles.photo} />
        </div>
        <div style={styles.statBadge}>
          <div style={styles.statNum}>90<span style={{ fontSize: '1.2rem' }}>%+</span></div>
          <div style={styles.statLabel}>Test Coverage</div>
        </div>
      </div>
    </motion.div>
  </section>
);

const styles: Record<string, React.CSSProperties> = {
  section: { minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '0 4rem', paddingTop: 80, position: 'relative', overflow: 'hidden', background: 'var(--cream)' },
  bgLines: { position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' },
  bgSvg: { position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', opacity: 0.06 },
  content: { position: 'relative', zIndex: 2 },
  label: { fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' },
  name: { fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem, 5.5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.08, color: 'var(--navy)', marginBottom: '0.3rem' },
  nameItalic: { fontStyle: 'italic', color: 'var(--navy-light)', display: 'block' },
  title: { fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2rem', marginTop: '0.75rem' },
  desc: { fontSize: '1rem', color: 'var(--muted)', maxWidth: 420, lineHeight: 1.85, marginBottom: '2.5rem' },
  actions: { display: 'flex', gap: '1rem', alignItems: 'center' },
  btnPrimary: { fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', background: 'var(--navy)', color: 'var(--cream)', padding: '0.85rem 2rem', display: 'inline-block' },
  btnGhost: { fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--navy)', borderBottom: '1px solid rgba(13,27,42,0.22)', paddingBottom: 2 },
  visual: { display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' },
  photoFrame: { position: 'relative', width: 340, height: 420 },
  photoInner: { position: 'relative', zIndex: 1, width: '100%', height: '100%', background: 'var(--cream-dark)', overflow: 'hidden' },
  photo: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' },
  statBadge: { position: 'absolute', bottom: '-2rem', right: '-2rem', background: 'var(--navy)', color: 'var(--cream)', padding: '1.25rem 1.75rem', zIndex: 2 },
  statNum: { fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 300, lineHeight: 1, color: 'var(--gold-light)' },
  statLabel: { fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,235,0.5)', marginTop: '0.25rem' },
};
