import './style.css';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Clients } from './components/Clients.js';
import { Services } from './components/Services.js';
import { Projects, projectsData } from './components/Projects.js'; // Importamos projectsData
import { Footer } from './components/Footer.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ----------------------------------------------------------------
// 1. RENDERIZAÇÃO DA APLICAÇÃO (Injeção de Componentes)
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
// 2. FUNÇÕES DE INICIALIZAÇÃO (Lógica & Motion Design)
// ----------------------------------------------------------------

/**
 * Inicializa o Menu Mobile:
 * - Animação de entrada suave (Timeline)
 * - Transformação do ícone Hambúrguer para X (Morphing)
 * - Fechamento automático ao clicar em links
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('#menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const hamburgerLines = document.querySelectorAll('.hamburger-line');
  
  // Seletores internos para animação em cascata
  const menuLinks = document.querySelectorAll('.menu-link span'); 
  const menuCta = document.querySelector('.menu-cta-wrapper');
  
  // Links clicáveis (para fechar o menu ao navegar)
  const clickableLinks = document.querySelectorAll('#mobile-menu a');

  if (!menuToggle || !mobileMenu) return;

  let isMenuOpen = false;

  // Timeline de Abertura (Pausada inicialmente)
  const menuTl = gsap.timeline({ paused: true });

  menuTl
    .to(mobileMenu, { 
        duration: 0.45, 
        autoAlpha: 1, 
        ease: "power3.inOut" 
    })
    .to(menuLinks, {
        y: 0,
        duration: 0.6,
        stagger: 0.08, 
        ease: "power4.out"
    }, "-=0.2")
    .to(menuCta, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.2)"
    }, "-=0.4");

  // Função Única de Controle (Toggle)
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // --- ABRIR ---
      menuTl.play();
      document.body.style.overflow = 'hidden'; 
      
      // Animação: Transforma Hambúrguer em X
      gsap.to(hamburgerLines[0], { 
        y: 6, 
        rotate: 45, 
        duration: 0.3, 
        ease: "back.out(1.7)" 
      });
      gsap.to(hamburgerLines[1], { 
        y: -6, 
        rotate: -45, 
        duration: 0.3, 
        ease: "back.out(1.7)" 
      });

    } else {
      // --- FECHAR ---
      menuTl.reverse();
      document.body.style.overflow = ''; 
      
      // Animação: Retorna para Hambúrguer Paralelo
      gsap.to(hamburgerLines, { 
        y: 0, 
        rotate: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    }
  };

  menuToggle.addEventListener('click', toggleMenu);

  clickableLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu(); 
      }
    });
  });
}

/**
 * Lógica "Temlis" (Header Docking):
 * - Funciona apenas no Desktop.
 */
function initHeroFusion() {
  const spacer = document.querySelector('#header-spacer');
  
  if (spacer && spacer.offsetParent !== null) {
    gsap.set(spacer, { transition: 'none' }); 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',      
        start: 'top top',     
        end: '+=500', 
        scrub: 0,     
        invalidateOnRefresh: true
      }
    });

    tl.to(spacer, { 
      height: 0, 
      ease: 'none' 
    });
  }
}

/**
 * Animação de Entrada do Hero
 */
function initHeroAnimation() {
  if (document.querySelector('.hero-title')) {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from("#hero-capsule", {
        scale: 0.96,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    })
    .from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.9")
    .from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.7")
    .to(".hero-cta", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
    }, "-=0.5");
  } 
  else if (document.querySelector('.hero-content')) {
    gsap.from('.hero-content', {
      opacity: 0, y: 100, duration: 1.2, ease: 'power3.out', delay: 0.2,
    });
  }
}

/**
 * LÓGICA DO CARROSSEL DE PROJETOS (BENTO GRID)
 * - Troca automática a cada 5s
 * - Atualiza Texto, Imagem e Link do Botão
 */
function initProjectsCarousel() {
  // Elementos do DOM
  const mainImage = document.querySelector('#project-main-image');
  
  // Elementos de Texto
  const titleEl = document.querySelector('#project-title');
  const descEl = document.querySelector('#project-desc');
  const catEl = document.querySelector('#project-category');
  const locEl = document.querySelector('#project-location');
  
  // Botão do Projeto (Link Dinâmico)
  const projectLinkBtn = document.querySelector('#project-link-btn'); 
  
  // Controles
  const thumbs = document.querySelectorAll('.project-thumb');
  const btnNext = document.querySelector('#next-project');
  const btnPrev = document.querySelector('#prev-project');

  // Proteção: se não houver a seção, não roda
  if (!mainImage) return;

  let currentIndex = 0;
  let intervalId;
  const AUTO_PLAY_TIME = 5000; // 5 Segundos

  // Função para atualizar o slide
  const updateProject = (index) => {
    const project = projectsData[index];

    // 1. Saída (Fade Out)
    const tl = gsap.timeline();
    
    tl.to([titleEl, descEl, catEl, locEl], { 
      y: 20, 
      opacity: 0, 
      duration: 0.3, 
      stagger: 0.05 
    })
    .add(() => {
      // 2. Troca de Dados no DOM (ocorre enquanto está invisível)
      mainImage.src = project.img;
      titleEl.innerText = project.title;
      descEl.innerText = project.desc;
      catEl.innerText = project.category;
      locEl.innerText = project.location;
      
      // Atualiza o Link do Botão Dinamicamente
      if(projectLinkBtn) {
         projectLinkBtn.href = project.link; 
      }

      // Atualiza Thumbnails (Estilo Ativo/Inativo)
      thumbs.forEach((t, i) => {
        if(i === index) {
            t.classList.remove('opacity-60');
            t.classList.add('ring-2', 'ring-emerald-500');
            t.querySelector('img').classList.remove('grayscale');
        } else {
            t.classList.add('opacity-60');
            t.classList.remove('ring-2', 'ring-emerald-500');
            t.querySelector('img').classList.add('grayscale');
        }
      });
    })
    .to(mainImage, { // Efeito de Zoom na Imagem de Fundo
        scale: 1.1,
        duration: 5,
        ease: "power1.out"
    }, "<") // Inicia junto com a troca de dados
    .to([titleEl, descEl, catEl, locEl], { // Entrada (Fade In)
      y: 0, 
      opacity: 1, 
      duration: 0.5, 
      stagger: 0.1,
      ease: "power2.out"
    });

    // Reset do Zoom para o próximo ciclo
    gsap.set(mainImage, { scale: 1.0 });
  };

  // Funções de Navegação
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % projectsData.length;
    updateProject(currentIndex);
    resetTimer();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    updateProject(currentIndex);
    resetTimer();
  };

  // Timer Automático
  const startTimer = () => {
    intervalId = setInterval(nextSlide, AUTO_PLAY_TIME);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    startTimer();
  };

  // Event Listeners (Controles)
  if(btnNext) btnNext.addEventListener('click', nextSlide);
  if(btnPrev) btnPrev.addEventListener('click', prevSlide);

  // Event Listeners (Thumbnails)
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      if (currentIndex !== index) {
        currentIndex = index;
        updateProject(currentIndex);
        resetTimer();
      }
    });
  });

  // Inicia o Loop
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

  if (hasAll('.project-card')) { // Mantido caso ainda existam cards antigos
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        opacity: 0, scale: 0.95, duration: 0.6, delay: index * 0.1, ease: 'power1.out'
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

// ----------------------------------------------------------------
// 3. EXECUÇÃO
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroFusion();
    initHeroAnimation();
    initScrollAnimations();
    initProjectsCarousel(); // Inicializa o Carrossel Bento Grid
});