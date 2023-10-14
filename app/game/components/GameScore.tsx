/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import ScoreTooltip from './ScoreTooltip';

import useTimer from '@/hooks/useTimer';
import useGameContext from '@/hooks/useGameContext';
import useScoreContext from '@/hooks/useScoreContext';
import useSetupContext from '@/hooks/useSetupContext';
import useCardsContext from '@/hooks/useCardsContext';

export default function GameScore() {
  const { setup } = useSetupContext();
  const { game, setGame } = useGameContext();
  const { score, currentTurn } = useScoreContext();
  const { matchedCards, pairedCards } = useCardsContext();
  const { timeString, resetTimer } = useTimer();

  const { players, grid } = setup;
  const { time, moves } = game;

  useEffect(() => {
    resetTimer();
  }, [JSON.stringify(pairedCards)]);

  useEffect(() => {
    if (matchedCards.length < grid / 2) {
      setGame({ ...game, time: timeString });
    }
  }, [timeString]);

  const renderScores = () => {
    if (players === 1) {
      return (
        <>
          <ScoreTooltip title='Moves' content={`${moves}`} />
          <ScoreTooltip title='Time' content={time} />
        </>
      );
    } else {
      return score.map((player, ind) => {
        const isCurrentTurn = ind + 1 === currentTurn;

        return <ScoreTooltip title={player.name} content={`${player.score}`} isActive={isCurrentTurn} key={ind} />;
      });
    }
  };

  return <div className='my-6 flex w-full items-end  justify-center gap-4'>{renderScores()}</div>;
}
