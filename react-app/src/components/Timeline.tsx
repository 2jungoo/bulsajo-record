import Reveal from './Reveal'
import { itinerary } from '@/data/itinerary'

export default function Timeline() {
  return (
    <section id="itinerary" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section-label">탐방 일정</p>
          <h2 className="section-title">4박 5일의 기록</h2>
          <p className="itinerary__sub">2026년 7월 6일 – 7월 10일 · 중국 선전 &amp; 상하이</p>
        </Reveal>

        <div className="timeline">
          {itinerary.map((day, i) => (
            <Reveal key={day.day} delay={i * 0.08}>
              <div className="timeline__item">
                <div className="timeline__marker">
                  <div className="timeline__day">Day {day.day}</div>
                  <div className="timeline__date">{day.date} ({day.weekday})</div>
                  <span className={`badge badge--${day.badge}`}>{day.badgeLabel}</span>
                </div>
                <div className="timeline__content">
                  <h3>{day.title}</h3>
                  <ul>
                    {day.items.map((item, j) => (
                      <li key={j}>
                        <time>{item.time}</time>
                        <span>{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
