import { readLinesFromTextFile } from '../../helpers';
import { Graph, GraphNode, Position } from '../graph';

const addGraphNode = (graph: Graph, tile: string, i: number, j: number) => {
  const position = new Position(i, j);

  switch (tile) {
    case '.':
      // Ground tile
      break;
    case '|':
      // Vertical pipe
      graph.addEdge(position, new Position(i - 1, j));
      graph.addEdge(position, new Position(i + 1, j));
      break;
    case '-':
      // Horizontal pipe
      graph.addEdge(position, new Position(i, j - 1));
      graph.addEdge(position, new Position(i, j + 1));
      break;
    case 'L':
      // 90-degree bend connecting north and east
      graph.addEdge(position, new Position(i - 1, j));
      graph.addEdge(position, new Position(i, j + 1));
      break;
    case 'J':
      // 90-degree bend connecting north and west
      graph.addEdge(position, new Position(i - 1, j));
      graph.addEdge(position, new Position(i, j - 1));
      break;
    case '7':
      // 90-degree bend connecting south and west
      graph.addEdge(position, new Position(i, j - 1));
      graph.addEdge(position, new Position(i + 1, j));
      break;
    case 'F':
      // 90-degree bend connecting south and east
      graph.addEdge(position, new Position(i + 1, j));
      graph.addEdge(position, new Position(i, j + 1));
      break;
    case 'S':
      // Starting position of the animal
      graph.setStart(position);
      break;
  }
};

export const loadGraph = (filePath: string): Graph => {
  const graph = new Graph();
  const lines: string[] = readLinesFromTextFile(filePath);

  lines.forEach((line, index) => {
    line.split('').forEach((char, charIndex) => {
      addGraphNode(graph, char, index, charIndex);
    });
  });

  console.log(JSON.stringify(graph, null, 2));

  return graph;
};
