'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import SelectionList from '@/app/components/SelectionList';
import useSetupContext from '@/hooks/useSetupContext';
import { TSetup } from '@/types';

const PLAYER_OPTIONS: TSetup['players'][] = [1, 2, 3, 4];
const CARDS_NUMBERS_OPTIONS: TSetup['grid'][] = [30, 36];

export default function GameSetup() {
  const router = useRouter();
  const { setup, setSetup } = useSetupContext();

  const { players, grid } = setup;

  const onSelectPlayers = (option: TSetup['players']) => {
    setSetup({ ...setup, players: option });
  };

  const onSelectGrid = (option: TSetup['grid']) => {
    setSetup({ ...setup, grid: option });
  };

  return (
    <div className='mx-auto mt-24 flex w-[300px] flex-col gap-8 rounded bg-white p-6 md:w-[480px]'>
      <SelectionList label='select players' options={PLAYER_OPTIONS} selected={players} onSelect={onSelectPlayers} />
      <SelectionList label='grid size' options={CARDS_NUMBERS_OPTIONS} selected={grid} onSelect={onSelectGrid} />
      <Button variant='secondary' size='contain' onClick={() => router.push('/game')}>
        Start game
      </Button>
    </div>
  );
}
