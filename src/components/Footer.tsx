import { NavItem } from '@/data/nav';

type FooterProps = {
  navItems: NavItem[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function Footer({ navItems, onMouseEnter, onMouseLeave }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 bg-black py-12 md:py-16 z-30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-12 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white/30">
          <div className="font-bold tracking-tight text-white/50 text-lg">Michael Chinye</div>
          <div className="hidden md:block w-px h-4 bg-white/10"></div>
          <div className="font-medium">Senior Frontend Engineer • Lagos, Nigeria</div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-white/40 uppercase tracking-[2px] font-bold text-[10px]">
          {navItems.filter(i => i.id !== 'home').map(item => (
            <a key={item.id} href={item.href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="hover:text-white transition-colors">{item.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="https://github.com/mik-max" target="_blank" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="flex items-center gap-2 text-white/40 hover:text-white transition-all font-bold tracking-widest uppercase text-xs">
            <span>GitHub</span><span className="text-xl">↗</span>
          </a>
          <a href="https://linkedin.com/in/chinyemichael" target="_blank" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="flex items-center gap-2 text-white/40 hover:text-white transition-all font-bold tracking-widest uppercase text-xs">
            <span>LinkedIn</span><span className="text-xl">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
