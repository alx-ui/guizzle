import { FaCompactDisc, FaSpotify } from 'react-icons/fa';

import Link from 'next/link';

import capa from '@/assets/capa.jpg';

interface AlbumCardProps {
  spotifyUrl?: string;
  albumTitle?: string;
  albumType?: string;
  year?: string;
}

export function AlbumCard({ spotifyUrl, albumTitle = 'VCNQ', albumType = 'Single', year = '2025' }: AlbumCardProps) {
  return (
    <div className="bento-card bento-card-large glass-effect group">
      <div className="relative w-full h-80 sm:h-80 md:h-[480px] mb-4 overflow-hidden rounded-2xl shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <div className="relative w-full h-full">
          <img
            src={capa.src}
            alt={`${albumTitle} - Guizzle`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="absolute bottom-3 right-3 flex gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          {spotifyUrl && (
            <Link
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#1DB954]/90 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:bg-[#1DB954] transition-all duration-300"
              title="Ouvir no Spotify"
            >
              <FaSpotify className="text-white text-xl" />
            </Link>
          )}
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <FaCompactDisc className="text-white text-xl animate-spin-slow" />
          </div>
        </div>
      </div>
      <div className="flex items-center w-full">
        <div className="flex flex-col">
          {spotifyUrl ? (
            <Link href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="group/title">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider text-shadow group-hover/title:text-[#1DB954] transition-colors duration-300">
                {albumTitle}
              </h2>
            </Link>
          ) : (
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider text-shadow">{albumTitle}</h2>
          )}
          <p className="text-sm text-white/80 mt-1 flex items-center">
            <FaCompactDisc className="mr-2 text-white/70" /> {albumType} • {year}
          </p>
        </div>
      </div>
    </div>
  );
}
