import type { Experience, Project, SkillGroup, Stat, Certification, ContactLink } from '../types';

export const stats: Stat[] = [
  { num: '2', suffix: '+', label: 'Years Experience' },
  { num: '90', suffix: '%', label: 'Test Coverage' },
  { num: '5', suffix: '', label: 'Critical Defects Found' },
  { num: '40', suffix: '%', label: 'Triage Effort Reduced' },
  { num: '30', suffix: '+', label: 'Payment Flows / Day' },
  { num: '3', suffix: '', label: 'ML Projects Built' },
];

export const experiences: Experience[] = [
  {
    id: 'ae',
    period: 'Jun 2025 — Present',
    role: 'Associate Engineer',
    company: 'Worldline Global Services',
    location: 'Pune, India',
    bullets: [
      'Architected a <strong>Python-based defect detection and log-analysis pipeline</strong> covering 30+ payment flows/day, cutting manual triage effort by ~40% and accelerating root-cause identification.',
      'Engineered an internal <strong>GUI data-extraction framework</strong> enabling automated end-to-end transaction validation across 3 critical payment workflows previously dependent on manual verification.',
      'Collaborated cross-functionally with Dev, DevOps, and Product to define <strong>shift-left testing strategies</strong>, embedding defect prevention into early sprint cycles.',
      'Maintained and extended <strong>regression and smoke test suites in Jenkins CI/CD</strong>, ensuring stable build verification across every deployment.',
    ],
  },
  {
    id: 'get',
    period: 'Oct 2024 — May 2025',
    role: 'Graduate Engineering Trainee',
    company: 'Worldline Global Services',
    location: 'Pune, India',
    bullets: [
      'Designed and implemented a <strong>test automation framework for Mastercard/VISA flows</strong> on the ESTEY project, raising coverage from baseline to ~90% under full PCI-DSS compliance.',
      'Conducted structured data-driven analysis uncovering <strong>5 critical production defects</strong> that would have impacted live payment processing; findings directly informed hotfix prioritisation.',
      'Authored detailed <strong>test plans, test cases, and traceability matrices</strong>, establishing documentation standards adopted by the team.',
      'Contributed to <strong>API test automation for payment gateway integrations</strong> using Python and REST principles, validating schemas, error codes, and edge-case handling.',
    ],
  },
  {
    id: 'intern',
    period: 'Jun 2024 — Sep 2024',
    role: 'QA Engineering Intern',
    company: 'Worldline Global Services',
    location: 'Pune, India',
    bullets: [
      'Executed functional, regression, and integration testing for payment gateway integrations, contributing to a <strong>measurable reduction in bug resolution cycle time</strong>.',
      'Developed foundational expertise in <strong>transaction-level log analysis</strong>, identifying anomalies and edge cases that informed test case expansions for subsequent sprints.',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'automation',
    index: '01',
    category: 'Test Automation',
    title: 'Automation Frameworks',
    skills: ['Selenium WebDriver', 'Pytest', 'Robot Framework', 'TestNG', 'REST API Testing'],
  },
  {
    id: 'languages',
    index: '02',
    category: 'Languages',
    title: 'Programming',
    skills: ['Python', 'Java', 'SQL', 'JavaScript', 'Shell Scripting'],
  },
  {
    id: 'devops',
    index: '03',
    category: 'DevOps',
    title: 'CI/CD & Infrastructure',
    skills: ['Jenkins', 'Docker', 'Git', 'GitHub Actions', 'OpenShift', 'Unix/Linux'],
  },
  {
    id: 'frameworks',
    index: '04',
    category: 'Frameworks',
    title: 'Libraries & Tools',
    skills: ['FastAPI', 'Flask', 'SQLAlchemy', 'ChromaDB', 'Next.js'],
  },
  {
    id: 'methodologies',
    index: '05',
    category: 'Methodologies',
    title: 'QA Practices',
    skills: ['Shift-Left Testing', 'BDD', 'TDD', 'Risk-Based Testing', 'PCI-DSS Compliance', 'Defect Lifecycle'],
  },
  {
    id: 'domain',
    index: '06',
    category: 'Domain',
    title: 'Fintech & ML',
    skills: ['Payment Processing', 'Mastercard / VISA', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'Pandas'],
  },
];

export const projects: Project[] = [
  {
    id: 'fraud',
    num: '001',
    title: 'Credit Card Fraud Signal Validation',
    description:
      'ML-powered validation pipeline for fraud detection on imbalanced transactional datasets. Automated evaluation using precision, recall, F1-score, and confusion matrix metrics to surface model quality regressions — directly applicable to payment QA pipelines.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Pytest', 'Jupyter'],
    link: 'https://github.com/Atharvagarud137/Credit-Card-Fraud-Detection',
  },
  {
    id: 'deepfake',
    num: '002',
    title: 'Deepfake Detection — CV Model QA Pipeline',
    description:
      'End-to-end model evaluation pipeline with CNN achieving 92% accuracy. Applied data augmentation and dropout regularisation with a structured train/eval/test split methodology mirroring automated test lifecycle practices.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Jupyter'],
    link: 'https://github.com/Atharvagarud137/deepfake-detector-project',
  },
  {
    id: 'mask',
    num: '003',
    title: 'Real-Time Face Mask Detection',
    description:
      'Real-time detection system achieving 95% accuracy. Reduced inference latency by 30% via model quantisation, validated through structured benchmark testing. Full-stack deployment with a Next.js front-end for live camera inference.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Next.js'],
    link: 'https://github.com/Atharvagarud137/Face-Mask-Detection-system',
  },
];

export const certifications: Certification[] = [
  { id: 'istqb', name: 'ISTQB Certified Tester — Foundation Level (CTFL)', issuer: 'ISTQB · Quality Engineering' },
  { id: 'vertex', name: 'Prompt Design in Vertex AI', issuer: 'Google Cloud' },
  { id: 'mlops', name: 'MLOps on Google Cloud Platform', issuer: 'Google Cloud' },
  { id: 'imagegen', name: 'Introduction to Image Generation', issuer: 'Google Cloud' },
  { id: 'finetuning', name: 'Fine-Tuning Large Language Models', issuer: 'Generative AI' },
  { id: 'genai', name: 'Build a Generative Language Model from Scratch', issuer: 'Generative AI' },
  { id: 'btech', name: 'B.Tech in Information Technology', issuer: 'PCCOE Pune · 2020 – 2024' },
];

export const contactLinks: ContactLink[] = [
  { id: 'email', label: 'Email', value: 'atharvag289@gmail.com', href: 'mailto:atharvag289@gmail.com', icon: 'mail' },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/atharva-garud', href: 'https://linkedin.com/in/atharva-garud', icon: 'linkedin' },
  { id: 'github', label: 'GitHub', value: 'github.com/Atharvagarud137', href: 'https://github.com/Atharvagarud137', icon: 'github' },
  { id: 'phone', label: 'Phone', value: '+91 94218 17764', href: 'tel:+919421817764', icon: 'phone' },
];
