import Image from 'next/image'

// basePath 접두사 — unoptimized export에선 next/image가 src에 자동 적용 안 함
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Footer() {
  return (
    <footer className="footer section--dark">
      <div className="footer__brand">
        <span className="footer__fire">🔥</span>
        <span className="footer__name">불사조 기록단</span>
      </div>
      <p className="footer__project">상하이 4일차 자유 탐방 — 공간 연출 및 사용자 경험 분석</p>
      <Image
        src={`${BP}/assets/hansung-logotype-ko.png`}
        alt="한성대학교"
        width={89}
        height={26}
        className="footer__logo"
        style={{ width: 'auto', height: 26 }}
      />
      <p className="footer__uni">한성대학교 글로벌 리더십 탐방단 2026 · 4조</p>
      <p className="footer__period">2026.07.06 – 07.10</p>
      <div className="footer__keywords">
        <span>#실증</span>
        <span>#융합</span>
        <span>#기록</span>
      </div>
    </footer>
  )
}
