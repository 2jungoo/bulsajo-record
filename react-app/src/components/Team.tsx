import Reveal from './Reveal'
import { team } from '@/data/team'

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">팀 소개</p>
          <h2 className="section-title">불사조 기록단</h2>
          <p className="team__sub">
            AI · VMD · 기업경영 · 문학문화콘텐츠 · 상상력인재 — 6개의 전공이 하나의 시선으로
          </p>
        </Reveal>

        <div className="team__grid">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="member-card">
                <div className="member-card__avatar">{member.avatar}</div>
                <div className="member-card__info">
                  <div className="member-name-row">
                    <span className="member-name">{member.name}</span>
                    {member.isLeader && <span className="leader-badge">팀장</span>}
                  </div>
                  <div className="member-track">{member.track}</div>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
