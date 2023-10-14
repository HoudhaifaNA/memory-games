import clsx from 'clsx';

interface ResultBarProps {
  label: string;
  content: string;
  isPrimary?: boolean;
}

export default function ResultBar({ label, content, isPrimary }: ResultBarProps) {
  return (
    <div
      className={clsx(
        'flex w-full items-center justify-between rounded  p-4',
        isPrimary ? 'bg-indigo-600' : 'bg-indigo-100'
      )}
    >
      <p className={clsx('text-indigo-500', isPrimary ? 'text-white' : 'text-indigo-500')}>{label}</p>
      <b className={clsx('text-indigo-500', isPrimary ? 'text-white' : 'text-indigo-600')}>{content}</b>
    </div>
  );
}
