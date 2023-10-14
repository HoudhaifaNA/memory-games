import { Dispatch, SetStateAction, createContext, useContext } from 'react';

import { TCard, TFlippedCards } from '@/types';

interface CardContextType {
  pairedCards: TCard[];
  setPairedCards: Dispatch<SetStateAction<TCard[]>>;
  matchedCards: string[];
  setMatchedCards: Dispatch<SetStateAction<string[]>>;
  flippedCards: TFlippedCards;
  setFlippedCards: Dispatch<SetStateAction<TFlippedCards>>;
}

export const CardsContext = createContext<CardContextType | null>(null);

const useCardsContext = () => {
  const cardsContext = useContext(CardsContext);

  if (!cardsContext) {
    throw new Error('useCardsContext has to be used within <CardsContext.Provider>');
  }

  return cardsContext;
};

export default useCardsContext;
