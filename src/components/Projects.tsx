import Image from 'next/image';
import { Project } from '@/data/projects';

type ProjectsProps = {
  projects: Project[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function Projects({ projects, onMouseEnter, onMouseLeave }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-20 sm:py-28 border-t border-white/10 bg-black z-30">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-center gap-3 mb-16">
          <span className="w-8 h-px bg-white/40"></span>
          <span className="text-xs sm:text-sm uppercase tracking-[1px] text-white/60 font-medium">CHAPTER 04 • SELECTED WORK</span>
        </div>
        <h2 className="project-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-20 perspective-[1000px]">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="group bg-white/[0.03] border border-white/10 hover:border-white/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 block shadow-2xl"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{project.title}</h3>
                  <span className="text-emerald-400 text-[10px] sm:text-xs font-bold px-3 py-1 bg-emerald-400/10 rounded-full flex-shrink-0 uppercase tracking-widest">LIVE</span>
                </div>
                <p className="text-white/60 text-sm sm:text-base mb-8 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="text-[10px] tracking-wider px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/40 font-bold uppercase">{tag}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
