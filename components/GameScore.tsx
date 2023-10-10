import { ReactNode } from 'react';
import ScoreTooltip from './ScoreTooltip';

interface GameScoreProps {
  children: ReactNode;
}

export default function GameScore({ children }: GameScoreProps) {
  return <div className='my-6 flex w-full items-end  justify-center gap-4'>{children}</div>;
}
