import { Card } from '../card';

export interface Strategy {
  solution(cards: Card[], ...args: any[]): number;
}
