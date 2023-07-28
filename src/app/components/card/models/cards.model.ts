export interface Card {
  id: number;
  cardTitle: string;
  valueCard: string;
  estimationCard: string;
  pathImageCard?: string;
}

export interface Cards {
  cards: Card[];
}
