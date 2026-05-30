export type DayBadge = 'sz' | 'sh' | 'tr'

export interface TimelineScheduleItem {
  time: string
  desc: string
}

export interface TimelineDay {
  day: number
  date: string
  weekday: string
  badge: DayBadge
  badgeLabel: string
  title: string
  items: TimelineScheduleItem[]
}

export const itinerary: TimelineDay[] = [
  {
    day: 1, date: '07.06', weekday: '월', badge: 'sz', badgeLabel: '선전',
    title: '선전 도착 — 미래 기술의 첫인상',
    items: [
      { time: '10:05', desc: '인천국제공항(T2) 출발 (OZ371)' },
      { time: '12:40', desc: '선전국제공항 도착 · 입국 수속' },
      { time: '14:00', desc: '바이두 아폴로 고 — 쇼룸 브리핑 & 자율주행 시승 (90분)' },
      { time: '저녁', desc: '메이탄 드론 배달 시연 체험' },
      { time: '야간', desc: '호텔 체크인 · 오리엔테이션' },
    ],
  },
  {
    day: 2, date: '07.07', weekday: '화', badge: 'sz', badgeLabel: '선전',
    title: '선전 풀데이 — 기술 기업 집중 탐방',
    items: [
      { time: '오전', desc: 'BYD 본사 — 쇼룸 & 시연 (60분)' },
      { time: '오후', desc: 'DJI 플래그십 스토어 — 체험형 공간 탐방 (60분)' },
      { time: '오후', desc: '대공방(iMakerbase) — 하드웨어 액셀러레이터 방문' },
      { time: '야간', desc: '조별 과제 토의 (호텔 미팅룸, 약 3시간)' },
    ],
  },
  {
    day: 3, date: '07.08', weekday: '수', badge: 'tr', badgeLabel: '이동',
    title: '선전 → 상하이 — 기술에서 역사로',
    items: [
      { time: '09:30', desc: '선전공항 출발 (MU 5338)' },
      { time: '11:30', desc: '상하이 홍교 공항 도착' },
      { time: '14:00', desc: '만국공묘 방문 — 독립운동 역사 현장' },
      { time: '14:40', desc: '남경로 탐방 — 상하이 최대 번화가' },
      { time: '21:00', desc: '황포강 유람선 탑승 + 외탄 야경 감상' },
    ],
  },
  {
    day: 4, date: '07.09', weekday: '목', badge: 'sh', badgeLabel: '상하이',
    title: '상하이 — 역사 재생 공간과 조별 발표',
    items: [
      { time: '오전', desc: '윤봉길 의사 홍구공원 · 대한민국 임시정부 청사' },
      { time: '오후', desc: '예원 & 상해 옛거리 · 신천지 탐방' },
      { time: '저녁', desc: '콘래드 상하이 만찬 (뷔페식)' },
      { time: '야간', desc: '조별 과제 토의 & 수행 내용 발표' },
    ],
  },
  {
    day: 5, date: '07.10', weekday: '금', badge: 'sh', badgeLabel: '상하이',
    title: '상하이 마지막 날 — 랜드마크와 귀국',
    items: [
      { time: '오전', desc: '동방명주타워 + 도시역사진열관 관광' },
      { time: '14:00', desc: '상하이 푸동국제공항 도착 · 탑승 수속' },
      { time: '16:20', desc: '상하이 출발 (OZ366)' },
      { time: '19:20', desc: '인천국제공항(T2) 도착 · 해산' },
    ],
  },
]
