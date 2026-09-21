import Image from 'next/image';

export function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="/images/hero-bg.jpg"
        alt="Cinematic Background"
        fill
        className="object-cover object-right md:object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
    </div>
  );
}
