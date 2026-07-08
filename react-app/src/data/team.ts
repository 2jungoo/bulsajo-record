export interface TeamMember {
  avatar: string
  name: string
  isLeader: boolean
  track: string
  role: string
  // public/assets/team/ 안의 프로필 사진 파일명. 없으면 이모지로 표시.
  photo?: string
}

export const team: TeamMember[] = [
  {
    avatar: '🧭', name: '엄태규', isLeader: true,
    track: '기업경영트랙 / 문학문화콘텐츠트랙',
    role: '프로젝트 총괄·콘텐츠 디렉터, 공간 비즈니스 모델 분석, 릴스 시리즈 디렉팅',
    photo: 'member1.png',
  },
  {
    avatar: '🎨', name: '지준희', isLeader: false,
    track: 'VMD전시디자인트랙 / 인테리어디자인트랙',
    role: '시각 디자인·공간 분석 콘텐츠 제작, 웹·인포그래픽 비주얼 총괄',
    photo: 'member2.png',
  },
  {
    avatar: '💻', name: '이준구', isLeader: false,
    track: 'AI 응용학과',
    role: '탐방 기록 웹페이지 제작·운영, AI·스마트 인프라 기술 분석',
    photo: 'member3.jpg',
  },
  {
    avatar: '📖', name: '권서연', isLeader: false,
    track: '문학문화콘텐츠학과',
    role: '인스타그램 운영·SNS 콘텐츠 기획, 공간 트렌드 조사·서술',
    photo: 'member4.png',
  },
  {
    avatar: '🎬', name: '이우혁', isLeader: false,
    track: '문학문화콘텐츠학과 / 기업경영트랙',
    role: '로컬 공간 스토리텔링·마케팅 트리거 분석, 숏폼 콘텐츠 기획·구성',
    photo: 'member5.png',
  },
  {
    avatar: '✨', name: '이시윤', isLeader: false,
    track: '상상력인재학부',
    role: '웹페이지 디테일 구성·레이아웃 설계, 콘텐츠 구조화·가독성 UI',
    photo: 'member6.png',
  },
]
