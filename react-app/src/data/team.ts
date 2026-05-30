export interface TeamMember {
  avatar: string
  name: string
  isLeader: boolean
  track: string
  role: string
}

export const team: TeamMember[] = [
  {
    avatar: '🧭', name: '엄태규', isLeader: true,
    track: '기업경영트랙 / 문학문화콘텐츠트랙',
    role: '팀 총괄·기획, 공간 비즈니스 모델 분석, 릴스 시리즈 디렉팅',
  },
  {
    avatar: '🎨', name: '지준희', isLeader: false,
    track: 'VMD전시디자인트랙',
    role: 'VMD 공간 연출 분석, 시각화 자료·인포그래픽 제작',
  },
  {
    avatar: '💻', name: '이준구', isLeader: false,
    track: 'AI응용학부',
    role: 'AI·스마트 인프라 기술 분석, 팀 웹페이지 제작·운영',
  },
  {
    avatar: '📖', name: '권서연', isLeader: false,
    track: '문학문화콘텐츠학과',
    role: '인문학적 스토리텔링, 공간 트렌드 조사, 보고서 서술 총괄',
  },
  {
    avatar: '🎬', name: '이우혁', isLeader: false,
    track: '문학문화콘텐츠학과',
    role: '숏폼 콘텐츠 기획·구성, 도시별 문화 컨텍스트 분석',
  },
  {
    avatar: '✨', name: '이시윤', isLeader: false,
    track: '상상력인재학부',
    role: '창의 기획·미래 시나리오 도출, 최종 발표 구성·진행',
  },
]
