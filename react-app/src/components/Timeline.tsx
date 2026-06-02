import Reveal from './Reveal'
import { itinerary, itineraryDate } from '@/data/itinerary'

export default function Timeline() {
  return (
    <section id="itinerary" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section-label">탐방 일정</p>
          <h2 className="section-title">4일차 자유 탐방</h2>
          <p className="itinerary__sub">{itineraryDate} · 상하이</p>
        </Reveal>

        <div className="timeline timeline--day">
          {itinerary.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="timeline__item">
                <div className="timeline__marker">
                  <span className="badge badge--sh">{item.time}</span>
                </div>
                <div className="timeline__content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
