import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const thumbnail = {
  url: 'https://guizzle.com.br/og.jpg',
  width: 1200,
  height: 630,
  alt: 'MDX',
};

const defaultMetadata = {
  title: 'GUIZZLE | MDX',
  description: 'Ouça MDX nas plataformas digitais',
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
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
