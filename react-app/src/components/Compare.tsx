import Reveal from './Reveal'
import { compareData } from '@/data/compare'

export default function Compare() {
  return (
    <section id="compare" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">비교 분석</p>
          <h2 className="section-title">두 도시, 두 공간의 언어</h2>
          <p className="compare__lead">선전은 기술로 공간을 설계하고, 상하이는 역사로 공간에 이야기를 입힌다.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="compare__split">
            {/* 선전 */}
            <div className="compare__col compare__col--sz">
              <div className="compare__col-header">
                <span className="compare__icon">⚡</span>
                <h3>선전 Shenzhen</h3>
                <p>기술이 공간을 재정의하다</p>
              </div>
              <ul className="compare__list">
                {compareData.shenzhen.map((item, i) => (
                  <li key={i}>
                    <span className="compare__list-icon">{item.icon}</span>
                    <div className="compare__list-text">
                      <strong>{item.title}</strong>
                      <div className="compare__list-sub">{item.sub}</div>
                      <div className="compare__list-desc">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 상하이 */}
            <div className="compare__col compare__col--sh">
              <div className="compare__col-header">
                <span className="compare__icon">🏯</span>
                <h3>상하이 Shanghai</h3>
                <p>역사가 공간을 이야기하다</p>
              </div>
              <ul className="compare__list">
                {compareData.shanghai.map((item, i) => (
                  <li key={i}>
                    <span className="compare__list-icon">{item.icon}</span>
                    <div className="compare__list-text">
                      <strong>{item.title}</strong>
                      <div className="compare__list-sub">{item.sub}</div>
                      <div className="compare__list-desc">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
