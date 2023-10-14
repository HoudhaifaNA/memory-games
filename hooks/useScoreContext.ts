import { Dispatch, SetStateAction, createContext, useContext } from 'react';

import { TScore } from '@/types';

interface ScoreContextType {
  score: TScore;
  setScore: Dispatch<SetStateAction<TScore>>;
  currentTurn: number;
  setCurrentTurn: Dispatch<SetStateAction<number>>;
}

export const ScoreContext = createContext<ScoreContextType | null>(null);

const useScoreContext = () => {
  const scoreContext = useContext(ScoreContext);

  if (!scoreContext) {
    throw new Error('useScore has to be used within <ScoreContext.Provider>');
  }

  return scoreContext;
};

export default useScoreContext;
