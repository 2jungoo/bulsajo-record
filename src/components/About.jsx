import { site } from '../data/site';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="about section">
      <div ref={ref} className={`about__inner reveal${visible ? ' revealed' : ''}`}>
        <div className="section__label">프로젝트 소개</div>
        <h2 className="section__title">왜 두 도시인가</h2>
        <p className="about__desc">{site.description}</p>

        <div className="about__keywords">
          {site.keywords.map((k, i) => (
            <div key={k.word} className="about__kcard" style={{ '--delay': `${i * 0.15}s` }}>
              <div className="about__kcard-num">0{i + 1}</div>
              <div className="about__kcard-word">{k.word}</div>
              <div className="about__kcard-desc">{k.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
