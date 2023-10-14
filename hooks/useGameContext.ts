import { Dispatch, SetStateAction, createContext, useContext } from 'react';

import { TGame } from '@/types';

interface GameContextType {
  game: TGame;
  setGame: Dispatch<SetStateAction<TGame>>;
}

export const GameContext = createContext<GameContextType | null>(null);

const useGameContext = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error('useGame has to be used within <GameContext.Provider>');
  }

  return gameContext;
};

export default useGameContext;
