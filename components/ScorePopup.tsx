import { ReactNode } from 'react';

import Button from './Button';

interface ScorePopupProps {
  children: ReactNode;
}

export default function ScorePopup({ children }: ScorePopupProps) {
  return (
    <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50'>
      <div className='flex w-11/12 flex-col items-center gap-4 rounded bg-white p-4 shadow-md md:w-96'>
        <h1 className='text-2xl font-bold'>Game over</h1>
        <p>Game over, here is the result</p>
        {children}
        <Button variant='secondary' size='contain' onClick={() => 1}>
          Restart
        </Button>
        <Button variant='primary' size='contain' onClick={() => 1}>
          Setup new game
        </Button>
      </div>
    </div>
  );
}
