'use client';

import { useEffect, useRef, useState } from 'react';
import { NavItem } from '@/data/nav';

type NavbarProps = {
  navItems: NavItem[];
  activeSection: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function Navbar({ navItems, activeSection, onMouseEnter, onMouseLeave }: NavbarProps) {
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const activeElement = navRefs.current[activeSection];
    if (activeElement) {
      setPillStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeSection]);

  return (
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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="px-5 py-2.5 sm:px-7 sm:py-3.5 bg-white text-black text-xs sm:text-sm font-medium rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
      >
        Get in touch ↗
      </a>
    </nav>
  );
}
