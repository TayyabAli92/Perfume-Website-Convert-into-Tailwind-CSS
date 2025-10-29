"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = cursorRef.current;
    const follower = followerRef.current;
    if (!node || !follower) return;

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      follower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor pointer-events-none" />
      <div ref={followerRef} className="pointer-events-none fixed top-0 left-0 w-6 h-6 -ml-3 -mt-3 rounded-full bg-[rgba(212,175,55,0.15)] blur-md transition-transform duration-300" />
    </>
  );
}


