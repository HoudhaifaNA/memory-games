import './globals.css';
import type { Metadata } from 'next';
import { Play } from 'next/font/google';

import SetupContextProvider from '@/context/SetupContextProvider';

const play = Play({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Memory games',
  description: 'Great games for memory trainning',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className={`${play.className} overflow-x-hidden`}>
        <SetupContextProvider>{children}</SetupContextProvider>
      </body>
    </html>
  );
}
