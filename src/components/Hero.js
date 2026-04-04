// Hero.js
import heroPoster from '/img/foto-home.webp';
import { Button } from './Button.js';

export function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';

  return `
    <section id="home" class="relative w-full min-h-[105vh] bg-slate-50 p-2 md:p-3 flex flex-col">
      
      <div id="hero-capsule" class="relative w-full flex-1 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
        
        <div class="absolute inset-0 w-full h-full z-0">
          <video 
            class="w-full h-full object-cover scale-105"
            autoplay muted loop playsinline preload="metadata" poster="${heroPoster}"
          >
            <source src="/img/video-hero2.mp4" type="video/mp4">
            <source src="/img/video-hero.webm" type="video/webm">
          </video>
          <div class="absolute inset-0 bg-slate-900/40"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/20"></div>
        </div>

        <div class="absolute inset-0 z-10 pointer-events-none hidden md:block">
          
          <div class="hero-f-card absolute top-[22%] left-[6%] bg-white/5 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 min-w-[240px] opacity-0">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="text-left">
              <p class="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-bold leading-none mb-1.5">Conformidade</p>
              <p class="text-white text-sm font-semibold tracking-tight">Padrões Técnicos ABNT</p>
            </div>
          </div>

          <div class="hero-f-card absolute bottom-[18%] right-[6%] bg-white/5 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 min-w-[240px] opacity-0">
             <div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div class="text-left">
              <p class="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold leading-none mb-1.5">Presença</p>
              <p class="text-white text-sm font-semibold tracking-tight">Atuação em todo Brasil</p>
            </div>
          </div>

        </div>

        <div class="relative z-20 w-full h-full flex flex-col items-center justify-center pt-28 md:pt-32 pb-12 px-6 md:px-10 text-center">
            
            <div class="overflow-hidden mb-8"> 
                <span class="inline-block py-2 px-6 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-md hero-badge opacity-0">
                  Engenharia & Consultoria
                </span>
            </div>

            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05] uppercase drop-shadow-2xl max-w-5xl hero-title opacity-0">
              Soluções em <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Engenharia Ambiental</span>
            </h1>

            <p class="hero-description text-slate-200 text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-md">
              Atuamos nas áreas de planejamento, organização e coordenação de ações necessárias para a regularização de atos ambientais.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 hero-cta opacity-0">
                ${Button({ 
                  text: "Entre em contato", 
                  href: `https://wa.me/${whatsappNumber}`,
                  variant: "glass" 
                })}
            </div>
        </div>

      </div>
    </section>
  `;
}