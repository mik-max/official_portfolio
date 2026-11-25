export type ExperienceEntry = {
  id: string;
  dateRange: string;
  title: string;
  company: string;
  summary: string;
  metrics: { value: string; label: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    id: 'skyt-technologies',
    dateRange: 'SEP 2022 — MAY 2023',
    title: 'Junior Frontend Engineer',
    company: 'Skyt Technologies',
    summary:
      'Built a logistics web app connecting transporters and clients, and the shared React component library behind it.',
    metrics: [
      { value: '100+', label: 'bookings a month' },
      { value: '10%', label: 'faster feature builds' },
    ],
  },
  {
    id: 'mainstack',
    dateRange: 'JUN 2023 — MAR 2026',
    title: 'Frontend Engineer',
    company: 'Mainstack',
    summary:
      'Built the referral program and the multi-currency ambassador payout system, plus the discount tools 60% of active merchants use.',
    metrics: [
      { value: '1,000+', label: 'merchants paid out' },
      { value: '30%', label: 'fewer failed transactions' },
      { value: '20%', label: 'more merchant referrals' },
    ],
  },
  {
    id: 'skytlabs',
    dateRange: '2026 — PRESENT',
    title: 'Full-Stack Engineer (Contract)',
    company: 'SkytLabs',
    summary:
      'Built a production NestJS backend for a field data-collection platform, from schema to deployment, and fixed a plaintext credential-logging flaw.',
    metrics: [
      { value: '160+', label: 'automated tests' },
      { value: '21', label: 'REST endpoints' },
      { value: '4', label: 'services integrated' },
    ],
  },
];
