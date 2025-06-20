import { FaMusic } from 'react-icons/fa';

import guizzleLogo from '@/assets/guizzle_logo.png';

export function Header() {
  return (
    <header className="mb-4 pt-4 sm:pt-6 flex flex-col items-center">
      <div className="relative animate-float">
        <div className="absolute -inset-1 rounded-full bg-gradient-radial from-guizzle-light/30 to-transparent opacity-50"></div>
        <div className="absolute inset-0 rounded-full backdrop-blur-xs"></div>
        <img
          src={guizzleLogo.src}
          alt="Guizzle"
          className="w-36 md:w-36 drop-shadow-lg relative z-10 transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="mt-6 sm:mt-8 flex flex-col items-center">
        <div className="glass-effect flex items-center gap-2 px-6 py-2.5 rounded-full mb-3 animate-pulse-slow hover:scale-105 transition-transform duration-500 shadow-lg">
          <FaMusic className="text-guizzle-light" />
          <span className="text-sm font-semibold text-white/90">Novo Single • 2025</span>
        </div>
      </div>
    </header>
  );
}
