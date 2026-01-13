export function Header() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';

  return `
    <header class="absolute top-5 left-0 w-full z-50 pt-5 px-4 flex justify-center">
      
      <nav class="
        w-full max-w-6xl
        bg-white/70 backdrop-blur-xl
        border border-white/40 shadow-sm
        rounded-full
        px-6 py-3
        flex items-center justify-between
        transition-all duration-300
      ">
        
        <a href="#" class="flex items-center gap-3 group">
          
          <div class="relative w-10 h-10 shrink-0">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full filter drop-shadow-sm transition-transform group-hover:scale-105">
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#34d399" /> <stop offset="1" stop-color="#059669" /> </linearGradient>
              </defs>
              <rect x="0" y="0" width="40" height="40" rx="12" fill="url(#logoGradient)" />
              
              <path d="M20 10C16 10 12 14 12 19C12 25 18 29 20 31C22 29 28 25 28 19C28 14 24 10 20 10ZM20 25C18.5 25 17 23.5 17 21C17 19 18.5 17 20 17C21.5 17 23 19 23 21C23 23.5 21.5 25 20 25Z" fill="white"/>
            </svg>
          </div>
          
          <div class="flex flex-col justify-center">
            <span class="text-lg font-black text-slate-800 tracking-tight leading-none uppercase">
              FJ <span class="text-emerald-600">Ambiental</span>
            </span>
            <span class="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5 group-hover:text-emerald-600 transition-colors">
              Engenharia
            </span>
          </div>
        </a>

        <ul class="hidden md:flex items-center gap-8">
          <li><a href="#home" class="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Início</a></li>
          <li><a href="#services" class="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Serviços</a></li>
          <li><a href="#projetos" class="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Projetos</a></li>
          <li><a href="#about" class="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Sobre</a></li>
        </ul>

        <div class="flex items-center gap-4">
          <a 
            href="https://wa.me/${whatsappNumber}" 
            target="_blank"
            class="hidden sm:inline-flex items-center justify-center bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-emerald-600 hover:scale-105 transition-all shadow-lg hover:shadow-emerald-500/20 uppercase tracking-wide"
          >
            Contato
          </a>

          <button class="md:hidden p-2 text-slate-800 hover:text-emerald-600 transition-colors focus:outline-none">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

      </nav>
    </header>
  `;
}