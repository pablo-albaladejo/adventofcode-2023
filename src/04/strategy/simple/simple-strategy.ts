import { Card } from '../../card';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solution(cards: Card[]): number {
    return cards.reduce(
      (acc, card) =>
        card.checkWinning() > 0 ? 2 ** (card.checkWinning() - 1) + acc : acc,
      0
    );
  }
}
