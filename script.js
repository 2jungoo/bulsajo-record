// Progress bar
const progressFill = document.getElementById('progressFill');
function updateProgress() {
  const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
  progressFill.style.width = Math.min(scrolled, 100) + '%';
}

// Nav frosted glass
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  updateProgress();
}, { passive: true });

// 햄버거 메뉴
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// 방문지 필터
const filterBtns = document.querySelectorAll('.filter');
const placeCards = document.querySelectorAll('.place-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    placeCards.forEach(card => {
      const show = f === 'all' || card.dataset.city === f;
      card.style.display = show ? '' : 'none';
    });
  });
});

// 텍스트 요소에 reveal 추가 (섹션 라벨·타이틀·리드)
document.querySelectorAll('.section-label, .section-title').forEach(el => {
  el.classList.add('reveal');
});
document.querySelectorAll(
  '.about__lead, .compare__lead, .itinerary__sub, .places__sub, .reels__sub, .team__sub'
).forEach(el => el.classList.add('reveal'));

// 카드 그리드 자식에 reveal + stagger
const staggerGroups = [
  '.about__cards > .about__card',
  '.timeline > .timeline__item',
  '.reels__grid > .reel-card',
  '.team__grid > .member-card',
];
staggerGroups.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 0.09 + 's';
  });
});

// place-card는 필터링 때문에 개별 reveal (stagger 는 행 단위로)
document.querySelectorAll('.place-card').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 3) * 0.09 + 's';
});

// 스크롤 등장 IntersectionObserver (fade-up + blur)
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
