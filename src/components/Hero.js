// Removemos os imports de vídeo pois arquivos na 'public' são acessados via URL direta
import heroPoster from '/img/foto-home.webp';

export function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';

  return `
    <section id="home" class="relative w-full min-h-screen flex flex-col justify-center bg-white p-4 md:p-6">
      
      <div class="relative w-full min-h-[85vh] h-full rounded-[40px] overflow-hidden shadow-2xl isolate ring-1 ring-slate-800 transform-gpu">
        
        <video 
          class="absolute inset-0 w-full h-full object-cover -z-10 block"
          autoplay 
          muted 
          loop 
          playsinline
          preload="metadata"
          poster="${heroPoster}"
          /* object-position: center bottom; -> Foca na parte de baixo (nos círculos) */
          style="object-fit: cover; object-position: center bottom;" 
        >
          
          <source src="/img/video-hero.mp4" type="video/mp4">
          
          <img src="${heroPoster}" alt="Engenharia Ambiental" class="w-full h-full object-cover block">
        </video>

        <div class="absolute inset-0 bg-slate-900/50 z-0 pointer-events-none"></div>

        <div class="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center lg:flex-row lg:items-center py-20">
          
          <div class="w-full lg:w-7/12 flex flex-col items-start">
            <span class="inline-block py-2 px-4 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              Engenharia & Consultoria
            </span>

            <h1 class="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05] uppercase drop-shadow-xl">
              Soluções em <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Engenharia Ambiental</span>
            </h1>

            <p class="text-lg text-slate-200 mb-10 max-w-xl leading-relaxed font-medium drop-shadow-md">
              Regularização, licenciamento e gestão hídrica eficiente para seu empreendimento.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/${whatsappNumber}" target="_blank"
                 class="group inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all hover:bg-emerald-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                 Entre em contato
              </a>
              <a href="#projets" 
                 class="inline-flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full text-base font-bold transition-all hover:bg-white/10 hover:border-emerald-500/50">
                 Ver Projetos
              </a>
            </div>
          </div>
          
           <div class="hidden lg:flex lg:w-5/12 flex-col items-end gap-6 justify-center pl-10">
             <div class="glass-pill flex items-center gap-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-3 pr-6 rounded-full shadow-2xl w-fit hover:border-emerald-500/30 transition-colors">
                <div class="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-900/50">✓</div>
                <div class="flex flex-col items-start">
                    <span class="font-bold text-slate-100 text-sm">Regularização</span>
                    <span class="text-slate-400 text-[10px] uppercase tracking-wide">Garantia Jurídica</span>
                </div>
             </div>
             
             <div class="glass-pill flex items-center gap-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-3 pr-6 rounded-full shadow-2xl w-fit hover:border-emerald-500/30 transition-colors translate-x-6">
                <div class="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-emerald-400 shadow-lg">⚡</div>
                <div class="flex flex-col items-start">
                    <span class="font-bold text-slate-100 text-sm">Agilidade</span>
                    <span class="text-slate-400 text-[10px] uppercase tracking-wide">Processos Rápidos</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  `;
}