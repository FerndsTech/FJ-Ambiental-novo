import './style.css';

// Importação dos Componentes
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

// Montar o HTML
document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Hero()}
  ${Clients()}
  ${Services()}
  ${Projects()}
  ${WhatsAppButton()}
  ${Footer()}
`;


// Helpers
const has = (selector) => document.querySelector(selector);
const hasAll = (selector) => document.querySelectorAll(selector).length > 0;

// A) Hero Section
if (has('.hero-content')) {
  gsap.from('.hero-content', {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.2,
  });
}

// B) Logos dos Clientes
if (has('#clients') && hasAll('.client-logo')) {
  gsap.fromTo(
    '.client-logo',
    { opacity: 0, scale: 0.99 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.04,
      ease: 'power1.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '#clients',
        start: 'top 92%',
        once: true,
      },
    }
  );

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

// C) Cards de Serviços
if (hasAll('.service-card')) {
  gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.1,
    });
  });
}

// D) Cards de Projetos
if (hasAll('.project-card')) {
  gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: index * 0.1,
    });
  });
}

// E) Botão WhatsApp
if (has('#whatsapp-button')) {
  gsap.to('#whatsapp-button', {
    scale: 1.05,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  gsap.from('#whatsapp-button', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    delay: 2,
    ease: 'elastic.out(1, 0.5)',
  });
}