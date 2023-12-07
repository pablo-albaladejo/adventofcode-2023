import { Hand } from '../../hand';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(hand: Hand): number {
    throw new Error('Method not implemented.');
  }
}