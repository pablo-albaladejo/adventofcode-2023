import { CammelMap } from './map';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  parts: CammelMap[];
  strategy: Strategy;

  constructor(parts: CammelMap[], strategy: Strategy) {
    this.parts = parts;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.parts);
  }
}
