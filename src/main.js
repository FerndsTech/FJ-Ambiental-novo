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

gsap.registerPlugin(ScrollTrigger);

// 1. Renderização
document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Hero()}
  ${Clients()}
  ${Services()}
  ${Projects()}
  ${WhatsAppButton()}
  ${Footer()}
`;

// --- LÓGICA TEMLIS: APENAS HEADER DOCKING ---
const initHeroFusion = () => {
  const spacer = document.querySelector('#header-spacer');
  
  if (spacer) {
    // 1. Removemos transições CSS do spacer para evitar conflito
    gsap.set(spacer, { transition: 'none' });

    // 2. Timeline conectada ao Scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',      
        start: 'top top',     
        
        // 🎯 O SEGREDO DO TEMLIS:
        // O efeito dura exatos 500px de rolagem. 
        // Antes estava 200px (muito rápido). Agora será suave e gradual.
        end: '+=500',         
        
        // Scrub: 0 significa sincronia mecânica perfeita (1px scroll = X% animação).
        // Se quiser um leve atraso "de luxo", mude para 0.5. O Temlis original usa 0.
        scrub: 0,             
        invalidateOnRefresh: true
      }
    });

    // 3. A única coisa que muda é a altura do espaçador
    tl.to(spacer, { 
      height: 0, 
      ease: 'none' // Linearidade é crucial para parecer físico
    });
    
    // OBS: Hero (#home e #hero-capsule) não são tocados. 
    // Eles manterão o padding e bordas arredondadas originais.
  }
};

// Inicializa a lógica
initHeroFusion();

// --- DEMAIS ANIMAÇÕES (Mantidas originais) ---
const has = (selector) => document.querySelector(selector);
const hasAll = (selector) => document.querySelectorAll(selector).length > 0;

// Hero Content
if (has('.hero-content')) {
  gsap.from('.hero-content', {
    opacity: 0, y: 100, duration: 1.2, ease: 'power3.out', delay: 0.2,
  });
}

// Clients
if (has('#clients') && hasAll('.client-logo')) {
  gsap.fromTo('.client-logo',
    { opacity: 0, scale: 0.99 },
    { opacity: 1, scale: 1, duration: 0.5, stagger: 0.04, ease: 'power1.out',
      scrollTrigger: { trigger: '#clients', start: 'top 92%', once: true },
    }
  );
}

// Services
if (hasAll('.service-card')) {
  gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 85%' },
      opacity: 0, y: 50, duration: 0.8, delay: index * 0.1,
    });
  });
}

// Projects
if (hasAll('.project-card')) {
  gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 80%' },
      opacity: 0, scale: 0.9, duration: 0.6, delay: index * 0.1,
    });
  });
}

// WhatsApp
if (has('#whatsapp-button')) {
  gsap.to('#whatsapp-button', { scale: 1.05, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.from('#whatsapp-button', { opacity: 0, y: 100, duration: 1.5, delay: 2, ease: 'elastic.out(1, 0.5)' });
}