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

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------------------------------------
// 1. RENDERIZAÇÃO DA APLICAÇÃO
// ----------------------------------------------------------------
document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Hero()}
  ${Clients()}
  ${Services()}
  ${Projects()}
  ${WhatsAppButton()}
  ${Footer()}
`;

// ----------------------------------------------------------------
// 2. FUNÇÕES DE INICIALIZAÇÃO
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

function initHeroAnimation() {
  if (document.querySelector('.hero-title')) {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from("#hero-capsule", { scale: 0.96, opacity: 0, duration: 1.2, ease: "power3.out" })
      .from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.9")
      .from(".hero-title", { y: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
      .to(".hero-cta", { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.5");
  }
}

function initProjectsCarousel() {
  // ELEMENTOS DESKTOP
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

  // 1. LÓGICA MOBILE: Sincronia do Scroll com os Dots
  const mobileSlider = document.querySelector('#mobile-projects-slider');
  const mobileDots = document.querySelectorAll('.mobile-dot');
  const mobileThumbs = document.querySelectorAll('.mobile-thumb'); // Pegando as fotinhas

  if (mobileSlider && mobileDots.length) {
    mobileSlider.addEventListener('scroll', () => {
      const scrollLeft = mobileSlider.scrollLeft;
      const cardWidth = mobileSlider.querySelector('.snap-center').offsetWidth + 16;
      const activeIndex = Math.round(scrollLeft / cardWidth);

      // Atualiza as bolinhas: Ativa = Azul Escuro Largo | Inativas = Verde Menor
      mobileDots.forEach((dot, i) => {
        dot.classList.toggle('bg-[#0A0F1A]', i === activeIndex);
        dot.classList.toggle('w-6', i === activeIndex);
        dot.classList.toggle('bg-emerald-400', i !== activeIndex);
        dot.classList.toggle('w-2.5', i !== activeIndex);
      });

      // Atualiza as fotinhas: Borda acompanhando a cor principal
      mobileThumbs.forEach((thumb, i) => {
        thumb.classList.toggle('border-[#0A0F1A]', i === activeIndex);
        thumb.classList.toggle('opacity-100', i === activeIndex);
        thumb.classList.toggle('border-transparent', i !== activeIndex);
        thumb.classList.toggle('opacity-50', i !== activeIndex);
      });
    });
  }

  // Se não existir o layout desktop (telas pequenas puras), aborta o resto
  if (!elements.img) return;

  // 2. LÓGICA DESKTOP (O GSAP Fade original que você já tinha)
  let currentIndex = 0;
  let autoPlayTimer;
  const AUTO_DELAY = 5;

  function updateProject(index) {
    const project = projectsData[index];
    
    // Atualiza Thumbs Desktop
    elements.thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('ring-2', i === index);
      thumb.classList.toggle('ring-emerald-500', i === index);
      thumb.classList.toggle('opacity-100', i === index);
      thumb.classList.toggle('opacity-40', i !== index);
    });

    const tl = gsap.timeline({
      onComplete: () => {
        elements.title.innerHTML = project.title; // Usamos innerHTML para respeitar as tags <br/>
        elements.desc.innerText = project.desc;
        elements.cat.innerText = project.category;
        if(elements.loc) elements.loc.innerHTML = project.location;
        if(elements.btn) elements.btn.setAttribute('href', project.link);
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
  elements.thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => { currentIndex = i; updateProject(i); resetTimer(); }));

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
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroFusion();
    initHeroAnimation();
    initScrollAnimations();
    initProjectsCarousel(); 
});