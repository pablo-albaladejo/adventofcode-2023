import { Part } from '../../part';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(part: Part): number {
    throw new Error('Method not implemented.');
  }
}