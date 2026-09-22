import { NavItem } from '@/data/nav';

type FooterProps = {
  navItems: NavItem[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function Footer({ navItems, onMouseEnter, onMouseLeave }: FooterProps) {
  return (
    <footer className="relative border-t border-ink/10 bg-paper py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-12 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-ink/40">
          <div className="font-display text-lg">Michael Chinye</div>
          <div className="hidden md:block w-px h-4 bg-ink/10"></div>
          <div className="font-medium">Senior Frontend Engineer · Lagos, Nigeria</div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-ink/45 uppercase tracking-[2px] font-bold text-[10px]">
          {navItems.filter(i => i.id !== 'home').map(item => (
            <a key={item.id} href={item.href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="hover:text-ink transition-colors">{item.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="https://github.com/mik-max" target="_blank" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="flex items-center gap-2 text-ink/45 hover:text-ink transition-all font-bold tracking-widest uppercase text-xs">
            <span>GitHub</span><span className="text-xl">↗</span>
          </a>
          <a href="https://linkedin.com/in/chinyemichael" target="_blank" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="flex items-center gap-2 text-ink/45 hover:text-ink transition-all font-bold tracking-widest uppercase text-xs">
            <span>LinkedIn</span><span className="text-xl">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
