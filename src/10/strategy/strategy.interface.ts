import { PipesGraph } from '../graph';

export interface Strategy {
  solve(graph: PipesGraph): number;
}