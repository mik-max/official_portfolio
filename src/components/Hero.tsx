import { RefObject } from 'react';

type HeroProps = {
  heroRef: RefObject<HTMLDivElement | null>;
};

const stats = [
  { value: '1,000+', label: 'Merchants served' },
  { value: '20%', label: 'Referral growth' },
  { value: '160+', label: 'Tests shipped' },
  { value: '4+', label: 'Years experience' },
];

const buildLines = [
  '1,000+ merchants served',
  '20% referral growth',
  '160+ tests passing',
];

export function Hero({ heroRef }: HeroProps) {
  return (
    <section ref={heroRef} id="home" className="relative min-h-dvh h-auto flex items-center px-6 lg:px-20 max-w-[1400px] mx-auto pt-28 pb-20">
      <div className="w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

        <div className="flex-1 max-w-xl space-y-7">
          <div className="hero-badge flex flex-wrap gap-2">
            <span className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full border border-ink/15 text-ink/60">Senior Frontend Engineer</span>
            <span className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full border border-ink/15 text-ink/60">Lagos, Nigeria</span>
          </div>

          <h1 className="hero-title font-display text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.1] font-bold">
            Interfaces that carry <span className="text-accent">real weight.</span>
          </h1>

          <p className="hero-desc text-base sm:text-lg text-ink/60 leading-relaxed">
            4+ years building fintech and SaaS products used by thousands. React interfaces, NestJS backends, shipped end to end.
          </p>

          <div className="hero-cta flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-accent text-paper text-sm sm:text-base font-medium rounded-full hover:bg-accent/90 transition-colors"
            >
              View the work ↗
            </a>
            <a
              href="/assets/resume.pdf"
              download
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

        <div className="flex-1 w-full max-w-xl flex flex-col gap-3.5">
          <div className="rounded-2xl bg-ink overflow-hidden shadow-[0_24px_60px_rgba(27,25,18,0.22)]">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-paper/8">
              <span className="w-2 h-2 rounded-full bg-paper/20" />
              <span className="w-2 h-2 rounded-full bg-paper/20" />
              <span className="w-2 h-2 rounded-full bg-paper/20" />
              <span className="font-mono text-[11px] text-paper/40 ml-2">build.log</span>
            </div>
            <div className="font-mono text-sm sm:text-[15px] leading-relaxed px-6 sm:px-7 py-7 sm:py-8 flex flex-col gap-4">
              <div className="text-paper/45">$ deploying referral-program...</div>
              {buildLines.map((line) => (
                <div key={line} className="flex gap-2.5">
                  <span className="text-accent-light">✓</span>
                  <span className="text-paper">{line}</span>
                </div>
              ))}
              <div className="text-paper/45 pt-1.5 mt-1 border-t border-paper/8">$ shipped in production ✓</div>
            </div>
          </div>
          <span className="font-mono text-xs text-ink/40 self-end">A build log, not a screenshot.</span>
        </div>

      </div>
    </section>
  );
}
