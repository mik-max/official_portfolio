import { RefObject } from 'react';

type CustomCursorProps = {
  outerRef: RefObject<HTMLDivElement | null>;
  innerRef: RefObject<HTMLDivElement | null>;
};

export function CustomCursor({ outerRef, innerRef }: CustomCursorProps) {
  return (
    <>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
    </>
  );
}
