// src/components/Clients.js
export function Clients() {
  const originalClients = [
    { name: "Embasa",      src: "/img/logos/logo-embasa.svg" },
    { name: "Sykué",       src: "/img/logos/logo-sykue.svg" },
    { name: "Yamana Gold", src: "/img/logos/logo-yamanagold.svg" },
    { name: "Igarashi",    src: "/img/logos/logo-igarashi.svg" },
    { name: "Tenda",       src: "/img/logos/logo-tenda.svg" },
    { name: "Kobra",       src: "/img/logos/logo-kobra.svg" },
    { name: "AIBA",        src: "/img/logos/logo-aiba.svg" },
    { name: "Enseada",     src: "/img/logos/logo-enseada.svg" },
    { name: "Latapack",    src: "/img/logos/logo-latapack.svg" },
    { name: "Grupo Civil", src: "/img/logos/logo-grupocivil.svg" },
    { name: "FEPBA",       src: "/img/logos/logo-fepba.svg" },
    { name: "SLC",         src: "/img/logos/logo-slc.svg" }
  ];

  const renderTrack = () => `
    <div class="flex items-center gap-16 md:gap-20 animate-marquee w-max min-w-full shrink-0 pr-16 md:pr-20">
      ${originalClients.map(client => `
        <div class="relative flex items-center justify-center w-36 md:w-48 h-16 md:h-20 shrink-0 transition-transform duration-300 hover:scale-110">
          <img
            src="${client.src}"
            alt="${client.name}"
            loading="lazy"
            decoding="async"
            class="client-logo max-h-10 md:max-h-14 w-auto max-w-40 md:max-w-50 object-contain block grayscale opacity-40 transition-all duration-300 hover:grayscale-0 hover:opacity-90"
          />
        </div>
      `).join('')}
    </div>
  `;

  return `
    <section id="clients" class="bg-slate-50/60 py-10 md:py-14 px-4 md:px-6 overflow-hidden">

      <!-- Label -->
      <div class="text-center mb-8 md:mb-10">
        <span class="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
          Clientes
        </span>
      </div>

      <!-- Marquee -->
      <div class="relative w-full overflow-hidden flex marquee-wrapper">

        <div class="absolute top-0 left-0 h-full w-16 md:w-32 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute top-0 right-0 h-full w-16 md:w-32 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        ${renderTrack()}
        ${renderTrack()}

      </div>
    </section>
  `;
}