'use client';

'use client';

import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

interface VideoCardProps {
  videoId: string;
  title: string;
}

export function VideoCard({ videoId, title = 'VCNQ - Videoclipe Oficial' }: VideoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bento-card glass-effect">
      <div className="flex items-center justify-center gap-2 mb-4 w-full">
        <div className="w-8 h-8 rounded-full glass-effect flex items-center justify-center animate-pulse-slow">
          <FaPlay className="text-white/80 ml-0.5" size={14} />
        </div>
        <h3 className="text-lg font-bold text-white/90">VIDEOCLIPE</h3>
      </div>
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden group shadow-lg">
        {!isPlaying ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={handlePlayClick}
            role="button"
            aria-label="Reproduzir vídeo"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handlePlayClick();
                e.preventDefault();
              }
            }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
              <div className="w-16 h-16 rounded-full glass-effect flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                <FaPlay className="text-white ml-1" size={24} />
              </div>
            </div>
            <img
              src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            onLoad={() => setIsLoaded(true)}
          />
        )}
        {isPlaying && !isLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
      </div>
      <p className="text-sm text-white/80 mt-4 text-center font-medium">{title}</p>
    </div>
  );
}
