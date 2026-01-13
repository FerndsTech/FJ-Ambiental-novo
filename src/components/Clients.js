export function Clients() {
  const originalClients = [
    { name: "Embasa", src: "/img/logos/logo-embasa.svg" },
    { name: "Sykué", src: "/img/logos/logo-sykue.svg" },
    { name: "Yamana Gold", src: "/img/logos/logo-managold.svg" },
    { name: "Igarashi", src: "/img/logos/logo-igarashi.svg" },
    { name: "Tenda", src: "/img/logos/logo-tenda.svg" },
    { name: "Kobra", src: "/img/logos/logo-kobra.svg" },
    { name: "AIBA", src: "/img/logos/logo-aiba.svg" },
    { name: "EEP", src: "/img/logos/logo-eep.svg" },
    { name: "Latapack", src: "/img/logos/logo-latapack.svg" },
    { name: "ANL", src: "/img/logos/foto-anl.svg"}, 
    { name: "UFBA", src: "/img/logos/logo-ufba.svg" },
    { name: "SLC", src: "/img/logos/foto-slc.svg" }
  ];

  const loopClients = [...originalClients, ...originalClients];

  return `
    <section class="py-12 bg-transparent px-4 md:px-6">
      
      <div class="relative w-full overflow-hidden">
        
        <div class="relative w-full flex overflow-hidden">
          
          <div class="absolute top-0 left-0 h-full w-24 md:w-40 bg-linear-to-r from-[#e2e8f0] via-[#e2e8f0]/90 to-transparent z-10 pointer-events-none"></div>
          <div class="absolute top-0 right-0 h-full w-24 md:w-40 bg-linear-to-l from-[#e2e8f0] via-[#e2e8f0]/90 to-transparent z-10 pointer-events-none"></div>

          <div class="flex items-center gap-12 animate-marquee whitespace-nowrap pl-4">
            
            ${loopClients.map(client => `
              <div class="group relative flex items-center justify-center w-40 h-24 shrink-0 transition-transform duration-300 hover:scale-105">
                
                <img 
                  src="${client.src}" 
                  alt="${client.name}" 
                  class="
                    /* PADRONIZAÇÃO DE TAMANHO VISUAL */
                    max-h-[50px]        /* Altura máxima fixa para todos */
                    w-auto              /* Largura automática para não distorcer */
                    max-w-[140px]       /* Largura máxima para logos muito horizontais */
                    object-contain      /* Garante que a logo inteira apareça */
                    
                    /* TRATAMENTO DE IMAGEM (A Mágica) */
                    grayscale           /* Remove cor (deixa cinza) */
                    contrast-150        /* AUMENTA O CONTRASTE: Força o fundo a ser branco puro (#FFF) */
                    mix-blend-multiply  /* MULTIPLY: Faz o branco puro sumir no fundo cinza */
                    opacity-60          /* Deixa cinza médio (elegante) */
                    
                    /* INTERAÇÃO */
                    transition-all duration-300 
                    group-hover:grayscale-0 
                    group-hover:opacity-100 
                    group-hover:mix-blend-normal /* (Opcional) Remove o blend no hover se quiser ver o fundo original */
                  "
                />
              </div>
            `).join('')}

          </div>

        </div>
      </div>
    </section>
  `;
}