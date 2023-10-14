export interface TSetup {
  players: 1 | 2 | 3 | 4;
  grid: 30 | 36;
}

export interface TGame {
  moves: number;
  time: string;
}

export interface TCard {
  id: number;
  icon: string;
}
export interface TFlippedCards {
  first?: TCard;
  match?: TCard;
}

export interface PlayerScore {
  name: string;
  score: number;
}

export type TScore = PlayerScore[];
