import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 border-t border-ink/10 bg-paper">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-baseline gap-2.5 mb-6">
          <span className="font-mono text-sm text-ink/40">02</span>
          <span className="text-sm font-medium text-ink/60">Skills</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-16">Tools &amp; technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10">
          {skillCategories.map((category) => (
            <div key={category.label} className="group">
              <div className="text-ink/50 text-sm font-medium mb-6">{category.label}</div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="px-4 py-2 sm:px-5 sm:py-2.5 bg-ink/3 hover:bg-ink/6 border border-ink/10 hover:border-ink/25 rounded-full text-ink/75 text-xs sm:text-sm font-medium transition-all">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
