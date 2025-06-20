export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 mb-8 text-center text-sm px-4">
      <div className="glass-effect inline-flex items-center gap-2 px-8 py-3.5 rounded-full shadow-lg hover:scale-105 hover:bg-white/15 transition-all duration-500">
        <p className="text-white/90">© {currentYear} Guizzle • Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
