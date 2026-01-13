export function Services() {
  const services = [
    {
      title: "Outorga de Água",
      desc: "Autorização obrigatória para captar água de rios ou poços subterrâneos. Garanta a segurança jurídica da sua produção.",
      icon: `<svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
    },
    {
      title: "Licenciamento Ambiental",
      desc: "Regularização completa (LP, LI, LO) para indústrias, postos, agronegócio e loteamentos junto ao INEMA.",
      icon: `<svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`
    },
    {
      title: "Hidrometria de Precisão",
      desc: "Monitoramento de vazão e qualidade da água com equipamentos de ponta para conformidade legal.",
      icon: `<svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`
    }
  ];

  return `
    <section id="servicos" class="relative py-24 bg-slate-900 overflow-hidden">
      
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="text-center mb-20">
          <span class="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            Especialidades
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Engenharia de <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Alto Nível</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Soluções técnicas desenhadas para eliminar riscos e garantir a sustentabilidade do seu negócio.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${services.map(service => `
            
            <div class="service-card group relative bg-slate-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2">
              
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div class="relative z-10">
                <div class="w-14 h-14 bg-slate-900/80 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500 group-hover:border-emerald-500/20 shadow-lg shadow-black/20">
                  ${service.icon}
                </div>
                
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight">${service.title}</h3>
                <p class="text-slate-400 leading-relaxed text-sm font-light">
                  ${service.desc}
                </p>

                <div class="mt-6 flex items-center text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Saiba mais <span class="ml-2">→</span>
                </div>
              </div>
            </div>

          `).join('')}
        </div>
      </div>
    </section>
  `;
}