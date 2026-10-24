'use client';

import { useEffect, useRef } from 'react';

interface Project {
  num: string;
  visualClass: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  description: string;
  tags: string[];
  delay?: string;
}

const PROJECTS: Project[] = [
  {
    num: '01', visualClass: 'pv1',
    icon: <svg className="proj-icon" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.2V17c0 .5.3 1 .8 1.3L12 21l6.2-2.7c.5-.3.8-.8.8-1.3v-5.8L21 12l2-1.1L12 3zm0 2.2l6.7 3.7L12 12.6 5.3 8.9 12 5.2zM7 14.9v3.4l4 1.7v-3.4l-4-1.7zm6 5.1l4-1.7v-3.4l-4 1.7V20z" /></svg>,
    title: 'iCore — Self-Help & Support Platform',
    sub: 'Full-Stack Platform Concept',
    description: 'A digital platform focused on accessible self-help — frontend built in React.js with planned Laravel backend, authentication, and role-based access for students and staff.',
    tags: ['React.js', 'Laravel', 'REST APIs', 'Role-Based Access'],
  },
  {
    num: '02', visualClass: 'pv2',
    icon: <svg className="proj-icon" viewBox="0 0 24 24"><path d="M4 3h12l4 4v14H4V3zm11 1v4h4M7 11h10M7 14h10M7 17h6" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    title: 'Smart Book Track — Library System',
    sub: 'Systems Analysis & UI/UX',
    description: 'A smart library management system concept for organizing and tracking library resources — covering system structure, user flows, and interface design.',
    tags: ['Systems Analysis', 'UI/UX', 'User Flows', 'Software Design'],
    delay: 'd1',
  },
  {
    num: '03', visualClass: 'pv3',
    icon: <svg className="proj-icon" viewBox="0 0 24 24"><path d="M17 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 18H7V5h10v14zM10 9h4v2h-4z" /></svg>,
    title: 'Digital Banking Mobile UI',
    sub: 'Mobile App Concept',
    description: 'A modern mobile banking experience built with React Native & Expo — implementing transfers, airtime, data purchases, transactions, profile management, and account settings.',
    tags: ['React Native', 'Expo', 'UI Design', 'Mobile Banking'],
    delay: 'd2',
  },
  {
    num: '04', visualClass: 'pv4',
    icon: <svg className="proj-icon" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 16.9l.9-5.4-3.9-3.8 5.4-.8L12 2zM19 15l1.2 2.4 2.6.4-1.9 1.8.5 2.6L19 20.9l-2.4 1.3.5-2.6-1.9-1.8 2.6-.4L19 15z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" fill="none" strokeLinejoin="round" /></svg>,
    title: 'Graphic Design & Brand Projects',
    sub: 'Branding · Visual · Marketing',
    description: 'A collection of creative work — flyers, promotional graphics, social media designs, and visual assets combining typography, imagery, and composition.',
    tags: ['Branding', 'Visual Design', 'Social Media', 'Marketing'],
    delay: 'd3',
  },
];

function ProjectCard({ num, visualClass, icon, title, sub, description, tags, delay = '' }: Project) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`proj-card reveal${delay ? ' ' + delay : ''}`} ref={cardRef}>
      <div className={`proj-visual ${visualClass}`}>
        {icon}
        <span className="proj-num">{num}</span>
      </div>
      <div className="proj-body">
        <h3>{title}</h3>
        <div className="proj-sub">{sub}</div>
        <p>{description}</p>
        <div className="proj-tags">
          {tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects">
      <div className="container">
        <div className="sec-head reveal" ref={headerRef}>
          <span className="sec-tag">Selected Work</span>
          <h2>Projects I&apos;m <em>proud of</em></h2>
          <p>A mix of web platforms, mobile concepts, and brand work — each designed, built, and refined end-to-end.</p>
        </div>
        <div className="proj-grid">
          {PROJECTS.map((p) => <ProjectCard key={p.num} {...p} />)}
        </div>
      </div>
    </section>
  );
}
