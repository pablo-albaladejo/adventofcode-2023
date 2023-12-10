import { calculateLCM } from '../../../common/helpers';
import { CammelMap } from '../../map';
import { Strategy } from '../strategy.interface';
export class AdvancedStrategy implements Strategy {
  solve(map: CammelMap): number {
    const nodeCursors: string[] = Object.keys(map.getNodes()).filter(
      (str: string) => str.endsWith('A')
    );
    const steps: number[] = nodeCursors.map((cursor: string) =>
      map.getSteps(cursor, (node: string) => node.endsWith('Z'))
    );
    return calculateLCM(steps);
  }
}
