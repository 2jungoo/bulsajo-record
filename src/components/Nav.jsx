import { useState, useEffect } from 'react';
import { site } from '../data/site';

const links = [
  { href: '#about', label: '소개' },
  { href: '#compare', label: '비교 분석' },
  { href: '#itinerary', label: '일정' },
  { href: '#places', label: '공간 기록' },
  { href: '#reels', label: '콘텐츠' },
  { href: '#team', label: '팀' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#hero" className="nav__logo" onClick={(e) => handleLink(e, '#hero')}>
        <span className="nav__logo-fire">🔥</span>
        <span>{site.teamName}</span>
      </a>

      <button
        className="nav__hamburger"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="메뉴 열기"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={(e) => handleLink(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
