import { Card } from '../../card';
import { Strategy } from '../strategy.interface';

export const updateCopies = (cards: Card[]): Card[] => {
  const result = [...cards];
  for (let i = 0; i < result.length; i++) {
    const card: Card = result[i];
    const winning: number = card.checkWinning();
    for (let j = 1; j <= winning; j++) {
      result[i + j].addCopy(card.getCopies());
    }
  }
  return result;
};

export class AdvancedStrategy implements Strategy {
  solution(cards: Card[]): number {
    const updatedCopies = updateCopies(cards);
    return updatedCopies.reduce((acc, card) => card.getCopies() + acc, 0);
  }
}
