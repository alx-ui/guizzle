import React from 'react';

import guizzleLogo from '../../assets/guizzle_logo.png';

export function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-guizzle flex flex-col items-center justify-center z-50">
      <div className="relative mb-4">
        <img src={guizzleLogo.src} alt="Guizzle Logo" className="w-36 opacity-95 drop-shadow-lg" />
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="relative">
          <div className="w-8 h-8 rounded-full border-2 border-transparent border-t-guizzle-light animate-spin"></div>
          <div className="absolute inset-0 w-8 h-8 rounded-full border-2 border-transparent border-l-white/40 animate-spin-slow"></div>
        </div>
        <p className="text-white text-sm mt-4 animate-pulse opacity-80 font-light tracking-wider">CARREGANDO</p>
      </div>
    </div>
  );
}
