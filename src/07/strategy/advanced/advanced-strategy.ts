import { Hand } from '../../hand';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(hands: Hand[]): number {
    return 0;
  }
}