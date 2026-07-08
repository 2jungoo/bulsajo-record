export interface SpaceTypeItem {
  icon: string
  title: string
  sub: string
  desc: string
  points: string[]
}

export const spaceTypes: SpaceTypeItem[] = [
  {
    icon: '🎨',
    title: '역사적 공간 재생',
    sub: 'M50 예술단지',
    desc: '폐산업 시설을 예술·창의 공간으로 되살린 재생 모델. 사라질 뻔한 공간에 새 가치를 입힌다.',
    points: ['방직공장 → 예술단지', '산업 유산 골조 보존', '갤러리·아틀리에 입주'],
  },
  {
    icon: '🛍️',
    title: '현대 복합 상업 건축',
    sub: '난징동루 · 티엔즈팡',
    desc: '전통과 로컬 트렌드가 공존하는 복합 상업 공간. 거리·골목 자체가 하나의 브랜드 경험이 된다.',
    points: ['보행자 중심 번화가', '스쿠먼 골목 재생', '쇼핑·미식·문화 융합'],
  },
  {
    icon: '🌉',
    title: '첨단 스마트 인프라',
    sub: '와이탄 · 푸동 스카이라인',
    desc: '와이탄 워터프론트에서 강 건너 푸동의 초고층 금융도시를 조망한다. 도시 스케일의 스마트 인프라를 한눈에 읽는다.',
    points: ['워터프론트 야경 조망', '강 건너 스마트 금융도시', '역사 건축 ↔ 미래 도시 대비'],
  },
]
