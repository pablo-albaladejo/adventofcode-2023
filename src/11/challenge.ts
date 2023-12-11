import { Cosmos } from './cosmos';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  cosmos: Cosmos;
  strategy: Strategy;

  constructor(cosmos: Cosmos, strategy: Strategy) {
    this.cosmos = cosmos;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.cosmos);
  }
}
