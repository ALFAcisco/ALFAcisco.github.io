'use client';

import { useEffect, useRef } from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  chips: string[];
  barLabel: string;
  barPct: number;
  delay?: string;
}

function SkillCard({ icon, title, chips, barLabel, barPct, delay = '' }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const bar = barRef.current;
    if (!card || !bar) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        card.classList.add('in');
        bar.style.width = barPct + '%';
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(card);
    return () => io.disconnect();
  }, [barPct]);

  return (
    <div className={`skill-card reveal${delay ? ' ' + delay : ''}`} ref={cardRef}>
      <div className="skill-icon-wrap">{icon}</div>
      <h3>{title}</h3>
      <div className="chips">
        {chips.map((c) => <span key={c} className="chip">{c}</span>)}
      </div>
      <div className="skill-bar-wrap">
        <div className="skill-bar-label">
          <span>{barLabel}</span>
          <span>{barPct}%</span>
        </div>
        <div className="bar">
          <div className="bar-fill" ref={barRef} />
        </div>
      </div>
    </div>
  );
}

const SKILLS: SkillCardProps[] = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>,
    title: 'Frontend & Software',
    chips: ['React.js', 'React Native / Expo', 'JavaScript', 'HTML5', 'CSS3', 'Laravel', 'REST APIs', 'C / C++', 'Git & GitHub', 'Postman'],
    barLabel: 'Frontend Development',
    barPct: 90,
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /></svg>,
    title: 'Design & Creative',
    chips: ['Graphic Design', 'UI/UX Design', 'Brand & Visual Identity', 'Logo Design', 'Social Media Graphics', 'Marketing Materials', 'Image Editing', 'Video Editing'],
    barLabel: 'UI/UX Design',
    barPct: 88,
    delay: 'd1',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M19.4 7.9L16.1 4.6 14 6.7l3.3 3.3 2.1-2.1zM9.9 13.5l6.9-6.9-2.1-2.1-6.9 6.9-1.8 4.7 4.7-1.8zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /></svg>,
    title: 'Design Tools',
    chips: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
    barLabel: 'Design Tooling',
    barPct: 92,
    delay: 'd2',
  },
];

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="sec-head reveal" ref={headerRef}>
          <span className="sec-tag">My Skills</span>
          <h2>A hybrid <em>design × code</em> toolkit</h2>
          <p>From interface design to full frontend implementation — everything I use to ship complete digital products.</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((s) => <SkillCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
