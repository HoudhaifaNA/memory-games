import useCardsContext from './useCardsContext';
import useGameContext from './useGameContext';
import useScoreContext from './useScoreContext';
import useSetupContext from './useSetupContext';
import { generatePairedCards } from '@/utils';
import { PlayerScore } from '@/types';

export default function useResetGame() {
  const { setFlippedCards, setMatchedCards, setPairedCards } = useCardsContext();
  const { setGame, game } = useGameContext();
  const { setScore, setCurrentTurn } = useScoreContext();
  const { setup } = useSetupContext();

  const { grid, players } = setup;
  const totalIconPairs = grid / 2;

  const restartGame = () => {
    setPairedCards(generatePairedCards(totalIconPairs));
    setFlippedCards({});
    setMatchedCards([]);
    setGame({ ...game, moves: 0 });
    const defaultScore: PlayerScore[] = Array(players)
      .fill({ name: '', score: 0 })
      .map((_p, ind) => {
        return { name: `P ${ind + 1}`, score: 0 };
      });
    setScore(defaultScore);
    setCurrentTurn(1);
  };

  return restartGame;
}
