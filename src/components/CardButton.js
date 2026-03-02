export function CardButton({ text, href = "#" }) {
  
  // Cores exatas extraídas do seu Figma
  const theme = {
    wrapper: "bg-zinc-300",         // Cinza claro
    circle: "bg-slate-950",         // Preto profundo do círculo
    icon: "text-white",             // Seta branca
    text: "text-black",             // Texto preto
    font: "font-['Inter']"          // Tipografia
  };

  const ease = "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]";
  
  return `
    <a href="${href}" 
       target="_blank"
       id="project-link-btn" 
       class="group relative inline-flex items-center justify-between w-full md:w-fit h-14 md:h-[5.5rem] pl-6 md:pl-10 pr-1.5 md:pr-2 rounded-full ${theme.wrapper} overflow-hidden cursor-pointer no-underline active:scale-95 transition-transform shadow-md hover:shadow-lg">
      
      <span class="relative z-10 ${theme.font} font-bold text-xs md:text-xl uppercase tracking-wider ${theme.text} mr-4 md:mr-16 whitespace-nowrap">
        ${text}
      </span>

      <span class="relative z-10 flex items-center justify-center w-11 h-11 md:w-20 md:h-20 rounded-full ${theme.circle} ${ease} shadow-inner group-hover:scale-105">
        
        <svg class="w-4 h-4 md:w-7 md:h-7 ${theme.icon} transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" 
             fill="none" 
             viewBox="0 0 24 24" 
             stroke="currentColor" 
             stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </span>

    </a>
  `;
}