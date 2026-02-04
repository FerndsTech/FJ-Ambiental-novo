import { CardButton } from './CardButton.js'; // <--- Importamos o novo botão

// Dados enriquecidos para o Bento Grid
export const projectsData = [
  {
    id: 0,
    title: "Rede Hidrométrica",
    category: "Monitoramento",
    location: "ANA / ANEEL",
    img: "/img/projetos/instalacao-rede-hidrometrica-ana-aneel.webp",
    desc: "Instalação e monitoramento de estações fluviométricas em conformidade com a resolução conjunta 03/2010.",
    link: "#projeto-rede"
  },
  {
    id: 1,
    title: "Medição de Vazão",
    category: "Hidrologia",
    location: "Rio Pojuca - BA",
    img: "/img/projetos/medicao-vazao-rio-pojuca-bahia.webp",
    desc: "Estudo hidrológico de precisão com ADCP para regularização de captação e análise de disponibilidade hídrica.",
    link: "#projeto-vazao"
  },
  {
    id: 2,
    title: "Poços Tubulares",
    category: "Subterrâneo",
    location: "Área Rural",
    img: "/img/projetos/perfuracao-poco-artesiano-outorga.webp",
    desc: "Gestão completa: desde o estudo geofísico e perfuração até o teste de bombeamento e outorga de uso.",
    link: "#projeto-poco"
  },
  {
    id: 3,
    title: "Segurança de Barragem",
    category: "Engenharia",
    location: "Bahia",
    img: "/img/projetos/regularizacao-barragem-irrigacao.webp",
    desc: "Inspeção técnica regular, plano de segurança e licenciamento ambiental para barragens de irrigação.",
    link: "#projeto-barragem"
  }
];

export function Projects() {
  return `
    <section id="portifolio" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        
        <div class="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
          <div class="max-w-xl">
             <span class="text-emerald-600 font-bold tracking-wider uppercase text-sm">Portfólio Técnico</span>
             <h2 class="text-4xl md:text-5xl font-black text-slate-900 mt-2 tracking-tight">
               Excelência em <br/>soluções ambientais.
             </h2>
          </div>
          
          <div class="flex items-center gap-3">
             <button id="prev-project" class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group">
                <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 19l-7-7 7-7" /></svg>
             </button>
             <button id="next-project" class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group">
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7" /></svg>
             </button>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-32 md:h-40">
             ${projectsData.map((project, index) => `
                <div class="project-thumb relative rounded-2xl overflow-hidden cursor-pointer group ring-offset-2 transition-all duration-300 ${index === 0 ? 'ring-2 ring-emerald-500' : 'opacity-60 hover:opacity-100'}" data-index="${index}">
                   <img src="${project.img}" class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                   <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                   <span class="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-widest text-shadow-sm pointer-events-none">${project.title}</span>
                </div>
             `).join('')}
          </div>

          <div class="relative w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden group shadow-2xl">
             
             <img id="project-main-image" src="${projectsData[0].img}" class="absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-[2000ms] will-change-transform" />
             
             <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>

             <div class="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
                   <div class="max-w-2xl translate-y-0 opacity-100" id="project-info-container">
                      <div class="flex items-center gap-3 mb-4">
                         <span id="project-category" class="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                            ${projectsData[0].category}
                         </span>
                         <span id="project-location" class="text-slate-300 text-xs font-bold uppercase tracking-wider">
                            ${projectsData[0].location}
                         </span>
                      </div>
                      
                      <h3 id="project-title" class="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                         ${projectsData[0].title}
                      </h3>
                      
                      <p id="project-desc" class="text-slate-200 text-lg font-medium leading-relaxed max-w-lg">
                         ${projectsData[0].desc}
                      </p>
                   </div>

                   <div class="">
                      ${CardButton({ 
                        text: "Ver Detalhes", // Texto genérico inicial
                        href: projectsData[0].link 
                      })}
                   </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  `;
}