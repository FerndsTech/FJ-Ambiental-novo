import './style.css';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Clients } from './components/Clients.js';
import { Services } from './components/Services.js';
import { Projects } from './components/Projects.js';
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
        autoAlpha: 1, // Controla opacity + visibility automaticamente
        ease: "power3.inOut" 
    })
    .to(menuLinks, {
        y: 0,
        duration: 0.6,
        stagger: 0.08, // Efeito cascata entre os itens
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
      document.body.style.overflow = 'hidden'; // Trava o scroll da página
      
      // Animação: Transforma Hambúrguer em X
      // Linha Superior: Desce e gira 45º
      gsap.to(hamburgerLines[0], { 
        y: 6, // Ajuste vertical para o centro (depende do gap do CSS)
        rotate: 45, 
        duration: 0.3, 
        ease: "back.out(1.7)" 
      });
      // Linha Inferior: Sobe e gira -45º
      gsap.to(hamburgerLines[1], { 
        y: -6, // Ajuste vertical para o centro
        rotate: -45, 
        duration: 0.3, 
        ease: "back.out(1.7)" 
      });

    } else {
      // --- FECHAR ---
      menuTl.reverse();
      document.body.style.overflow = ''; // Destrava o scroll
      
      // Animação: Retorna para Hambúrguer Paralelo
      gsap.to(hamburgerLines, { 
        y: 0, 
        rotate: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    }
  };

  // Evento: Clique no Botão Toggle
  menuToggle.addEventListener('click', toggleMenu);

  // Evento: Clique nos Links (Navegação)
  clickableLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu(); // Fecha o menu suavemente permitindo o scroll até a seção
      }
    });
  });
}

/**
 * Lógica "Temlis" (Header Docking):
 * - Funciona apenas no Desktop.
 * - Reduz o espaçador conforme o scroll, criando efeito de acoplamento.
 */
function initHeroFusion() {
  const spacer = document.querySelector('#header-spacer');
  
  // Verifica se o spacer existe e está visível (evita erros no mobile)
  if (spacer && spacer.offsetParent !== null) {
    
    gsap.set(spacer, { transition: 'none' }); // Remove transição CSS para controle total do GSAP

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',      
        start: 'top top',     
        end: '+=500', // Distância do scroll para completar o efeito
        scrub: 0,     // Sincronia perfeita com o dedo/mouse
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
 * Animação de Entrada do Hero:
 * - Foca nos novos elementos (Badge, Título, CTA)
 * - Cria hierarquia visual de carregamento.
 */
function initHeroAnimation() {
  // Verifica se estamos usando o novo layout do Hero
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
  // Fallback para versões antigas (segurança)
  else if (document.querySelector('.hero-content')) {
    gsap.from('.hero-content', {
      opacity: 0, y: 100, duration: 1.2, ease: 'power3.out', delay: 0.2,
    });
  }
}

/**
 * Inicializa animações genéricas das outras seções (Clients, Services, etc)
 */
function initScrollAnimations() {
  const has = (selector) => document.querySelector(selector);
  const hasAll = (selector) => document.querySelectorAll(selector).length > 0;

  // Clients (Efeito Stagger nos Logos)
  if (has('#clients') && hasAll('.client-logo')) {
    gsap.fromTo('.client-logo',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: '#clients', start: 'top 90%', once: true },
      }
    );
  }

  // Services (Cards subindo)
  if (hasAll('.service-card')) {
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        opacity: 0, y: 50, duration: 0.8, delay: index * 0.1, ease: 'power2.out'
      });
    });
  }

  // Projects (Scale effect)
  if (hasAll('.project-card')) {
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        opacity: 0, scale: 0.95, duration: 0.6, delay: index * 0.1, ease: 'power1.out'
      });
    });
  }

  // WhatsApp Button (Pulsar e Entrada)
  if (has('#whatsapp-button')) {
    gsap.from('#whatsapp-button', { 
      opacity: 0, y: 50, duration: 1, delay: 2, ease: 'elastic.out(1, 0.7)' 
    });
    // Animação contínua (Pulse suave)
    gsap.to('#whatsapp-button', { 
      scale: 1.05, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 3 
    });
  }
}

// ----------------------------------------------------------------
// 3. EXECUÇÃO
// ----------------------------------------------------------------
// Usamos DOMContentLoaded para garantir que o HTML injetado esteja pronto
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroFusion();
    initHeroAnimation();
    initScrollAnimations();
});