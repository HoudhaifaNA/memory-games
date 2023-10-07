import './globals.css';
import type { Metadata } from 'next';
import { Play } from 'next/font/google';

const play = Play({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Memory games',
  description: 'A great game for memory trainning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={play.className}>{children}</body>
    </html>
  );
}
