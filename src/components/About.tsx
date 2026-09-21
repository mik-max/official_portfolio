import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-white/10 bg-black/80  z-30">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[1px] text-white/60">
              <span className="w-8 h-px bg-white/40"></span>
              CHAPTER 01
            </div>
            <h2 className="about-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight perspective-[1000px]">Hi, I’m Michael.</h2>
            <div className="max-w-2xl text-white/80 text-base sm:text-lg lg:text-[1.35rem] leading-relaxed space-y-6">
              <p>Senior Frontend Engineer with 4+ years crafting scalable, high-performance web applications.</p>
              <p>I specialize in React, TypeScript, Next.js and modern design systems — turning complex fintech, e-commerce, and SaaS challenges into intuitive, production-ready experiences.</p>
              <p className="text-white/60 text-base sm:text-lg italic">When I’m not coding, you’ll find me exploring new UI patterns, refining animations, or thinking about how to make digital products feel alive.</p>
            </div>
            <div className=" flex flex-wrap gap-8 sm:gap-12 pt-4">
              <div><div className="stat-number text-3xl sm:text-4xl font-light text-white">4+</div><div className="stat-label text-[10px] sm:text-xs text-white/50 tracking-widest uppercase mt-1">YEARS EXPERIENCE</div></div>
              <div><div className="stat-number text-3xl sm:text-4xl font-light text-white">6+</div><div className="stat-label text-[10px] sm:text-xs text-white/50 tracking-widest uppercase mt-1">PROJECTS SHIPPED</div></div>
              <div><div className="stat-number text-3xl sm:text-4xl font-light text-white">∞</div><div className="stat-label text-[10px] sm:text-xs text-white/50 tracking-widest uppercase mt-1">CUPS OF COFFEE</div></div>
            </div>
          </div>
          <div className="lg:col-span-5 relative order-1 lg:order-2 group">
            {/* Liquid Hover Card */}
            <div className="aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-w-md mx-auto lg:max-w-none transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/images/about-photo.jpg"
                alt="Michael Chinye"
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />

              {/* Visual "Liquid" distortion overlay (simplified SVG filter could be added here) */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
