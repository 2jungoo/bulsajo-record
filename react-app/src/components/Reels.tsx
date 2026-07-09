import Reveal from './Reveal'
import { reels, feeds, type Reel } from '@/data/reels'

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function ReelCard({ item }: { item: Reel }) {
  return (
    <div className="reel-card">
      <div className="reel-card__screen">
        {item.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${BP}/assets/reels/${item.photo}`}
            alt={item.title}
            className="reel-card__img"
            loading="lazy"
          />
        ) : (
          <>
            {item.emoji}
            <span>{item.title}</span>
          </>
        )}
      </div>
      <div className="reel-card__info">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="reel-tags">
          {item.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Reels() {
  return (
    <section id="reels" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section-label">기록형 콘텐츠</p>
          <h2 className="section-title">숏폼 시리즈</h2>
          <p className="reels__sub">
            불사조 기록단이 심천·상하이에서 담은 릴스와 감성 피드. 인스타그램 @project.revelio에서 전체 콘텐츠를 만나보세요.
          </p>
          <a
            className="reels__cta"
            href="https://www.instagram.com/project.revelio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            인스타그램에서 보기 <strong>@project.revelio</strong>
          </a>
        </Reveal>

        <Reveal>
          <h3 className="reels__group-title">릴스</h3>
        </Reveal>
        <div className="reels__grid">
          {reels.map((reel, i) => (
            <Reveal key={reel.id} delay={i * 0.1}>
              <ReelCard item={reel} />
            </Reveal>
          ))}
        </div>

        <Reveal className="reels__group--spaced">
          <h3 className="reels__group-title">심천·상하이 피드</h3>
        </Reveal>
        <div className="reels__grid">
          {feeds.map((feed, i) => (
            <Reveal key={feed.id} delay={i * 0.1}>
              <ReelCard item={feed} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
