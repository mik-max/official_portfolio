import { Fragment } from 'react';
import { contactLinks } from '@/data/contact';

type ContactProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function Contact({ onMouseEnter, onMouseLeave }: ContactProps) {
  return (
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
              {contactLinks.map((link) => (
                <Fragment key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className="block group"
                  >
                    <div className="flex items-center justify-between text-left">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">{link.label}</div>
                        <div className="text-lg sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors break-all sm:break-normal">{link.value}</div>
                      </div>
                      <span className="text-2xl sm:text-4xl text-white/20 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">↗</span>
                    </div>
                  </a>
                  <div className="h-px bg-white/10"></div>
                </Fragment>
              ))}
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
  );
}
