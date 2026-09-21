import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 border-t border-white/10 bg-black z-30">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-center gap-3 mb-16">
          <span className="w-8 h-px bg-white/40"></span>
          <span className="text-xs sm:text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 03 • JOURNEY</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-20 perspective-[1000px]">Professional Experience</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 sm:left-6 lg:left-8 top-6 bottom-6 w-px bg-white/10"></div>

          {experience.map((entry, idx) => (
            <div key={entry.company} className={`relative ${idx < experience.length - 1 ? 'mb-16 sm:mb-20' : ''}`}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                <div className="md:w-32 flex-shrink-0 relative z-10">
                  <div className="text-xs sm:text-sm font-bold text-white/40 md:text-right bg-black pr-4 inline-block md:block">{entry.dateRange}</div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-white/30 transition-all hover:translate-x-1 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6 gap-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{entry.title}</h3>
                      <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">{entry.company}</span>
                    </div>
                    <ul className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                      {entry.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex gap-4">
                          <span className="text-white/30 mt-1.5 flex-shrink-0 text-xs">{String(bulletIdx + 1).padStart(2, '0')}</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
