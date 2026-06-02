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
