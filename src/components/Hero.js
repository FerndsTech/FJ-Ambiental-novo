export function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5571999999999';
  
  return `
    <section id="home" class="min-h-screen bg-slate-900 flex items-center justify-center text-center px-6">
      <div class="hero-content max-w-4xl">
        <h1 class="text-5xl md:text-7xl font-bold text-slate-50 mb-6 tracking-tight">
          Regularize seu Poço Artesiano e Evite Multas
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
          Consultoria especializada em Outorga de Água, Licenciamento e Hidrometria na Bahia
        </p>
        <a 
          href="https://wa.me/${whatsappNumber}" 
          target="_blank"
          class="inline-block bg-accent text-slate-900 px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-accent/50"
        >
          Solicitar Orçamento via WhatsApp
        </a>
      </div>
    </section>
  `;
}

