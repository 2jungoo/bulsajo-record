export type SpaceType = 'regen' | 'commercial' | 'smart'

export interface Place {
  id: number
  spaceType: SpaceType
  emoji: string
  categoryLabel: string
  title: string
  desc: string
  uxPoint: string
  // public/assets/places/ 안의 사진 파일명. 없으면 이모지로 표시.
  photo?: string
}

export const places: Place[] = [
  {
    id: 1, spaceType: 'regen', emoji: '🎨', categoryLabel: '역사재생',
    title: 'M50 예술단지 (莫干山路50号)',
    desc: '쑤저우허 변 방직공장을 재생한 상하이 대표 예술 창의단지. 폐산업 건물에 갤러리·아틀리에·카페가 입주.',
    uxPoint: '산업 유산의 골조를 그대로 살린 공간 재생 방식. 옛 공장 동선과 현대 전시 동선이 겹쳐지는 경험 분석.',
    photo: 'm50.jpg',
  },
  {
    id: 2, spaceType: 'commercial', emoji: '🛍️', categoryLabel: '상업건축',
    title: '난징동루 (南京东路)',
    desc: '상하이 최대 보행자 번화가. 현대식 건물과 서양식 건축이 공존하며 낮과 밤 모두 화려한 쇼핑 거리.',
    uxPoint: '보행자 중심 거리 연출. 브랜드 쇼핑·미식·야경이 어우러진 복합 상업 공간의 동선과 UX 흐름.',
    photo: 'nanjingdonglu.jpg',
  },
  {
    id: 3, spaceType: 'commercial', emoji: '☕', categoryLabel: '상업건축',
    title: '티엔즈팡 (田子坊)',
    desc: '스쿠먼(石庫門) 가옥 골목을 재생한 로컬 상업·예술 지구. 좁은 골목마다 공방·카페·편집숍이 밀집.',
    uxPoint: '전통 주거 골목을 상업 공간으로 전환한 재생 모델. 좁은 동선이 만드는 발견의 재미와 머무름 설계.',
    photo: 'tianzifang.jpg',
  },
  {
    id: 4, spaceType: 'regen', emoji: '🏮', categoryLabel: '역사재생',
    title: '신티엔디 (新天地)',
    desc: '스쿠먼 가옥을 재생한 상하이 대표 고급 상업지구. 벽돌 외관을 보존한 채 레스토랑·카페·부티크가 입주한 워크형 리테일 공간.',
    uxPoint: '역사 건축의 파사드를 유지하며 현대 리테일을 이식한 재생 모델. 옛 골목 스케일과 고급 브랜드 동선이 겹쳐지는 경험 분석.',
    photo: 'xintiandi.jpg',
  },
  {
    id: 5, spaceType: 'smart', emoji: '🌉', categoryLabel: '스마트인프라',
    title: '와이탄 / 외탄 (外灘)',
    desc: '황포강 서안 워터프론트 산책로. 강 건너 푸동의 마천루 스카이라인을 정면으로 조망하는 상하이 최고의 경관 포인트.',
    uxPoint: '야경 조명 연출과 관람객의 감성 경험. 강을 사이에 둔 역사 건축(서안)과 스마트 금융도시(동안)의 대비 서사.',
    photo: 'waitan.jpg',
  },
]
