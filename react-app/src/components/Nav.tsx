'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// basePath 접두사 — unoptimized export에선 next/image가 src에 자동 적용 안 함
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const links = [
  { href: '#about', label: '소개' },
  { href: '#compare', label: '비교' },
  { href: '#itinerary', label: '일정' },
  { href: '#places', label: '공간 기록' },
  { href: '#reels', label: '콘텐츠' },
  { href: '#team', label: '팀' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min((scrollY / max) * 100, 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
      </div>

      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav__logo" onClick={closeMenu}>
          <Image src={`${BP}/assets/hansung-mark.png`} alt="한성대학교" width={60} height={24} className="nav__crest" style={{ width: 'auto', height: 24 }} />
          <span>🔥</span>
          <span>불사조 기록단</span>
        </a>

        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="메뉴"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav__links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
