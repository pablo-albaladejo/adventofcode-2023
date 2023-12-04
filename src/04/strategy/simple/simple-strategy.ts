import { Card } from '../../card';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solution(cards: Card[]): number {
    return cards.reduce((acc, card) => acc + (2 ^ card.checkWinning()), 0);
  }
}
