import heroPoster from '/img/foto-home.webp';

export function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';

  return `
    <section id="home" class="relative w-full min-h-screen bg-slate-50 p-3 md:p-3 flex flex-col">
      
      <div id="hero-capsule" class="relative w-full flex-1 rounded-[48px] overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
        
        <div class="absolute inset-0 w-full h-full z-0">
          <video 
            class="w-full h-full object-cover scale-105"
            autoplay muted loop playsinline preload="metadata" poster="${heroPoster}"
          >
            <source src="/img/video-hero.mp4" type="video/mp4">
          </video>
          <div class="absolute inset-0 bg-slate-900/30"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30"></div>
        </div>

        <div class="relative z-10 w-full h-full flex flex-col items-center justify-center pt-32 pb-12 px-4 md:px-10 text-center">
            
            <span class="inline-block py-1.5 px-5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              Engenharia & Consultoria
            </span>

            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] uppercase drop-shadow-lg max-w-5xl">
              Soluções em <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Engenharia Ambiental</span>
            </h1>

            <div class="flex flex-col sm:flex-row gap-4 mt-8">
               <a href="https://wa.me/${whatsappNumber}" target="_blank" class="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-emerald-900/20">
                 Entre em contato
               </a>
            </div>

        </div>
      </div>
    </section>
  `;
}