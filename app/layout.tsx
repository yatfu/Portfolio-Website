import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import Header from '@/components/Header';
import LogoTileBackground from '@/components/LogoTileBackground';
import './globals.css';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-retro',
});

export const metadata: Metadata = {
  title: 'Keanu Lagundimao — Portfolio',
  description: 'Portfolio of Keanu Lagundimao',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pressStart2P.variable}>
      <body className="relative isolate overflow-x-hidden">
        <LogoTileBackground />
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
