'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);


  // // Update pill position when active section changes
  useEffect(() => {
    const activeElement = navRefs.current[activeSection];
    if (activeElement) {
      setPillStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeSection]);

  useEffect(() => {
    // =========================
    // LENIS
    // =========================

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // =========================
    // SMOOTH ANCHORS
    // =========================

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');

      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href === '#' ? 0 : href;
        lenis.scrollTo(targetId);
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick as any);
    });

    // =========================
    // CURSOR
    // =========================

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to(cursorOuterRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      });

      gsap.to(cursorInnerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // =========================
    // HERO CINEMATIC REVEAL
    // =========================

    const heroTitle = new SplitText('.hero-title', {
      type: 'lines,chars',
      linesClass: 'hero-line',
    });

    const heroDesc = new SplitText('.hero-desc', {
      type: 'lines',
    });

    gsap.set(heroTitle.chars, {
      yPercent: 120,
      rotateX: -90,
      transformOrigin: '0% 50% -50',
      opacity: 0,
    });

    gsap.set(heroDesc.lines, {
      yPercent: 100,
      opacity: 0,
    });

    const heroTl = gsap.timeline({
      defaults: {
        ease: 'expo.out',
      },
    });

    heroTl
      .fromTo(
        '.hero-badge',
        {
          opacity: 0,
          y: 20,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
        }
      )

      .to(
        heroTitle.chars,
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          stagger: 0.018,
          duration: 0.85,
          ease: 'power4.out',
        },
        '-=0.4'
      )

      .to(
        heroDesc.lines,
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
        },
        '-=1'
      )

      .fromTo(
        '.hero-cta a',
        {
          opacity: 0,
          y: 30,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 1,
          ease: 'power4.out',
        },
        '-=0.7'
      )

      .fromTo(
        '.hero-bottom',
        {
          opacity: 0,
          y: 80,
          scale: 0.96,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.8,
          ease: 'expo.out',
        },
        '-=1'
      );

    // =========================
    // ABOUT TITLE
    // =========================

    const aboutTitleSplit = new SplitText('.about-title', {
      type: 'lines,chars',
      linesClass: 'hero-line',
    });

    gsap.set(aboutTitleSplit.chars, {
      yPercent: 120,
      rotateX: -90,
      transformOrigin: '0% 50% -50',
      opacity: 0,
    });

    gsap.to(aboutTitleSplit.chars, {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
      },
      yPercent: 0,
      rotateX: 0,
      opacity: 1,
      stagger: 0.018,
      duration: 0.85,
      ease: 'power4.out',
    });

    // =========================
    // CONTACT TITLE
    // =========================

    const contactSplit = new SplitText('.contact-heading', {
      type: 'lines,chars',
      linesClass: 'hero-line',
    });

    gsap.set(contactSplit.chars, {
      yPercent: 120,
      rotateX: -90,
      transformOrigin: '0% 50% -50',
      opacity: 0,
    });

    gsap.to(contactSplit.chars, {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
      },
      yPercent: 0,
      rotateX: 0,
      opacity: 1,
      stagger: 0.018,
      duration: 0.85,
      ease: 'power4.out',
    });

    // =========================
    // PROJECT TITLES
    // =========================

    gsap.utils.toArray('.project-title').forEach((title: any) => {
      const split = new SplitText(title, {
        type: 'lines,chars',
        linesClass: 'hero-line',
      });

      gsap.set(split.chars, {
        yPercent: 120,
        rotateX: -90,
        transformOrigin: '0% 50% -50',
        opacity: 0,
      });

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: title,
          start: 'top 90%',
        },
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        stagger: 0.018,
        duration: 0.85,
        ease: 'power4.out',
      });
    });
    // Add same animation to Experience and Skills titles
    ['#experience h2', '#skills h2'].forEach((selector) => {
      const el = document.querySelector(selector);
      if (el) {
        const split = new SplitText(el, {
          type: 'lines,chars',
          linesClass: 'hero-line',
        });
        gsap.set(split.chars, {
          yPercent: 120,
          rotateX: -90,
          transformOrigin: '0% 50% -50',
          opacity: 0,
        });
        gsap.to(split.chars, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          stagger: 0.018,
          duration: 0.85,
          ease: 'power4.out',
        });
      }
    });

    // =========================
    // STATS
    // =========================

    gsap.from('.stat-number', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 65%',
      },
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 1.4,
      ease: 'expo.out',
    });

    // =========================
    // MAGNETIC HEADINGS
    // =========================

    gsap.utils.toArray<HTMLElement>('h2').forEach((heading) => {
      heading.addEventListener('mousemove', (e) => {
        const rect = heading.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(heading, {
          x: x * 0.03,
          y: y * 0.03,
          duration: 1,
          ease: 'power3.out',
        });
      });

      heading.addEventListener('mouseleave', () => {
        gsap.to(heading, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.4)',
        });
      });
    });

    // =========================
    // SCROLL VELOCITY SKEW
    // =========================

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const velocity = self.getVelocity();

        gsap.to('.hero-title, h2', {
          skewY: velocity * 0.0005,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });

    // =========================
    // SECTION REVEALS
    // =========================

    ['about', 'skills', 'experience', 'projects', 'contact'].forEach(
      (sectionId) => {
        gsap.fromTo(
          `#${sectionId} .section-content`,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: `#${sectionId}`,
              start: 'top 75%',
            },
          }
        );

        ScrollTrigger.create({
          trigger: `#${sectionId}`,
          start: 'top 30%',
          end: 'bottom 40%',
          onEnter: () => setActiveSection(sectionId),
          onEnterBack: () => setActiveSection(sectionId),
        });
      }
    );

    // =========================
    // HOME TRACKER
    // =========================

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom 50%',
      onEnter: () => setActiveSection('home'),
      onEnterBack: () => setActiveSection('home'),
    });

    // =========================
    // CLEANUP
    // =========================

    return () => {
      window.removeEventListener('mousemove', onMouseMove);

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick as any);
      });

      ScrollTrigger.getAll().forEach((t: any) => t.kill());

      lenis.destroy();
    };
  }, []);
  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About Me', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const projects = [
    {
      title: "Mainstack Referral Program",
      description: "Dynamic referral system with real-time tracking, multi-currency payouts and seamless sharing flows.",
      url: "https://mainstack.com/referral-program",
      image: "/images/project-thumbnails/referral.png",
      tags: ["Tailwind", "TypeScript", "Next.js"]
    },
    {
      title: "Mainstack Ambassador Program",
      description: "High-conversion ambassador platform with lifetime revenue share and intuitive merchant dashboards.",
      url: "https://mainstack.com/ambassador-program",
      image: "/images/project-thumbnails/ambassador.png",
      tags: ["Next.js", "TypeScript", "GSAP"]
    },
    {
      title: "Collabify",
      description: "Creator-brand collaboration platform with smooth micro-interactions and early-access onboarding.",
      url: "https://usecollabify.com/",
      image: "/images/project-thumbnails/collabify.png",
      tags: ["Next.js", "Tailwind", "TypeScript"]
    },
    {
      title: "Mainstack Link-In-Bio",
      description: "Customizable, high-performance link-in-bio platform for modern creators and entrepreneurs.",
      url: "https://mainstack.com/products/link-in-bio",
      image: "/images/project-thumbnails/link-in-bio.png",
      tags: ["GSAP", "Next.js", "Design Systems"]
    },
    {
      title: "Mainstack Invoicing",
      description: "Streamlined professional invoicing and payment tracking for global freelancers and businesses.",
      url: "https://mainstack.com/products/invoicing",
      image: "/images/project-thumbnails/invoice.png",
      tags: ["TypeScript", "Next.js", "Tailwind"]
    }
  ];

  const handleMouseEnter = () => {
    gsap.to(cursorOuterRef.current, { scale: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid white', duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorOuterRef.current, { scale: 1, backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.5)', duration: 0.3 });
  };

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden font-sans selection:bg-white selection:text-black font-medium">
      {/* 🔴 Custom Project Cursor */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />

      {/* Full Background Cinematic Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Cinematic Background"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
      </div>

      {/* Modern Floating Navbar */}
      <nav className="fixed top-4 sm:top-6 left-0 right-0 z-[100] px-4 md:px-6 max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-linear-to-br from-blue-500 to-emerald-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            M
          </div>
          <span className="text-lg sm:text-xl font-medium tracking-wide">Michael.</span>
        </div>

        {/* Dynamic Nav Pill Navigation */}
        <div className="hidden lg:flex items-center bg-white/[0.08] backdrop-blur-lg border border-white/10 rounded-full p-1.5 shadow-2xl relative">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              ref={(el) => { navRefs.current[item.id] = el; }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`px-5 py-2 text-sm font-medium transition-colors relative z-10 ${activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
            >
              {item.label}
            </a>
          ))}
          <div
            className="absolute h-[calc(100%-12px)] top-[6px] bg-white/15 rounded-full transition-all duration-300 ease-in-out z-0"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`
            }}
          />
        </div>

        <a
          href="#contact"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="px-5 py-2.5 sm:px-7 sm:py-3.5 bg-white text-black text-xs sm:text-sm font-medium rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
        >
          Get in touch ↗
        </a>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative z-20 min-h-dvh  h-auto flex flex-col justify-center px-6 lg:px-20 max-w-[1400px] mx-auto pt-24 pb-40 sm:pb-45 overflow-hidden">
        <div className="max-w-4xl space-y-6 sm:space-y-8 relative z-20">
          <div className="hero-badge inline-flex items-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs sm:text-sm font-medium text-white/80">
            Frontend Engineer • 4+ Years
          </div>
          <h1 className="hero-title text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1.1] sm:leading-[1.05] tracking-tight font-bold perspective-[1000px]">
            Michael <span className="text-white/40">Chinye</span>
          </h1>

          <p className="hero-desc text-base sm:text-[1.3rem] text-white/70 max-w-xl leading-relaxed">
            Frontend Engineer with 4+ years building high-performance web apps in React, TypeScript & Next.js for fintech, e-commerce & SaaS.
          </p>
          <div className="hero-cta flex flex-wrap gap-4 sm:gap-5 pt-2 sm:pt-4">
            <a
              href="#projects"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-black text-sm sm:text-base font-medium rounded-full flex items-center gap-3 hover:scale-105 transition-transform"
            >
              View My Work ↗
            </a>
            <a
              href="/assets/resume.pdf"
              download
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
              <h3 className="text-xl sm:text-2xl font-bold mt-2">©2026</h3>
              <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-[240px]">Crafting digital experiences that engage users and drive real business results.</p>
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

      {/* About Section */}
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
                <p>Frontend Engineer with 4+ years crafting scalable, high-performance web applications.</p>
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
                  quality={100}
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

      {/* Skills Section */}
      <section id="skills" className="relative py-20 sm:py-28 border-t border-white/10 bg-black z-30">
        <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-12 sm:mb-16">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-xs sm:text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 02 • EXPERTISE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-16 perspective-[1000px]">Tools & Technologies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10">
            <div className="group">
              <div className="text-orange-400 text-xs sm:text-sm font-bold tracking-[2px] mb-6 uppercase">FRONTEND</div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GSAP', 'HTML5', 'CSS3'].map((skill) => (
                  <div key={skill} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="px-4 py-2 sm:px-6 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full text-white/80 text-xs sm:text-sm font-medium transition-all">{skill}</div>
                ))}
              </div>
            </div>
            <div className="group">
              <div className="text-emerald-400 text-xs sm:text-sm font-bold tracking-[2px] mb-6 uppercase">BACKEND & APIS</div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {['Node.js', 'Express.js', 'REST APIs'].map((skill) => (
                  <div key={skill} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="px-4 py-2 sm:px-6 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full text-white/80 text-xs sm:text-sm font-medium transition-all">{skill}</div>
                ))}
              </div>
            </div>
            <div className="group">
              <div className="text-blue-400 text-xs sm:text-sm font-bold tracking-[2px] mb-6 uppercase">DATABASES & CMS</div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {['MongoDB', 'MSSQL', 'Firebase', 'Strapi', 'Sanity CMS'].map((skill) => (
                  <div key={skill} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="px-4 py-2 sm:px-6 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full text-white/80 text-xs sm:text-sm font-medium transition-all">{skill}</div>
                ))}
              </div>
            </div>
            <div className="group">
              <div className="text-white/50 text-xs sm:text-sm font-bold tracking-[2px] mb-6 uppercase">CORE EXPERTISE</div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {['Architecture', 'Systems', 'Optimisation', 'Responsiveness', 'Accessibility'].map((skill) => (
                  <div key={skill} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="px-4 py-2 sm:px-6 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full text-white/80 text-xs sm:text-sm font-medium transition-all">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 sm:py-28 border-t border-white/10 bg-black z-30">
        <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-16">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-xs sm:text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 03 • JOURNEY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-20 perspective-[1000px]">Professional Experience</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-4 sm:left-6 lg:left-8 top-6 bottom-6 w-px bg-white/10"></div>

            <div className="relative mb-16 sm:mb-20">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                <div className="md:w-32 flex-shrink-0 relative z-10">
                  <div className="text-xs sm:text-sm font-bold text-white/40 md:text-right bg-black pr-4 inline-block md:block">JUN 2023 — MAR 2026</div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-white/30 transition-all hover:translate-x-1 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6 gap-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">Frontend Engineer</h3>
                      <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Mainstack</span>
                    </div>
                    <ul className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                      <li className="flex gap-4"><span className="text-white/30 mt-1.5 flex-shrink-0 text-xs">01</span><span>Developed discount management system and multi-channel payout system.</span></li>
                      <li className="flex gap-4"><span className="text-white/30 mt-1.5 flex-shrink-0 text-xs">02</span><span>Built contact card with Google Contacts integration and automated email system.</span></li>
                      <li className="flex gap-4"><span className="text-white/30 mt-1.5 flex-shrink-0 text-xs">03</span><span>Created dynamic blog platform using Strapi CMS and refactored legacy codebase.</span></li>
                      <li className="flex gap-4"><span className="text-white/30 mt-1.5 flex-shrink-0 text-xs">04</span><span>Contributed to scalable design system and optimized 6+ applications.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                <div className="md:w-32 flex-shrink-0 relative z-10">
                  <div className="text-xs sm:text-sm font-bold text-white/40 md:text-right bg-black pr-4 inline-block md:block">SEP 2022 — MAY 2023</div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-white/30 transition-all hover:translate-x-1 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6 gap-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">Junior Frontend Engineer</h3>
                      <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Skyt Technologies</span>
                    </div>
                    <ul className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                      <li className="flex gap-4"><span className="text-white/30 mt-1.5 flex-shrink-0 text-xs">01</span><span>Built reusable UI component library in React.</span></li>
                      <li className="flex gap-4"><span className="text-white/30 mt-1.5 flex-shrink-0 text-xs">02</span><span>Developed logistics web application connecting transporters and clients.</span></li>
                      <li className="flex gap-4"><span className="text-white/30 mt-1.5 flex-shrink-0 text-xs">03</span><span>Integrated third-party REST APIs for real-time data flow.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 sm:py-28 border-t border-white/10 bg-black z-30">
        <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-16">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-xs sm:text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 04 • SELECTED WORK</span>
          </div>
          <h2 className="project-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-20 perspective-[1000px]">Featured Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group bg-white/[0.03] border border-white/10 hover:border-white/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 block shadow-2xl"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{project.title}</h3>
                    <span className="text-emerald-400 text-[10px] sm:text-xs font-bold px-3 py-1 bg-emerald-400/10 rounded-full flex-shrink-0 uppercase tracking-widest">LIVE</span>
                  </div>
                  <p className="text-white/60 text-sm sm:text-base mb-8 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <span key={tag} className="text-[10px] tracking-wider px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/40 font-bold uppercase">{tag}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 sm:py-28 lg:py-40 border-t border-white/10 bg-black z-30">
        <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="w-8 h-px bg-white/40"></span>
              <span className="text-xs sm:text-sm uppercase tracking-[2px] text-white/60 font-bold">CHAPTER 05 • CONNECT</span>
              <span className="w-8 h-px bg-white/40"></span>
            </div>
            <h2 className="contact-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1] mb-10 text-white perspective-[1000px]">Let’s build something <span className="text-white/30 italic">exceptional.</span></h2>
            <p className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-16 leading-relaxed">Currently open to senior opportunities, collaborations, and high-impact freelance projects.</p>

            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 mx-auto max-w-2xl shadow-2xl">
              <div className="space-y-6 sm:space-y-8">
                <a href="mailto:michaelchinye2018@gmail.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="block group">
                  <div className="flex items-center justify-between text-left">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">PRIMARY EMAIL</div>
                      <div className="text-lg sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors break-all sm:break-normal">michaelchinye2018@gmail.com</div>
                    </div>
                    <span className="text-2xl sm:text-4xl text-white/20 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">↗</span>
                  </div>
                </a>
                <div className="h-px bg-white/10"></div>
                <a href="https://linkedin.com/in/chinyemichael" target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="block group">
                  <div className="flex items-center justify-between text-left">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">PROFESSIONAL NETWORK</div>
                      <div className="text-lg sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors break-all sm:break-normal">linkedin.com/in/chinyemichael</div>
                    </div>
                    <span className="text-2xl sm:text-4xl text-white/20 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">↗</span>
                  </div>
                </a>
                <div className="h-px bg-white/10"></div>
                <a href="https://wa.me/2347087509689" target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="block group">
                  <div className="flex items-center justify-between text-left">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">WHATSAPP</div>
                      <div className="text-lg sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors break-all sm:break-normal">+234 708 750 9689</div>
                    </div>
                    <span className="text-2xl sm:text-4xl text-white/20 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">↗</span>
                  </div>
                </a>
                <div className="h-px bg-white/10"></div>
                <div className="flex items-center justify-between text-left">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">CURRENT LOCATION</div>
                    <div className="text-lg sm:text-2xl font-bold text-white">Lagos, Nigeria</div>
                  </div>
                  <div className="px-4 py-2 bg-emerald-400/10 text-emerald-400 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-400/20">Open to work</div>
                </div>
              </div>
            </div>
            <p className="text-white/30 text-xs sm:text-sm mt-12 font-medium">Or simply say hi — I typically respond within 24 hours.</p>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-black py-12 md:py-16 z-30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-12 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white/30">
            <div className="font-bold tracking-tight text-white/50 text-lg">Michael Chinye</div>
            <div className="hidden md:block w-px h-4 bg-white/10"></div>
            <div className="font-medium">Frontend Engineer • Lagos, Nigeria</div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-white/40 uppercase tracking-[2px] font-bold text-[10px]">
            {navItems.filter(i => i.id !== 'home').map(item => (
              <a key={item.id} href={item.href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-white transition-colors">{item.label}</a>
            ))}
          </div>
          <a href="https://linkedin.com/in/chinyemichael" target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-2 text-white/40 hover:text-white transition-all font-bold tracking-widest uppercase text-xs">
            <span>LinkedIn</span><span className="text-xl">↗</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
