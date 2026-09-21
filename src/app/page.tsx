'use client';

import { useRef, useState } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { usePortfolioAnimations } from '@/hooks/usePortfolioAnimations';
import { navItems } from '@/data/nav';
import { projects } from '@/data/projects';
import { CustomCursor } from '@/components/CustomCursor';
import { CinematicBackground } from '@/components/CinematicBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const { cursorOuterRef, cursorInnerRef, handleMouseEnter, handleMouseLeave } = useCursor();

  usePortfolioAnimations(heroRef, setActiveSection);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden font-sans selection:bg-white selection:text-black font-medium">
      <CustomCursor outerRef={cursorOuterRef} innerRef={cursorInnerRef} />
      <CinematicBackground />
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Hero heroRef={heroRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <About />
      <Skills onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <Experience />
      <Projects projects={projects} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <Contact onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <Footer navItems={navItems} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </main>
  );
}
