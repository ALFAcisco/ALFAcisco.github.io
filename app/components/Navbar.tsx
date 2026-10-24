'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <label className="theme-toggle" title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <input
        type="checkbox"
        checked={!isDark}
        onChange={toggle}
        aria-label="Toggle light/dark mode"
      />
      <div className="toggle-track">
        <div className="toggle-thumb" />
      </div>
      {/* Sun icon (left = light) */}
      <div className="toggle-icons">
        <svg viewBox="0 0 24 24" fill="none" stroke={isDark ? '#7878a0' : '#f59e0b'} strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        <svg viewBox="0 0 24 24" fill={isDark ? '#c8c8dc' : '#7878a0'} style={{ opacity: isDark ? 1 : 0.4 }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </label>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let cur = 'home';
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 140) cur = s.id;
      });
      setActiveSection(cur);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="container nav-inner">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-text">Alfa</span>
          <span className="logo-dot">.</span>
          <span className="logo-text">dev</span>
        </a>

        {/* Nav links */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="nav-right">
          <ThemeToggle />
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Hire Me
          </a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
