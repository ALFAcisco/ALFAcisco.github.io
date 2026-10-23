'use client';

import { useEffect, useRef } from 'react';

export default function BackToTop() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop > 500;
      btnRef.current?.classList.toggle('show', scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button id="toTop" ref={btnRef} aria-label="Back to top" onClick={scrollToTop}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 4l-8 8 1.4 1.4L11 7.8V20h2V7.8l5.6 5.6L20 12l-8-8z" />
      </svg>
    </button>
  );
}
