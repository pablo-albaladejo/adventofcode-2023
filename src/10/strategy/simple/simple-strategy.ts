import { PipesGraph } from '../../graph';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(graph: PipesGraph): number {
    return 0;
  }
}