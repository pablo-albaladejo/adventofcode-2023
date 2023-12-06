import { Race } from './race';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  races: Race[];
  strategy: Strategy;

  constructor(races: Race[], strategy: Strategy) {
    this.races = races;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.races);
  }
}
