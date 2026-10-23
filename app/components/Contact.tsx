'use client';

import { useEffect, useRef } from 'react';

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headerRef.current, cardRef.current].filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact">
      <div className="container">
        <div className="sec-head reveal" ref={headerRef}>
          <span className="sec-tag">Contact</span>
          <h2>
            Let&apos;s work <em>together</em>
          </h2>
        </div>
        <div className="contact-card reveal d1" ref={cardRef}>
          <h3>
            Have a project in mind? <span>Let&apos;s build it.</span>
          </h3>
          <p>
            I&apos;m open to frontend development roles, UI/UX design work, and creative design
            projects. Reach out and let&apos;s create something great.
          </p>
          <div className="contact-links">
            <a href="mailto:williamalfa9@gmail.com">
              <svg viewBox="0 0 24 24">
                <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2.3.5L12 12.2 19.7 5.5H4.3zM20 7.4l-8 7.1-8-7.1V19h16V7.4z" />
              </svg>
              williamalfa9@gmail.com
            </a>
            <a href="tel:+22991333662">
              <svg viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
              </svg>
              +229 91 333 662
            </a>
            <a href="https://github.com/ALFAcisco" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12v3.15c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
