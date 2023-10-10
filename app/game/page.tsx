'use client';
import Link from 'next/link';

import Button from '@/components/Button';
import CardsList from '@/components/CardsList';
import GameScore from '@/components/GameScore';
import ScorePopup from '@/components/ScorePopup';

export default function Home() {
  return (
    <main className='relative  min-h-screen w-screen  bg-indigo-100 p-8'>
      <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
        <Link href='/'>
          <h1 className='text-center text-xl font-bold uppercase text-indigo-950 md:text-5xl'>Memory games</h1>
        </Link>
        <div className='flex items-center gap-4'>
          <Button variant='secondary' size='fit' onClick={() => 1}>
            Restart
          </Button>
          <Button variant='primary' size='fit' onClick={() => 1}>
            New game
          </Button>
        </div>
      </div>
      <CardsList />
      <GameScore>CHILDREN</GameScore>
      <ScorePopup>CHILDREN</ScorePopup>
    </main>
  );
}
