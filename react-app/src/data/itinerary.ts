export interface TimelineScheduleItem {
  time: string
  title: string
  desc: string
}

export const itineraryDate = '2026.07.09 (목)'

export const itinerary: TimelineScheduleItem[] = [
  {
    time: '오전',
    title: 'M50 예술단지 (莫干山路50号)',
    desc: '방직공장을 재생한 예술 창의단지 탐방 — 산업 유산 보존과 공간 재생 방식 관찰.',
  },
  {
    time: '점심·오후',
    title: '난징동루 (南京东路)',
    desc: '상하이 최대 보행자 번화가 — 복합 상업 거리의 동선과 브랜드 공간 연출 기록.',
  },
  {
    time: '오후',
    title: '텐즈팡 (田子坊)',
    desc: '스쿠먼 골목 재생 로컬 상업·예술 지구 — 좁은 동선이 만드는 발견의 경험 분석.',
  },
  {
    time: '저녁',
    title: '루자쭈이 금융지구 + 동방명주',
    desc: '푸동 마천루 금융지구와 랜드마크 전망대 — 첨단 스마트 인프라와 수직 도시 체험.',
  },
  {
    time: '야간',
    title: '외탄(外灘) 야경 & 기록 정리',
    desc: '황포강 변에서 루자쭈이 스카이라인 조망 후 조별 탐방 기록 정리.',
  },
]
