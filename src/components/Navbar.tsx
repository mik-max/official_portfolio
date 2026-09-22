'use client';

import { useEffect, useRef, useState } from 'react';
import { NavItem } from '@/data/nav';

type NavbarProps = {
  navItems: NavItem[];
  activeSection: string;
};

export function Navbar({ navItems, activeSection }: NavbarProps) {
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className="fixed top-4 sm:top-6 left-0 right-0 z-[100] px-6 lg:px-20 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 bg-paper/75 backdrop-blur-lg border border-ink/10 rounded-full shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-2xl sm:text-3xl">M.</span>
          <span className="text-sm sm:text-base font-medium text-ink/80">Chinye</span>
        </div>

        {/* Dynamic Nav Pill Navigation (desktop) */}
        <div className="hidden lg:flex items-center relative">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              ref={(el) => { navRefs.current[item.id] = el; }}
              className={`px-5 py-2 text-sm font-medium transition-colors relative z-10 ${activeSection === item.id ? 'text-ink' : 'text-ink/65 hover:text-ink'
                }`}
            >
              {item.label}
            </a>
          ))}
          <div
            className="absolute h-[calc(100%-8px)] top-1 bg-ink/8 rounded-full transition-all duration-300 ease-in-out z-0"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-ink/5 transition-colors text-ink"
          >
            {isMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 sm:px-7 sm:py-3 bg-ink text-paper text-xs sm:text-sm font-medium rounded-full hover:bg-ink/90 transition-all flex items-center gap-2"
          >
            Let&apos;s talk ↗
          </a>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden mt-2 bg-paper/95 backdrop-blur-lg border border-ink/10 rounded-3xl shadow-sm overflow-hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-4 text-base font-medium border-b border-ink/10 last:border-b-0 transition-colors ${activeSection === item.id ? 'text-ink bg-ink/5' : 'text-ink/70 hover:text-ink hover:bg-ink/5'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
