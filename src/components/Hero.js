export function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';
  const bgImage = '/img/foto-home.webp';

  return `
    <section id="home" class="relative w-full h-[95vh] p-4 md:p-6 flex flex-col justify-center">
      
      <div class="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl bg-slate-50 isolate">
        
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style="background-image: url('${bgImage}');"
        ></div>

        <div class="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10"></div>

        <div class="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center lg:flex-row lg:items-center">
          
          <div class="w-full lg:w-7/12 flex flex-col items-start pt-20">
            <span class="inline-block py-2 px-4 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Engenharia & Consultoria
            </span>

            <h1 class="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.05] uppercase">
              Soluções em <br/>
              <span class="text-emerald-600">Engenharia Ambiental</span>
            </h1>

            <p class="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
              Regularização, licenciamento e gestão hídrica eficiente para seu empreendimento.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/${whatsappNumber}" target="_blank"
                 class="group inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1">
                 Entre em contato
              </a>
              <a href="#projetos" 
                 class="inline-flex items-center justify-center bg-white/40 backdrop-blur-md border border-slate-300 text-slate-800 px-8 py-4 rounded-full text-base font-bold transition-all hover:bg-white hover:border-emerald-500 hover:text-emerald-700">
                 Ver Projetos
              </a>
            </div>
          </div>

          <div class="hidden lg:flex lg:w-5/12 flex-col items-end gap-5 pr-10 justify-center h-full">
             <div class="glass-pill flex items-center gap-4 bg-white/40 backdrop-blur-md border border-white/60 p-3 pr-6 rounded-full shadow-sm w-fit hover:bg-white/60 transition-colors">
                <div class="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm">✓</div>
                <span class="font-bold text-slate-800 text-sm">Regularização Garantida</span>
             </div>
             <div class="glass-pill flex items-center gap-4 bg-white/40 backdrop-blur-md border border-white/60 p-3 pr-6 rounded-full shadow-sm w-fit hover:bg-white/60 transition-colors translate-x-6">
                <div class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white shadow-sm">⚡</div>
                <span class="font-bold text-slate-800 text-sm">Agilidade nos Processos</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  `;
}