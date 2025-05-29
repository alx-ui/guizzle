import { FaMusic } from 'react-icons/fa';

import guizzleLogo from '@/assets/guizzle_logo.png';

export function Header() {
  return (
    <header className="mb-4 pt-4 sm:pt-6 flex flex-col items-center">
      <div className="relative animate-float">
        <div className="absolute -inset-1 rounded-full"></div>
        <div className="absolute inset-0 rounded-full backdrop-blur-xs"></div>
        <img
          src={guizzleLogo.src}
          alt="Guizzle"
          className="w-36 md:w-36 drop-shadow-lg relative z-10 transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="mt-6 sm:mt-8 flex flex-col items-center">
        <div className="glass-effect flex items-center gap-2 px-5 py-2 rounded-full mb-3 animate-pulse-slow">
          <FaMusic className="text-[#6f8be1]" />
          <span className="text-sm font-semibold text-[#101c3d]/80 dark:text-white/80">Novo Single • 2025</span>
        </div>
      </div>
    </header>
  );
}
