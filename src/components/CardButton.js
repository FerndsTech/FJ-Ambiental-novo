export function CardButton({ text, href = "#" }) {
  
  const theme = {
    wrapper: "bg-zinc-300",         
    circle: "bg-slate-950",         
    icon: "text-white",             
    text: "text-black",             
    font: "font-['Inter']"          
  };

  const ease = "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]";
  
  return `
    <a href="${href}" 
       target="_blank"
       id="project-link-btn" 
       /* Reduzimos a altura para h-12 (Mobile) e h-14 (Desktop) */
       class="group relative inline-flex items-center justify-between w-full md:w-fit h-12 md:h-14 pl-6 md:pl-8 pr-1.5 md:pr-1.5 rounded-full ${theme.wrapper} overflow-hidden cursor-pointer no-underline active:scale-95 transition-transform shadow-md hover:shadow-lg">
      
      <span class="relative z-10 ${theme.font} font-bold text-xs md:text-sm uppercase tracking-wider ${theme.text} mr-4 md:mr-12 whitespace-nowrap">
        ${text}
      </span>

      <span class="relative z-10 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full ${theme.circle} ${ease} shadow-inner group-hover:scale-105">
        
        <svg class="w-4 h-4 md:w-5 md:h-5 ${theme.icon} transform transition-transform duration-500 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" 
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