import { AlmanacMap } from './file';
import { Strategy } from './strategy/strategy.interface';

export class Almanac {
  almanacMap: AlmanacMap;
  strategy: Strategy;

  constructor(almanacMap: AlmanacMap, strategy: Strategy) {
    this.almanacMap = almanacMap;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.almanacMap);
  }
}
