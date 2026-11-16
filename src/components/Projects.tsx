import Image from 'next/image';
import { Project } from '@/data/projects';

type ProjectsProps = {
  projects: Project[];
};

const cardBase = 'group bg-paper-raised border border-ink/10 rounded-2xl overflow-hidden block shadow-sm w-full';
const cardInteractive = 'hover:border-ink/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg';

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'live') {
    return <span className="text-accent text-[11px] sm:text-xs font-bold px-3 py-1 bg-accent/8 rounded-full flex-shrink-0">LIVE</span>;
  }
  return (
    <span className="text-ink/65 text-[11px] sm:text-xs font-bold px-3 py-1 bg-ink/5 rounded-full flex-shrink-0">
      {status === 'archived' ? 'ARCHIVED' : 'IN DEVELOPMENT'}
    </span>
  );
}

function ProjectCardBody({ project, interactive }: { project: Project; interactive: boolean }) {
  return (
    <>
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-ink/10">
        <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <span className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="font-mono text-[11px] text-ink/65 ml-2 truncate">{new URL(project.url).hostname}</span>
      </div>
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={interactive ? 'object-cover transition-transform duration-700 group-hover:scale-105' : 'object-cover'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="text-lg sm:text-xl font-bold leading-tight">{project.title}</h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-ink/70 text-sm sm:text-base mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => <span key={tag} className="font-mono text-[11px] px-3 py-1.5 border border-ink/10 rounded-full text-ink/65">{tag}</span>)}
        </div>
      </div>
    </>
  );
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-20 sm:py-28 border-t border-ink/10 bg-paper">
      <div className="section-content max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex items-baseline gap-2.5 mb-6">
          <span className="font-mono text-sm text-ink/65">04</span>
          <span className="text-sm font-medium text-ink/65">Selected work</span>
        </div>
        <h2 className="project-title font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-20">Featured <span className="text-accent">projects</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
          {projects.map((project) =>
            project.status === 'archived' ? (
              <article key={project.title} className={cardBase}>
                <ProjectCardBody project={project} interactive={false} />
              </article>
            ) : (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardBase} ${cardInteractive}`}
              >
                <ProjectCardBody project={project} interactive />
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
