export function Clients() {
  const originalClients = [
    { name: "Embasa", src: "/img/logos/logo-embasa.svg" },
    { name: "Sykué", src: "/img/logos/logo-sykue.svg" },
    { name: "Yamana Gold", src: "/img/logos/logo-yamanagold.svg" },
    { name: "Igarashi", src: "/img/logos/logo-igarashi.svg" },
    { name: "Tenda", src: "/img/logos/logo-tenda.svg" },
    { name: "Kobra", src: "/img/logos/logo-kobra.svg" },
    { name: "AIBA", src: "/img/logos/logo-aiba.svg" },
    { name: "Enseada", src: "/img/logos/logo-enseada.svg" },
    { name: "Latapack", src: "/img/logos/logo-latapack.svg" },
    { name: "Grupo Civil", src: "/img/logos/logo-grupocivil.svg"}, 
    { name: "FEPBA", src: "/img/logos/logo-fepba.svg" },
    { name: "SLC", src: "/img/logos/logo-slc.svg" }
  ];

  const loopClients = [...originalClients, ...originalClients];

  return `
    <section class="py-16 bg-transparent px-4 md:px-6">
      
      <div class="relative w-full overflow-hidden">
        
        <div class="relative w-full flex overflow-hidden">
          
          <div class="absolute top-0 left-0 h-full w-24 md:w-40 bg-linear-to-r from-[#e2e8f0] via-[#e2e8f0]/90 to-transparent z-10 pointer-events-none"></div>
          <div class="absolute top-0 right-0 h-full w-24 md:w-40 bg-linear-to-l from-[#e2e8f0] via-[#e2e8f0]/90 to-transparent z-10 pointer-events-none"></div>

          <div class="flex items-center gap-20 animate-marquee whitespace-nowrap pl-4">
            
            ${loopClients.map(client => `
              <div class="group relative flex items-center justify-center w-60 h-32 shrink-0 transition-transform duration-300 hover:scale-110">
                
                <img 
                  src="${client.src}" 
                  alt="${client.name}" 
                  class="
                    /* --- NOVAS DIMENSÕES (ESTILO REFERÊNCIA) --- */
                    max-h-20             /* Aumentado de 50px para 80px (Tamanho de destaque) */
                    w-auto               /* Mantém a proporção */
                    max-w-[200px]        /* Permite logos horizontais mais largas */
                    object-contain       /* Garante nitidez */
                    
                    /* --- TRATAMENTO VISUAL --- */
                    grayscale            /* Preto e branco */
                    contrast-125         /* Reforça o branco para o blend funcionar */
                    mix-blend-multiply   /* Remove o fundo branco das imagens JPG/SVG */
                    opacity-70           /* Cinza sólido e visível (aumentado de 60) */
                    
                    /* --- INTERAÇÃO --- */
                    transition-all duration-300 
                    group-hover:grayscale-0 
                    group-hover:opacity-100 
                    group-hover:contrast-100
                    group-hover:mix-blend-normal /* Mostra cores reais ao passar o mouse */
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