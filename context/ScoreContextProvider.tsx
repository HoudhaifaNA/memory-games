'use client';

import { ReactNode, useState } from 'react';

import { ScoreContext } from '@/hooks/useScoreContext';
import { PlayerScore, TScore } from '@/types';
import useSetupContext from '@/hooks/useSetupContext';

export default function ScoreContextProvider({ children }: { children: ReactNode }) {
  const { setup } = useSetupContext();
  const { players } = setup;
  const defaultScore: PlayerScore[] = Array(players)
    .fill({ name: '', score: 0 })
    .map((_p, ind) => {
      return { name: `P ${ind + 1}`, score: 0 };
    });
  const [score, setScore] = useState<TScore>(defaultScore);
  const [currentTurn, setCurrentTurn] = useState<number>(1);

  return (
    <ScoreContext.Provider value={{ score, setScore, currentTurn, setCurrentTurn }}>{children}</ScoreContext.Provider>
  );
}
