import { useUnit } from 'effector-react';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { counter } from './model';

export const SuperButton: FC<{className?: string}> = ({ className }) => {
  const {count, increment} = useUnit({
    count: counter.$data,
    increment: counter.incremented,
  })
  return (
    <div>
      <button className={twMerge(className, 'bg-red-400')} onClick={increment}>
        Click me: {count}
      </button>
    </div>
  );
};

