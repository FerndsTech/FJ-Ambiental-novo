import './style.css';
// Importação dos Componentes
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Clients } from './components/Clients.js'; // Prova Social
import { Services } from './components/Services.js';
import { Projects } from './components/Projects.js'; // Portfólio
import { WhatsAppButton } from './components/WhatsAppButton.js';

// Importação das Ferramentas de Animação
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Registrar o plugin ScrollTrigger (Obrigatório para animar ao rolar)
gsap.registerPlugin(ScrollTrigger);

// 2. Montar o HTML (Na ordem de conversão do cliente)
document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Hero()}
  ${Clients()}          ${Services()}         ${Projects()}         ${WhatsAppButton()}   `;


// A. Hero Section (Entrada triunfal do texto)
// Nota: Certifique-se que no Hero.js o texto tem a classe ou ID 'hero-content'
gsap.from('.hero-content', {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: 'power3.out',
  delay: 0.2 // Espera um pouquinho para começar
});

// B. Logos dos Clientes (Efeito "Escadinha/Stagger")
// Ele anima cada logo com um intervalo de 0.1s entre eles
gsap.from('.client-logo', {
  scrollTrigger: {
    trigger: '#clients', // Dispara quando a seção de clientes aparecer
    start: 'top 85%',    // Quando o topo da seção bater em 85% da tela
    toggleActions: 'play none none reverse' // Se subir a tela, anima de volta
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.1 // O segredo: um logo aparece depois do outro
});

// C. Cards de Serviços (Loop Inteligente)
gsap.utils.toArray('.service-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.1 // Um pequeno atraso baseado na ordem do card
  });
});

// D. Cards de Projetos (Mesma lógica dos serviços)
gsap.utils.toArray('.project-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
    },
    opacity: 0,
    scale: 0.9, // Começa um pouco menor
    duration: 0.6,
    delay: index * 0.1
  });
});

// E. Botão WhatsApp (Pulsar Infinito)
gsap.to('#whatsapp-button', {
  scale: 1.05,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.from('#whatsapp-button', {
  opacity: 0,
  y: 100,
  duration: 1.5,
  delay: 2,
  ease: "elastic.out(1, o.5)"


});