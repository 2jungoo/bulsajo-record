export type City = 'shenzhen' | 'shanghai'
export type Category = 'tech' | 'history' | 'culture' | 'landscape'

export interface Place {
  id: number
  city: City
  emoji: string
  category: Category
  categoryLabel: string
  cityLabel: string
  title: string
  desc: string
  uxPoint: string
}

export const places: Place[] = [
  {
    id: 1, city: 'shenzhen', emoji: '⚡', category: 'tech', categoryLabel: '기술', cityLabel: '선전',
    title: '바이두 아폴로 고 (Apollo Go)',
    desc: '완전 무인 Level 4 자율주행 로보택시. 쇼룸 브리핑과 실제 도심 시승 체험.',
    uxPoint: '앱 호출부터 탑승·하차까지 운전자 없는 UX 흐름. 안내 화면·소음·내부 공간 경험 분석.',
  },
  {
    id: 2, city: 'shenzhen', emoji: '🚁', category: 'tech', categoryLabel: '기술', cityLabel: '선전',
    title: '메이탄 드론 배달 시연',
    desc: '선전 국가인재공원. QR코드 결제 → 드론 배달 → 컨테이너형 포트 수령. 평균 배달 15분.',
    uxPoint: '오더 → 픽업 오스크 선택 → 드론 도착 알림 → 패널 수령까지 단계별 UX 관찰.',
  },
  {
    id: 3, city: 'shenzhen', emoji: '🚗', category: 'tech', categoryLabel: '기술', cityLabel: '선전',
    title: 'BYD 본사',
    desc: '세계 최대 전기차 기업 선전 본사. 홍보관·R&D 센터·로봇 자동화 생산 시설 견학.',
    uxPoint: '브랜드 공간 연출과 방문객 동선 설계. 기술 기업의 오프라인 쇼룸 전략 분석.',
  },
  {
    id: 4, city: 'shenzhen', emoji: '🎯', category: 'tech', categoryLabel: '기술', cityLabel: '선전',
    title: 'DJI 플래그십 스토어 (OCT BAY)',
    desc: '선전 남산구 OCT BAY. 드론 전시·체험·비행 시범·항공촬영 영상. "드론계의 애플 스토어".',
    uxPoint: '체험형 공간 연출의 정수. 제품 전시 배치·조명·동선·인터랙션 UX 심층 분석.',
  },
  {
    id: 5, city: 'shenzhen', emoji: '🔬', category: 'tech', categoryLabel: '기술', cityLabel: '선전',
    title: '대공방 大公坊 (iMakerbase)',
    desc: '2013년 설립 국제 하드웨어 액셀러레이터. 스타트업 인큐베이션·투자 피칭·공급망 연결.',
    uxPoint: '혁신 창업 공간의 배치와 협업 문화. 공간이 아이디어 생성에 미치는 영향 분석.',
  },
  {
    id: 6, city: 'shanghai', emoji: '🇰🇷', category: 'history', categoryLabel: '역사', cityLabel: '상하이',
    title: '상하이독립운동가요 (만국공묘)',
    desc: '타국에서 독립을 위해 헌신한 독립운동가들이 잠든 역사적 공간.',
    uxPoint: '숭고한 서사가 배어있는 공간의 조경·동선·사인 시스템. 감정을 유도하는 공간 설계.',
  },
  {
    id: 7, city: 'shanghai', emoji: '🌸', category: 'history', categoryLabel: '역사', cityLabel: '상하이',
    title: '윤봉길 의사 폭탄투척지 홍구공원',
    desc: '1932년 의거 현장. 기념관이 조성되어 의거의 배경과 의미를 체계적으로 학습.',
    uxPoint: '역사 콘텐츠의 현장 해설 방식. 기념 공간의 시각 언어와 감동 전달 방법 분석.',
  },
  {
    id: 8, city: 'shanghai', emoji: '🏛️', category: 'history', categoryLabel: '역사', cityLabel: '상하이',
    title: '대한민국 임시정부 청사',
    desc: '1919~1932년 활동한 임시정부 청사. 독립전략 수립·임시헌법 체계의 출발점.',
    uxPoint: '역사 공간의 보존·전시 방식과 방문객 학습 경험 설계. 공간이 전하는 서사의 힘.',
  },
  {
    id: 9, city: 'shanghai', emoji: '🛍️', category: 'culture', categoryLabel: '문화', cityLabel: '상하이',
    title: '남경로 (南京路)',
    desc: '상하이 최대 번화가. 현대식 건물과 서양식 건물의 조화. 낮과 밤 모두 화려.',
    uxPoint: '보행자 중심 거리 연출. 브랜드 쇼핑·미식·야경이 어우러진 복합 UX 흐름.',
  },
  {
    id: 10, city: 'shanghai', emoji: '🌿', category: 'history', categoryLabel: '역사', cityLabel: '상하이',
    title: '예원 & 상해 옛거리',
    desc: '명나라 관료가 18년에 걸쳐 조성한 중국식 정원. 40개의 정자와 연못.',
    uxPoint: '전통 정원 공간의 시선 유도·정자 배치·감성 동선. 역사와 현대 상업의 공존 연출.',
  },
  {
    id: 11, city: 'shanghai', emoji: '☕', category: 'culture', categoryLabel: '문화', cityLabel: '상하이',
    title: '신천지 (新天地)',
    desc: '스쿠먼 가옥과 서양 건축이 공존하는 상하이 대표 관광·문화 지구.',
    uxPoint: '역사 건축 재생 + 트렌디한 F&B 유치. 문화 재생 공간의 브랜딩과 방문객 경험.',
  },
  {
    id: 12, city: 'shanghai', emoji: '🌉', category: 'landscape', categoryLabel: '경관', cityLabel: '상하이',
    title: '황포강 유람선 + 외탄(外灘) 야경',
    desc: '황포강을 따라 동방명주·세계금융센터·진마오 타워 등 랜드마크를 감상.',
    uxPoint: '야경 조명 연출과 관람객의 감성 경험. 도시 스카이라인이 만들어내는 공간 서사.',
  },
  {
    id: 13, city: 'shanghai', emoji: '🗼', category: 'culture', categoryLabel: '문화', cityLabel: '상하이',
    title: '동방명주타워 + 도시역사진열관',
    desc: '468m 상하이 랜드마크. 전망대에서 황포강과 도시 전경 조망. 유리 전망바닥 체험.',
    uxPoint: '수직 공간에서의 도시 체험. 역사진열관의 공간 큐레이션과 시대별 서사 연출.',
  },
]
