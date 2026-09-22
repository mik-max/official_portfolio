import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'contact'];

function revealWords(target: string | Element, scrollTrigger?: object) {
  const split = new SplitText(target, { type: 'lines,words', linesClass: 'hero-line' });

  gsap.set(split.words, { yPercent: 100, opacity: 0 });
  gsap.to(split.words, {
    yPercent: 0,
    opacity: 1,
    stagger: 0.035,
    duration: 0.7,
    ease: 'power3.out',
    ...(scrollTrigger ? { scrollTrigger } : {}),
  });

  return split;
}

export function usePortfolioAnimations(
  heroRef: RefObject<HTMLDivElement | null>,
  setActiveSection: (section: string) => void
) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // =========================
    // SECTION TRACKING (always on — this drives nav state, not motion)
    // =========================

    SECTION_IDS.forEach((sectionId) => {
      ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: 'top 30%',
        end: 'bottom 40%',
        onEnter: () => setActiveSection(sectionId),
        onEnterBack: () => setActiveSection(sectionId),
      });
    });

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom 50%',
      onEnter: () => setActiveSection('home'),
      onEnterBack: () => setActiveSection('home'),
    });

    if (prefersReducedMotion) {
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

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
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    // =========================
    // HERO REVEAL
    // =========================

    const heroTitleSplit = new SplitText('.hero-title', { type: 'lines,words', linesClass: 'hero-line' });
    const heroDescSplit = new SplitText('.hero-desc', { type: 'lines' });

    gsap.set(heroTitleSplit.words, { yPercent: 100, opacity: 0 });
    gsap.set(heroDescSplit.lines, { yPercent: 100, opacity: 0 });

    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .fromTo('.hero-badge', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
      .to(heroTitleSplit.words, { yPercent: 0, opacity: 1, stagger: 0.035, duration: 0.7 }, '-=0.3')
      .to(heroDescSplit.lines, { yPercent: 0, opacity: 1, stagger: 0.1, duration: 0.8 }, '-=0.5')
      .fromTo('.hero-cta a', { opacity: 0, y: 16 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-bottom', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3');

    // =========================
    // SECTION TITLES
    // =========================

    revealWords('.about-title', { trigger: '#about', start: 'top 75%' });
    revealWords('.contact-heading', { trigger: '#contact', start: 'top 80%' });
    revealWords('.project-title', { trigger: '#projects', start: 'top 85%' });

    ['#experience h2', '#skills h2'].forEach((selector) => {
      const el = document.querySelector(selector);
      if (el) revealWords(el, { trigger: el, start: 'top 85%' });
    });

    // =========================
    // STATS
    // =========================

    gsap.fromTo(
      '.stat-number',
      { y: 80, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 65%',
        },
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.4,
        ease: 'expo.out',
      }
    );

    // =========================
    // SECTION REVEALS
    // =========================

    [...SECTION_IDS, 'interlude'].forEach((sectionId) => {
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
    });

    // =========================
    // CLEANUP
    // =========================

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });

      ScrollTrigger.getAll().forEach((t) => t.kill());

      lenis.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
