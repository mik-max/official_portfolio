import { RefObject } from 'react';

type HeroProps = {
  heroRef: RefObject<HTMLDivElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function Hero({ heroRef, onMouseEnter, onMouseLeave }: HeroProps) {
  return (
    <section ref={heroRef} id="home" className="relative z-20 min-h-dvh  h-auto flex flex-col justify-center px-6 lg:px-20 max-w-[1400px] mx-auto pt-24 pb-40 sm:pb-45 overflow-hidden">
      <div className="max-w-4xl space-y-6 sm:space-y-8 relative z-20">
        <div className="hero-badge inline-flex items-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs sm:text-sm font-medium text-white/80">
          Senior Frontend Engineer • 4+ Years
        </div>
        <h1 className="hero-title text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1.1] sm:leading-[1.05] tracking-tight font-bold perspective-[1000px]">
          Michael <span className="text-white/40">Chinye</span>
        </h1>

        <p className="hero-desc text-base sm:text-[1.3rem] text-white/70 max-w-xl leading-relaxed">
          Senior Frontend Engineer with 4+ years building high-performance web apps in React, TypeScript & Next.js for fintech, e-commerce & SaaS.
        </p>
        <div className="hero-cta flex flex-wrap gap-4 sm:gap-5 pt-2 sm:pt-4">
          <a
            href="#projects"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-black text-sm sm:text-base font-medium rounded-full flex items-center gap-3 hover:scale-105 transition-transform"
          >
            View My Work ↗
          </a>
          <a
            href="/assets/resume.pdf"
            download
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white text-sm sm:text-base font-medium rounded-full flex items-center gap-3 transition-colors"
          >
            Download CV ↓
          </a>
        </div>
      </div>

      {/* Hero Bottom Info */}
      <div className="hero-bottom mt-16 sm:mt-20 lg:absolute lg:bottom-8 2xl:bottom-12 lg:left-20 lg:right-20 z-20 relative">
        <div className="rounded-3xl sm:rounded-4xl bg-linear-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 sm:p-8 grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 shadow-2xl">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
            <h3 className="text-xl sm:text-2xl font-bold mt-2">Collaboration</h3>
            <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-[240px]">Partnering closely with product, design and engineering teams to ship features that actually move the needle.</p>
          </div>
          <div className="relative pl-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 lg:pl-16">
            <div className="absolute left-0 lg:left-1 top-9 md:top-1 w-4 h-4 border-t border-l border-white/40" />
            <h3 className="text-xl sm:text-2xl font-bold mt-2">Performance</h3>
            <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-[240px]">Optimized high-performance applications for fintech, e-commerce & SaaS platforms.</p>
          </div>
          <div className="relative pl-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 lg:pl-16">
            <div className="absolute left-1 lg:left-1 top-9 md:top-1 w-4 h-4 border-t border-l border-white/40" />
            <h3 className="text-xl sm:text-2xl font-bold mt-2">Design Systems</h3>
            <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-[240px]">Building scalable, reusable component libraries and intuitive user interfaces.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
