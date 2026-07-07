import type { Metadata } from 'next'

// basePath 접두사 — unoptimized export에선 자동 적용 안 함
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: '드론 배달 시뮬레이션 · 불사조 기록단',
  description: 'A* / Dijkstra 경로 탐색으로 한성대학교 캠퍼스 드론 배달을 시뮬레이션합니다.',
}

export default function DronePage() {
  return (
    <div className="drone-page">
      <header className="drone-page__header">
        <a href={`${BP}/`} className="drone-page__back">← 여행 기록으로</a>
        <div className="drone-page__titles">
          <p className="drone-page__label">사전 프로젝트</p>
          <h1 className="drone-page__title">한성대 캠퍼스 드론 배달 시뮬레이션</h1>
        </div>
      </header>

      <p className="drone-page__desc">
        탐방 전 팀 사전 프로젝트 — A* / Dijkstra 경로 탐색 알고리즘으로 한성대학교 캠퍼스를 누비는
        드론 배달 경로를 시뮬레이션합니다. 출발지와 도착지를 선택하고 배달을 시작해 보세요.
      </p>

      <div className="drone-page__frame">
        <iframe
          src={`${BP}/drone-sim/index.html`}
          title="한성대학교 캠퍼스 드론 배달 시뮬레이션"
          loading="lazy"
          allow="fullscreen"
        />
      </div>
    </div>
  )
}
