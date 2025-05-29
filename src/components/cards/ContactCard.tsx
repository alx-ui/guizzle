import { HiOutlineMail } from 'react-icons/hi';

import Link from 'next/link';

export function ContactCard() {
  return (
    <div className="bento-card glass-effect">
      <div className="flex items-center justify-center gap-2 mb-4 w-full">
        <div className="w-8 h-8 rounded-full glass-effect flex items-center justify-center">
          <HiOutlineMail className="text-white/80" size={18} />
        </div>
        <h3 className="text-lg font-bold text-white/90">CONTATO</h3>
      </div>

      <Link
        href="mailto:contato@guizzle.com.br"
        className="glass-effect flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 p-4 rounded-xl transition-all group hover:bg-white/20"
      >
        <HiOutlineMail size={24} className="text-white/90 group-hover:text-white transition-colors" />
        <span className="text-center text-base font-medium text-white/90 group-hover:text-white transition-colors">
          contato@guizzle.com.br
        </span>
      </Link>
    </div>
  );
}
