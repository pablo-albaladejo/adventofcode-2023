import { Race } from '../../race';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(race: Race): number {
    throw new Error('Method not implemented.');
  }
}