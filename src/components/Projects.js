export function Projects() {
  const projects = [
    {
      title: "Rede Hidrométrica ANA/ANEEL",
      location: "Bahia",
      img: "/img/projetos/instalacao-rede-hidrometrica-ana-aneel.webp",
      desc: "Instalação e monitoramento atendendo a resolução 03/2010."
    },
    {
      title: "Medição de Vazão",
      location: "Rio Pojuca",
      img: "/img/projetos/medicao-vazao-rio-pojuca-bahia.webp",
      desc: "Estudo hidrológico preciso para regularização de captação."
    },
    {
      title: "Perfuração de Poço",
      location: "Área Rural",
      img: "/img/projetos/perfuracao-poco-artesiano-outorga.webp", // Confirme se este nome está exato na pasta
      desc: "Acompanhamento técnico e outorga para uso subterrâneo."
    },
    {
      title: "Regularização de Barragem",
      location: "Interior da Bahia",
      img: "/img/projetos/regularizacao-barragem-irrigacao.webp",
      desc: "Licenciamento e segurança de barragem para fins de irrigação."
    }
  ];

  return `
    <section id="projetos" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-emerald-600 font-bold tracking-wider uppercase text-sm">Portfólio Técnico</span>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Obras e Estudos Realizados</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${projects.map(project => `
            <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80">
              <img 
                src="${project.img}" 
                alt="${project.title}" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>
              
              <div class="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span class="text-emerald-400 text-xs font-bold uppercase mb-2 block">${project.location}</span>
                <h3 class="text-white text-xl font-bold leading-tight mb-2">${project.title}</h3>
                <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  ${project.desc}
                </p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}