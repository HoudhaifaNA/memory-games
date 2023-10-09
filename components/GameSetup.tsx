'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import SelectionList from '@/components/SelectionList';

const PLAYER_OPTIONS = ['1', '2', '3', '4'];
const CARDS_NUMBERS_OPTIONS = ['36', '49'];

export default function GameSetup() {
  const router = useRouter();

  return (
    <div className='mx-auto mt-24 flex w-[300px] flex-col gap-8 rounded bg-white p-6 md:w-[480px]'>
      <SelectionList label='select players' options={PLAYER_OPTIONS} />
      <SelectionList label='grid size' options={CARDS_NUMBERS_OPTIONS} />
      <Button variant='secondary' size='contain' onClick={() => router.push('/game')}>
        Start game
      </Button>
    </div>
  );
}
