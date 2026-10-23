'use client';

import { useEffect, useRef } from 'react';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); io.disconnect(); } },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}

function useBarReveal(ref: React.RefObject<HTMLDivElement | null>, pct: number) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.width = pct + '%'; io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, pct]);
}

export default function Education() {
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const langBarRef = useRef<HTMLDivElement>(null);

  useReveal(headerRef as React.RefObject<HTMLElement>);
  useReveal(card1Ref as React.RefObject<HTMLElement>);
  useReveal(card2Ref as React.RefObject<HTMLElement>);
  useBarReveal(langBarRef, 95);

  return (
    <section id="education">
      <div className="container">
        <div className="sec-head reveal" ref={headerRef}>
          <span className="sec-tag">Background</span>
          <h2>
            Education &amp; <em>languages</em>
          </h2>
        </div>
        <div className="edu-grid">
          {/* Education card */}
          <div className="edu-card reveal" ref={card1Ref}>
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.9V17h2V9L12 3zm-5 9.7V17c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.3l-5 2.7-5-2.7z" />
              </svg>
            </div>
            <h3>Diploma in Information Technology</h3>
            <div className="meta">
              <b>NIIT</b> — National Institute of Information Technology
            </div>
          </div>

          {/* Languages card */}
          <div className="edu-card reveal d1" ref={card2Ref}>
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7 9h-3a15 15 0 0 0-1.3-5.6A8 8 0 0 1 19 11zM12 4a13 13 0 0 1 1.9 7h-3.8A13 13 0 0 1 12 4zM5 13h3a15 15 0 0 0 1.3 5.6A8 8 0 0 1 5 13zm3-2H5a8 8 0 0 1 4.3-5.6A15 15 0 0 0 8 11zm4 9a13 13 0 0 1-1.9-7h3.8A13 13 0 0 1 12 20zm2.7-1.4A15 15 0 0 0 16 13h3a8 8 0 0 1-4.3 5.6z" />
              </svg>
            </div>
            <h3>Languages</h3>
            <div className="lang-bars">
              <div>
                <div className="lang-row">
                  <span>English</span>
                  <span>Fluent</span>
                </div>
                <div className="bar">
                  <div className="bar-fill" ref={langBarRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
