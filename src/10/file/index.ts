import { GraphNodeKey } from '../../common/graph';
import { readLinesFromTextFile } from '../../helpers';
import { PipesGraph, Position } from '../graph';

const canConnectWithNorth = (
  map: string[][],
  i: number,
  j: number
): boolean => {
  return i > 0 && ['S', '|', 'F', '7'].includes(map[i - 1][j]);
};
const canConnectWithSouth = (
  map: string[][],
  i: number,
  j: number
): boolean => {
  return i < map.length - 1 && ['S', '|', 'L', 'J'].includes(map[i + 1][j]);
};
const canConnectWithEast = (map: string[][], i: number, j: number): boolean => {
  return j < map[i].length - 1 && ['S', '-', '7', 'J'].includes(map[i][j + 1]);
};
const canConnectWithWest = (map: string[][], i: number, j: number): boolean => {
  return j > 0 && ['S', '-', 'F', 'L'].includes(map[i][j - 1]);
};

const addGraphNode = (
  map: string[][],
  graph: PipesGraph,
  tile: string,
  i: number,
  j: number
) => {
  const position = new Position(i, j);

  switch (tile) {
    case '.':
      // Ground tile
      break;

    case '|':
      // Vertical pipe
      if (canConnectWithNorth(map, i, j))
        graph.addEdge(position, new Position(i - 1, j));
      if (canConnectWithSouth(map, i, j))
        graph.addEdge(position, new Position(i + 1, j));
      break;

    case '-':
      // Horizontal pipe
      if (canConnectWithWest(map, i, j))
        graph.addEdge(position, new Position(i, j - 1));
      if (canConnectWithEast(map, i, j))
        graph.addEdge(position, new Position(i, j + 1));
      break;

    case 'L':
      // 90-degree bend connecting north and east
      if (canConnectWithNorth(map, i, j))
        graph.addEdge(position, new Position(i - 1, j));
      if (canConnectWithEast(map, i, j))
        graph.addEdge(position, new Position(i, j + 1));
      break;

    case 'J':
      // 90-degree bend connecting north and west
      if (canConnectWithNorth(map, i, j))
        graph.addEdge(position, new Position(i - 1, j));
      if (canConnectWithWest(map, i, j))
        graph.addEdge(position, new Position(i, j - 1));
      break;
    case '7':
      // 90-degree bend connecting south and west
      if (canConnectWithSouth(map, i, j))
        graph.addEdge(position, new Position(i + 1, j));
      if (canConnectWithWest(map, i, j))
        graph.addEdge(position, new Position(i, j - 1));
      break;

    case 'F':
      // 90-degree bend connecting south and east
      if (canConnectWithSouth(map, i, j))
        graph.addEdge(position, new Position(i + 1, j));
      if (canConnectWithEast(map, i, j))
        graph.addEdge(position, new Position(i, j + 1));
      break;

    case 'S':
      // Starting position of the animal
      graph.setStart(position);
      break;
  }
};

export const loadGraph = (filePath: string): PipesGraph => {
  const lines: string[] = readLinesFromTextFile(filePath);
  const graph = new PipesGraph();

  const map: string[][] = [];
  lines.forEach((line, index) => (map[index] = line.split('')));

  lines.forEach((line, index) => {
    line.split('').forEach((char, charIndex) => {
      addGraphNode(map, graph, char, index, charIndex);
    });
  });

  return graph;
};
