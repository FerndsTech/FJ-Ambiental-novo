import { CardButton } from './CardButton.js';

export const projectsData = [
  {
    id: 0,
    title: "Rede Hidrométrica",
    category: "Monitoramento",
    location: "ANA / ANEEL",
    img: "/img/projetos/instalacao-rede-hidrometrica-ana-aneel.webp",
    desc: "Instalação e monitoramento de estações fluviométricas em conformidade com a resolução conjunta 03/2010.",
    link: "/portfolio.html" 
  },
  {
    id: 1,
    title: "Medição de Vazão",
    category: "Hidrologia",
    location: "Rio Pojuca - BA",
    img: "/img/projetos/medicao-vazao-rio-pojuca-bahia.webp",
    desc: "Estudo hidrológico de precisão com ADCP para regularização de captação e análise de disponibilidade hídrica.",
    link: "/portfolio.html"
  },
  {
    id: 2,
    title: "Poços Tubulares",
    category: "Subterrâneo",
    location: "Área Rural",
    img: "/img/projetos/perfuracao-poco-artesiano-outorga.webp",
    desc: "Gestão completa: desde o estudo geofísico e perfuração até o teste de bombeamento e outorga de uso.",
    link: "/portfolio.html"
  },
  {
    id: 3,
    title: "Segurança de Barragem",
    category: "Engenharia",
    location: "Bahia",
    img: "/img/projetos/regularizacao-barragem-irrigacao.webp",
    desc: "Inspeção técnica regular, plano de segurança e licenciamento ambiental para barragens de irrigação.",
    link: "/portfolio.html"
  }
];

export function Projects() {
  return `
    <section id="projects-section" class="pt-28 pb-24 bg-white select-none relative z-10 overflow-hidden">
      <div class="w-full max-w-[80%] 7xl:max-w-[1350px] mx-auto px-4 md:px-6"> 
        
        <div class="mb-10 flex flex-col items-start text-left w-full pl-1 md:-ml-13">
          <span class="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold tracking-wider uppercase text-xs mb-4">
            Portfólio Técnico
          </span>
        <h2 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
          Excelência em <br/>soluções ambientais.
        </h2>
        </div>

        <div class="flex flex-col gap-6">
          
          <div class="flex items-center gap-4 w-full">
             
             <button id="prev-project" aria-label="Projeto Anterior" class="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full border border-slate-200 items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group cursor-pointer active:scale-95 bg-white z-20 shadow-sm">
                <svg class="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 19l-7-7 7-7" /></svg>
             </button>

             <div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 h-32 md:h-48">
                 ${projectsData.map((project, index) => `
                    <div class="project-thumb relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-[1.01] ${index === 0 ? 'ring-2 ring-emerald-500 ring-offset-2 opacity-100' : 'opacity-50 hover:opacity-100 border-transparent'}" 
                         data-index="${index}"
                         role="button">
                       <img src="${project.img}" 
                            alt="Thumbnail ${project.title}" 
                            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700" 
                            loading="lazy" />
                       <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                       <span class="absolute bottom-3 left-4 right-2 text-white text-xs md:text-sm font-bold uppercase tracking-widest text-shadow-sm pointer-events-none z-10 leading-tight">${project.title}</span>
                    </div>
                 `).join('')}
             </div>

             <button id="next-project" aria-label="Próximo Projeto" class="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full border border-slate-200 items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group cursor-pointer active:scale-95 bg-white z-20 shadow-sm">
                <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7" /></svg>
             </button>
             
             <div class="flex md:hidden gap-2 shrink-0">
                <button id="prev-project-mobile" class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center active:bg-slate-100"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" /></svg></button>
                <button id="next-project-mobile" class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center active:bg-slate-100"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg></button>
             </div>

          </div>

          <div class="relative w-full h-[450px] md:h-[600px] max-h-[80vh] rounded-[24px] md:rounded-[40px] overflow-hidden group shadow-2xl bg-slate-900 mt-2">
             
             <img id="project-main-image" 
                  src="${projectsData[0].img}" 
                  alt="${projectsData[0].title}"
                  class="absolute inset-0 w-full h-full object-cover opacity-100" />
             
             <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 z-10"></div>

             <div class="absolute inset-0 p-6 md:p-14 flex flex-col justify-end z-20">
                
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
                   <div class="max-w-4xl translate-y-0 opacity-100" id="project-info-container">
                      
                      <div class="flex items-center gap-3 mb-5">
                         <span id="project-category" class="px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20 backdrop-blur-sm">
                            ${projectsData[0].category}
                         </span>
                         <span id="project-location" class="text-slate-300 text-sm font-bold uppercase tracking-wider border-l border-slate-500 pl-4">
                            ${projectsData[0].location}
                         </span>
                      </div>
                      
                      <h3 id="project-title" class="text-3xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                         ${projectsData[0].title}
                      </h3>
                      
                      <p id="project-desc" class="text-slate-200 text-sm md:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-md text-balance">
                         ${projectsData[0].desc}
                      </p>
                   </div>

                   <div id="project-cta-container" class="shrink-0 mb-2">
                      ${CardButton({ 
                        text: "Ver Case Completo", 
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