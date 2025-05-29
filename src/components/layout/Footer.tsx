export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 mb-8 text-center text-sm px-4">
      <div className="glass-effect inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300">
        <p className="text-[#101c3d]/90 dark:text-white/90">© {currentYear} Guizzle • Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
