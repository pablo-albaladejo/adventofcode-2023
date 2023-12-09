import { ReportHistory } from './history';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  histories: ReportHistory[];
  strategy: Strategy;

  constructor(histories: ReportHistory[], strategy: Strategy) {
    this.histories = histories;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.histories);
  }
}
