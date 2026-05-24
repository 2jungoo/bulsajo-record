import { members } from '../data/team';
import { site } from '../data/site';
import { useReveal } from '../hooks/useReveal';

export default function Team() {
  const [ref, visible] = useReveal();

  return (
    <section id="team" className="team section">
      <div ref={ref} className={`team__inner reveal${visible ? ' revealed' : ''}`}>
        <div className="section__label">팀 소개</div>
        <h2 className="section__title">불사조 기록단</h2>
        <p className="team__sub">
          AI · VMD · 기업경영 · 문학문화콘텐츠 · 상상력인재 — 6개의 전공이 하나의 시선으로
        </p>

        <div className="team__grid">
          {members.map((m) => (
            <div key={m.name} className="member-card">
              <div className="member-card__avatar">
                <span>{m.emoji}</span>
              </div>
              <div className="member-card__info">
                <div className="member-card__header">
                  <span className="member-card__name">{m.name}</span>
                  {m.role === '팀장' && <span className="member-card__leader">팀장</span>}
                </div>
                <span className="member-card__track">{m.track}</span>
                <p className="member-card__task">{m.task}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team__project-info">
          <div>
            <span className="team__info-label">조번호</span>
            <span>{site.projectNumber}</span>
          </div>
          <div>
            <span className="team__info-label">소속</span>
            <span>{site.university}</span>
          </div>
          <div>
            <span className="team__info-label">탐방 기간</span>
            <span>{site.period}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
