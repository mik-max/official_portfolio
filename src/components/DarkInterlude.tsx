import { notes } from '@/data/notes';

export function DarkInterlude() {
  return (
    <section id="interlude" className="relative bg-ink py-24 sm:py-32">
      <div className="section-content flex justify-center px-6">
        <div className="w-full max-w-[620px] rounded-2xl bg-[#211F19] border border-paper/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-paper/8">
            <span className="w-2 h-2 rounded-full bg-paper/18" />
            <span className="w-2 h-2 rounded-full bg-paper/18" />
            <span className="w-2 h-2 rounded-full bg-paper/18" />
            <span className="font-mono text-xs text-paper/40 ml-2">notes-to-self.md</span>
          </div>
          <div className="font-mono text-base leading-relaxed px-8 sm:px-9 py-8 flex flex-col gap-5">
            {notes.map((note) => (
              <div key={note.n} className="flex gap-4">
                <span className="text-paper/30 flex-shrink-0">{note.n}</span>
                <span className="text-paper">{note.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
