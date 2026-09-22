export type SkillCategory = {
  key: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: 'frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Chakra UI', 'GSAP', 'HTML5', 'CSS3'],
  },
  {
    key: 'backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'OpenAPI/Swagger'],
  },
  {
    key: 'databases',
    skills: ['MongoDB', 'MSSQL', 'Firebase', 'Strapi', 'Sanity CMS'],
  },
  {
    key: 'tooling',
    skills: ['Jest', 'React Testing Library', 'Git/GitHub', 'Webpack/Vite'],
  },
  {
    key: 'practices',
    skills: ['Architecture', 'Systems', 'Optimisation', 'Responsiveness', 'Accessibility'],
  },
];
