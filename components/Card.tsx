'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { Icon } from '@iconify/react';

interface CardProps {
  icon: string;
}

export default function Card({ icon }: CardProps) {
  const [isActive, toggleActive] = useState(false);

  return (
    <div
      className={clsx('card relative cursor-pointer overflow-hidden rounded text-black', isActive && 'card-active')}
      onClick={() => toggleActive(!isActive)}
    >
      <div className='card-front absolute left-0 top-0 h-full w-full bg-gradient-to-b from-indigo-500  to-indigo-900 text-white'></div>
      <div className='card-back absolute left-0 top-0 flex h-full w-full items-center justify-center bg-indigo-950 '>
        {isActive && <Icon icon={`fluent-emoji:${icon}`} className='text-3xl md:text-5xl' />}
      </div>
    </div>
  );
}
