import { CardButton } from './CardButton.js';

export const projectsData = [
  {
    id: 0,
    title: "Rede<br/>Hidrométrica", 
    category: "Monitoramento",
    location: "ANA /<br/>ANEEL", 
    date: "11.05.2021",
    img: "/img/projetos/instalacao-rede-hidrometrica-ana-aneel.webp",
    desc: "Instalação e monitoramento de estações fluviométricas em conformidade com a resolução",
    link: "/portfolio.html" 
  },
  {
    id: 1,
    title: "Medição de<br/>Vazão",
    category: "Hidrologia",
    location: "Rio Pojuca -<br/>BA",
    date: "11.05.2021",
    img: "/img/projetos/medicao-vazao-rio-pojuca-bahia.webp",
    desc: "Estudo hidrológico de precisão com ADCP para regularização de captação e análise de disponibilidade hídrica.",
    link: "/portfolio.html"
  },
  {
    id: 2,
    title: "Poços<br/>Tubulares",
    category: "Subterrâneo",
    location: "Área<br/>Rural",
    date: "11.05.2021",
    img: "/img/projetos/perfuracao-poco-artesiano-outorga.webp",
    desc: "Gestão completa: desde o estudo geofísico e perfuração até o teste de bombeamento e outorga de uso.",
    link: "/portfolio.html"
  },
  {
    id: 3,
    title: "Segurança de<br/>Barragem",
    category: "Engenharia",
    location: "Bahia",
    date: "11.05.2021",
    img: "/img/projetos/regularizacao-barragem-irrigacao.webp",
    desc: "Inspeção técnica regular, plano de segurança e licenciamento ambiental para barragens de irrigação.",
    link: "/portfolio.html"
  }
];

export function Projects() {
  return `
    <section id="projects-section" class="min-h-screen pt-32 md:pt-40 pb-12 bg-white select-none relative z-10 overflow-hidden flex flex-col justify-center">
      
      <div class="w-full max-w-[90%] xl:max-w-[1350px] mx-auto flex flex-col items-start text-left pl-1 md:-ml-12 mb-8 md:mb-10">
         <span class="inline-block py-2 px-4 rounded-[40px] bg-emerald-50 text-emerald-500 font-bold font-['Inter'] tracking-wider uppercase text-[10px] md:text-sm mb-4 border border-emerald-100/50">
           Portfólio Técnico
         </span>
         <h2 class="text-[40px] md:text-[5rem] font-bold font-['Inter'] text-slate-900 tracking-tight leading-[1.05]">
           Excelência em <br/>soluções ambientais.
         </h2>
      </div>

      <div class="block md:hidden w-full relative">
          
          <div id="mobile-projects-slider" class="flex overflow-x-auto snap-x snap-mandatory gap-4 pl-[5%] pr-[15%] pb-2 items-stretch [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              
              ${projectsData.map((project) => `
                
                <div class="snap-center shrink-0 w-[85vw] max-w-[340px] h-[520px] rounded-[32px] overflow-hidden bg-[#0A0F1A] flex flex-col relative shadow-2xl">
                    
                    <div class="relative w-full h-[320px] shrink-0">
                        <img src="${project.img}" alt="Projeto" class="absolute inset-0 w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/20 to-black/30"></div>

                        <div class="absolute top-5 left-5 right-5 flex justify-between items-start">
                            <span class="px-3 py-1 rounded-[50px] bg-emerald-400 text-white text-[10px] font-bold font-['Inter'] uppercase tracking-wider shadow-md">
                                ${project.category}
                            </span>
                            <span class="text-white font-bold font-['Inter'] uppercase text-[10px] tracking-widest text-right leading-tight drop-shadow-md">
                                ${project.location}
                            </span>
                        </div>

                        <div class="absolute bottom-4 left-5 right-5 flex justify-between items-end gap-2">
                            <h3 class="text-[32px] font-extrabold font-['Inter'] text-white leading-tight drop-shadow-lg max-w-[75%]">
                               ${project.title}
                            </h3>
                            <span class="text-[#d97706] font-bold font-['Inter'] text-[11px] drop-shadow-md shrink-0 mb-1.5">
                                ${project.date}
                            </span>
                        </div>
                    </div>

                    <div class="p-5 flex flex-col justify-between grow bg-[#0A0F1A]">
                        <p class="text-white text-[14px] font-medium font-['Inter'] leading-relaxed opacity-90 line-clamp-3">
                            ${project.desc}
                        </p>
                        
                        <div class="w-full flex justify-start mt-auto">
                            ${CardButton({ text: "Ver Case Completo", href: project.link })}
                        </div>
                    </div>
                </div>
              `).join('')}
              
          </div>

          <div class="flex justify-center w-full mt-6">
              <div class="grid grid-cols-4 gap-2 w-full max-w-[340px] px-2">
                  ${projectsData.map((project, index) => `
                      <div class="mobile-thumb relative rounded-[10px] overflow-hidden aspect-[4/3] border-2 transition-all duration-300 ${index === 0 ? 'border-[#0A0F1A] opacity-100' : 'border-transparent opacity-50'}" data-index="${index}">
                          <img src="${project.img}" class="absolute inset-0 w-full h-full object-cover" />
                      </div>
                  `).join('')}
              </div>
          </div>

          <div class="flex justify-center items-center gap-2 mt-5">
              ${projectsData.map((_, index) => `
                 <div class="mobile-dot h-2.5 rounded-full transition-all duration-300 ${index === 0 ? 'bg-[#0A0F1A] w-6' : 'bg-emerald-400 w-2.5'}" data-index="${index}"></div>
              `).join('')}
          </div>
      </div>

      <div class="hidden md:flex w-full max-w-[90%] xl:max-w-[1350px] mx-auto flex-col h-full gap-10">
          
          <div class="relative w-full rounded-[40px] overflow-hidden shadow-2xl bg-[#0A0F1A] flex flex-col h-[550px]">
               <div class="relative w-full absolute inset-0 h-full group">
                   <img id="project-main-image" src="${projectsData[0].img}" class="w-full h-full object-cover opacity-100 transition-transform duration-[2s]" />
                   <div class="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/60 to-transparent opacity-100"></div>

                   <div class="absolute inset-0 p-12 flex flex-col justify-between">
                      <div class="flex justify-between items-start">
                          <span id="project-category" class="px-4 py-2 rounded-[50px] bg-emerald-400 text-white text-xs font-bold font-['Inter'] uppercase tracking-wider shadow-lg">
                              ${projectsData[0].category}
                          </span>
                          <div class="flex flex-col items-end text-right">
                               <span id="project-location" class="text-white font-bold font-['Inter'] uppercase text-xs tracking-wider leading-tight drop-shadow-md">
                                  ${projectsData[0].location}
                               </span>
                          </div>
                      </div>

                      <div class="flex justify-between items-end translate-y-0 opacity-100" id="project-info-container">
                          <h3 id="project-title" class="text-[5rem] font-extrabold font-['Inter'] text-white leading-[1.05] max-w-[70%] drop-shadow-lg">
                             ${projectsData[0].title}
                          </h3>
                      </div>
                   </div>
               </div>

               <div class="relative absolute inset-0 bg-transparent p-12 flex flex-col justify-end z-20 h-full pointer-events-none">
                  <div class="flex flex-row items-end justify-between gap-6 w-full pointer-events-auto">
                     <div class="block max-w-3xl"></div>
                     <div class="w-auto flex flex-col gap-6 items-end" id="project-desc-container">
                          <p id="project-desc" class="text-white text-lg font-medium font-['Inter'] leading-relaxed max-w-xl text-right opacity-90">
                              ${projectsData[0].desc}
                          </p>
                          <div class="w-auto" id="project-cta-container">
                              ${CardButton({ text: "Ver Case Completo", href: projectsData[0].link })}
                          </div>
                     </div>
                  </div>
               </div>
          </div>

          <div class="flex items-center gap-4 w-full">
               <button id="prev-project" class="flex-shrink-0 w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0A0F1A] hover:text-white transition-all duration-300 group cursor-pointer active:scale-95 bg-white z-20 shadow-sm">
                  <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 19l-7-7 7-7" /></svg>
               </button>

               <div class="flex-1 grid grid-cols-4 gap-3 h-32">
                   ${projectsData.map((project, index) => `
                      <div class="project-thumb relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${index === 0 ? 'ring-2 ring-[#0A0F1A] opacity-100' : 'opacity-40 hover:opacity-100'}" data-index="${index}">
                         <img src="${project.img}" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      </div>
                   `).join('')}
               </div>

               <button id="next-project" class="flex-shrink-0 w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0A0F1A] hover:text-white transition-all duration-300 group cursor-pointer active:scale-95 bg-white z-20 shadow-sm">
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7" /></svg>
               </button>
          </div>
      </div>

    </section>
  `;
}