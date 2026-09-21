import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'contact'];

export function usePortfolioAnimations(
  heroRef: RefObject<HTMLDivElement | null>,
  setActiveSection: (section: string) => void
) {
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

    const magneticHeadings: {
      heading: HTMLElement;
      onMove: (e: MouseEvent) => void;
      onLeave: () => void;
    }[] = [];

    gsap.utils.toArray<HTMLElement>('h2').forEach((heading) => {
      const onMove = (e: MouseEvent) => {
        const rect = heading.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(heading, {
          x: x * 0.03,
          y: y * 0.03,
          duration: 1,
          ease: 'power3.out',
        });
      };

      const onLeave = () => {
        gsap.to(heading, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.4)',
        });
      };

      heading.addEventListener('mousemove', onMove);
      heading.addEventListener('mouseleave', onLeave);
      magneticHeadings.push({ heading, onMove, onLeave });
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

    SECTION_IDS.forEach((sectionId) => {
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
    });

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
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick as any);
      });

      magneticHeadings.forEach(({ heading, onMove, onLeave }) => {
        heading.removeEventListener('mousemove', onMove);
        heading.removeEventListener('mouseleave', onLeave);
      });

      ScrollTrigger.getAll().forEach((t: any) => t.kill());

      lenis.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
