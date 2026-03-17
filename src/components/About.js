import { CardButton } from './CardButton.js';

export function About() {
  return `
    <section id="about" class="py-4 md:py-6 bg-white relative z-10 w-full">
      
      <div class="w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-[1920px] mx-auto rounded-[32px] md:rounded-[48px] relative overflow-hidden bg-[#f8fafc] shadow-sm border border-slate-100">
        
        <div class="absolute inset-0 z-0 pointer-events-none">
          <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#0f172a 1px, transparent 1px); background-size: 32px 32px;"></div>
          <div class="absolute top-0 left-0 w-[120%] md:w-[80%] h-[80%] bg-gradient-to-br from-emerald-600/10 via-emerald-500/5 to-transparent"></div>
          <div class="absolute bottom-0 right-0 w-[100%] md:w-[60%] h-[70%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
          <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 via-transparent to-transparent"></div>
        </div>

        <div class="px-6 md:px-12 lg:px-20 py-24 md:py-32 relative z-10">
          <div class="max-w-[1350px] mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              <div class="lg:col-span-5 flex flex-col items-start reveal-left space-y-10">
                <h2 class="reveal-text text-[44px] md:text-5xl lg:text-6xl font-extrabold font-['Inter'] text-slate-900 tracking-tighter leading-[0.98]">
                  Nossa essência <br/>técnica, sua <br/>
                  <span class="text-emerald-500">evolução</span> sustentável.
                </h2>
                <div class="space-y-6 text-slate-600 font-['Inter'] text-base md:text-lg leading-relaxed max-w-lg">
                  <p>A <strong>FJ Ambiental</strong> simplifica a engenharia ambiental complexa, unindo rigor técnico com uma abordagem próxima e transparente.</p>
                  <p>Mais que conformidade legal, entregamos estratégias que garantem a sustentabilidade do ecossistema e a eficiência do seu negócio.</p>
                </div>
                
                <div class="grid grid-cols-2 gap-6 w-full max-w-md pt-6 border-t border-slate-200">
                  <div class="flex flex-col space-y-1">
                    <span class="text-4xl lg:text-5xl font-extrabold text-emerald-500 flex items-baseline">
                      +<span class="animate-number" data-target="10">0</span>
                      <span class="text-xl font-bold text-slate-900 ml-1">anos</span>
                    </span>
                    <span class="text-xs uppercase tracking-widest text-slate-400 font-bold">Experiência</span>
                  </div>
                  <div class="flex flex-col space-y-1">
                    <span class="text-4xl lg:text-5xl font-extrabold text-slate-900 flex items-baseline">
                      +<span class="animate-number" data-target="500">0</span>
                    </span>
                    <span class="text-xs uppercase tracking-widest text-slate-400 font-bold">Projetos Atendidos</span>
                  </div>
                </div>
                
                ${CardButton({ text: "Conheça nossa trajetória", href: "#" })}
              </div>

              <div class="lg:col-span-7 relative flex items-center justify-center h-[550px] lg:h-[700px] w-full reveal-right">
                
                <div class="about-card absolute top-10 right-0 w-[75%] h-[65%] rounded-[32px] overflow-hidden shadow-2xl z-20 group border-4 border-white bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop" alt="Diretoria" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                
                <div class="about-card absolute bottom-0 left-0 w-[60%] h-[55%] rounded-[32px] overflow-hidden shadow-xl z-30 border-8 border-white group bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19140f3?q=80&w=1470&auto=format&fit=crop" alt="Equipe em campo" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                
                <div class="about-card absolute top-1/2 -right-4 md:-right-8 w-48 h-20 rounded-2xl bg-white/80 backdrop-blur-md p-4 shadow-xl z-40 flex items-center justify-start gap-4 border border-white/50">
                  <div class="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-slate-900 font-bold text-[13px] leading-tight mb-0.5">Conformidade Legal</span>
                    <span class="text-emerald-600 font-semibold text-[10px] uppercase tracking-wider">Garantida</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  `;
}