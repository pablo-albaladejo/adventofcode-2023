import { readLinesFromTextFile } from '../../common/helpers';
import { Point } from '../../common/polygon';
import { Cosmos } from '../cosmos';

export const loadCosmos = (filePath: string): Cosmos => {
  const lines = readLinesFromTextFile(filePath);
  const cosmos = new Cosmos(lines.length, lines[0].length);

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      const neighbors = [];
      if (i > 0 && j > 0) neighbors.push(new Point(i - 1, j - 1)); // Upper left neighbor
      if (i > 0) neighbors.push(new Point(i - 1, j)); // Upper neighbor
      if (i > 0 && j < lines[i].length - 1)
        neighbors.push(new Point(i - 1, j + 1)); // Upper right neighbor
      if (j > 0) neighbors.push(new Point(i, j - 1)); // Left neighbor
      if (j < lines[i].length - 1) neighbors.push(new Point(i, j + 1)); // Right neighbor
      if (i < lines.length - 1 && j > 0)
        neighbors.push(new Point(i + 1, j - 1)); // Lower left neighbor
      if (i < lines.length - 1) neighbors.push(new Point(i + 1, j)); // Lower neighbor
      if (i < lines.length - 1 && j < lines[i].length - 1)
        neighbors.push(new Point(i + 1, j + 1)); // Lower right neighbor

      if (lines[i][j] === '#') {
        cosmos.addGalaxyNode(new Point(i, j), neighbors);
      } else {
        cosmos.addSpaceNode(new Point(i, j), neighbors);
      }
    }
  }
  return cosmos;
};
