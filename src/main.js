import './style.css';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Clients } from './components/Clients.js';
import { Services } from './components/Services.js';
import { Projects, projectsData } from './components/Projects.js';
import { Footer } from './components/Footer.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { About } from './components/About.js';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

document.querySelector('#app').innerHTML = `
  <div id="preloader" class="fixed inset-0 z-9999 bg-[#0A0F1A] flex flex-col items-center justify-center font-['Inter']">
    <div class="overflow-hidden mb-5">
      <h1 class="preloader-text text-white text-3xl md:text-5xl font-extrabold tracking-tighter translate-y-full">
        FJ AMBIENTAL
      </h1>
    </div>
    <div class="w-48 md:w-64 h-0.5 bg-slate-800 rounded-full overflow-hidden mb-4 relative">
      <div class="preloader-bar absolute top-0 left-0 h-full w-full bg-emerald-500 scale-x-0 origin-left"></div>
    </div>
    <div class="overflow-hidden">
      <span class="preloader-sub text-emerald-400/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase translate-y-full block">
        Consultoria Ambiental e Recursos Hídricos
      </span>
    </div>
  </div>

  ${Header()}
  ${Hero()}
  ${Clients()}
  ${Services()}
  ${Projects()}
  ${About()}
  ${WhatsAppButton()}
  ${Footer()}
`;

// ----------------------------------------------------------------
// FUNÇÕES DE INICIALIZAÇÃO
// ----------------------------------------------------------------

function initMobileMenu() {
  const menuToggle = document.querySelector('#menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const hamburgerLines = document.querySelectorAll('.hamburger-line');
  const menuLinks = document.querySelectorAll('.menu-link span');
  const menuCta = document.querySelector('.menu-cta-wrapper');
  const clickableLinks = document.querySelectorAll('#mobile-menu a');

  if (!menuToggle || !mobileMenu) return;

  let isMenuOpen = false;
  const menuTl = gsap.timeline({ paused: true });

  menuTl
    .to(mobileMenu, { duration: 0.45, autoAlpha: 1, ease: "power3.inOut" })
    .to(menuLinks, { y: 0, duration: 0.6, stagger: 0.08, ease: "power4.out" }, "-=0.2")
    .to(menuCta, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.2)" }, "-=0.4");

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      menuTl.play();
      document.body.style.overflow = 'hidden';
      gsap.to(hamburgerLines[0], { y: 6, rotate: 45, duration: 0.3, ease: "back.out(1.7)" });
      gsap.to(hamburgerLines[1], { y: -6, rotate: -45, duration: 0.3, ease: "back.out(1.7)" });
    } else {
      menuTl.reverse();
      document.body.style.overflow = '';
      gsap.to(hamburgerLines, { y: 0, rotate: 0, duration: 0.3, ease: "power2.out" });
    }
  };

  menuToggle.addEventListener('click', toggleMenu);
  clickableLinks.forEach(link => {
    link.addEventListener('click', () => { if (isMenuOpen) toggleMenu(); });
  });
}

function initTextAnimations() {
  const textElements = document.querySelectorAll('.reveal-text');
  textElements.forEach((el) => {
    const text = new SplitType(el, { types: 'lines, chars' });
    gsap.set(el, { opacity: 1 });
    gsap.from(text.chars, {
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      duration: 0.8, y: 80, opacity: 0, stagger: 0.02, ease: "power4.out"
    });
  });
}

function initHeroFusion() {
  const spacer = document.querySelector('#header-spacer');
  if (spacer && spacer.offsetParent !== null) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body', start: 'top top', end: '+=500', scrub: 0, invalidateOnRefresh: true
      }
    });
    tl.to(spacer, { height: 0, ease: 'none' });
  }
}

function initPreloader() {
  const tl = gsap.timeline({
    onComplete: () => {
      const preloader = document.querySelector('#preloader');
      if (preloader) preloader.style.display = 'none';

      setTimeout(() => {
        ScrollTrigger.refresh();
        initArcAnimations();
      }, 150);
    }
  });

  tl.to(".preloader-bar", { scaleX: 1, duration: 1.2, ease: "expo.inOut" })
    .to(".preloader-text, .preloader-sub", { y: "0%", duration: 0.8, ease: "expo.out", stagger: 0.1 }, "-=0.6")
    .to(".preloader-text, .preloader-sub", { y: "-100%", duration: 0.6, ease: "power3.in", delay: 0.5 })
    .to(".preloader-bar", { scaleX: 0, transformOrigin: "right", duration: 0.4, ease: "power3.in" }, "-=0.6")
    .add(() => { initHeroAnimation(); }, "-=0.4")
    .to("#preloader", { yPercent: -100, duration: 1.2, ease: "expo.inOut" }, "-=0.2");
}

function initArcAnimations() {
  const gaugeYears    = document.querySelector('.gauge-years');
  const gaugeProjects = document.querySelector('.gauge-projects');
  const gaugeAbnt     = document.querySelector('.gauge-abnt');
  const labelYears    = document.querySelector('.gauge-years-label');
  const labelProjects = document.querySelector('.gauge-projects-label');
  const labelAbnt     = document.querySelector('.gauge-abnt-label');

  if (!gaugeYears || !gaugeProjects || !gaugeAbnt) return;

  function animateNumber(el, target, duration, prefix = '', suffix = '') {
    let startTime = null;
    function tick(now) {
      if (!startTime) startTime = now;
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Disparar no próximo frame — garante que o CSS já foi aplicado
  requestAnimationFrame(() => {
    // Card 1 — +10 Anos (68%)
    gaugeYears.style.setProperty('--p-years', '100');
    animateNumber(labelYears, 10, 1.8, '+');

    // Card 2 — +500 Projetos (83%)
   gaugeProjects.style.setProperty('--p-projects', '100');
    animateNumber(labelProjects, 500, 2.2, '+');

    // Card 3 — 100% ABNT
    gaugeAbnt.style.setProperty('--p-abnt', '100');
    animateNumber(labelAbnt, 100, 2.0, '', '%');
  });
}

function initHeroAnimation() {
  const capsule     = document.querySelector('#hero-capsule');
  const title       = document.querySelector('.hero-title');
  const badge       = document.querySelector('.hero-badge');
  const description = document.querySelector('.hero-description');
  const button      = document.querySelector('.hero-cta');
  const floatingCards = document.querySelectorAll('.hero-f-card');

  if (!capsule) return;

  const splitDesc = new SplitType(description, { types: 'lines' });
  gsap.set(description, { opacity: 1 });

  const tl = gsap.timeline();

  tl.fromTo(capsule,
    { scale: 0.95, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.4, ease: 'expo.out' }
  );

  if (badge) {
    tl.fromTo(badge,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=1'
    );
  }

  if (title) {
    tl.fromTo(title,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
      '-=0.8'
    );
  }

  if (splitDesc.lines) {
    tl.from(splitDesc.lines, {
      y: 20, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out'
    }, '-=0.8');
  }

  if (button) {
    tl.fromTo(button,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' },
      '-=0.6'
    );
  }

  if (floatingCards.length > 0) {
    tl.fromTo(floatingCards,
      { y: 30, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.12, ease: 'expo.out' },
      '-=0.4'
    );
  }
}

function initProjectsCarousel() {
  const elements = {
    section: document.querySelector('#projects-section'),
    img: document.querySelector('#project-main-image'),
    title: document.querySelector('#project-title'),
    desc: document.querySelector('#project-desc'),
    cat: document.querySelector('#project-category'),
    loc: document.querySelector('#project-location'),
    btn: document.querySelector('#project-link-btn'),
    infoContainer: document.querySelector('#project-info-container'),
    thumbs: document.querySelectorAll('.project-thumb'),
    nextBtns: document.querySelectorAll('#next-project'),
    prevBtns: document.querySelectorAll('#prev-project'),
  };

  const mobileSlider = document.querySelector('#mobile-projects-slider');
  const mobileDots = document.querySelectorAll('.mobile-dot');
  const mobileThumbs = document.querySelectorAll('.mobile-thumb');

  if (mobileSlider && mobileDots.length) {
    mobileSlider.addEventListener('scroll', () => {
      const scrollLeft = mobileSlider.scrollLeft;
      const cardWidth = mobileSlider.querySelector('.snap-center').offsetWidth + 16;
      const activeIndex = Math.round(scrollLeft / cardWidth);

      mobileDots.forEach((dot, i) => {
        dot.classList.toggle('bg-[#0A0F1A]', i === activeIndex);
        dot.classList.toggle('w-6', i === activeIndex);
        dot.classList.toggle('bg-emerald-400', i !== activeIndex);
        dot.classList.toggle('w-2.5', i !== activeIndex);
      });

      mobileThumbs.forEach((thumb, i) => {
        thumb.classList.toggle('border-[#0A0F1A]', i === activeIndex);
        thumb.classList.toggle('opacity-100', i === activeIndex);
        thumb.classList.toggle('border-transparent', i !== activeIndex);
        thumb.classList.toggle('opacity-50', i !== activeIndex);
      });
    });
  }

  if (!elements.img) return;

  let currentIndex = 0;
  let autoPlayTimer;
  const AUTO_DELAY = 5;

  function updateProject(index) {
    const project = projectsData[index];

    elements.thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('ring-2', i === index);
      thumb.classList.toggle('ring-emerald-500', i === index);
      thumb.classList.toggle('opacity-100', i === index);
      thumb.classList.toggle('opacity-40', i !== index);
    });

    const tl = gsap.timeline({
      onComplete: () => {
        elements.title.innerHTML = project.title;
        elements.desc.innerText = project.desc;
        elements.cat.innerText = project.category;
        if (elements.loc) elements.loc.innerHTML = project.location;
        if (elements.btn) elements.btn.setAttribute('href', project.link);
        elements.img.setAttribute('src', project.img);

        gsap.to(elements.img, { opacity: 1, scale: 1, duration: 0.5 });
        gsap.to(elements.infoContainer, { opacity: 1, y: 0, duration: 0.4 });
        gsap.fromTo([elements.cat, elements.loc, elements.title, elements.desc],
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
        );
      }
    });

    tl.to([elements.infoContainer, elements.img], { opacity: 0, y: -10, duration: 0.3, ease: "power2.in" });
  }

  function next() {
    currentIndex = (currentIndex + 1) % projectsData.length;
    updateProject(currentIndex);
    resetTimer();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    updateProject(currentIndex);
    resetTimer();
  }

  function resetTimer() {
    if (autoPlayTimer) autoPlayTimer.kill();
    autoPlayTimer = gsap.delayedCall(AUTO_DELAY, next);
  }

  elements.nextBtns.forEach(btn => btn.addEventListener('click', next));
  elements.prevBtns.forEach(btn => btn.addEventListener('click', prev));
  elements.thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => {
    currentIndex = i;
    updateProject(i);
    resetTimer();
  }));

  resetTimer();
}

function initScrollAnimations() {
  if (document.querySelectorAll('.service-card').length > 0) {
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        opacity: 0, y: 50, duration: 0.8, delay: index * 0.1, ease: 'power2.out'
      });
    });
  }

  if (document.querySelector('#about')) {
    gsap.fromTo('.reveal-left',
      { opacity: 0, x: -40 },
      {
        scrollTrigger: { trigger: '.reveal-left', start: 'top 85%', once: true },
        opacity: 1, x: 0, duration: 1, ease: 'power2.out'
      }
    );

    gsap.fromTo('.about-card',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: { trigger: '.reveal-right', start: 'top 80%', once: true },
        opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out'
      }
    );

    gsap.utils.toArray('.animate-number').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      gsap.fromTo(el,
        { innerHTML: 0 },
        {
          scrollTrigger: { trigger: '.reveal-left', start: 'top 85%', once: true },
          innerHTML: target, duration: 2.5, snap: { innerHTML: 1 }, ease: 'power2.out'
        }
      );
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroFusion();
  initPreloader();
  initScrollAnimations();
  initProjectsCarousel();
});

window.addEventListener('DOMContentLoaded', initTextAnimations);