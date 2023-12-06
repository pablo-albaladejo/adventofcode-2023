import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  parts: number[];
  strategy: Strategy;

  constructor(parts: number[], strategy: Strategy) {
    this.parts = parts;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.parts);
  }
}
