import Reveal from './Reveal'
import { spaceTypes } from '@/data/compare'

export default function Compare() {
  return (
    <section id="compare" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">핵심 공간</p>
          <h2 className="section-title">세 개의 공간, 하나의 상하이</h2>
          <p className="compare__lead">역사를 되살린 공간, 전통과 트렌드가 섞인 상업 공간, 미래를 설계하는 스마트 인프라 — 상하이를 읽는 세 가지 시선.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="spaces__grid">
            {spaceTypes.map((s, i) => (
              <div key={i} className={`space-card space-card--${i + 1}`}>
                <div className="space-card__header">
                  <span className="space-card__icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p className="space-card__sub">{s.sub}</p>
                </div>
                <p className="space-card__desc">{s.desc}</p>
                <ul className="space-card__points">
                  {s.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
