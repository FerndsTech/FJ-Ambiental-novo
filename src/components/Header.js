export function Header() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';

  return `
    <header class="absolute top-5 left-0 w-full z-50 pt-6 px-4 flex justify-center">
      
      <nav class="
        w-full max-w-6xl
        bg-white/70 backdrop-blur-md
        border border-white/40 shadow-sm
        rounded-full
        px-6 py-3
        flex items-center justify-between
        transition-all duration-300
      ">
        
        <a href="#" class="flex items-center gap-3 group">
          <img src="/img/logos/logo.svg" alt="FJ Logo" class="h-8 w-auto object-contain" onerror="this.style.display='none'"> 
          <span class="text-xl font-bold text-slate-800 tracking-tight group-hover:text-emerald-600 transition-colors">
            FJ Ambiental
          </span>
        </a>

        <ul class="hidden md:flex items-center gap-8">
          <li>
            <a href="#home" class="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Início</a>
          </li>
          <li>
            <a href="#services" class="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Serviços</a>
          </li>
          <li>
            <a href="#projetos" class="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Projetos</a>
          </li>
          <li>
            <a href="#about" class="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Sobre</a>
          </li>
        </ul>

        <div class="flex items-center">
          <a 
            href="https://wa.me/${whatsappNumber}" 
            target="_blank"
            class="hidden sm:inline-flex items-center justify-center bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-.967-.272-.297-.471-.446-.718-.174-1.291-.821-4.017-1.291-.496-.496 1.291.644 2.752 1.535 3.593 2.179.841 5.176.645 6.417.397.744-.148 2.375-1.535 2.896-1.535.52.124 1.562 1.338 2.058.421.496.223.868.074 1.066-.149.198-.545.298-1.14.298z"/></svg>
            Contato
          </a>
          
          <button class="md:hidden text-slate-800 ml-4 focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

      </nav>
    </header>
  `;
}