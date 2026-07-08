export interface TimelineScheduleItem {
  time: string
  title: string
  desc: string
}

export const itineraryDate = '2026.07.09 (목)'

export const itinerary: TimelineScheduleItem[] = [
  {
    time: '09:00',
    title: '신세계 출발',
    desc: '집결 후 도보 이동 시작 — 4일차 자유 탐방 개시.',
  },
  {
    time: '09:20',
    title: 'M50 예술단지 (莫干山路50号)',
    desc: '방직공장을 재생한 예술 창의단지 — 산업 유산 보존과 공간 재생 방식 관찰.',
  },
  {
    time: '10:30',
    title: '티엔즈팡 (田子坊)',
    desc: '스쿠먼 골목 재생 상업·예술 지구 — 좁은 동선이 만드는 발견의 경험 분석.',
  },
  {
    time: '12:00',
    title: '난징동루 (南京东路)',
    desc: '점심·구경 — 상하이 최대 보행자 번화가의 동선과 브랜드 공간 연출 기록.',
  },
  {
    time: '14:20',
    title: '신티엔디 (新天地)',
    desc: '카페·구경 — 스쿠먼 역사 건축과 현대 리테일이 결합한 공간 연출 관찰.',
  },
  {
    time: '15:50',
    title: '와이탄 / 외탄 (外灘)',
    desc: '쇼핑 — 황포강 변 워터프론트에서 강 건너 푸동 스카이라인·야경 조망.',
  },
  {
    time: '16:50',
    title: '일정 마무리',
    desc: '백화점 인근 도착 — 조별 탐방 기록 정리.',
  },
]
