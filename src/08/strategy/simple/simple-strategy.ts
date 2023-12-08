import { CammelMap, Direction } from '../../map';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(map: CammelMap): number {
    return map.getSteps('AAA', (nodeCursor: string) => nodeCursor === 'ZZZ');
  }
}
