import { Cosmos } from '../../cosmos';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(cosmos: Cosmos): number {
    return 0;
  }
}
