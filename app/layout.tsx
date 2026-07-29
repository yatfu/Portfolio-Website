import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-retro',
});

export const metadata: Metadata = {
  title: 'Your Name — Portfolio',
  description: 'Portfolio of Your Name',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pressStart2P.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
