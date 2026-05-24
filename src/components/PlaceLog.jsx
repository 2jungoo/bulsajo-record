import { useState } from 'react';
import { places } from '../data/places';
import PlaceCard from './PlaceCard';
import { useReveal } from '../hooks/useReveal';

const filters = [
  { key: 'all', label: '전체' },
  { key: 'shenzhen', label: '선전' },
  { key: 'shanghai', label: '상하이' },
];

export default function PlaceLog() {
  const [active, setActive] = useState('all');
  const [ref, visible] = useReveal();

  const filtered = active === 'all' ? places : places.filter((p) => p.city === active);

  return (
    <section id="places" className="places section">
      <div ref={ref} className={`places__inner reveal${visible ? ' revealed' : ''}`}>
        <div className="section__label">공간 기록</div>
        <h2 className="section__title">탐방 공간 로그</h2>
        <p className="places__sub">
          타베로그(食べログ)처럼 — 방문한 모든 공간의 UX·공간 연출을 기록합니다.
          <br />평점과 사진은 탐방(7월) 후 업데이트됩니다.
        </p>

        <div className="places__filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${active === f.key ? ' filter-btn--active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
              <span className="filter-btn__count">
                {f.key === 'all' ? places.length : places.filter((p) => p.city === f.key).length}
              </span>
            </button>
          ))}
        </div>

        <div className="places__grid">
          {filtered.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}
