import { RefObject } from 'react';

type HeroProps = {
  heroRef: RefObject<HTMLDivElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const stats = [
  { value: '1,000+', label: 'Merchants served' },
  { value: '20%', label: 'Referral growth' },
  { value: '160+', label: 'Tests shipped' },
  { value: '4+', label: 'Years experience' },
];

const bars = [
  { height: '40%', accent: false },
  { height: '65%', accent: false },
  { height: '50%', accent: false },
  { height: '85%', accent: false },
  { height: '60%', accent: false },
  { height: '100%', accent: true },
];

export function Hero({ heroRef, onMouseEnter, onMouseLeave }: HeroProps) {
  return (
    <section ref={heroRef} id="home" className="relative min-h-dvh h-auto flex items-center px-6 lg:px-16 max-w-[1400px] mx-auto pt-28 pb-20">
      <div className="w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

        <div className="flex-1 max-w-xl space-y-7">
          <div className="hero-badge flex flex-wrap gap-2">
            <span className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full border border-ink/15 text-ink/60">Senior Frontend Engineer</span>
            <span className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full border border-ink/15 text-ink/60">Lagos, Nigeria</span>
          </div>

          <h1 className="hero-title font-display text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.1] font-normal perspective-[1000px]">
            Interfaces that carry <em className="italic">real weight.</em>
          </h1>

          <p className="hero-desc text-base sm:text-lg text-ink/60 leading-relaxed">
            4+ years building fintech and SaaS products used by thousands. React interfaces, NestJS backends, shipped end to end.
          </p>

          <div className="hero-cta flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="px-7 py-3.5 bg-accent text-paper text-sm sm:text-base font-medium rounded-full hover:bg-accent/90 transition-colors"
            >
              View the work ↗
            </a>
            <a
              href="/assets/resume.pdf"
              download
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="px-7 py-3.5 border border-ink/20 text-ink text-sm sm:text-base font-medium rounded-full hover:bg-ink/5 transition-colors"
            >
              Download résumé ↓
            </a>
          </div>

          <div className="hero-bottom flex flex-wrap gap-8 pt-6 border-t border-ink/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-mono text-xl sm:text-2xl font-bold text-accent">{s.value}</span>
                <span className="text-xs text-ink/50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg flex flex-col gap-3.5">
          <div
            className="relative h-[420px] sm:h-[480px] rounded-2xl border border-ink/10 bg-paper-raised overflow-hidden p-8 sm:p-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(rgba(27,25,18,0.05) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(27,25,18,0.05) 0 1px, transparent 1px 40px)',
            }}
          >
            <div className="absolute top-16 left-10 w-52 h-44 bg-accent/8 rounded-xl -rotate-3" />
            <div className="absolute inset-8 top-12 rounded-xl bg-paper-raised border border-ink/10 shadow-xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ink/15" />
                <span className="w-2 h-2 rounded-full bg-ink/15" />
                <span className="w-2 h-2 rounded-full bg-ink/15" />
                <span className="h-2 w-1/3 bg-ink/10 rounded ml-2" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="h-2.5 w-[85%] bg-ink/10 rounded" />
                <span className="h-2.5 w-[65%] bg-ink/10 rounded" />
                <span className="h-2.5 w-[40%] bg-accent rounded" />
              </div>
              <div className="flex items-end gap-2 flex-grow">
                {bars.map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm ${bar.accent ? 'bg-accent' : 'bg-accent/8'}`}
                    style={{ height: bar.height }}
                  />
                ))}
              </div>
            </div>
            <span className="absolute bottom-6 right-6 w-3.5 h-3.5 rounded-full border-2 border-accent" />
          </div>
          <span className="font-mono text-xs text-ink/40 self-end">A system, not a screenshot.</span>
        </div>

      </div>
    </section>
  );
}
