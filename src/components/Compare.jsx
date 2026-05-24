import { useReveal } from '../hooks/useReveal';

const shenzhen = {
  icon: '⚡',
  name: '선전 Shenzhen',
  tagline: '기술이 공간을 재정의하다',
  color: 'shenzhen',
  points: [
    { icon: '🤖', title: '자율주행·AI', desc: '바이두 Apollo Go — 운전자 없는 로보택시가 일상화' },
    { icon: '🚁', title: '드론 배달', desc: '메이탄 드론 배달 15분 — 하늘길이 물류 인프라' },
    { icon: '🏢', title: '테크 플래그십', desc: 'DJI·BYD — 기업이 브랜드 공간으로 사용자를 설계' },
    { icon: '🔬', title: '하드웨어 생태계', desc: '대공방 — 아이디어가 제품이 되는 창업 공간' },
  ],
};

const shanghai = {
  icon: '🏯',
  name: '상하이 Shanghai',
  tagline: '역사가 공간을 이야기하다',
  color: 'shanghai',
  points: [
    { icon: '🏛️', title: '역사 재생', desc: '임시정부 청사·홍구공원 — 서사가 담긴 공간의 힘' },
    { icon: '🌿', title: '전통 정원', desc: '예원 — 명나라 정원이 현대 관광과 공존' },
    { icon: '🏙️', title: '문화 재생지구', desc: '신천지 — 스쿠먼 건축을 트렌디한 상업 공간으로' },
    { icon: '🌉', title: '야경 경관', desc: '외탄·동방명주 — 도시 스카이라인이 만드는 공간 서사' },
  ],
};

function CityBlock({ city }) {
  return (
    <div className={`compare__block compare__block--${city.color}`}>
      <div className="compare__block-header">
        <span className="compare__block-icon">{city.icon}</span>
        <h3>{city.name}</h3>
        <p>{city.tagline}</p>
      </div>
      <ul className="compare__list">
        {city.points.map((p) => (
          <li key={p.title} className="compare__item">
            <span className="compare__item-icon">{p.icon}</span>
            <div>
              <strong>{p.title}</strong>
              <span>{p.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Compare() {
  const [ref, visible] = useReveal();

  return (
    <section id="compare" className="compare section section--dark">
      <div ref={ref} className={`compare__inner reveal${visible ? ' revealed' : ''}`}>
        <div className="section__label section__label--light">비교 분석</div>
        <h2 className="section__title section__title--light">두 도시, 두 공간의 언어</h2>
        <p className="compare__intro">
          선전은 기술로 공간을 설계하고, 상하이는 역사로 공간에 이야기를 입힌다.
          불사조 기록단은 이 대조를 6인의 시선으로 낱낱이 기록한다.
        </p>
        <div className="compare__grid">
          <CityBlock city={shenzhen} />
          <div className="compare__divider">
            <span>VS</span>
          </div>
          <CityBlock city={shanghai} />
        </div>
      </div>
    </section>
  );
}
