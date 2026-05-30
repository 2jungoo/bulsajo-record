import Reveal from './Reveal'

const cards = [
  {
    num: '01',
    title: '실증',
    desc: '전공 서적과 강의에서 이론으로만 학습해 온 지식들을 글로벌 현장 탐방이라는 실제적 경험을 통해 검증한다.',
  },
  {
    num: '02',
    title: '융합',
    desc: '인문학적 스토리텔링과 경영 전략, 공간 설계 및 최첨단 공학 시스템을 아우르는 다각도의 시선을 하나로 모은다.',
  },
  {
    num: '03',
    title: '기록',
    desc: '공간은 그곳에 머무는 사람들의 이야기와 시간이 쌓여서 만들어진다. 우리만의 특별한 시선이 담긴 기록물로 남긴다.',
  },
]

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section-label">프로젝트 소개</p>
          <h2 className="section-title">왜 두 도시인가</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="about__lead">
            중국을 대표하는 두 도시, 선전과 상하이. 하나는 AI·드론·자율주행이 일상화된 첨단 기술 도시이고,
            다른 하나는 유럽풍 건축과 역사 문화가 공존하는 인문학적 공간이다. 불사조 기록단은 두 도시가
            방문객에게 제공하는 시각적 공간 연출과 사용자 경험(UX)을 6인의 다학제 시각으로 비교 분석하고,
            그 과정을 기록형 콘텐츠로 아카이빙한다.
          </p>
        </Reveal>

        <div className="about__cards">
          {cards.map((card, i) => (
            <Reveal key={card.num} delay={i * 0.1}>
              <div className="about__card">
                <div className="about__card-num">{card.num}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
