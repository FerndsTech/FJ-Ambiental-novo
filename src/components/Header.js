export function Header() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';
  const bgClass = 'bg-slate-50'; 
  const fillHex = '#f8fafc';

  return `
    <header id="main-header" class="fixed top-0 left-0 w-full z-100 flex flex-col items-center pointer-events-none">
      
      <div id="header-spacer" class="hidden md:block w-full h-3 ${bgClass} transition-all duration-300"></div>

      <div class="relative flex items-center justify-between w-full md:w-auto pointer-events-auto">
        
        <div class="hidden md:block absolute top-0 right-full w-6 h-20">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"><path d="M24 24C24 10.7452 13.2548 0 0 0H24V24Z" fill="${fillHex}"/></svg>
        </div>

        <div class="w-full md:w-auto bg-slate-50 h-16 md:h-20 px-6 md:px-10 rounded-b-3xl md:rounded-b-3xl flex items-center justify-between md:gap-10 shadow-sm md:shadow-none border-b border-slate-100 md:border-none">
          
          <a href="#home" class="flex items-center gap-3 group relative z-101 outline-none">
            <div class="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span class="font-bold text-lg text-slate-900 tracking-tight">FJ Ambiental</span>
          </a>

          <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" class="hover:text-emerald-600 transition-colors">Home</a>
            <a href="#services" class="hover:text-emerald-600 transition-colors">Serviços</a>
            <a href="#portifolio" class="hover:text-emerald-600 transition-colors">Portfólio</a>
            <a href="#about" class="hover:text-emerald-600 transition-colors">Sobre</a>
          </nav>

          <a href="https://wa.me/${whatsappNumber}" target="_blank" class="hidden md:block bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-emerald-600 transition shadow-lg">
            Contato
          </a>

          <button id="menu-toggle" aria-label="Abrir Menu" class="md:hidden relative z-101 w-12 h-12 flex flex-col items-center justify-center gap-1.5 p-1 group outline-none">
            <span class="hamburger-line w-7 h-[2.5px] bg-slate-900 rounded-full transition-colors duration-300 origin-center"></span>
            <span class="hamburger-line w-7 h-[2.5px] bg-slate-900 rounded-full transition-colors duration-300 origin-center"></span>
          </button>

        </div>

        <div class="hidden md:block absolute top-0 left-full w-6 h-20">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"><path d="M0 24C0 10.7452 10.7452 0 24 0H0V24Z" fill="${fillHex}"/></svg>
        </div>

      </div>

      <div id="mobile-menu" class="fixed inset-0 bg-slate-50 z-90 flex flex-col justify-center items-center opacity-0 pointer-events-none">
        <nav class="flex flex-col items-center gap-6 text-3xl font-black text-slate-900 tracking-tight text-center">
          <a href="#home" class="menu-link overflow-hidden block w-full py-2 outline-none select-none"><span class="block translate-y-full hover:text-emerald-600 transition-colors">Home</span></a>
          <a href="#services" class="menu-link overflow-hidden block w-full py-2 outline-none select-none"><span class="block translate-y-full hover:text-emerald-600 transition-colors">Serviços</span></a>
          <a href="#portifolio" class="menu-link overflow-hidden block w-full py-2 outline-none select-none"><span class="block translate-y-full hover:text-emerald-600 transition-colors">Portfólio</span></a>
          <a href="#about" class="menu-link overflow-hidden block w-full py-2 outline-none select-none"><span class="block translate-y-full hover:text-emerald-600 transition-colors">Sobre</span></a>
        </nav>
        
        <div class="mt-12 overflow-hidden menu-cta-wrapper opacity-0 translate-y-10 w-full px-10 flex justify-center">
          <a href="https://wa.me/${whatsappNumber}" class="flex items-center justify-center gap-3 bg-emerald-600 text-white w-full max-w-xs py-4 rounded-2xl font-bold shadow-xl shadow-emerald-600/20 text-lg hover:scale-[1.02] active:scale-95 transition-all">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c1.005.572 1.903.87 3.07.87 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.766-5.766zm-9.061 5.771c0-4.97 4.041-9.01 9.01-9.01 4.97 0 9.01 4.04 9.01 9.01s-4.04 9.01-9.01 9.01c-1.595 0-3.092-.417-4.411-1.141l-4.57 1.203 1.222-4.444c-0.811-1.375-1.251-2.955-1.251-4.628z"/></svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>

    </header>
  `;
}