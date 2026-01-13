export function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';
  const bgImage = 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1920&auto=format&fit=crop'; 

  return `
    <footer class="px-2 md:px-4 pt-12 w-full flex flex-col justify-end">
      
      <div class="relative w-full rounded-t-[40px] rounded-b-none overflow-hidden bg-slate-950 text-white min-h-[600px] flex flex-col justify-between isolate shadow-2xl">
        
        <div class="absolute inset-0 -z-20">
            <img src="${bgImage}" alt="Footer Background" class="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity">
        </div>
        <div class="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900/90 to-slate-950 -z-10"></div>

        <div class="container mx-auto px-8 pt-20">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-white/5 pt-8">
            
            <div class="md:col-span-4 flex flex-col gap-6">
              <div class="flex items-center gap-2">
                 <div class="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-slate-900 text-xs font-bold">FJ</div>
                 <span class="font-bold text-lg tracking-tight">FJ AMBIENTAL</span>
              </div>
              <nav class="flex flex-col gap-3">
                <a href="#home" class="text-slate-400 hover:text-white text-sm transition-colors w-fit">Início</a>
                <a href="#services" class="text-slate-400 hover:text-white text-sm transition-colors w-fit">Serviços</a>
                <a href="#projetos" class="text-slate-400 hover:text-white text-sm transition-colors w-fit">Projetos</a>
              </nav>
            </div>

            <div class="md:col-span-4 flex flex-col gap-4">
              <h3 class="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500">Contato Direto</h3>
              <div class="flex flex-col gap-2 text-slate-300 text-sm">
                <a href="mailto:contato@fjambiental.com.br" class="hover:text-white transition-colors">contato@fjambiental.com.br</a>
                <a href="https://wa.me/${whatsappNumber}" target="_blank" class="hover:text-white transition-colors">+55 (71) 99999-9999</a>
                <p class="opacity-50 mt-2 text-xs max-w-xs">Rua Exemplo, 123 - Centro Empresarial, Salvador - BA</p>
              </div>
            </div>

            <div class="md:col-span-4 flex flex-col items-start md:items-end justify-between">
               <a href="#contact" class="group relative px-6 py-3 rounded-full bg-white text-slate-900 text-sm font-bold uppercase tracking-wide hover:bg-emerald-400 transition-all overflow-hidden">
                 <span class="relative z-10">Solicitar Proposta</span>
               </a>
               
               <div class="flex gap-4 mt-8 md:mt-0">
                  <a href="#" class="text-slate-500 hover:text-white transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 4.081-5.576 4.649-8.384 4.425 2.508 1.608 5.486 2.547 8.682 2.547 10.422 0 16.126-8.635 16.126-16.127 0-.246-.006-.492-.018-.735.832-.6 1.553-1.35 2.129-2.245z"/></svg></a>
                  <a href="#" class="text-slate-500 hover:text-white transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
               </div>
            </div>

          </div>
        </div>

        <div class="relative w-full flex justify-center items-end mt-12 overflow-hidden select-none pb-0">
          <h1 class="
            text-[10vw] md:text-[11vw] 
            leading-[0.75] 
            font-bold 
            tracking-tighter 
            uppercase
            text-transparent 
            bg-clip-text 
            bg-linear-to-b from-white via-slate-400 to-slate-900
            transform scale-x-105
            text-center
            opacity-90
          ">
            FJ AMBIENTAL
          </h1>
        </div>
        
        <div class="absolute bottom-2 w-full text-center">
            <span class="text-[9px] text-slate-600 uppercase tracking-widest font-semibold">Engenharia de Precisão © 2025</span>
        </div>

      </div>
    </footer>
  `;
}