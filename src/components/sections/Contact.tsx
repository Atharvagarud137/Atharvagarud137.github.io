import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { contactLinks } from '../../data/portfolio';
import type { ContactLink } from '../../types';

// Use available icons, mapping by id
const iconById: Record<string, React.ElementType> = {
  email: Mail,
  linkedin: Globe,
  github: ExternalLink,
  phone: Phone,
};

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactLinkItem: React.FC<{ link: ContactLink }> = ({ link }) => {
  const Icon = iconById[link.icon] || Globe;
  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      style={styles.linkItem}
      whileHover={{ background: 'var(--cream-dark)' }}
    >
      <div style={styles.linkIcon}>
        <Icon size={14} color="var(--navy)" strokeWidth={1.5} />
      </div>
      <span style={styles.linkText}>{link.value}</span>
      <span style={styles.linkLabel}>{link.label}</span>
    </motion.a>
  );
};

const FormField: React.FC<{
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; type?: string;
}> = ({ label, name, value, onChange, placeholder, type = 'text' }) => (
  <div style={styles.fieldWrap}>
    <label style={styles.label}>{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} style={styles.input} />
  </div>
);

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus({ msg: '— Please fill in all required fields.', ok: false });
      return;
    }
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:atharvag289@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
    setStatus({ msg: '— Opening your mail client…', ok: true });
  };

  return (
    <section id="contact" style={styles.section}>
      <SectionHeader num="06" title="Get in Touch" />
      <div style={styles.grid}>
        <div>
          <p style={styles.intro}>
            Open to senior QA roles, automation-focused engineering positions, and fintech
            opportunities. If you're building something in payments, fraud detection, or developer
            tooling — I'd like to hear about it.
          </p>
          <div style={styles.links}>
            {contactLinks.map((link) => (
              <ContactLinkItem key={link.id} link={link} />
            ))}
          </div>
        </div>
        <div style={styles.form}>
          <div style={styles.formRow}>
            <FormField label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
          </div>
          <FormField label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Opportunity / Collaboration / Hello" />
          <div style={styles.fieldWrap}>
            <label style={styles.label}>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the role or project…" rows={5} style={styles.textarea} />
          </div>
          <motion.button onClick={handleSubmit} style={styles.btn} whileHover={{ background: 'var(--navy-light)' }} whileTap={{ scale: 0.98 }}>
            Send Message
          </motion.button>
          {status && <p style={{ ...styles.status, color: status.ok ? 'var(--gold)' : '#c0392b' }}>{status.msg}</p>}
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: { background: 'var(--cream)', padding: '5.5rem 4rem' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' },
  intro: { color: 'var(--muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' },
  links: { display: 'flex', flexDirection: 'column', border: '1px solid var(--border)' },
  linkItem: { display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border)', textDecoration: 'none', color: 'inherit', transition: 'background 0.2s' },
  linkIcon: { width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(13,27,42,0.22)' },
  linkText: { fontSize: '0.875rem', color: 'var(--navy)', flex: 1 },
  linkLabel: { fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--muted)' },
  form: { display: 'flex', flexDirection: 'column' as const, gap: '1rem' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  fieldWrap: { display: 'flex', flexDirection: 'column' as const, gap: '0.4rem' },
  label: { fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--muted)' },
  input: { fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--navy)', background: 'var(--cream-dark)', border: '1px solid var(--border)', padding: '0.75rem 1rem', outline: 'none' },
  textarea: { fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--navy)', background: 'var(--cream-dark)', border: '1px solid var(--border)', padding: '0.75rem 1rem', outline: 'none', resize: 'none' as const },
  btn: { fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, background: 'var(--navy)', color: 'var(--cream)', padding: '0.85rem 2rem', border: 'none', cursor: 'pointer', width: 'fit-content' },
  status: { fontFamily: 'var(--mono)', fontSize: '0.68rem', marginTop: '0.5rem' },
};
