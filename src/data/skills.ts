export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Chakra UI', 'GSAP', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'OpenAPI/Swagger'],
  },
  {
    label: 'Databases & CMS',
    skills: ['MongoDB', 'MSSQL', 'Firebase', 'Strapi', 'Sanity CMS'],
  },
  {
    label: 'Core expertise & tooling',
    skills: ['Architecture', 'Systems', 'Optimisation', 'Responsiveness', 'Accessibility', 'Jest', 'React Testing Library', 'Git/GitHub', 'Webpack/Vite'],
  },
];
