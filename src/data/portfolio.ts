import type { Experience, Project, SkillGroup, Stat, Certification, ContactLink } from '../types';

export const stats: Stat[] = [
  { num: '2', suffix: '+', label: 'Years Experience' },
  { num: '90', suffix: '%+', label: 'Test Coverage' },
  { num: '5', suffix: '', label: 'Critical Production Defects Isolated' },
  { num: '67', suffix: '%', label: 'Faster Defect Reporting' },
  { num: '30', suffix: '+', label: 'Payment Flows Validated Daily' },
  { num: '98', suffix: '', label: 'PayGuard-AI Test Cases' },
];

export const experiences: Experience[] = [
  {
    id: 'associate',
    period: 'Jun 2025 — Present',
    role: 'Associate Engineer',
    company: 'Worldline Global Services',
    location: 'Pune, India',
    bullets: [
      'Architected and executed a transaction-validation automation workflow covering <strong>30+ daily payment flow types</strong> across VISA, Mastercard, CUP, Diners, and JCB, reducing bug detection and reporting time from 1.5 hours to 30 minutes per flow.',
      'Engineered a custom <strong>GUI data-extraction framework</strong> that automated manual end-to-end transaction validation, saving 60 minutes per workflow cycle across 3 critical payment rails.',
      'Maintained and executed a regression suite of <strong>30+ payment flows in HP ALM</strong>, recording pipeline-generated results per build cycle for traceability and audit readiness under PCI-DSS compliance.',
    ],
  },
  {
    id: 'trainee',
    period: 'Oct 2024 — May 2025',
    role: 'Graduate Engineering Trainee',
    company: 'Worldline Global Services',
    location: 'Pune, India',
    bullets: [
      'Designed a transaction-validation framework for <strong>Mastercard and VISA processing flows</strong> (ESTEY project), scaling test coverage beyond 90% under PCI-DSS standards.',
      'Isolated <strong>5 critical production defects</strong> through data-driven analysis.',
    ],
  },
  {
    id: 'intern',
    period: 'Jun 2024 — Sep 2024',
    role: 'Intern',
    company: 'Worldline Global Services',
    location: 'Pune, India',
    bullets: [
      'Accelerated payment-gateway validation across <strong>300+ functional, regression, and integration test cases</strong>.',
      'Introduced systematic transaction-level log-analysis practices that laid the foundation for future automation pipelines.',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'automation',
    index: '01',
    category: 'Test Automation',
    title: 'Automation Frameworks',
    skills: ['Playwright', 'Selenium WebDriver', 'Pytest', 'Robot Framework', 'TestNG (Java)', 'Appium (Foundational)'],
  },
  {
    id: 'languages',
    index: '02',
    category: 'Languages',
    title: 'Programming',
    skills: ['Python (Primary)', 'SQL', 'Java', 'JavaScript'],
  },
  {
    id: 'testing',
    index: '03',
    category: 'Testing',
    title: 'Quality Engineering',
    skills: ['API Testing', 'E2E Testing', 'Regression Testing', 'Shift-Left Testing', 'System Integration Testing', 'Risk-Based Testing'],
  },
  {
    id: 'management',
    index: '04',
    category: 'Test Management',
    title: 'Test Operations & Compliance',
    skills: ['HP ALM', 'Regression Execution', 'Audit Reporting', 'PCI-DSS Compliance'],
  },
  {
    id: 'devops',
    index: '05',
    category: 'CI/CD & DevOps',
    title: 'Delivery & Infrastructure',
    skills: ['Jenkins', 'GitHub Actions', 'Docker', 'Git', 'Unix/Linux'],
  },
  {
    id: 'ai-backend',
    index: '06',
    category: 'AI & Backend',
    title: 'AI Engineering & APIs',
    skills: ['RAG Pipelines', 'LangChain', 'ChromaDB', 'FastAPI', 'Prompt Engineering', 'GCP Vertex AI'],
  },
];

export const projects: Project[] = [
  {
    id: 'payguard',
    num: '001',
    title: 'PayGuard-AI — QA-Centric Payment Gateway',
    description:
      'Built a payment gateway prototype covering card issuance, authorization, capture, settlement, refunds, transaction-state validation, idempotency, audit events, and monetary precision. Developed a layered unit, API, and E2E test architecture with 98 test cases, including Playwright + pytest browser automation using the Page Object Model.',
    tech: ['Python', 'FastAPI', 'Pytest', 'Playwright', 'React', 'Docker', 'GitHub Actions'],
    link: 'https://github.com/Atharvagarud137/PayGuard-AI',
  },
  {
    id: 'health-monitor',
    num: '002',
    title: 'Distributed System Health Monitor & Diagnostic Toolkit',
    description:
      'Engineered a distributed transaction diagnostics toolkit that reconciles payment processor, ledger, and settlement records to detect timing lags, duplicate transactions, and rounding mismatches. Built a root-cause diagnostic engine with severity scoring, batch transaction analysis, automated Pytest coverage, Docker deployment, and GitHub Actions CI.',
    tech: ['Python', 'FastAPI', 'Pytest', 'Docker', 'GitHub Actions', 'REST API'],
    link: '',
  },
  {
    id: 'incident-intelligence',
    num: '003',
    title: 'AI Incident Intelligence Platform',
    description:
      'Built an AI platform for DevOps/SRE teams that ingests operational logs, performs semantic vector search, and generates AI-powered root-cause analysis. Delivered 88 passing tests across unit, service, and API layers with Docker Compose orchestration and a Strategy Pattern provider abstraction for LLM switching.',
    tech: ['Python', 'FastAPI', 'RAG', 'LangChain', 'Gemini API', 'ChromaDB', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/Atharvagarud137/ai-incident-intelligence-platform',
  },
];

export const certifications: Certification[] = [
  { id: 'istqb', name: 'ISTQB Certified Tester — Foundation Level (CTFL)', issuer: 'ISTQB' },
  { id: 'vertex', name: 'Prompt Design in Vertex AI', issuer: 'Google Cloud' },
  { id: 'mlops', name: 'MLOps on Google Cloud', issuer: 'Google Cloud' },
  { id: 'agents', name: 'Generative AI Agents — Fine-Tuning LLMs', issuer: 'Generative AI' },
  { id: 'btech', name: 'B.Tech in Information Technology', issuer: 'Pimpri Chinchwad College of Engineering, Pune · 2020–2024' },
];

export const contactLinks: ContactLink[] = [
  { id: 'email', label: 'Email', value: 'atharvag289@gmail.com', href: 'mailto:atharvag289@gmail.com', icon: 'mail' },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/atharva-garud', href: 'https://linkedin.com/in/atharva-garud', icon: 'linkedin' },
  { id: 'github', label: 'GitHub', value: 'github.com/Atharvagarud137', href: 'https://github.com/Atharvagarud137', icon: 'github' },
  { id: 'phone', label: 'Phone', value: '+91 94218 17764', href: 'tel:+919421817764', icon: 'phone' },
];
