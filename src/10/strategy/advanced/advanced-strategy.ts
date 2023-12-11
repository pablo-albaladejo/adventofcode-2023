import { PipesGraph } from '../../graph';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(graph: PipesGraph): number {
    return graph.calculateInnerPoints();
  }
}