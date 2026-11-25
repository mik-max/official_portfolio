'use client';

import { Fragment, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { experience } from '@/data/experience';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// One ground per card so each layer of the stack reads as its own card.
const cardThemes = [
  { card: 'bg-ink text-paper', muted: 'text-paper/70', rule: 'border-paper/15', value: 'text-accent-light' },
  { card: 'bg-accent text-white', muted: 'text-white/75', rule: 'border-white/20', value: 'text-white' },
  { card: 'bg-paper text-ink border border-ink/10', muted: 'text-ink/65', rule: 'border-ink/10', value: 'text-accent' },
];

// How far each covered card shrinks per card stacked on top of it.
const SCALE_STEP = 0.04;

// Card i sticks this far from the top of the viewport: below the fixed navbar, stepping down
// so a strip of every card underneath stays visible.
const stickyTop = (i: number) => `calc(var(--stack-top) + ${i} * var(--stack-step))`;

export function Experience() {
  const stackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const markers = gsap.utils.toArray<HTMLElement>('[data-stack-marker]');
      const slots = gsap.utils.toArray<HTMLElement>('[data-stack-slot]');
      const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]');
      const last = cards.length - 1;
      const topOf = (i: number) => parseFloat(getComputedStyle(slots[i]).top) || 0;

      // Covered cards shrink as the cards above them slide in. Skipped under reduced motion;
      // the cards still stack, because that is plain scrolling, not animation.
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        cards.forEach((card, i) => {
          if (i === last) return;
          gsap.to(card, {
            scale: 1 - SCALE_STEP * (last - i),
            ease: 'none',
            scrollTrigger: {
              trigger: markers[i + 1],
              start: 'top bottom',
              endTrigger: markers[last],
              end: () => `top ${topOf(last)}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    },
    { scope: stackRef }
  );

  return (
    <section id="experience" className="relative py-20 sm:py-28 border-t border-ink/10 bg-paper-raised">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="section-content">
          <div className="flex items-baseline gap-2.5 mb-6">
            <span className="font-mono text-sm text-ink/65">03</span>
            <span className="text-sm font-medium text-ink/65">Experience</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-12 sm:mb-16"><span className="text-accent">Proof,</span> not adjectives.</h2>
        </div>

        <div
          ref={stackRef}
          className="relative max-w-5xl mx-auto [--stack-top:96px] [--stack-step:14px] sm:[--stack-top:120px] sm:[--stack-step:20px]"
        >
          <div>
            {experience.map((entry, i) => {
              const theme = cardThemes[i % cardThemes.length];
              const isLast = i === experience.length - 1;
              return (
                <Fragment key={entry.id}>
                  {/* In-flow marker at the card's resting position. The scroll triggers measure from here,
                      because the sticky card itself reports wherever it is currently stuck. */}
                  <div data-stack-marker aria-hidden="true" />
                  <div data-stack-slot className="sticky" style={{ top: stickyTop(i) }}>
                    <article
                      data-stack-card
                      aria-labelledby={`exp-title-${entry.id}`}
                      className={`${theme.card} origin-top will-change-transform rounded-[1.75rem] sm:rounded-[2rem] p-7 sm:p-10 lg:p-12 h-[460px] sm:h-[440px] lg:h-[420px] flex flex-col lg:grid lg:grid-cols-[1.25fr_1fr] lg:gap-14 shadow-[0_-16px_48px_rgba(27,25,18,0.12)]`}
                    >
                      <div className="flex flex-col min-w-0">
                        <p className={`font-mono text-xs sm:text-sm ${theme.muted}`}>{entry.dateRange}</p>
                        <h3 id={`exp-title-${entry.id}`} className="font-display font-bold text-3xl sm:text-5xl leading-[1.05] mt-6 sm:mt-8">{entry.title}</h3>
                        <p className={`font-medium mt-2 sm:mt-3 ${theme.muted}`}>{entry.company}</p>
                        <p className={`text-base sm:text-lg leading-relaxed mt-4 lg:mt-auto max-w-xl ${theme.muted}`}>{entry.summary}</p>
                      </div>

                      <dl className={`mt-auto lg:mt-0 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-0 border-t lg:border-t-0 lg:border-l pt-5 lg:pt-0 lg:pl-10 lg:content-center ${theme.rule}`}>
                        {entry.metrics.map((metric, m) => (
                          <div key={metric.label} className={`flex flex-col ${m > 0 ? `lg:border-t lg:pt-5 lg:mt-5 ${theme.rule}` : ''}`}>
                            {/* Label first in the DOM so it reads "automated tests: 160+"; the figure is shown on top. */}
                            <dt className={`order-2 text-xs sm:text-sm leading-snug mt-1 ${theme.muted}`}>{metric.label}</dt>
                            <dd className={`order-1 font-mono font-bold text-xl sm:text-4xl lg:text-5xl leading-none ${theme.value}`}>{metric.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </article>
                  </div>
                  {/* Scroll distance between cards, and after the last one a short hold on the finished deck.
                      Spacers, not margins: a sticky element's own margin counts against its containing block,
                      so a margin would unstick the cards early. */}
                  <div aria-hidden="true" className={isLast ? 'h-[16vh]' : 'h-[22vh]'} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
