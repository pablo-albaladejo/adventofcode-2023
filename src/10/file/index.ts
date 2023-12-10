import { readLinesFromTextFile } from '../../helpers';
import { PipesGraph, Position } from '../graph';

const addGraphNode = (
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
      graph.addEdgeBidirectional(position, new Position(i - 1, j));
      graph.addEdgeBidirectional(position, new Position(i + 1, j));
      break;
    case '-':
      // Horizontal pipe
      graph.addEdgeBidirectional(position, new Position(i, j - 1));
      graph.addEdgeBidirectional(position, new Position(i, j + 1));
      break;
    case 'L':
      // 90-degree bend connecting north and east
      graph.addEdgeBidirectional(position, new Position(i - 1, j));
      graph.addEdgeBidirectional(position, new Position(i, j + 1));
      break;
    case 'J':
      // 90-degree bend connecting north and west
      graph.addEdgeBidirectional(position, new Position(i - 1, j));
      graph.addEdgeBidirectional(position, new Position(i, j - 1));
      break;
    case '7':
      // 90-degree bend connecting south and west
      graph.addEdgeBidirectional(position, new Position(i, j - 1));
      graph.addEdgeBidirectional(position, new Position(i + 1, j));
      break;
    case 'F':
      // 90-degree bend connecting south and east
      graph.addEdgeBidirectional(position, new Position(i + 1, j));
      graph.addEdgeBidirectional(position, new Position(i, j + 1));
      break;
    case 'S':
      // Starting position of the animal
      graph.setStart(position);
      break;
  }
};

export const loadGraph = (filePath: string): PipesGraph => {
  const graph = new PipesGraph();
  const lines: string[] = readLinesFromTextFile(filePath);

  lines.forEach((line, index) => {
    line.split('').forEach((char, charIndex) => {
      addGraphNode(graph, char, index, charIndex);
    });
  });

  return graph;
};
