// Nav: 스크롤 시 frosted glass 효과
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

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

// 스크롤 등장 애니메이션
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) observer.unobserve(e.target), e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
