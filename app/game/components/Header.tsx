import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import useResetGame from '@/hooks/useResetGame';

export default function Header() {
  const router = useRouter();
  const restartGame = useResetGame();

  return (
    <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
      <Link href='/'>
        <h1 className='text-center text-xl font-bold uppercase text-indigo-950 md:text-5xl'>Memory games</h1>
      </Link>
      <div className='flex items-center gap-4'>
        <Button variant='secondary' size='fit' onClick={restartGame}>
          Restart
        </Button>
        <Button variant='primary' size='fit' onClick={() => router.push('/')}>
          New game
        </Button>
      </div>
    </div>
  );
}
