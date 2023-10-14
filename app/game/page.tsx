'use client';

import Header from './components/Header';
import CardsList from '@/app/game/components/CardsList';
import GameScore from '@/app/game/components/GameScore';
import ScorePopup from '@/app/game/components/ScorePopup';
import GameContextProvider from '@/context/GameContextProvider';
import ScoreContextProvider from '@/context/ScoreContextProvider';
import CardContextProvider from '@/context/CardContextProvider';

export default function Home() {
  return (
    <GameContextProvider>
      <CardContextProvider>
        <ScoreContextProvider>
          <main className='relative  min-h-screen w-screen  bg-indigo-100 p-8'>
            <Header />
            <CardsList />
            <GameScore />
            <ScorePopup />
          </main>
        </ScoreContextProvider>
      </CardContextProvider>
    </GameContextProvider>
  );
}
