import { Part } from '../../part';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(part: Part): number {
    throw new Error('Method not implemented.');
  }
}