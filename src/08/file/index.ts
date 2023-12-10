import { readLinesFromTextFile } from '../../common/helpers';
import { CammelMap, Direction, Nodes } from '../map';

export const loadCammelMap = (filePath: string): CammelMap => {
  const lines = readLinesFromTextFile(filePath);

  const directions: Direction[] = lines[0]
    .split('')
    .map((str: string) => str as Direction);

  const nodes: Nodes = {};

  for (let i = 2; i < lines.length; i++) {
    const nodeStr = lines[i].split('=').map((str) => str.trim());
    const nodeKey = nodeStr[0];
    const nodeValue = nodeStr[1]
      .replace(/[()]/g, '')
      .split(',')
      .map((str) => str.trim());

    nodes[nodeKey] = {
      [Direction.L]: nodeValue[0],
      [Direction.R]: nodeValue[1],
    };
  }

  return new CammelMap(directions, nodes);
};
