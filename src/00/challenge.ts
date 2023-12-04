import { Part } from './part';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  parts: Part[];
  strategy: Strategy;

  constructor(parts: Part[], strategy: Strategy) {
    this.parts = parts;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.parts);
  }
}
