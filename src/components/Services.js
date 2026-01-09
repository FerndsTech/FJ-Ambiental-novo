export function Services() {
  return `
    <section id="services" class="py-20 bg-slate-800 px-6">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center text-slate-50 mb-12 tracking-tight">
          Nossos Serviços
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="service-card bg-slate-700 p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer">
            <div class="text-4xl mb-4">💧</div>
            <h3 class="text-2xl font-bold text-accent mb-4">Outorga de Água</h3>
            <p class="text-slate-300 leading-relaxed">
              Regularização completa de captação e uso de recursos hídricos.
            </p>
          </div>
          <div class="service-card bg-slate-700 p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer">
            <div class="text-4xl mb-4">📋</div>
            <h3 class="text-2xl font-bold text-accent mb-4">Licenciamento</h3>
            <p class="text-slate-300 leading-relaxed">
              Licenciamento ambiental para atividades relacionadas ao uso da água.
            </p>
          </div>
          <div class="service-card bg-slate-700 p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-2xl font-bold text-accent mb-4">Hidrometria</h3>
            <p class="text-slate-300 leading-relaxed">
              Medição e monitoramento de vazão e qualidade da água.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

