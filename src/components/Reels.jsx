import { reelSeries } from '../data/reels';
import { useReveal } from '../hooks/useReveal';

export default function Reels() {
  const [ref, visible] = useReveal();

  return (
    <section id="reels" className="reels section section--dark">
      <div ref={ref} className={`reels__inner reveal${visible ? ' revealed' : ''}`}>
        <div className="section__label section__label--light">콘텐츠</div>
        <h2 className="section__title section__title--light">기록형 숏폼 시리즈</h2>
        <p className="reels__sub">
          불사조 기록단의 시선으로 담은 선전과 상하이. 릴스 시리즈는 탐방 후 업로드됩니다.
        </p>

        <div className="reels__grid">
          {reelSeries.map((reel, i) => (
            <div key={reel.id} className="reel-card" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="reel-card__screen">
                {reel.embedUrl ? (
                  <iframe
                    src={reel.embedUrl}
                    title={reel.title}
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : (
                  <div className="reel-card__placeholder">
                    <span className="reel-card__placeholder-icon">🎬</span>
                    <span>탐방 후 업로드</span>
                    <span>Coming July 2026</span>
                  </div>
                )}
              </div>
              <div className="reel-card__info">
                <h3>{reel.title}</h3>
                <p>{reel.desc}</p>
                <div className="reel-card__tags">
                  {reel.tags.map((t) => <span key={t} className="reel-tag">#{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
