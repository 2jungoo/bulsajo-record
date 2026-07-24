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
    icon: '🏮',
    title: '전통과 모더니즘의 공존',
    sub: '신천지',
    desc: '상하이의 전통 주거 양식인 스쿠먼 건축의 외관을 보존하면서, 내부를 트렌디한 글로벌 상권으로 탈바꿈시킨 도시 재생의 아이콘이다. 역사적 기억과 현대적 라이프스타일의 유기적인 결합을 조망한다.',
    points: ['스쿠먼 건축 양식의 현대적 재생', '역사 지구 속 프리미엄 상업 가구', '전통 가옥 ↔ 모던 라이프스타일 대비'],
  },
]
