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
    { name: "Grupo Civil", src: "/img/logos/logo-grupocivil.svg" },
    { name: "FEPBA", src: "/img/logos/logo-fepba.svg" },
    { name: "SLC", src: "/img/logos/logo-slc.svg" }
  ];

  const renderTrack = () => `
    <div class="flex items-center gap-20 animate-marquee w-max min-w-full shrink-0 pr-20">
      ${originalClients.map(client => `
        <div class="relative flex items-center justify-center w-48 h-24 shrink-0 transition-transform duration-300 hover:scale-110">
          <img
            src="${client.src}"
            alt="${client.name}"
            loading="lazy"
            decoding="async"
            class="client-logo max-h-20 md:max-h-[88px] w-auto max-w-[200px] object-contain block grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          />
        </div>
      `).join('')}
    </div>
  `;

  return `
    <section id="clients" class="py-6 md:py-8 bg-transparent px-4 md:px-6">
      
      <div class="relative w-full overflow-hidden flex marquee-wrapper">

        <div class="absolute top-0 left-0 h-full w-24 md:w-40 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute top-0 right-0 h-full w-24 md:w-40 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-10 pointer-events-none"></div>

        ${renderTrack()}
        ${renderTrack()}
        
      </div>
    </section>
  `;
}