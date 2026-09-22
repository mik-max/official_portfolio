import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 border-t border-ink/10 bg-paper">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-baseline gap-2.5 mb-6">
          <span className="font-mono text-sm text-ink/65">02</span>
          <span className="text-sm font-medium text-ink/65">Skills</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-16">Tools &amp; <span className="text-accent">technologies</span></h2>
        <div className="max-w-3xl">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-7 sm:py-8 border-t border-ink/10 first:border-t-0"
            >
              <div className="sm:w-44 flex-shrink-0 text-sm font-medium text-ink/65">{category.label}</div>
              <p className="font-mono text-base sm:text-lg text-ink/85 leading-relaxed">
                {category.skills.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
