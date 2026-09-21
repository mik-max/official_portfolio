export type ExperienceEntry = {
  dateRange: string;
  title: string;
  company: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    dateRange: '2026 — PRESENT',
    title: 'Full-Stack Engineer (Contract)',
    company: 'SkytLabs',
    bullets: [
      'Designed and built a production NestJS/TypeScript backend for a field data-collection platform, from schema design through deployment.',
      'Architected a ports-and-adapters API with 21 REST endpoints across 11 modules, backed by 160+ automated tests and typed OpenAPI/Swagger contracts.',
      'Built secure agent authentication (password + passwordless OTP, device-binding, session/refresh tokens) and a mirror-sync job queue bridging two independent SQL Server databases.',
      'Integrated 4 third-party services via a config-driven adapter pattern; identified and remediated a plaintext credential-logging vulnerability.',
    ],
  },
  {
    dateRange: 'JUN 2023 — MAR 2026',
    title: 'Frontend Engineer',
    company: 'Mainstack',
    bullets: [
      'Built the Mainstack Referral Program and multi-currency Ambassador payout system, contributing to 20% growth in merchant referrals and 15% of new sign-ups via affiliate channels.',
      'Developed a multi-channel payout system across 4 currencies, processing payouts for 1,000+ merchants with a 30% reduction in failed transactions.',
      'Built the discount management system used by 60% of the active merchant base, and shipped a dynamic blog platform on Strapi CMS.',
      'Refactored the legacy codebase into a modular, component-driven architecture, cutting feature build time by 15% and production bugs by 25%.',
      'Optimized 6+ applications for Core Web Vitals, SEO and WCAG accessibility, improving average page load time by 30%.',
      'Contributed to a scalable design system adopted across 6 products, cutting design-to-dev handoff time by 40%.',
    ],
  },
  {
    dateRange: 'SEP 2022 — MAY 2023',
    title: 'Junior Frontend Engineer',
    company: 'Skyt Technologies',
    bullets: [
      'Built a reusable React component library adopted across the product, cutting new-feature development time by 10%.',
      'Developed a logistics web application connecting transporters and clients, supporting 100+ monthly bookings.',
      'Integrated third-party REST APIs for real-time data flow between transporters, clients and dispatch systems.',
    ],
  },
];
