export function CardButton({ text, href = "#" }) {
  
  // Configuração Fixa (Branco e Preto)
  const theme = {
    wrapper: "bg-white shadow-xl shadow-black/5 border border-slate-100", // Corpo Branco
    circle: "bg-slate-900", // Círculo Preto
    icon: "text-white",     // Ícone Branco (dentro do preto)
    textInit: "text-slate-900", // Texto Preto
    textHover: "group-hover:text-white" // Texto vira Branco no hover
  };

  const ease = "transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]";
  
  return `
    <a href="${href}" 
       target="_blank"
       id="project-link-btn" 
       class="group relative inline-flex items-center flex-row-reverse h-[3.5rem] pl-8 pr-2 rounded-full ${theme.wrapper} overflow-hidden cursor-pointer no-underline w-fit select-none">
      
      <span class="absolute top-0 right-0 h-full w-[3.5rem] rounded-full ${theme.circle} z-0 ${ease} group-hover:w-full"></span>
      
      <span class="relative z-10 flex items-center justify-center w-[3.5rem] h-full">
        <svg class="w-5 h-5 ${theme.icon} ${ease} group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="square" stroke-linejoin="miter" d="M17 7l-10 10M8 7h9v9" />
        </svg>
      </span>
      
      <span class="relative z-10 font-bold text-sm uppercase tracking-widest mr-4 whitespace-nowrap ${theme.textInit} ${theme.textHover} ${ease}">
        ${text}
      </span>

    </a>
  `;
}