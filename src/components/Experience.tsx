import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 border-t border-ink/10 bg-paper-raised">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-baseline gap-2.5 mb-6">
          <span className="font-mono text-sm text-ink/65">03</span>
          <span className="text-sm font-medium text-ink/65">Experience</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-20">Proof, not adjectives.</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 sm:left-6 lg:left-8 top-6 bottom-6 w-px bg-ink/10"></div>

          {experience.map((entry, idx) => (
            <div key={entry.company} className={`relative ${idx < experience.length - 1 ? 'mb-16 sm:mb-20' : ''}`}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                <div className="md:w-32 flex-shrink-0 relative z-10">
                  <div className="font-mono text-xs sm:text-sm text-ink/65 md:text-right bg-paper-raised pr-4 inline-block md:block">{entry.dateRange}</div>
                </div>
                <div className="flex-1">
                  <div className="bg-paper border border-ink/10 rounded-3xl p-8 lg:p-10 hover:border-ink/25 transition-all hover:translate-x-1 shadow-sm flex flex-col md:flex-row gap-8 md:gap-10">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6 gap-2">
                        <h3 className="text-2xl sm:text-3xl font-bold">{entry.title}</h3>
                        <span className="text-accent text-sm font-medium">{entry.company}</span>
                      </div>
                      <ul className="space-y-4 text-ink/65 text-base sm:text-lg leading-relaxed">
                        {entry.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex gap-4">
                            <span className="font-mono text-ink/65 mt-1.5 flex-shrink-0 text-xs">{String(bulletIdx + 1).padStart(2, '0')}</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-row md:flex-col gap-1 md:gap-1 md:w-44 flex-shrink-0 bg-accent/6 rounded-2xl p-5 items-baseline md:items-start self-start">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-accent">{entry.highlight.value}</span>
                      <span className="text-xs text-ink/65 md:mt-1">{entry.highlight.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
