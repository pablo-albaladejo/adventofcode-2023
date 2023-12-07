import { Hand } from '../../hand';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(hands: Hand[]): number {
    return hands
      .sort((a, b) => a.compare(b, true))
      .reduce((acc, hand, index) => acc + hand.getBid() * (index + 1), 0);
  }
}
