import { ICON_NAMES } from '@/constants';

export const generatePairedCards = (totalIconPairs: number) => {
  const iconsList = ICON_NAMES.slice(0, totalIconPairs);
  const pairedCards = [...iconsList, ...iconsList].map((icon, ind) => {
    return { id: ind, icon };
  });

  for (let i = pairedCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairedCards[i], pairedCards[j]] = [pairedCards[j], pairedCards[i]];
  }
  return pairedCards;
};
