import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 border-t border-ink/10 bg-paper">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-baseline gap-2.5 mb-6">
          <span className="font-mono text-sm text-ink/65">02</span>
          <span className="text-sm font-medium text-ink/65">Skills</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-12 sm:mb-16">Tools &amp; technologies</h2>

        <div className="rounded-2xl bg-ink overflow-hidden shadow-[0_24px_60px_rgba(27,25,18,0.14)] max-w-3xl">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-paper/8">
            <span className="w-2 h-2 rounded-full bg-paper/20" />
            <span className="w-2 h-2 rounded-full bg-paper/20" />
            <span className="w-2 h-2 rounded-full bg-paper/20" />
            <span className="font-mono text-[11px] text-paper/55 ml-2">stack.json</span>
          </div>
          <div className="font-mono text-sm sm:text-[15px] leading-loose px-6 sm:px-8 py-7 sm:py-8">
            <div className="text-paper/40">{'{'}</div>
            {skillCategories.map((category) => (
              <div key={category.key} className="pl-6 flex flex-wrap items-baseline gap-x-1 gap-y-1">
                <span className="text-accent-light">&quot;{category.key}&quot;</span>
                <span className="text-paper/50">: [</span>
                {category.skills.map((skill, i) => (
                  <span key={skill} className="text-paper">
                    &quot;{skill}&quot;{i < category.skills.length - 1 && <span className="text-paper/50">,</span>}
                  </span>
                ))}
                <span className="text-paper/50">],</span>
              </div>
            ))}
            <div className="text-paper/40">{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
