'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const tl = gsap.timeline();

    tl.fromTo('.hero-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '-=0.8')
      .fromTo('.hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.9')
      .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15 }, '-=0.8')
      .fromTo('.hero-bottom', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.5');

    // Scroll reveal animations
    ['about', 'skills', 'experience', 'projects', 'contact'].forEach(sectionId => {
      gsap.fromTo(`#${sectionId}`,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: 'top 75%',
          }
        }
      );

      // Section tracker for navbar
      ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: 'top 40%',
        end: 'bottom 40%',
        onEnter: () => setActiveSection(sectionId),
        onEnterBack: () => setActiveSection(sectionId),
      });
    });

    // Special case for home
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom 40%',
      onEnter: () => setActiveSection('home'),
      onEnterBack: () => setActiveSection('home'),
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  // Update pill position when active section changes
  useEffect(() => {
    const activeElement = navRefs.current[activeSection];
    if (activeElement) {
      setPillStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeSection]);

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
      </div>

      {/* Modern Floating Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-[100] px-6 max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            M
          </div>
          <span className="text-xl font-medium tracking-wide">Michael.</span>
        </div>

        {/* Dynamic Nav Pill Navigation */}
        <div className="hidden lg:flex items-center bg-white/[0.08] backdrop-blur-lg border border-white/10 rounded-full p-1.5 shadow-2xl relative">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              ref={(el) => { navRefs.current[item.id] = el; }}
              className={`px-5 py-2 text-sm font-medium transition-colors relative z-10 ${activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
            >
              {item.label}
            </a>
          ))}
          {/* Moving background pill */}
          <div
            className="absolute h-[calc(100%-12px)] top-[6px] bg-white/15 rounded-full transition-all duration-300 ease-in-out -z-0"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`
            }}
          />
        </div>

        <a
          href="#contact"
          className="px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
        >
          Get in touch ↗
        </a>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative z-20 min-h-[100dvh] flex flex-col justify-center px-6 lg:px-20 max-w-[1400px] mx-auto pt-20 pb-32">
        <div className="max-w-3xl space-y-8 relative z-20">
          <div className="hero-badge inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
            Frontend Engineer • 4+ Years
          </div>
          <h1 className="hero-title text-[3.2rem] md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-bold">
            Michael <span className="text-white/40">Chinye</span>
          </h1>
          <p className="hero-desc text-lg md:text-[1.3rem] text-white/70 max-w-xl leading-relaxed">
            Frontend Engineer with 4+ years building high-performance web apps in React, TypeScript & Next.js for fintech, e-commerce & SaaS.
          </p>
          <div className="hero-cta flex flex-wrap gap-5 pt-4">
            <a href="#projects" className="px-8 py-4 bg-white text-black font-medium rounded-full flex items-center gap-3 hover:scale-105 transition-transform">
              View My Work ↗
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white font-medium rounded-full flex items-center gap-3 transition-colors">
              Download CV ↓
            </a>
          </div>
        </div>

        {/* Hero Bottom Info - Layout Fixed for MacBook 13 Aspect Ratio */}
        <div className="hero-bottom mt-20 lg:absolute lg:bottom-8 2xl:bottom-12 lg:left-20 lg:right-20 z-20">
          <div className="rounded-4xl bg-linear-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start md:items-center shadow-2xl">
            <div className="relative pl-6 flex-1">
              <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
              <h3 className="text-2xl font-bold mt-2">©2026</h3>
              <p className="text-sm text-white/60 mt-2 max-w-[240px]">Crafting digital experiences that engage users and drive real business results.</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-white/10" />
            <div className="relative pl-6 flex-1">
              <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
              <h3 className="text-2xl font-bold mt-2">Performance</h3>
              <p className="text-sm text-white/60 mt-2 max-w-[240px]">Optimized high-performance applications for fintech, e-commerce & SaaS platforms.</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-white/10" />
            <div className="relative pl-6 flex-1">
              <div className="absolute left-0 top-1 w-4 h-4 border-t border-l border-white/40" />
              <h3 className="text-2xl font-bold mt-2">Design Systems</h3>
              <p className="text-sm text-white/60 mt-2 max-w-[240px]">Building scalable, reusable component libraries and intuitive user interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-28 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[1px] text-white/60">
                <span className="w-8 h-px bg-white/40"></span>
                CHAPTER 01
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">Hi, I’m Michael.</h2>
              <div className="max-w-2xl text-white/80 text-[1.35rem] leading-relaxed space-y-6">
                <p>Frontend Engineer based in Lagos, Nigeria with 4+ years crafting scalable, high-performance web applications.</p>
                <p>I specialize in React, TypeScript, Next.js and modern design systems — turning complex fintech, e-commerce, and SaaS challenges into intuitive, production-ready experiences.</p>
                <p className="text-white/60 text-lg">When I’m not coding, you’ll find me exploring new UI patterns, refining animations, or thinking about how to make digital products feel alive.</p>
              </div>
              <div className="flex gap-12 pt-6">
                <div><div className="text-4xl font-light text-white">4+</div><div className="text-sm text-white/50 tracking-widest">YEARS EXPERIENCE</div></div>
                <div><div className="text-4xl font-light text-white">6+</div><div className="text-sm text-white/50 tracking-widest">PROJECTS SHIPPED</div></div>
                <div><div className="text-4xl font-light text-white">∞</div><div className="text-sm text-white/50 tracking-widest">CUPS OF COFFEE</div></div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/images/about-photo.jpg" alt="Michael Chinye" fill className="object-cover" quality={100} />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-28 border-t border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-16">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 02 • EXPERTISE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-16">Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-orange-400 text-sm font-medium tracking-widest mb-6">FRONTEND</div>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Chakra UI', 'GSAP', 'HTML5', 'CSS3'].map((skill) => (
                  <div key={skill} className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl text-white/80 text-sm font-medium transition-all group-hover:scale-105">{skill}</div>
                ))}
              </div>
            </div>
            <div className="group">
              <div className="text-emerald-400 text-sm font-medium tracking-widest mb-6">BACKEND & APIS</div>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'REST APIs'].map((skill) => (
                  <div key={skill} className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl text-white/80 text-sm font-medium transition-all group-hover:scale-105">{skill}</div>
                ))}
              </div>
            </div>
            <div className="group">
              <div className="text-blue-400 text-sm font-medium tracking-widest mb-6">DATABASES & CMS</div>
              <div className="flex flex-wrap gap-3">
                {['MongoDB', 'MSSQL', 'Firebase', 'Strapi', 'Sanity CMS'].map((skill) => (
                  <div key={skill} className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl text-white/80 text-sm font-medium transition-all group-hover:scale-105">{skill}</div>
                ))}
              </div>
            </div>
            <div className="group">
              <div className="text-white/70 text-sm font-medium tracking-widest mb-6">CORE EXPERTISE</div>
              <div className="flex flex-wrap gap-3">
                {['Component Architecture', 'Design Systems', 'Performance Optimization', 'Responsive Design', 'SEO', 'Accessibility (WCAG)'].map((skill) => (
                  <div key={skill} className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl text-white/80 text-sm font-medium transition-all group-hover:scale-105">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-28 border-t border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-16">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 03 • JOURNEY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-20">Professional Experience</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 lg:left-8 top-6 bottom-6 w-px bg-white/10"></div>
            <div className="relative mb-20">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0"><div className="text-sm font-medium text-white/60 lg:text-right">Jun 2023 — Mar 2026</div></div>
                <div className="flex-1">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-white/30 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-6">
                      <h3 className="text-2xl font-semibold">Frontend Engineer</h3>
                      <span className="text-emerald-400 text-sm font-medium mt-1 lg:mt-0">Mainstack</span>
                    </div>
                    <ul className="space-y-5 text-white/75 text-[1.05rem]">
                      <li className="flex gap-3"><span className="text-white/40 text-xl leading-none mt-px">•</span>Developed discount management system and multi-channel payout system</li>
                      <li className="flex gap-3"><span className="text-white/40 text-xl leading-none mt-px">•</span>Built contact card with Google Contacts integration and customizable automated email system</li>
                      <li className="flex gap-3"><span className="text-white/40 text-xl leading-none mt-px">•</span>Created dynamic blog platform using Strapi CMS and refactored legacy codebase</li>
                      <li className="flex gap-3"><span className="text-white/40 text-xl leading-none mt-px">•</span>Contributed to scalable design system and optimized 6+ applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-20 flex-shrink-0"><div className="text-sm font-medium text-white/60 lg:text-right">Sep 2022 — May 2023</div></div>
                <div className="flex-1">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-white/30 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-6">
                      <h3 className="text-2xl font-semibold">Junior Frontend Engineer</h3>
                      <span className="text-emerald-400 text-sm font-medium mt-1 lg:mt-0">Skyt Technologies</span>
                    </div>
                    <ul className="space-y-5 text-white/75 text-[1.05rem]">
                      <li className="flex gap-3"><span className="text-white/40 text-xl leading-none mt-px">•</span>Built reusable UI component library in React</li>
                      <li className="flex gap-3"><span className="text-white/40 text-xl leading-none mt-px">•</span>Developed logistics web application connecting transporters and clients</li>
                      <li className="flex gap-3"><span className="text-white/40 text-xl leading-none mt-px">•</span>Integrated third-party REST APIs for real-time data flow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-28 border-t border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-16">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 04 • SELECTED WORK</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-20">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                className="group bg-white/5 border border-white/10 hover:border-white/30 rounded-3xl overflow-hidden transition-all hover:-translate-y-2"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
                    <span className="text-emerald-400 text-xs font-medium px-3 py-1 bg-emerald-400/10 rounded-full flex-shrink-0">LIVE</span>
                  </div>
                  <p className="text-white/70 text-[1.05rem] mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <span key={tag} className="text-xs px-4 py-2 bg-white/10 rounded-2xl">{tag}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28 border-t border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-8 h-px bg-white/40"></span>
              <span className="text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 05 • LET’S CONNECT</span>
              <span className="w-8 h-px bg-white/40"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-8">Ready to build something<br />great together?</h2>
            <p className="text-white/70 text-xl max-w-md mx-auto mb-12">I’m currently open to new opportunities, freelance projects, and interesting conversations.</p>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-12 mx-auto max-w-lg">
              <div className="space-y-8">
                <a href="mailto:michaelchinyee2018@gmail.com" className="block group">
                  <div className="flex items-center justify-between text-left">
                    <div><div className="text-sm text-white/50">EMAIL</div><div className="text-2xl font-medium text-white group-hover:text-orange-400 transition-colors">michaelchinyee2018@gmail.com</div></div>
                    <span className="text-4xl text-white/30 group-hover:text-white/70 transition-colors">↗</span>
                  </div>
                </a>
                <div className="h-px bg-white/10"></div>
                <a href="https://linkedin.com/in/chinyemichael" target="_blank" className="block group">
                  <div className="flex items-center justify-between text-left">
                    <div><div className="text-sm text-white/50">LINKEDIN</div><div className="text-2xl font-medium text-white group-hover:text-orange-400 transition-colors">linkedin.com/in/chinyemichael</div></div>
                    <span className="text-4xl text-white/30 group-hover:text-white/70 transition-colors">↗</span>
                  </div>
                </a>
                <div className="h-px bg-white/10"></div>
                <div className="flex items-center justify-between text-left">
                  <div><div className="text-sm text-white/50">LOCATION</div><div className="text-2xl font-medium text-white">Lagos, Nigeria</div></div>
                  <div className="px-5 py-2 bg-emerald-400/10 text-emerald-400 text-sm font-medium rounded-2xl">Open to work</div>
                </div>
              </div>
            </div>
            <p className="text-white/40 text-sm mt-12">Or just say hi — I reply to every message.</p>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-black py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-6 text-white/40">
            <div>© 2026 Michael Chinye</div>
            <div className="hidden md:block w-px h-3 bg-white/20"></div>
            <div>Frontend Engineer • Lagos, Nigeria</div>
          </div>
          <div className="flex items-center gap-8 text-white/60">
            {navItems.filter(i => i.id !== 'home').map(item => (
              <a key={item.id} href={item.href} className="hover:text-white transition-colors capitalize">{item.label}</a>
            ))}
          </div>
          <a href="https://linkedin.com/in/chinyemichael" target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <span>LinkedIn</span><span className="text-xl">↗</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
