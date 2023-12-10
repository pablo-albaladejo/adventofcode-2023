import { Graph } from '../../graph';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(graph: Graph): number {
    return 0;
  }
}