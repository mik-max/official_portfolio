import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to(cursorOuterRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      });

      gsap.to(cursorInnerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cursorOuterRef.current, { scale: 2, backgroundColor: 'rgba(27, 25, 18, 0.08)', border: '1px solid rgba(27, 25, 18, 0.8)', duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorOuterRef.current, { scale: 1, backgroundColor: 'transparent', border: '1px solid rgba(27, 25, 18, 0.4)', duration: 0.3 });
  };

  return { cursorOuterRef, cursorInnerRef, handleMouseEnter, handleMouseLeave };
}
