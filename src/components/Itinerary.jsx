import { itinerary } from '../data/itinerary';
import { useReveal } from '../hooks/useReveal';

const cityClass = { shenzhen: 'shenzhen', shanghai: 'shanghai', transit: 'transit' };

export default function Itinerary() {
  const [ref, visible] = useReveal();

  return (
    <section id="itinerary" className="itinerary section">
      <div ref={ref} className={`itinerary__inner reveal${visible ? ' revealed' : ''}`}>
        <div className="section__label">탐방 일정</div>
        <h2 className="section__title">4박 5일의 기록</h2>
        <p className="itinerary__sub">2026년 7월 6일 – 7월 10일 · 중국 선전 & 상하이</p>

        <div className="itinerary__timeline">
          {itinerary.map((day, i) => (
            <div
              key={day.day}
              className={`itinerary__day itinerary__day--${cityClass[day.city]}`}
              style={{ '--delay': `${i * 0.1}s` }}
            >
              <div className="itinerary__day-marker">
                <span className="itinerary__day-num">Day {day.day}</span>
                <span className="itinerary__day-date">{day.date}</span>
                <span className={`itinerary__day-city tag--${cityClass[day.city]}`}>{day.cityLabel}</span>
              </div>
              <div className="itinerary__day-content">
                <h3>{day.title}</h3>
                <ul>
                  {day.events.map((ev) => (
                    <li key={ev.text}>
                      <span className="itinerary__time">{ev.time}</span>
                      <span>{ev.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
