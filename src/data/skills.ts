export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: 'FRONTEND',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Chakra UI', 'GSAP', 'HTML5', 'CSS3'],
  },
  {
    label: 'BACKEND & APIS',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'OpenAPI/Swagger'],
  },
  {
    label: 'DATABASES & CMS',
    skills: ['MongoDB', 'MSSQL', 'Firebase', 'Strapi', 'Sanity CMS'],
  },
  {
    label: 'CORE EXPERTISE & TOOLING',
    skills: ['Architecture', 'Systems', 'Optimisation', 'Responsiveness', 'Accessibility', 'Jest', 'React Testing Library', 'Git/GitHub', 'Webpack/Vite'],
  },
];
