'use client';

import { useEffect, useRef } from 'react';

const ROLES = [
  'Frontend Developer',
  'UI/UX Designer',
  'Graphic Designer',
  'Mobile App Developer',
  'Creative Technologist',
];

function useTypingEffect(elementRef: React.RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    let ri = 0, ci = 0, deleting = false;
    let tid: ReturnType<typeof setTimeout>;

    function tick() {
      const word = ROLES[ri];
      if (!deleting) {
        ci++;
        if (elementRef.current) elementRef.current.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; tid = setTimeout(tick, 1800); return; }
        tid = setTimeout(tick, 72);
      } else {
        ci--;
        if (elementRef.current) elementRef.current.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % ROLES.length; tid = setTimeout(tick, 380); return; }
        tid = setTimeout(tick, 36);
      }
    }
    tick();
    return () => clearTimeout(tid);
  }, [elementRef]);
}

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);
  useTypingEffect(typedRef);

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        {/* ── Left ── */}
        <div className="reveal in">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1>
            Hi, I&apos;m{' '}
            <span className="name-grad">Alfa Williams</span>
          </h1>

          <div className="typed-wrap">
            <span className="typed-label">I&apos;m a&nbsp;</span>
            <span className="typed" ref={typedRef} />
            <span className="cursor" />
          </div>

          <p className="lead">
            I design and build engaging digital experiences — blending clean code with
            thoughtful design. Frontend developer, UI/UX designer, and graphic designer
            based in Abuja, Nigeria.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2L11.6 6.4z" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ALFAcisco" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
              <svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12v3.15c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>
            </a>
            <a href="mailto:williamalfa9@gmail.com" aria-label="Email" className="social-link">
              <svg viewBox="0 0 24 24"><path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2.3.5L12 12.2 19.7 5.5H4.3zM20 7.4l-8 7.1-8-7.1V19h16V7.4z" /></svg>
            </a>
            <a href="tel:+22991333662" aria-label="Phone" className="social-link">
              <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" /></svg>
            </a>
          </div>
        </div>

        {/* ── Right — floating code card ── */}
        <div className="hero-visual reveal in d2">
          <div className="code-card">
            <div className="code-head">
              <span className="code-dot cd1" />
              <span className="code-dot cd2" />
              <span className="code-dot cd3" />
              <span className="code-filename">alfa.js</span>
            </div>
            <div className="code-body">
              <span className="ck">const</span>{' '}<span className="cp">developer</span> = &#123;<br />
              &nbsp;&nbsp;name: <span className="cs">&apos;Alfa Williams&apos;</span>,<br />
              &nbsp;&nbsp;based: <span className="cs">&apos;Abuja, Nigeria&apos;</span>,<br />
              &nbsp;&nbsp;stack: [<span className="cs">&apos;React&apos;</span>, <span className="cs">&apos;Laravel&apos;</span>, <span className="cs">&apos;Figma&apos;</span>],<br />
              &nbsp;&nbsp;traits: [<span className="cs">&apos;creative&apos;</span>, <span className="cs">&apos;detail-driven&apos;</span>],<br />
              &nbsp;&nbsp;hireable: <span className="cn">true</span>,<br />
              &#125;;<br />
              <br />
              <span className="cc">// turning ideas into interfaces ✦</span>
            </div>
            <div className="hero-stat-row" style={{ padding: '0 24px 20px' }}>
              <div className="hero-stat"><div className="n">3+</div><div className="l">Years exp.</div></div>
              <div className="hero-stat"><div className="n">10+</div><div className="l">Technologies</div></div>
              <div className="hero-stat"><div className="n">4</div><div className="l">Projects</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-mouse" />
        SCROLL
      </div>
    </section>
  );
}
