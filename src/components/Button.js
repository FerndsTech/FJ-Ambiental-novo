export function Button({ text, href = "#", variant = "glass" }) {
  
  const themes = {
    // VARIANTES ... (Mantenha as outras se quiser, focaremos na glass)
    emerald: {
      wrapper: "bg-emerald-500 shadow-emerald-900/20",
      circle: "bg-emerald-600",
      iconInit: "text-white",
      textInit: "text-white",
      textHover: "group-hover:text-white"
    },
    dark: {
      wrapper: "bg-slate-900 shadow-slate-900/20",
      circle: "bg-slate-800",
      iconInit: "text-white",
      textInit: "text-white",
      textHover: "group-hover:text-white"
    },
    glass: {
      // Ajuste: border-white/5 para ficar mais sutil
      wrapper: "bg-slate-900/80 backdrop-blur-md border border-white/5 shadow-2xl",
      circle: "bg-emerald-500", // Verde mais "aceso"
      iconInit: "text-slate-900", // Ícone preto para contraste
      textInit: "text-white", 
      textHover: "group-hover:text-slate-900"
    }
  };

  const theme = themes[variant] || themes.glass;
  const ease = "transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]";
  const sizeClass = "h-[3.5rem]"; 

  return `
    <a href="${href}" 
       target="_blank"
       class="group relative inline-flex items-center ${sizeClass} pr-6 rounded-full ${theme.wrapper} shadow-lg overflow-hidden cursor-pointer no-underline w-fit select-none">
      
      <span class="absolute top-0 left-0 h-full w-[3.7rem] rounded-full ${theme.circle} z-0 ${ease} group-hover:w-full"></span>
      
      <span class="relative z-10 flex items-center justify-center w-[3.7rem] h-full">
        <svg class="w-5 h-5 ${theme.iconInit} ${ease} group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
      
      <span class="relative z-10 font-bold text-sm uppercase tracking-widest ml-3 whitespace-nowrap ${theme.textInit} ${theme.textHover} ${ease}">
        ${text}
      </span>

    </a>
  `;
}