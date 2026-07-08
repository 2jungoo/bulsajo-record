import Reveal from './Reveal'
import { reels } from '@/data/reels'

export default function Reels() {
  return (
    <section id="reels" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section-label">기록형 콘텐츠</p>
          <h2 className="section-title">숏폼 시리즈</h2>
          <p className="reels__sub">
            불사조 기록단의 시선으로 담은 상하이 4일차 자유 탐방. 릴스 시리즈는 탐방 후 업로드됩니다.
          </p>
          <a
            className="reels__cta"
            href="https://www.instagram.com/project.revelio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            인스타그램에서 보기 <strong>@project.revelio</strong>
          </a>
        </Reveal>

        <div className="reels__grid">
          {reels.map((reel, i) => (
            <Reveal key={reel.id} delay={i * 0.1}>
              <div className="reel-card">
                <div className="reel-card__screen">
                  🎬
                  <span>Coming<br />July 2026</span>
                </div>
                <div className="reel-card__info">
                  <h3>{reel.title}</h3>
                  <p>{reel.desc}</p>
                  <div className="reel-tags">
                    {reel.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
