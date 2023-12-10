import { PipesGraph } from './graph';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  graph: PipesGraph;
  strategy: Strategy;

  constructor(graph: PipesGraph, strategy: Strategy) {
    this.graph = graph;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.graph);
  }
}
