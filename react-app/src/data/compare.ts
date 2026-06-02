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
    sub: '난징동루 · 텐즈팡',
    desc: '전통과 로컬 트렌드가 공존하는 복합 상업 공간. 거리·골목 자체가 하나의 브랜드 경험이 된다.',
    points: ['보행자 중심 번화가', '스쿠먼 골목 재생', '쇼핑·미식·문화 융합'],
  },
  {
    icon: '🏙️',
    title: '첨단 스마트 인프라',
    sub: '루자쭈이 금융지구',
    desc: '초고층 마천루와 스마트 시스템이 결합한 미래 도시 인프라. 도시 스케일의 사용자 경험을 설계한다.',
    points: ['수직 도시 마천루', '스마트 환승·보행 인프라', '동방명주 · 외탄 야경'],
  },
]
