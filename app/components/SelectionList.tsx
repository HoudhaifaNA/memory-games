import clsx from 'clsx';

interface SelectionListProps {
  label: string;
  options: (string | number)[];
  selected: string | number;
  onSelect: (option: any) => void;
}

export default function SelectionList({ label, options, selected, onSelect }: SelectionListProps) {
  const renderOptions = () => {
    return options.map((option) => {
      const isSelected = option === selected;

      return (
        <button
          key={option}
          className={clsx(
            'flex-1 cursor-pointer rounded border border-indigo-950 px-5 py-2.5 text-center text-sm font-bold capitalize transition-all',
            isSelected ? 'bg-indigo-950 text-white' : 'bg-white text-indigo-950'
          )}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      );
    });
  };
  return (
    <div className='flex flex-col gap-4'>
      <p className='font-bold capitalize text-indigo-500'>{label}</p>
      <div className='flex items-center  gap-4'>{renderOptions()}</div>
    </div>
  );
}
