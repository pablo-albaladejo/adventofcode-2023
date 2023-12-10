import { Graph } from '../graph';

export interface Strategy {
  solve(graph: Graph): number;
}