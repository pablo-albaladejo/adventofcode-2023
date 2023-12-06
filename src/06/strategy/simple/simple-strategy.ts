import { Race } from '../../race';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(races: Race[]): number {
    throw new Error('Method not implemented.');
  }
}