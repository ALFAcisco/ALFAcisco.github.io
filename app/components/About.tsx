'use client';

import { useEffect, useRef } from 'react';

interface StatProps {
  count: number;
  label: string;
}

function AnimatedStat({ count, label }: StatProps) {
  const numRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        const dur = 1400;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          el.textContent = String(Math.round(count * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  return (
    <div className="stat-card">
      <div className="num" ref={numRef}>0</div>
      <div className="lbl">{label}</div>
    </div>
  );
}

const CHECK = (
  <span className="point-icon">
    <svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg>
  </span>
);

const POINTS = [
  'Responsive web development',
  'UI/UX & user flows',
  'Brand & visual identity',
  'Mobile app interfaces',
  'Design-to-code workflows',
  'Creative problem solving',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.14 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-tag">About Me</span>
          <h2>Designing &amp; building <em>digital experiences</em></h2>
        </div>

        <div className="about-grid">
          <div className="stats-grid reveal">
            <AnimatedStat count={10} label="Technologies in my stack" />
            <AnimatedStat count={4} label="Featured projects built" />
            <AnimatedStat count={3} label="Creative disciplines" />
            <AnimatedStat count={100} label="% passion for design" />
          </div>

          <div className="about-text reveal d2">
            <h3>Frontend Developer &amp; UI/UX Designer</h3>
            <p>
              I&apos;m a creative developer and designer with a strong interest in building engaging
              digital experiences. I develop responsive web and mobile interfaces, create visual
              identities, and translate ideas into functional, visually appealing products.
            </p>
            <p>
              Comfortable working across both creative and technical environments, I focus on
              thoughtful design, clean implementation, and continuous learning — currently working
              with React.js, React Native/Expo, Laravel, and modern design tools.
            </p>
            <div className="about-divider" />
            <ul className="about-points">
              {POINTS.map((pt) => (
                <li key={pt} className="about-point">
                  {CHECK}{pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
