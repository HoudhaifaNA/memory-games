'use client';

import { ReactNode, useState } from 'react';

import { GameContext } from '@/hooks/useGameContext';
import { TGame } from '@/types';

export default function GameContextProvider({ children }: { children: ReactNode }) {
  const [game, setGame] = useState<TGame>({ moves: 0, time: '00:00:00' });

  return <GameContext.Provider value={{ game, setGame }}>{children}</GameContext.Provider>;
}
