import { FaDeezer } from 'react-icons/fa';
import { SiApplemusic, SiSpotify, SiYoutube, SiX, SiInstagram, SiTiktok } from 'react-icons/si';

import Image from 'next/image';
import Link from 'next/link';

import capa from 'public/capa.png';
import guizzleLogo from 'public/guizzle_logo.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-guizzle ">
      <div className="flex flex-col items-center justify-center p-2">
        <Image src={guizzleLogo} width={200} height={200} alt="Guizzle" className="w-80" loading="lazy" />
        <Link
          href="mailto:contato@guizzle.com.br"
          className="mt-2 cursor-pointer text-center text-lg font-medium text-white"
        >
          contato@guizzle.com.br
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center p-2">
        <Image src={capa} alt="Guizzle" className="w-80 rounded-lg" loading="lazy" />

        <p className="mt-4 text-center text-lg font-bold text-white">OUÇA QQMD</p>
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <Link
          href="https://open.spotify.com/intl-pt/track/6FWJVk3lvdacKEY05LEX3w?si=b4e3c318d6774879"
          target="_blank"
          rel="noreferrer"
        >
          <SiSpotify size={26} className="cursor-pointer text-white duration-300 hover:scale-110" />
        </Link>
        <Link href="https://music.apple.com/br/album/qqmd/1718745326?i=1718745327" target="_blank" rel="noreferrer">
          <SiApplemusic size={26} className="cursor-pointer text-white duration-300 hover:scale-110" />
        </Link>
        <Link href="https://deezer.page.link/ZP7D37rM79T4y8GG7" target="_blank" rel="noreferrer">
          <FaDeezer size={26} className="cursor-pointer text-white duration-300 hover:scale-110" />
        </Link>
        <Link href="https://youtu.be/pYsNzr_uwQ4?si=zJNUDsJ2-5YNcgEh" target="_blank" rel="noreferrer">
          <SiYoutube size={26} className="cursor-pointer text-white duration-300 hover:scale-110" />
        </Link>
        <Link href="https://x.com/guizzlemynizzle" target="_blank" rel="noreferrer">
          <SiX size={26} className="cursor-pointer text-white duration-300 hover:scale-110" />
        </Link>
        <Link href="https://www.instagram.com/guizzlemynizzle/" target="_blank" rel="noreferrer">
          <SiInstagram size={26} className="cursor-pointer text-white duration-300 hover:scale-110" />
        </Link>
        <a href="https://www.tiktok.com/@guizzlemynizzle" target="_blank" rel="noreferrer">
          <SiTiktok size={26} className="cursor-pointer text-white duration-300 hover:scale-110" />
        </a>
      </div>
    </main>
  );
}
