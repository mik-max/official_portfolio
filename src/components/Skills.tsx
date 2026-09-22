import { skillCategories } from '@/data/skills';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';

const totalSkills = skillCategories.reduce((sum, category) => sum + category.skills.length, 0);
const categoryCount = skillCategories.length;
const typescriptCount = projects.filter((p) => p.tags.includes('TypeScript')).length;
const gsapCount = projects.filter((p) => p.tags.includes('GSAP')).length;
const testsHighlight = experience.find((e) => e.highlight.label.toLowerCase().includes('test'))?.highlight.value ?? '160+';

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-paper">
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-40 sm:h-56 bg-linear-to-b from-paper-raised to-transparent pointer-events-none" />
      <div className="section-content relative max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-baseline gap-2.5 mb-6">
          <span className="font-mono text-sm text-ink/65">02</span>
          <span className="text-sm font-medium text-ink/65">Skills</span>
        </div>

        <div className="xl:flex xl:items-start xl:gap-16">
          <div className="max-w-3xl xl:flex-shrink-0">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14 sm:mb-16">Tools &amp; <span className="text-accent">technologies</span></h2>
            <div>
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

          {/* Blueprint-schematic rail — desktop only, mobile/tablet keep the list alone. Sized to flex into whatever width remains next to the list, never a fixed width. */}
          <div aria-hidden="true" className="hidden xl:block relative flex-1 min-w-0 min-h-[820px]">
            <div className="font-mono absolute -top-4 -right-2 text-[200px] font-medium leading-none text-ink/5 select-none">{totalSkills}</div>

            <div className="absolute top-5 left-5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-ink/30" />
            <div className="absolute bottom-5 right-5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-ink/30" />

            <div className="absolute top-[90px] left-5 right-5 h-px bg-ink/8" />
            <div className="absolute top-[320px] left-5 right-5 h-px bg-ink/8" />
            <div className="absolute top-[550px] left-5 right-5 h-px bg-ink/8" />

            <div className="absolute top-[160px] left-16 right-8">
              <div className="flex items-center gap-1.5">
                <span className="w-px h-2.5 bg-ink/35 flex-shrink-0" />
                <span className="flex-1 h-px bg-ink/35" />
                <span className="w-px h-2.5 bg-ink/35 flex-shrink-0" />
              </div>
              <div className="font-mono mt-2.5 text-xs text-ink/55 tracking-wide">full-stack range</div>
            </div>

            <div className="absolute top-[370px] left-4 right-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span className="w-9 h-px bg-accent/40 flex-shrink-0" />
              <span className="font-mono text-[13px] text-accent font-medium leading-snug flex-1 min-w-0">{totalSkills} tools · {categoryCount} categories</span>
            </div>

            <div className="absolute top-[460px] left-8 right-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-ink flex-shrink-0" />
              <span className="w-9 h-px bg-ink/30 flex-shrink-0" />
              <span className="font-mono text-[13px] text-ink/70 font-medium leading-snug flex-1 min-w-0">TypeScript in {typescriptCount} of {projects.length} shipped products</span>
            </div>

            <div className="absolute top-[570px] left-4 right-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span className="w-9 h-px bg-accent/40 flex-shrink-0" />
              <span className="font-mono text-[13px] text-accent font-medium leading-snug flex-1 min-w-0">GSAP in {gsapCount} of {projects.length} shipped products</span>
            </div>

            <div className="absolute top-[670px] left-8 right-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-ink flex-shrink-0" />
              <span className="w-9 h-px bg-ink/30 flex-shrink-0" />
              <span className="font-mono text-[13px] text-ink/70 font-medium leading-snug flex-1 min-w-0">Jest + RTL → {testsHighlight} tests shipped</span>
            </div>

            <div className="absolute top-[740px] right-10 w-[18px] h-[18px]">
              <span className="absolute top-1/2 left-0 right-0 h-px bg-ink/35 -translate-y-1/2" />
              <span className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/35 -translate-x-1/2" />
            </div>

            <div className="font-mono absolute bottom-5 left-5 text-[11px] text-ink/40 tracking-wide">{totalSkills} TOOLS ACROSS {categoryCount} CATEGORIES</div>
          </div>
        </div>
      </div>
    </section>
  );
}
