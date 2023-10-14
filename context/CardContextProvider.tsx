'use client';

import { ReactNode, useState } from 'react';

import { CardsContext } from '@/hooks/useCardsContext';
import { TCard, TFlippedCards } from '@/types';
import useSetupContext from '@/hooks/useSetupContext';
import { generatePairedCards } from '@/utils';

export default function CardContextProvider({ children }: { children: ReactNode }) {
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<TFlippedCards>({});
  const { setup } = useSetupContext();
  const { grid } = setup;
  const totalIconPairs = grid / 2;
  const [pairedCards, setPairedCards] = useState<TCard[]>(generatePairedCards(totalIconPairs));

  return (
    <CardsContext.Provider
      value={{ matchedCards, setMatchedCards, flippedCards, setFlippedCards, setPairedCards, pairedCards }}
    >
      {children}
    </CardsContext.Provider>
  );
}
