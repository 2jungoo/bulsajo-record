import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__fire">🔥</span>
          <span className="footer__name">{site.teamName}</span>
        </div>
        <p className="footer__project">{site.title}</p>
        <p className="footer__uni">{site.university} · {site.projectNumber}</p>
        <p className="footer__period">{site.period}</p>
        <div className="footer__keywords">
          {site.keywords.map((k) => <span key={k.word}>#{k.word}</span>)}
        </div>
        <p className="footer__copy">© 2026 불사조 기록단. 한성대학교 글로벌 리더십 탐방단.</p>
      </div>
    </footer>
  );
}
