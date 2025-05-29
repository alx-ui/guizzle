import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { LoadingProvider } from '@/components/layout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const thumbnail = {
  url: 'https://guizzle.com.br/og.jpg',
  width: 1200,
  height: 630,
  alt: 'VCNQ - Guizzle',
};

const defaultMetadata = {
  title: 'GUIZZLE | VCNQ',
  description: 'Ouça VCNQ nas plataformas digitais',
  images: [thumbnail],
};

export const metadata: Metadata = {
  ...defaultMetadata,
  openGraph: {
    ...defaultMetadata,
    type: 'website',
    url: 'https://guizzle.com.br',
    siteName: 'GUIZZLE',
  },
  twitter: {
    ...defaultMetadata,
    card: 'summary_large_image',
    site: '@guizzlemynizzle',
    creator: '@guizzlemynizzle',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta name="theme-color" content="#6f8be1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.className} min-h-screen text-[#101c3d] dark:text-white overflow-x-hidden font-medium selection:bg-[#6f8be1] selection:text-white`}
      >
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
