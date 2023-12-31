'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import clsx from 'clsx';

import Card from './Card';
import useSetupContext from '@/hooks/useSetupContext';
import useCardsContext from '@/hooks/useCardsContext';
import useScoreContext from '@/hooks/useScoreContext';

export default function CardsList() {
  const { setup } = useSetupContext();
  const { setScore, setCurrentTurn, score, currentTurn } = useScoreContext();
  const { flippedCards, setFlippedCards, matchedCards, setMatchedCards, pairedCards } = useCardsContext();

  const { grid, players } = setup;
  const { first, match } = flippedCards;

  useEffect(() => {
    if (first && match) {
      if (first.icon === match.icon) {
        setMatchedCards([...matchedCards, match.icon]);
        if (players !== 1) {
          score[currentTurn - 1].score++;
          setScore(score);
        }
      }

      if (first.icon !== match.icon) {
        if (players !== 1 && currentTurn !== players) {
          setCurrentTurn(currentTurn + 1);
        } else {
          setCurrentTurn(1);
        }
      }

      setTimeout(() => {
        setFlippedCards({});
      }, 1000);
    }
  }, [first, match]);

  return (
    <div
      className={clsx(
        `mx-auto mt-12 grid h-max w-max gap-1 md:gap-2`,
        grid === 30
          ? `grid-cols-sm-30 grid-rows-sm-30 md:grid-cols-md-30 md:grid-rows-md-30 `
          : `grid-cols-sm-36 grid-rows-sm-36 md:grid-cols-md-36 md:grid-rows-md-36`
      )}
    >
      {pairedCards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}
