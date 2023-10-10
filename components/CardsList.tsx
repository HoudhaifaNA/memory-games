import React from 'react';
import Card from './Card';
import { ICON_NAMES } from '@/constants';

const pairedIcons = [...ICON_NAMES, ...ICON_NAMES];

for (let i = pairedIcons.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [pairedIcons[i], pairedIcons[j]] = [pairedIcons[j], pairedIcons[i]];
}

export default function CardsList() {
  return (
    <div className='md:grid-cols-md-36 md:grid-rows-md-36 grid-cols-sm-36 grid-rows-sm-36 mx-auto mt-12 grid h-max w-max gap-1 md:gap-2'>
      {pairedIcons.map((icon, i) => {
        return <Card key={i} icon={icon} />;
      })}
    </div>
  );
}
