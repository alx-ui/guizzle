import { useState } from 'react';
import {
  SiInstagram,
  SiSpotify,
  SiApplemusic,
  SiDeezer,
  SiYoutube,
  SiTwitter,
} from 'react-icons/si';
import Spotify from 'react-spotify-embed';

import { guizzleLogo } from 'assets';

export function Homepage() {
  const [showSpotify, setShowSpotify] = useState(false);
  const [showPurpleWorld, setShowPurpleWorld] = useState(false);
  const [showOneMSong, setShowOneMSong] = useState(false);

  return (
    <div
      className="flex items-center justify-center w-full flex-col bg-black/80 min-h-screen"
      style={{
        backdropFilter: 'blur(64px) !important',
      }}
    >
      <img src={guizzleLogo} alt="Guizzle" className="w-[600px]" />
      <span className="font-semibold text-md text-center mt-[-3rem] text-white cursor-default">
        contato@guizzle.com.br
      </span>

      <div className="flex w-full items-center justify-center gap-6 flex-col text-white h-auto">
        <div
          className={` ${
            showPurpleWorld
              ? 'bg-black/40 w-80 flex items-center border-none rounded-md flex-col cursor-pointer h-auto mt-4'
              : 'bg-black/40 w-80 flex items-center border-none rounded-md h-14 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-4'
          }`}
          onClick={() => setShowPurpleWorld(!showPurpleWorld)}
        >
          <div className="flex items-center justify-center w-full collapse-title">
            <SiSpotify size={32} className="text-white ml-4" />
            <div className="w-full flex items-center justify-center font-bold">
              <p>OUÇA "purpleworld" AGORA</p>
            </div>
          </div>

          {showPurpleWorld && (
            <div className="w-full flex items-center justify-center mt-4">
              <Spotify
                link="https://open.spotify.com/album/122j7huoHEJGGfjUd5kjpv?si=vJDoETCeQh-HFDyMkjkSWw"
                className="w-full"
              />
            </div>
          )}
        </div>

        <div
          className={` ${
            showOneMSong
              ? 'bg-black/40 w-80 flex items-center border-none rounded-md flex-col cursor-pointer h-auto'
              : 'bg-black/40 w-80 flex items-center border-none rounded-md h-14 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
          }`}
          onClick={() => setShowOneMSong(!showOneMSong)}
        >
          <div className="flex items-center justify-center w-full">
            <SiSpotify size={32} className="text-white ml-4" />
            <div className="w-full flex items-center justify-center font-bold">
              <p>OUÇA "1M songs" ✍🏾💜</p>
            </div>
          </div>

          {showOneMSong && (
            <div className="w-full flex items-center justify-center mt-4">
              <Spotify
                link="https://open.spotify.com/track/2onI6EwqtxsnI6aLiplDlv?si=a7f19d4908484fb6"
                className="w-full"
              />
            </div>
          )}
        </div>

        <div
          className={` ${
            showSpotify
              ? 'bg-black/40 w-80 flex items-center border-none rounded-md flex-col cursor-pointer h-auto'
              : 'bg-black/40 w-80 flex items-center border-none rounded-md h-14 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
          }`}
          onClick={() => setShowSpotify(!showSpotify)}
        >
          <div className="flex items-center justify-center w-full">
            <SiSpotify size={32} className="text-white ml-4" />
            <div className="w-full flex items-center justify-center font-bold">
              <p>spotify</p>
            </div>
          </div>

          {showSpotify && (
            <div className="w-full flex items-center justify-center mt-4">
              <Spotify
                link="https://open.spotify.com/artist/1dSNfIyUvHqpT41j4SXDIJ?si=QFzsfLRaRZCASkOKVL7Usg"
                className="w-full"
              />
            </div>
          )}
        </div>
        <a
          className="bg-black/40 w-80 flex items-center border-none rounded-md h-14 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://music.apple.com/br/artist/guizzle/1597203795"
          target="_blank"
          rel="noreferrer"
        >
          <SiApplemusic size={32} className="text-white ml-4" />
          <div className="w-full flex items-center justify-center font-bold">
            <p>apple music</p>
          </div>
        </a>

        <a
          className="bg-black/40 w-80 flex items-center border-none rounded-md h-14 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://www.deezer.com/br/artist/152437042?deferredFl=1"
          target="_blank"
          rel="noreferrer"
        >
          <SiDeezer size={32} className="text-white ml-4" />
          <div className="w-full flex items-center justify-center font-bold">
            <p>deezer</p>
          </div>
        </a>
        <a
          className="bg-black/40 w-80 flex items-center border-none rounded-md h-14 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://www.youtube.com/channel/UCNpXeoUqcbuKpkdO7Z8DEUw"
          target="_blank"
          rel="noreferrer"
        >
          <SiYoutube size={32} className="text-white ml-4" />
          <div className="w-full flex items-center justify-center font-bold">
            <p>youtube</p>
          </div>
        </a>
        <a
          className="bg-black/40 w-80 flex items-center border-none rounded-md h-14 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://www.instagram.com/guizzlemynizzle/"
          target="_blank"
          rel="noreferrer"
        >
          <SiInstagram size={32} className="text-white ml-4" />

          <div className="w-full flex items-center justify-center font-bold">
            <p>instagram</p>
          </div>
        </a>
        <a
          className="bg-black/40 w-80 flex items-center border-none rounded-md h-14 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://twitter.com/guizzlemynizzle?s=21&t=M0nkWGBHGXDck8JellDjLg"
          target="_blank"
          rel="noreferrer"
        >
          <SiTwitter size={32} className="text-white ml-4" />
          <div className="w-full flex items-center justify-center font-bold">
            <p>twitter</p>
          </div>
        </a>
      </div>
    </div>
  );
}
