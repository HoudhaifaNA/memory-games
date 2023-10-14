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
  const gridTemplate = grid === 36 ? '36' : '30';

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
      }, 700);
    }
  }, [first, match]);

  return (
    <>
      {grid && (
        <div
          className={clsx(
            `mx-auto mt-12  grid h-max w-max grid-cols-sm-${grid} grid-rows-sm-${grid} gap-1 md:grid-cols-md-${grid}  md:grid-rows-md-${grid}  md:gap-2`
          )}
        >
          {pairedCards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      )}
    </>
  );
}
