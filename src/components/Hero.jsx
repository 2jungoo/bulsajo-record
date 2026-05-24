import { site } from '../data/site';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" />
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-fire">🔥</span>
          <span>{site.teamName}</span>
          <span className="hero__badge-sep">·</span>
          <span>{site.projectNumber}</span>
        </div>

        <h1 className="hero__title">{site.title}</h1>
        <p className="hero__subtitle">{site.subtitle}</p>
        <p className="hero__tagline">{site.tagline}</p>

        <div className="hero__keywords">
          {site.keywords.map((k) => (
            <div key={k.word} className="hero__keyword">
              <span className="hero__keyword-word">{k.word}</span>
              <span className="hero__keyword-desc">{k.desc}</span>
            </div>
          ))}
        </div>

        <div className="hero__meta">
          <span>📅 {site.period}</span>
          <span>📍 {site.cities.join(' · ')}</span>
          <span>🏫 {site.university}</span>
        </div>

        <div className="hero__cities">
          <div className="hero__city hero__city--shenzhen">
            <span className="hero__city-icon">⚡</span>
            <span className="hero__city-name">선전</span>
            <span className="hero__city-sub">첨단 기술 · 미래 도시</span>
          </div>
          <div className="hero__city-vs">VS</div>
          <div className="hero__city hero__city--shanghai">
            <span className="hero__city-icon">🏯</span>
            <span className="hero__city-name">상하이</span>
            <span className="hero__city-sub">역사 문화 · 공간 재생</span>
          </div>
        </div>

        <a href="#about" className="hero__cta"
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>
          기록 시작하기 ↓
        </a>
      </div>
    </section>
  );
}
