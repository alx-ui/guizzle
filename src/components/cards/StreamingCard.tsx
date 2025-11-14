import { FaHeadphones, FaDeezer, FaMusic } from 'react-icons/fa';
import { SiApplemusic, SiSpotify, SiYoutube } from 'react-icons/si';

import { PlatformLink } from '@/components/ui';

export function StreamingCard() {
  return (
    <div className="bento-card bento-card-large glass-effect">
      <div className="flex items-center justify-center gap-2 mb-6 w-full">
        <div className="w-8 h-8 rounded-full glass-effect flex items-center justify-center animate-pulse-slow">
          <FaMusic className="text-[#074b6d]/80" size={16} />
        </div>
        <h3 className="text-lg font-bold text-[#074b6d] flex items-center">
          <FaHeadphones className="mr-2" /> OUÇA AGORA
        </h3>
      </div>
      <div className="player-platforms-grid">
        <PlatformLink
          href="https://open.spotify.com/intl-pt/track/7hAOR1qaodLuQJdUlq27eC?si=bab1c1783f1f4c62"
          icon={
            <SiSpotify size={32} className="text-[#074b6d] group-hover:text-green-400 transition-colors duration-300" />
          }
          label="Spotify"
          ariaLabel="Ouvir no Spotify"
          hoverClass="hover:bg-green-900/20 hover:border-green-300/20"
        />
        <PlatformLink
          href="https://music.apple.com/br/song/paz/1847970059"
          icon={
            <SiApplemusic
              size={32}
              className="text-[#074b6d] group-hover:text-pink-400 transition-colors duration-300"
            />
          }
          label="Apple"
          ariaLabel="Ouvir no Apple Music"
          hoverClass="hover:bg-pink-900/20 hover:border-pink-300/20"
        />
        <PlatformLink
          href="https://link.deezer.com/s/31BoCyiOpOhrjoZH7d4RI"
          icon={
            <FaDeezer size={32} className="text-[#074b6d] group-hover:text-blue-400 transition-colors duration-300" />
          }
          label="Deezer"
          ariaLabel="Ouvir no Deezer"
          hoverClass="hover:bg-blue-900/20 hover:border-blue-300/20"
        />
        <PlatformLink
          href="https://www.youtube.com/@guizzlemynizzle/videos"
          icon={
            <SiYoutube size={32} className="text-[#074b6d] group-hover:text-red-400 transition-colors duration-300" />
          }
          label="YouTube"
          ariaLabel="Assistir no YouTube"
          hoverClass="hover:bg-red-900/20 hover:border-red-300/20"
        />
      </div>
    </div>
  );
}
