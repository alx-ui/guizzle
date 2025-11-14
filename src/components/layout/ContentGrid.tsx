import { AlbumCard } from '@/components/cards/AlbumCard';
import { ContactCard } from '@/components/cards/ContactCard';
import { SocialCard } from '@/components/cards/SocialCard';
import { StreamingCard } from '@/components/cards/StreamingCard';

export function ContentGrid() {
  return (
    <section className="w-full mb-8">
      <h2 className="sr-only">Conteúdo do Guizzle</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 px-4 max-w-7xl mx-auto fade-in">
        <div className="col-span-1 md:col-span-1 lg:col-span-3">
          <AlbumCard
            albumTitle="PAZ"
            albumType="Single"
            year="2025"
            spotifyUrl="https://open.spotify.com/intl-pt/track/7hAOR1qaodLuQJdUlq27eC?si=bab1c1783f1f4c62"
          />
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-3">
          <div className="flex flex-col gap-5">
            <div>
              <StreamingCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <SocialCard />
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-6"></div>
      </div>
    </section>
  );
}
