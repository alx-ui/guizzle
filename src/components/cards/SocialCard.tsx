import { FaMusic } from 'react-icons/fa';
import { SiX, SiInstagram, SiTiktok, SiBluesky } from 'react-icons/si';

import { SocialLink } from '@/components/ui';

export function SocialCard() {
  return (
    <div className="bento-card bento-card-large glass-effect">
      <div className="flex items-center justify-center gap-2 mb-6 w-full">
        <div className="w-8 h-8 rounded-full glass-effect flex items-center justify-center">
          <FaMusic className="text-white/80" size={16} />
        </div>
        <h3 className="text-lg font-bold text-white/90 flex items-center">SIGA NAS REDES</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        <SocialLink
          href="https://www.instagram.com/guizzlemynizzle/"
          icon={
            <SiInstagram size={28} className="text-white group-hover:text-pink-400 transition-colors duration-300" />
          }
          ariaLabel="Instagram"
          hoverClass="social-button hover:bg-pink-900/20 hover:border-pink-300/20"
        />
        <SocialLink
          href="https://x.com/guizzlemynizzle"
          icon={<SiX size={24} className="text-white group-hover:text-black transition-colors duration-300" />}
          ariaLabel="X (Twitter)"
          hoverClass="social-button hover:bg-black/20 hover:border-black/20"
        />
        <SocialLink
          href="https://www.tiktok.com/@guizzlemynizzle"
          icon={
            <SiTiktok
              size={26}
              className="text-white group-hover:text-black dark:group-hover:text-gray-300 transition-colors duration-300"
            />
          }
          ariaLabel="TikTok"
          hoverClass="social-button hover:bg-gray-900/20 hover:border-gray-300/20"
        />
        <SocialLink
          href="https://bsky.app/profile/guizzlemynizzle.bsky.social"
          icon={<SiBluesky size={26} className="text-white group-hover:text-sky-400 transition-colors duration-300" />}
          ariaLabel="Bluesky"
          hoverClass="social-button hover:bg-sky-900/20 hover:border-sky-300/20"
        />
      </div>
    </div>
  );
}
