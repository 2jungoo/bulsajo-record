import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '불사조 기록단 — 상하이 4일차 자유 탐방 기록',
  description: '한성대학교 4조 불사조 기록단. 상하이 4일차 자유 탐방 — 역사적 공간 재생·복합 상업 건축·첨단 스마트 인프라의 공간 연출 및 사용자 경험 분석.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔥</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
