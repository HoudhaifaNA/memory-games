'use client';

import { ReactNode, useState } from 'react';

import { CardsContext } from '@/hooks/useCardsContext';
import { TCard, TFlippedCards } from '@/types';

export default function CardContextProvider({ children }: { children: ReactNode }) {
  const [pairedCards, setPairedCards] = useState<TCard[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<TFlippedCards>({});

  return (
    <CardsContext.Provider
      value={{ matchedCards, setMatchedCards, flippedCards, setFlippedCards, setPairedCards, pairedCards }}
    >
      {children}
    </CardsContext.Provider>
  );
}
