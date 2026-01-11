export function Header() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
        <div class="logo text-2xl font-bold text-accent">FJ Ambiental</div>
        <ul class="hidden md:flex space-x-6 text-slate-50">
          <li><a href="#home" class="hover:text-accent transition-colors">Início</a></li>
          <li><a href="#services" class="hover:text-accent transition-colors">Serviços</a></li>
          <li><a href="#about" class="hover:text-accent transition-colors">Sobre</a></li>
          <li><a href="#contact" class="hover:text-accent transition-colors">Contato</a></li>
        </ul>
      </nav>
    </header>
  `;
}