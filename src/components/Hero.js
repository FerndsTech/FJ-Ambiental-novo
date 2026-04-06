// src/components/Hero.js
import heroPoster from '/img/foto-home.webp';
import { Button } from './Button.js';

export function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';

  return `
    <section id="home" class="relative w-full min-h-[105vh] bg-slate-50 p-2 md:p-3 flex flex-col">
      
      <div id="hero-capsule" class="relative w-full flex-1 rounded-4xl md:rounded-6xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
        
        <!-- Vídeo de fundo -->
        <div class="absolute inset-0 w-full h-full z-0">
          <video 
            class="w-full h-full object-cover scale-105"
            autoplay muted loop playsinline preload="metadata" poster="${heroPoster}"
            aria-hidden="true"
          >
            <source src="/img/video-hero2.mp4" type="video/mp4">
            <source src="/img/video-hero.webm" type="video/webm">
          </video>
          <div class="absolute inset-0 bg-slate-900/40"></div>
          <div class="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-slate-900/20"></div>
        </div>

        <!-- Conteúdo central -->
        <div class="relative z-20 w-full h-full flex flex-col items-center justify-center pt-28 md:pt-32 pb-40 md:pb-48 px-6 md:px-10 text-center">
            
          <div class="overflow-hidden mb-8"> 
            <span class="inline-block py-2 px-6 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-md hero-badge opacity-0">
              Engenharia & Consultoria
            </span>
          </div>

          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05] uppercase drop-shadow-2xl max-w-5xl hero-title opacity-0">
            Soluções em <br/>
            <span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-200">Engenharia Ambiental</span>
          </h1>

          <p class="hero-description text-slate-200 text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-md opacity-0">
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

        <!-- Floating Cards — rodapé interno da cápsula -->
        <div class="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30
                    flex flex-row gap-3 md:gap-4
                    w-full max-w-3xl px-4 md:px-6
                    pointer-events-none">

          <!-- Card 1: +10 Anos -->
          <div class="hero-f-card flex-1 bg-transparent backdrop-blur-sm border border-white/8
                      px-4 py-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] 
                      flex flex-col items-center gap-4 opacity-0 pointer-events-auto">
            
            <div class="relative w-[120px] h-[120px] flex items-center justify-center shrink-0">
              <div class="gauge-years absolute inset-0 w-full h-full"></div>
              <div class="absolute inset-0 z-10 flex flex-col items-center justify-center">
                <span class="gauge-years-label text-white font-black text-2xl leading-none tracking-tight">+0</span>
                <span class="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">anos</span>
              </div>
            </div>

            <div class="text-center">
              <p class="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold leading-none mb-1.5">Experiência</p>
              <p class="text-white text-sm font-semibold tracking-tight leading-snug">Anos de Atuação</p>
            </div>
          </div>

          <!-- Card 2: +500 Projetos -->
          <div class="hero-f-card flex-1 bg-transparent backdrop-blur-sm border border-white/8
                      px-4 py-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] 
                      flex flex-col items-center gap-4 opacity-0 pointer-events-auto">
            
            <div class="relative w-[120px] h-[120px] flex items-center justify-center shrink-0">
              <div class="gauge-projects absolute inset-0 w-full h-full"></div>
              <div class="absolute inset-0 z-10 flex flex-col items-center justify-center">
                <span class="gauge-projects-label text-white font-black text-2xl leading-none tracking-tight">+0</span>
                <span class="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">projetos</span>
              </div>
            </div>

            <div class="text-center">
              <p class="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold leading-none mb-1.5">Portfólio</p>
              <p class="text-white text-sm font-semibold tracking-tight leading-snug">Projetos Entregues</p>
            </div>
          </div>

          <!-- Card 3: Conformidade ABNT -->
          <div class="hero-f-card flex-1 bg-transparent backdrop-blur-sm border border-white/8
                      px-4 py-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] 
                      flex flex-col items-center gap-4 opacity-0 pointer-events-auto">
            
            <div class="relative w-[120px] h-[120px] flex items-center justify-center shrink-0">
              <div class="gauge-abnt absolute inset-0 w-full h-full"></div>
              <div class="absolute inset-0 z-10 flex flex-col items-center justify-center">
                <span class="gauge-abnt-label text-white font-black text-2xl leading-none tracking-tight">0%</span>
                <span class="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">ABNT</span>
              </div>
            </div>

            <div class="text-center">
              <p class="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold leading-none mb-1.5">Conformidade</p>
              <p class="text-white text-sm font-semibold tracking-tight leading-snug">Padrões Técnicos ABNT</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}