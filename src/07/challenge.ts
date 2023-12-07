import { Hand } from './hand';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  hands: Hand[];
  strategy: Strategy;

  constructor(hands: Hand[], strategy: Strategy) {
    this.hands = hands;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.hands);
  }
}
