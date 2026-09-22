'use client';

import { useRef, useState } from 'react';
import { usePortfolioAnimations } from '@/hooks/usePortfolioAnimations';
import { navItems } from '@/data/nav';
import { projects } from '@/data/projects';
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

  usePortfolioAnimations(heroRef, setActiveSection);

  return (
    <main className="bg-paper text-ink min-h-screen overflow-x-hidden font-sans selection:bg-accent selection:text-paper font-medium">
      <Navbar navItems={navItems} activeSection={activeSection} />
      <Hero heroRef={heroRef} />
      <About />
      <Skills />
      <Experience />
      <Projects projects={projects} />
      <Contact />
      <Footer navItems={navItems} />
    </main>
  );
}
