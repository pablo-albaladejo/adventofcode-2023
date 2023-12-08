import { CammelMap } from './map';
import { Strategy } from './strategy/strategy.interface';

export class Challenge {
  cammelMap: CammelMap;
  strategy: Strategy;

  constructor(cammelMap: CammelMap, strategy: Strategy) {
    this.cammelMap = cammelMap;
    this.strategy = strategy;
  }

  solve() {
    return this.strategy.solve(this.cammelMap);
  }
}
