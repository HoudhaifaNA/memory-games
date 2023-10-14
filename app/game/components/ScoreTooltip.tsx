import clsx from 'clsx';

interface ScoreTooltipProps {
  isActive?: boolean;
  title: string;
  content: string;
}

export default function ScoreTooltip({ isActive, title, content }: ScoreTooltipProps) {
  return (
    <div
      className={clsx(
        'flex h-16 w-20 flex-col justify-between rounded px-2 py-1 md:h-auto md:w-36 md:gap-3 md:px-4 md:py-2',
        isActive ? 'bg-amber-600' : 'bg-indigo-200'
      )}
    >
      <small className={clsx('font-bold', isActive ? 'text-white' : 'text-indigo-500')}>{title}</small>
      <p className={clsx('font-bold', isActive ? 'text-white' : 'text-indigo-900')}>{content}</p>
    </div>
  );
}
