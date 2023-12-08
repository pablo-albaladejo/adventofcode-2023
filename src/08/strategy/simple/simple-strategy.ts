import { CammelMap, Direction } from '../../map';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(map: CammelMap): number {
    let direcctionCursor = -1;
    let nodeCursor = 'AAA';
    let steps = 0;

    do {
      const node = map.getNode(nodeCursor);

      direcctionCursor =
        direcctionCursor < map.getDirections().length -1
          ? direcctionCursor + 1
          : 0;
      const direction: Direction = map.getDirections()[direcctionCursor];
 
      nodeCursor = node[direction];

      steps++;
    } while (nodeCursor !== 'ZZZ');

    return steps;
  }
}
