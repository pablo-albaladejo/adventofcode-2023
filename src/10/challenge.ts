import { Graph } from './graph';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  graph: Graph;
  strategy: Strategy;

  constructor(graph: Graph, strategy: Strategy) {
    this.graph = graph;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.graph);
  }
}
