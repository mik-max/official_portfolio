// 'use client';

// import { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.fromTo('.hero-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
//       .fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '-=0.8')
//       .fromTo('.hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.9')
//       .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15 }, '-=0.8')
//       .fromTo('.hero-bottom', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.5');

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <main className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
//       {/* Full Background Cinematic Image - V2 (More natural and resembles user photo) */}
//       <div className="fixed inset-0 z-0">
//         <Image
//           src="/images/cinematic-bg-v2.png"
//           alt="Cinematic Background"
//           fill
//           className="object-cover object-right md:object-center"
//           priority
//           quality={100}
//         />
//         {/* Layered dark gradients for text readability and moody aesthetic - Clean natural feel */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
//         <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
//       </div>

//       {/* Modern Floating Navbar */}
//       <nav className="fixed top-6 left-0 right-0 z-50 px-6 max-w-[1400px] mx-auto w-full flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
//             M
//           </div>
//           <span className="text-xl font-medium tracking-wide">Michael.</span>
//         </div>

//         {/* Center Pill Navigation */}
//         <div className="hidden lg:flex items-center gap-8 px-8 py-3.5 bg-white/[0.08] backdrop-blur-lg border border-white/10 rounded-full text-sm font-medium text-white/80 shadow-2xl">
//           <div className="px-4 py-1.5 bg-white/10 rounded-full text-white">Home</div>
//           <a href="#about" className="hover:text-white transition-colors">About Me</a>
//           <a href="#projects" className="hover:text-white transition-colors">Projects</a>
//           <a href="#skills" className="hover:text-white transition-colors">Skills</a>
//           <a href="#contact" className="hover:text-white transition-colors">Contact</a>
//         </div>

//         {/* Right CTA */}
//         <a
//           href="#contact"
//           className="px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
//         >
//           Get in touch ↗
//         </a>
//       </nav>

//       {/* HERO SECTION */}
//       <section ref={heroRef} className="relative z-20 min-h-[100dvh] flex flex-col justify-center px-6 lg:px-20 max-w-[1400px] mx-auto pt-20">

//         <div className="max-w-3xl space-y-8 relative z-20">
//           {/* Top Badge */}
//           <div className="hero-badge inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
//             Frontend. Engineering. Excellence.
//           </div>

//           {/* Epic Main Title - Clean typography */}
//           <h1 className="hero-title text-[3.2rem] md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-bold">
//             Engineering That Speaks in <span className="text-white/40">Structure</span> and Light
//           </h1>

//           {/* Description */}
//           <p className="hero-desc text-lg md:text-[1.3rem] text-white/70 max-w-xl leading-relaxed">
//             I fuse deep technical knowledge with cutting-edge design to build unforgettable web experiences that look beautiful and perform flawlessly.
//           </p>

//           {/* CTA Buttons - More neutral style */}
//           <div className="hero-cta flex flex-wrap gap-5 pt-4">
//             <a
//               href="#projects"
//               className="px-8 py-4 bg-white text-black font-medium rounded-full flex items-center gap-3 hover:scale-105 transition-transform"
//             >
//               View My Work ↗
//             </a>
//             <a
//               href="#resume"
//               className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white font-medium rounded-full flex items-center gap-3 transition-colors"
//             >
//               Watch Video ▷
//             </a>
//           </div>
//         </div>

//         {/* Bottom Info Glass Panel */}
//         <div className="hero-bottom absolute bottom-8 left-6 right-6 lg:left-20 lg:right-20 z-20">
//           <div className="rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start md:items-center shadow-2xl">

//             <div className="relative pl-6 flex-1">
//               <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
//               <h3 className="text-2xl font-bold mt-2">©2025</h3>
//               <p className="text-sm text-white/60 mt-2 max-w-[240px]">
//                 Engineering web experiences that engage users and drive tangible results.
//               </p>
//             </div>

//             <div className="hidden md:block w-px h-20 bg-white/10" />

//             <div className="relative pl-6 flex-1">
//               <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
//               <h3 className="text-2xl font-bold mt-2">Performance</h3>
//               <p className="text-sm text-white/60 mt-2 max-w-[240px]">
//                 Building extremely fast, lightweight, and scalable web applications.
//               </p>
//             </div>

//             <div className="hidden md:block w-px h-20 bg-white/10" />

//             <div className="relative pl-6 flex-1">
//               <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
//               <h3 className="text-2xl font-bold mt-2">UI/UX</h3>
//               <p className="text-sm text-white/60 mt-2 max-w-[240px]">
//                 Thoughtfully designed interfaces that improve interaction and user flow.
//               </p>
//             </div>

//           </div>
//         </div>

//       </section>
//     </main>
//   );
// }

'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo('.hero-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '-=0.8')
      .fromTo('.hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.9')
      .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15 }, '-=0.8')
      .fromTo('.hero-bottom', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.5');

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      {/* Full Background Cinematic Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Cinematic Background"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
        {/* Layered dark gradients for mood and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
      </div>

      {/* Modern Floating Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 max-w-[1400px] mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            M
          </div>
          <span className="text-xl font-medium tracking-wide">Michael.</span>
        </div>

        {/* Center Pill Navigation */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-3.5 bg-white/[0.08] backdrop-blur-lg border border-white/10 rounded-full text-sm font-medium text-white/80 shadow-2xl">
          <div className="px-4 py-1.5 bg-white/10 rounded-full text-white">Home</div>
          <a href="#about" className="hover:text-white transition-colors">About Me</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right CTA */}
        <a
          href="#contact"
          className="px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
        >
          Get in touch ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative z-20 min-h-[100dvh] flex flex-col justify-center px-6 lg:px-20 max-w-[1400px] mx-auto pt-20">

        <div className="max-w-3xl space-y-8 relative z-20">
          {/* Top Badge */}
          <div className="hero-badge inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
            Frontend Engineer • 4+ Years
          </div>

          {/* Epic Main Title */}
          <h1 className="hero-title text-[3.2rem] md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-bold">
            Michael <span className="text-white/40">Chinye</span>
          </h1>

          {/* Personal Description (infused from your resume) */}
          <p className="hero-desc text-lg md:text-[1.3rem] text-white/70 max-w-xl leading-relaxed">
            Frontend Engineer with 4+ years building high-performance web apps in React, TypeScript & Next.js for fintech, e-commerce & SaaS.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-wrap gap-5 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-medium rounded-full flex items-center gap-3 hover:scale-105 transition-transform"
            >
              View My Work ↗
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white font-medium rounded-full flex items-center gap-3 transition-colors"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        {/* Bottom Info Glass Panel - Updated with your real strengths */}
        <div className="hero-bottom absolute bottom-8 left-6 right-6 lg:left-20 lg:right-20 z-20">
          <div className="rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start md:items-center shadow-2xl">

            <div className="relative pl-6 flex-1">
              <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
              <h3 className="text-2xl font-bold mt-2">©2026</h3>
              <p className="text-sm text-white/60 mt-2 max-w-[240px]">
                Crafting digital experiences that engage users and drive real business results.
              </p>
            </div>

            <div className="hidden md:block w-px h-20 bg-white/10" />

            <div className="relative pl-6 flex-1">
              <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
              <h3 className="text-2xl font-bold mt-2">Performance</h3>
              <p className="text-sm text-white/60 mt-2 max-w-[240px]">
                Optimized high-performance applications for fintech, e-commerce &amp; SaaS platforms.
              </p>
            </div>

            <div className="hidden md:block w-px h-20 bg-white/10" />

            <div className="relative pl-6 flex-1">
              <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
              <h3 className="text-2xl font-bold mt-2">Design Systems</h3>
              <p className="text-sm text-white/60 mt-2 max-w-[240px]">
                Building scalable, reusable component libraries and intuitive user interfaces.
              </p>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}
