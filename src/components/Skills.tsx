import { skillCategories } from '@/data/skills';

type SkillsProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function Skills({ onMouseEnter, onMouseLeave }: SkillsProps) {
  return (
    <section id="skills" className="relative py-20 sm:py-28 border-t border-white/10 bg-black z-30">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="w-8 h-px bg-white/40"></span>
          <span className="text-xs sm:text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 02 • EXPERTISE</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-16 perspective-[1000px]">Tools & Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10">
          {skillCategories.map((category) => (
            <div key={category.label} className="group">
              <div className="text-white/50 text-xs sm:text-sm font-bold tracking-[2px] mb-6 uppercase">{category.label}</div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <div key={skill} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="px-4 py-2 sm:px-6 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full text-white/80 text-xs sm:text-sm font-medium transition-all">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
