import { Cosmos } from '../../cosmos';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(cosmos: Cosmos): number {
    return 0;
  }
}
