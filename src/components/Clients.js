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
    <section class="pb-12 pt-4 bg-transparent px-4 md:px-6">
      
      <div class="relative w-full bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden py-8">
        
        <div class="relative w-full flex overflow-hidden">
          
          <div class="absolute top-0 left-0 h-full w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div class="absolute top-0 right-0 h-full w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div class="flex items-center gap-16 animate-marquee whitespace-nowrap pl-4">
            ${loopClients.map(client => `
              <div class="group flex items-center justify-center h-12 w-32 flex-shrink-0 cursor-pointer">
                <img 
                  src="${client.src}" 
                  alt="${client.name}" 
                  class="max-h-10 w-auto object-contain grayscale opacity-40 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            `).join('')}
          </div>

        </div>
      </div>
    </section>
  `;
}