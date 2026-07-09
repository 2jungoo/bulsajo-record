export interface Reel {
  id: number
  emoji: string
  title: string
  desc: string
  tags: string[]
  // public/assets/reels/ 안의 썸네일 파일명. 없으면 이모지로 표시.
  photo?: string
}

// 릴스 3편
export const reels: Reel[] = [
  {
    id: 1,
    emoji: '🌀',
    title: '주술회전',
    desc: '인기 애니메이션 「주술회전」 감성으로 편집한 릴스. 심천·상하이에서 담은 장면을 임팩트 있는 컷과 이펙트로 엮었다.',
    tags: ['#릴스', '#주술회전', '#감성편집'],
    photo: 'jujutsu.jpg',
  },
  {
    id: 2,
    emoji: '🎞️',
    title: '셋로그',
    desc: '팀원 셋이 함께 담은 브이로그형 기록. 이동하고 먹고 기록하는 여정의 순간들을 자연스럽게 이어 붙였다.',
    tags: ['#릴스', '#브이로그', '#팀기록'],
    photo: 'setlog.jpg',
  },
  {
    id: 3,
    emoji: '↩️',
    title: '옆으로 넘어지는 릴스',
    desc: '「옆으로 넘어지는」 트랜지션 트렌드를 활용한 릴스. 장면과 장면을 리듬감 있게 전환하며 도시를 넘나든다.',
    tags: ['#릴스', '#트랜지션', '#트렌드'],
    photo: 'fall.jpg',
  },
]

// 심천·상하이 활동 감성 피드
export const feeds: Reel[] = [
  {
    id: 1,
    emoji: '🏙️',
    title: '심천 — 활동 기록',
    desc: '심천에서의 팀 활동을 담은 감성 피드. 도시의 결과 우리의 하루를 사진으로 남겼다.',
    tags: ['#심천', '#감성피드', '#팀활동'],
    photo: 'shenzhen.jpg',
  },
  {
    id: 2,
    emoji: '🌆',
    title: '상하이 — 활동 기록',
    desc: '상하이에서의 팀 활동을 담은 감성 피드. 공간과 순간을 사진으로 기록했다.',
    tags: ['#상하이', '#감성피드', '#팀활동'],
    photo: 'shanghai.jpg',
  },
]
