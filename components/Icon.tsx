import React from 'react';

interface IconProps {
  icon: string;
}

export default function Icon({ icon }: IconProps) {
  return (
    <svg className='h-7 w-7 md:h-10 md:w-10'>
      <use xlinkHref={`/sprite.svg#${icon}`} />
    </svg>
  );
}
