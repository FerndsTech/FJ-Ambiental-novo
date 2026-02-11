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

document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Hero()}
  ${Clients()}
  ${Services()}
  ${Projects()}
  ${WhatsAppButton()}
  ${Footer()}
`;
/**
 * Inicializa o Menu Mobile:
 * - Animação de entrada suave (Timeline)
 * - Morphing do ícone
 */
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

/**
 * Lógica "Temlis" (Header Docking Desktop)
 */
function initHeroFusion() {
  const spacer = document.querySelector('#header-spacer');
  if (spacer && spacer.offsetParent !== null) {
    gsap.set(spacer, { transition: 'none' }); 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body', start: 'top top', end: '+=500', scrub: 0, invalidateOnRefresh: true
      }
    });
    tl.to(spacer, { height: 0, ease: 'none' });
  }
}

/**
 * Animação de Entrada do Hero
 */
function initHeroAnimation() {
  if (document.querySelector('.hero-title')) {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from("#hero-capsule", { scale: 0.96, opacity: 0, duration: 1.2, ease: "power3.out" })
      .from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.9")
      .from(".hero-title", { y: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
      .to(".hero-cta", { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.5");
  } 
  else if (document.querySelector('.hero-content')) {
    gsap.from('.hero-content', { opacity: 0, y: 100, duration: 1.2, ease: 'power3.out', delay: 0.2 });
  }
}

/**
 * LÓGICA DO CARROSSEL DE PROJETOS (BENTO GRID) - ATUALIZADA
 * - Suporte a Preload de Imagem
 * - Fade In/Out Suave
 * - Atualização Dinâmica de Links
 * - Pausa Inteligente no Hover
 */
function initProjectsCarousel() {
  // 1. Mapeamento dos Elementos
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
    // Selecionamos TODOS os botões de próximo (Desktop + Mobile)
    nextBtns: document.querySelectorAll('#next-project, #next-project-mobile'),
    // Selecionamos TODOS os botões de anterior (Desktop + Mobile)
    prevBtns: document.querySelectorAll('#prev-project, #prev-project-mobile'),
  };

  // Proteção: se não houver a imagem principal, aborta
  if (!elements.img) return;

  let currentIndex = 0;
  let autoPlayTimer;
  const AUTO_DELAY = 5; // 5 segundos

  // --- Função Principal de Atualização Visual ---
  function updateProject(index) {
    const project = projectsData[index];
    
    // A. Atualiza estado visual das Thumbnails
    // Lógica: Inativo = opacity-50 | Ativo = opacity-100 + Ring Verde
    elements.thumbs.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.remove('opacity-50', 'border-transparent');
        thumb.classList.add('ring-2', 'ring-emerald-500', 'ring-offset-2', 'opacity-100');
      } else {
        thumb.classList.add('opacity-50', 'border-transparent');
        thumb.classList.remove('ring-2', 'ring-emerald-500', 'ring-offset-2', 'opacity-100');
      }
    });

    // B. Timeline de Transição (Fade Out -> Troca -> Fade In)
    const tl = gsap.timeline({
      onComplete: () => {
        // 1. Troca os dados (enquanto invisível)
        elements.title.innerText = project.title;
        elements.desc.innerText = project.desc;
        elements.cat.innerText = project.category;
        elements.loc.innerText = project.location;
        
        if (elements.btn) elements.btn.setAttribute('href', project.link);
        elements.img.setAttribute('src', project.img);
        
        // 2. Animação de Entrada (Fade In)
        gsap.to(elements.img, { opacity: 1, scale: 1, duration: 0.5 });
        
        // Garante que o texto apareça
        gsap.to(elements.infoContainer, { opacity: 1, duration: 0.1 }); 

        // Animação em cascata dos textos
        gsap.fromTo([elements.cat, elements.loc, elements.title, elements.desc], 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
        );
      }
    });

    // Animação de Saída (Fade Out)
    tl.to([elements.infoContainer, elements.img], { 
      opacity: 0, 
      duration: 0.3, 
      ease: "power2.in" 
    });
  }

  // --- Funções de Navegação ---
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

  function goTo(index) {
    if (index === currentIndex) return;
    currentIndex = index;
    updateProject(currentIndex);
    resetTimer();
  }

  // --- Timer / Autoplay ---
  function startTimer() {
    if (autoPlayTimer) autoPlayTimer.kill();
    autoPlayTimer = gsap.delayedCall(AUTO_DELAY, next);
  }

  function resetTimer() {
    startTimer();
  }

  // --- Event Listeners (Controles) ---
  
  // Adiciona o clique para TODOS os botões "Próximo" (Desktop e Mobile)
  elements.nextBtns.forEach(btn => btn.addEventListener('click', next));

  // Adiciona o clique para TODOS os botões "Anterior" (Desktop e Mobile)
  elements.prevBtns.forEach(btn => btn.addEventListener('click', prev));

  // Clique nas Thumbnails
  elements.thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const index = parseInt(thumb.getAttribute('data-index'));
      goTo(index);
    });
  });

  // UX: Pausar autoplay quando o mouse estiver em cima da seção (leitura)
  if (elements.section) {
    elements.section.addEventListener('mouseenter', () => { if(autoPlayTimer) autoPlayTimer.pause(); });
    elements.section.addEventListener('mouseleave', () => { if(autoPlayTimer) autoPlayTimer.resume(); });
  }

  // Inicia o ciclo
  startTimer();
}

/**
 * Inicializa animações genéricas das outras seções
 */
function initScrollAnimations() {
  const has = (selector) => document.querySelector(selector);
  const hasAll = (selector) => document.querySelectorAll(selector).length > 0;

  if (has('#clients') && hasAll('.client-logo')) {
    gsap.fromTo('.client-logo',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: '#clients', start: 'top 90%', once: true },
      }
    );
  }

  if (hasAll('.service-card')) {
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        opacity: 0, y: 50, duration: 0.8, delay: index * 0.1, ease: 'power2.out'
      });
    });
  }

  if (has('#whatsapp-button')) {
    gsap.from('#whatsapp-button', { 
      opacity: 0, y: 50, duration: 1, delay: 2, ease: 'elastic.out(1, 0.7)' 
    });
    gsap.to('#whatsapp-button', { 
      scale: 1.05, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 3 
    });
  }
}

// 3. EXECUÇÃO
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroFusion();
    initHeroAnimation();
    initScrollAnimations();
    initProjectsCarousel(); // Inicia o Bento Grid Power
});