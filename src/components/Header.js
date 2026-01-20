export function Header() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';
  
  // Cores
  const bgClass = 'bg-slate-50'; 
  const fillHex = '#f8fafc'; // (Slate-50 Hex)

  return `
    <header id="main-header" class="fixed top-0 left-0 w-full z-50 flex flex-col items-center pointer-events-none">
      
      <div id="header-spacer" style="height: 0.75rem; will-change: height;" class="w-full ${bgClass}"></div>

      <div class="relative flex items-start pointer-events-auto">
        
        <div class="absolute top-0 right-full w-6 h-6">
           <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 24C24 10.7452 13.2548 0 0 0H24V24Z" fill="${fillHex}"/>
           </svg>
        </div>

        <div class="${bgClass} h-[80px] px-10 rounded-b-[24px] flex items-center gap-10 shadow-sm">
          
          <a href="#home" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
               </svg>
            </div>
            <span class="font-bold text-lg text-slate-800 tracking-tight">FJ Ambiental</span>
          </a>

          <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" class="hover:text-emerald-600 transition">Home</a>
            <a href="#services" class="hover:text-emerald-600 transition">Serviços</a>
            <a href="#about" class="hover:text-emerald-600 transition">Sobre</a>
          </nav>

          <a href="https://wa.me/${whatsappNumber}" target="_blank" class="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-emerald-600 transition shadow-lg">
            Contato
          </a>

        </div>

        <div class="absolute top-0 left-full w-6 h-6">
           <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24C0 10.7452 10.7452 0 24 0H0V24Z" fill="${fillHex}"/>
           </svg>
        </div>

      </div>
    </header>
  `;
}