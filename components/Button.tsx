import clsx from 'clsx';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'fit' | 'contain';
  children: string;
  onClick: () => void;
}

export default function Button({ variant, size, children, onClick }: ButtonProps) {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded border p-2.5 text-center text-sm  font-bold capitalize text-white transition-all active:scale-95  md:text-base',
        variant === 'secondary' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-indigo-700 hover:bg-indigo-800',
        size === 'contain' ? 'w-full' : ''
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
