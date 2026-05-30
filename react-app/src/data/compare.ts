export interface CompareItem {
  icon: string
  title: string
  sub: string
  desc: string
}

export interface CompareData {
  shenzhen: CompareItem[]
  shanghai: CompareItem[]
}

export const compareData: CompareData = {
  shenzhen: [
    { icon: '🤖', title: '자율주행 · AI', sub: '바이두 Apollo Go', desc: '운전자 없는 로보택시가 일상화' },
    { icon: '🚁', title: '드론 배달', sub: '메이탄 드론 배달 15분', desc: '하늘길이 물류 인프라' },
    { icon: '🏢', title: '테크 플래그십', sub: 'DJI · BYD', desc: '기업이 브랜드 공간으로 사용자를 설계' },
    { icon: '🔬', title: '하드웨어 생태계', sub: '대공방', desc: '아이디어가 제품이 되는 창업 공간' },
  ],
  shanghai: [
    { icon: '🏛️', title: '역사 재생', sub: '임시정부 청사 · 홍구공원', desc: '서사가 담긴 공간의 힘' },
    { icon: '🌿', title: '전통 정원', sub: '예원', desc: '명나라 정원이 현대 관광과 공존' },
    { icon: '🏙️', title: '문화 재생지구', sub: '신천지', desc: '스쿠먼 건축을 트렌디한 상업 공간으로' },
    { icon: '🌉', title: '야경 경관', sub: '외탄 · 동방명주', desc: '도시 스카이라인이 만드는 공간 서사' },
  ],
}
