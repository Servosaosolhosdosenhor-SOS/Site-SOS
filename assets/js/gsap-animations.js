(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  document.documentElement.classList.add('animations-ready');

  if (!gsap || prefersReduced) {
    document.documentElement.classList.add('animations-fallback');
    document.querySelectorAll('[data-sos-animate], .motion-item, .reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power3.out', duration: 0.8 });

  const selectAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const select = (selector, root = document) => root.querySelector(selector);

  // Remove estilos antigos que poderiam esconder elementos.
  selectAll('.motion-item, .reveal').forEach(el => {
    el.classList.add('motion-visible', 'visible');
    gsap.set(el, { clearProps: 'opacity,transform,filter,transition' });
  });

  // Tela de abertura bem visível.
  const intro = document.createElement('div');
  intro.className = 'sos-intro-screen';
  intro.innerHTML = `
    <div class="sos-intro-inner">
      <img src="assets/img/logo-sos.png" alt="">
      <strong>S.O.S</strong>
      <span>Servos aos Olhos do Senhor</span>
    </div>`;
  document.body.prepend(intro);

  const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  introTl
    .from('.sos-intro-inner img', { scale: 0.35, rotation: -18, opacity: 0, duration: 0.7 })
    .from('.sos-intro-inner strong', { y: 24, opacity: 0, duration: 0.45 }, '-=0.25')
    .from('.sos-intro-inner span', { y: 14, opacity: 0, duration: 0.4 }, '-=0.2')
    .to('.sos-intro-inner', { scale: 1.08, opacity: 0, duration: 0.35, delay: 0.25 })
    .to(intro, { yPercent: -105, duration: 0.75, ease: 'power4.inOut' })
    .set(intro, { display: 'none' });

  // Barra de progresso.
  const progress = document.createElement('div');
  progress.className = 'sos-scroll-progress';
  progress.innerHTML = '<span></span>';
  document.body.appendChild(progress);
  const progressBar = progress.firstElementChild;

  const updateProgress = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    gsap.set(progressBar, { scaleX: Math.min(1, window.scrollY / max) });
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Entrada do cabeçalho e do hero.
  const header = select('.site-header');
  const hero = select('.app-hero, .hero, .page-hero, .course-header, main > .section:first-child');
  const heroTargets = hero ? [
    select('.eyebrow, .kicker', hero),
    select('h1', hero),
    select('p', hero),
    select('.actions, .app-hero-actions', hero),
    select('.scripture-card', hero),
    select('.hero-emblem, .hero-logo, .page-symbol, .course-symbol', hero)
  ].filter(Boolean) : [];

  if (header) gsap.from(header, { y: -42, opacity: 0, duration: 0.75, delay: 1.15 });
  if (heroTargets.length) {
    gsap.from(heroTargets, {
      y: 46,
      opacity: 0,
      scale: 0.96,
      stagger: 0.12,
      duration: 0.85,
      delay: 1.2
    });
  }

  const emblem = select('.hero-emblem, .hero-logo, .page-symbol');
  if (emblem) {
    gsap.to(emblem, {
      y: -12,
      rotation: 1.5,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: 'sine.inOut'
    });
  }

  const parishLogo = select('.parish-header-logo');
  if (parishLogo) {
    gsap.from(parishLogo, { scale: 0.4, rotation: -12, opacity: 0, duration: 0.8, delay: 1.25, ease: 'back.out(1.8)' });
    gsap.to(parishLogo, { scale: 1.04, repeat: -1, yoyo: true, duration: 2.4, ease: 'sine.inOut' });
  }

  // Notas musicais flutuando no hero.
  if (hero) {
    const notes = ['♪', '♫', '♩', '♬'];
    notes.forEach((symbol, index) => {
      const note = document.createElement('span');
      note.className = 'sos-floating-note';
      note.textContent = symbol;
      hero.appendChild(note);
      gsap.set(note, {
        left: `${12 + index * 23}%`,
        bottom: `${8 + (index % 2) * 18}%`,
        opacity: 0
      });
      gsap.to(note, {
        y: -150 - index * 28,
        x: index % 2 ? 42 : -36,
        rotation: index % 2 ? 28 : -24,
        opacity: 0.78,
        repeat: -1,
        duration: 5.5 + index,
        delay: 1.4 + index * 0.65,
        ease: 'none',
        repeatDelay: 0.4,
        onRepeat: () => gsap.set(note, { y: 0, x: 0, opacity: 0 })
      });
    });
  }

  // Revelação de seções e cartões ao rolar.
  const revealSelectors = [
    'main section:not(.app-hero)',
    '.quick-app-card',
    '.course-app-card',
    '.card',
    '.faith-app-panel',
    '.article > section',
    '.liturgical-group',
    '.resource-card',
    '.sheet-card',
    '.coming-soon-card'
  ].join(',');

  const revealItems = selectAll(revealSelectors);
  if (ScrollTrigger) {
    revealItems.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        y: 54,
        opacity: 0,
        scale: 0.96,
        rotationX: index % 2 ? 4 : -4,
        duration: 0.8
      });
    });
  } else {
    // Fallback GSAP sem ScrollTrigger.
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        gsap.fromTo(entry.target,
          { y: 50, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8 }
        );
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => observer.observe(el));
  }

  // Cartões com inclinação no mouse.
  if (window.matchMedia('(pointer:fine)').matches) {
    selectAll('.quick-app-card, .course-app-card, .card, .resource-card, .sheet-card').forEach(card => {
      card.classList.add('sos-tilt-card');
      card.addEventListener('mousemove', event => {
        const rect = card.getBoundingClientRect();
        const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
        const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        gsap.to(card, { rotationX: rx, rotationY: ry, scale: 1.025, duration: 0.3, overwrite: true });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.5, overwrite: true });
      });
    });
  }

  // Botões com pulso e clique visível.
  selectAll('.btn, .quick-app-card, .course-app-card').forEach(button => {
    button.addEventListener('mouseenter', () => gsap.to(button, { y: -4, duration: 0.25, overwrite: true }));
    button.addEventListener('mouseleave', () => gsap.to(button, { y: 0, duration: 0.35, overwrite: true }));
    button.addEventListener('click', event => {
      const dot = document.createElement('span');
      dot.className = 'sos-click-particle';
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
      document.body.appendChild(dot);
      gsap.fromTo(dot, { scale: 0.2, opacity: 1 }, {
        scale: 5,
        opacity: 0,
        duration: 0.65,
        onComplete: () => dot.remove()
      });
    });
  });

  // Botão voltar ao topo.
  const topButton = document.createElement('button');
  topButton.className = 'sos-back-top';
  topButton.type = 'button';
  topButton.setAttribute('aria-label', 'Voltar ao topo');
  topButton.innerHTML = '↑';
  document.body.appendChild(topButton);

  const toggleTopButton = () => {
    gsap.to(topButton, {
      autoAlpha: window.scrollY > 500 ? 1 : 0,
      y: window.scrollY > 500 ? 0 : 18,
      duration: 0.3
    });
  };
  window.addEventListener('scroll', toggleTopButton, { passive: true });
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  toggleTopButton();

  // Confirmação útil para diagnóstico.
  console.info('[S.O.S] Animações GSAP carregadas com sucesso.');
})();
