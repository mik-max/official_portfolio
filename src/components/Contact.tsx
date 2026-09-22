import { Fragment } from 'react';
import { contactLinks } from '@/data/contact';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-40 border-t border-ink/10 bg-paper-raised">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <span className="font-mono text-sm text-ink/65">05</span>
            <span className="text-sm font-medium text-ink/65">Contact</span>
          </div>
          <h2 className="contact-heading font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-10">Let&apos;s build something <span className="text-accent">exceptional.</span></h2>
          <p className="text-ink/70 text-lg sm:text-xl max-w-xl mx-auto mb-16 leading-relaxed">Currently open to senior opportunities, collaborations, and high-impact freelance projects.</p>

          <div className="bg-paper border border-ink/10 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 mx-auto max-w-2xl shadow-sm">
            <div className="space-y-6 sm:space-y-8">
              {contactLinks.map((link) => (
                <Fragment key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="block group"
                  >
                    <div className="flex items-center justify-between text-left">
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-ink/60 mb-2 font-bold">{link.label}</div>
                        <div className="font-mono text-lg sm:text-2xl font-bold group-hover:text-accent transition-colors break-all sm:break-normal">{link.value}</div>
                      </div>
                      <span className="text-2xl sm:text-4xl text-ink/30 group-hover:text-ink group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">↗</span>
                    </div>
                  </a>
                  <div className="h-px bg-ink/10"></div>
                </Fragment>
              ))}
              <div className="flex items-center justify-between text-left">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-ink/60 mb-2 font-bold">Current location</div>
                  <div className="font-mono text-lg sm:text-2xl font-bold">Lagos, Nigeria</div>
                </div>
                <div className="px-4 py-2 bg-accent/8 text-accent text-[11px] sm:text-xs font-bold rounded-full uppercase tracking-widest border border-accent/20">Open to work</div>
              </div>
            </div>
          </div>
          <p className="text-ink/65 text-xs sm:text-sm mt-12 font-medium">Or simply say hi — I typically respond within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}
