'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import useGameContext from '@/hooks/useGameContext';
import useCardsContext from '@/hooks/useCardsContext';
import { TCard } from '@/types';

interface CardProps {
  card: TCard;
}

export default function Card({ card }: CardProps) {
  const { flippedCards, setFlippedCards, matchedCards } = useCardsContext();
  const { game, setGame } = useGameContext();
  const [isActive, toggleActive] = useState(false);

  const { id, icon } = card;
  const { first, match } = flippedCards;
  const isMatched = matchedCards.includes(icon);

  useEffect(() => {
    const isFlipped = matchedCards.includes(icon) || first?.id === id || match?.id === id;
    if (isFlipped) {
      toggleActive(true);
    } else {
      toggleActive(false);
    }
  }, [matchedCards, first, match, icon, id]);

  const onClick = () => {
    if (!isMatched && !match && id !== first?.id) {
      toggleActive(true);
      setGame({ ...game, moves: game.moves + 1 });

      if (!first) {
        setFlippedCards({ ...flippedCards, first: card });
      } else {
        setFlippedCards({ ...flippedCards, match: card });
      }
    }
  };

  return (
    <div
      className={clsx('card relative cursor-pointer overflow-hidden rounded text-black', isActive && 'card-active')}
      onClick={onClick}
    >
      <div className='card-front absolute left-0 top-0 h-full w-full bg-gradient-to-b from-indigo-500  to-indigo-900 text-white' />
      <div className='card-back absolute left-0 top-0 flex h-full w-full items-center justify-center bg-indigo-950 '>
        {isActive && <Icon icon={`fluent-emoji:${icon}`} className='text-3xl md:text-5xl' />}
      </div>
    </div>
  );
}
