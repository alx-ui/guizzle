import { FaDeezer } from 'react-icons/fa';
import { SiApplemusic, SiSpotify, SiYoutube, SiX, SiInstagram, SiTiktok, SiBluesky } from 'react-icons/si';

import Image from 'next/image';
import Link from 'next/link';

import capa from '@/assets/capa.jpg';
import guizzleLogo from '@/assets/guizzle_logo.png';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-guizzle ">
      <div className="flex flex-col items-center justify-center p-2">
        <Image src={guizzleLogo} width={200} height={200} alt="Guizzle" className="w-64" loading="lazy" />
        <Link
          href="mailto:contato@guizzle.com.br"
          className="mt-2 cursor-pointer text-center text-lg font-medium text-white"
        >
          contato@guizzle.com.br
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center p-2">
        <Image src={capa} alt="Guizzle" className="w-80 rounded-lg" loading="lazy" />

        <p className="mt-4 text-center text-lg font-bold text-white">OUÇA MDX</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4 sm:grid-cols-8">
        <Link
          href="https://open.spotify.com/intl-pt/album/2UjqfBoIDUxCb0lboFmqqB?si=-J7KaD0mSzuPy14SegqdUA"
          target="_blank"
          rel="noreferrer"
        >
          <SiSpotify size={26} className="cursor-pointer text-white duration-300 hover:scale-110 hover:opacity-80" />
        </Link>
        <Link href="https://music.apple.com/br/album/mdx-single/1777151228" target="_blank" rel="noreferrer">
          <SiApplemusic size={26} className="cursor-pointer text-white duration-300 hover:scale-110 hover:opacity-80" />
        </Link>
        <Link href="https://deezer.page.link/3iREpUUC8JpxpB3N6" target="_blank" rel="noreferrer">
          <FaDeezer size={26} className="cursor-pointer text-white duration-300 hover:scale-110 hover:opacity-80" />
        </Link>
        <Link href="https://youtu.be/L2zbZj6PB5E?si=lhEcLObTv27BC1jR" target="_blank" rel="noreferrer">
          <SiYoutube size={26} className="cursor-pointer text-white duration-300 hover:scale-110 hover:opacity-80" />
        </Link>
        <Link href="https://x.com/guizzlemynizzle" target="_blank" rel="noreferrer">
          <SiX size={26} className="cursor-pointer text-white duration-300 hover:scale-110 hover:opacity-80" />
        </Link>
        <Link href="https://www.instagram.com/guizzlemynizzle/" target="_blank" rel="noreferrer">
          <SiInstagram size={26} className="cursor-pointer text-white duration-300 hover:scale-110 hover:opacity-80" />
        </Link>
        <Link href="https://bsky.app/profile/guizzlemynizzle.bsky.social" target="_blank" rel="noreferrer">
          <SiBluesky size={26} className="cursor-pointer text-white duration-300 hover:scale-110 hover:opacity-80" />
        </Link>
        <Link href="https://www.tiktok.com/@guizzlemynizzle" target="_blank" rel="noreferrer">
          <SiTiktok size={26} className="cursor-pointer text-white duration-300 hover:scale-110 hover:opacity-80" />
        </Link>
      </div>
    </main>
  );
}
