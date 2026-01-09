import './style.css';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Montar o HTML
document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Hero()}
  ${Services()}
  ${WhatsAppButton()}
`;

// Animações GSAP
gsap.from('.hero-content', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
});

gsap.utils.toArray('.service-card').forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

// Animação de pulso infinito para o botão do WhatsApp
gsap.to('#whatsapp-button', {
  scale: 1.1,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: 'power2.inOut',
});
