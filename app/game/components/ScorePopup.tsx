import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import useResetGame from '@/hooks/useResetGame';
import useCardsContext from '@/hooks/useCardsContext';
import useSetupContext from '@/hooks/useSetupContext';
import useGameContext from '@/hooks/useGameContext';
import useScoreContext from '@/hooks/useScoreContext';
import ResultBar from './ResultBar';

export default function ScorePopup() {
  const router = useRouter();
  const restartGame = useResetGame();

  const [isFinished, setIsFinished] = useState(false);
  const { setup } = useSetupContext();
  const { game } = useGameContext();
  const { matchedCards } = useCardsContext();
  const { score } = useScoreContext();
  const { moves, time } = game;
  const { grid, players } = setup;

  useEffect(() => {
    if (matchedCards.length === grid / 2) {
      setIsFinished(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedCards.length]);

  const renderResutls = () => {
    if (players !== 1) {
      const sortedScores = score.slice().sort((a, b) => b.score - a.score);

      return sortedScores.map(({ name, score }, ind) => {
        let title = name;
        if (ind === 0) title += ' (winner)';
        return <ResultBar label={title} content={`${score} Pairs`} key={name} isPrimary={ind === 0} />;
      });
    } else {
      return (
        <>
          <ResultBar label='Time' content={time} />
          <ResultBar label='Moves' content={`${moves}`} />
        </>
      );
    }
  };

  return (
    <>
      {isFinished && (
        <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50'>
          <div className='flex w-11/12 flex-col items-center gap-4 rounded bg-white p-4 shadow-md md:w-96'>
            <h1 className='text-2xl font-bold'>Game over</h1>
            <p>Game over, here is the result</p>
            {renderResutls()}
            <Button
              variant='secondary'
              size='contain'
              onClick={() => {
                restartGame();
                setIsFinished(false);
              }}
            >
              Restart
            </Button>
            <Button variant='primary' size='contain' onClick={() => router.push('/')}>
              Setup new game
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
