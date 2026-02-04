import heroPoster from '/img/foto-home.webp';
import { Button } from './Button.js'; // Importamos o novo componente

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
            <source src="/img/video-hero.mp4" type="video/mp4">
            <source src="/img/video-hero.webm" type="video/webm">
          </video>
          <div class="absolute inset-0 bg-slate-900/40"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/20"></div>
        </div>

        <div class="relative z-10 w-full h-full flex flex-col items-center justify-center pt-28 md:pt-32 pb-12 px-4 md:px-10 text-center">
            
            <div class="overflow-hidden mb-6">
                <span class="inline-block py-1.5 px-5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md hero-badge">
                  Engenharia & Consultoria
                </span>
            </div>

            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] uppercase drop-shadow-lg max-w-5xl hero-title">
              Soluções em <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Engenharia Ambiental</span>
            </h1>

          <div class="flex flex-col sm:flex-row gap-4 mt-8 hero-cta opacity-0 translate-y-4">

                ${Button({ 
                text: "Entre em contato", 
                href: `https://wa.me/${whatsappNumber}`,
                variant: "glass"  // <--- MUDANÇA AQUI
                })}

          </div>
          
        </div>
      </div>
    </section>
  `;
}