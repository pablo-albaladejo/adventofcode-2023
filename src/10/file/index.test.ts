import { loadGraph } from '.';
import path from 'path';
import { PipesGraph, Position } from '../graph';

const example = loadGraph(path.join(__dirname, '../fixtures/example1.txt'));

const graph = new PipesGraph();

//'S'
graph.setStart(new Position(1, 1));
//'-'
graph.addEdge(new Position(1, 2), new Position(1, 1));
graph.addEdge(new Position(1, 2), new Position(1, 3));
//'7'
graph.addEdge(new Position(1, 3), new Position(2, 3));
graph.addEdge(new Position(1, 3), new Position(1, 2));

//'|'
graph.addEdge(new Position(2, 1), new Position(1, 1));
graph.addEdge(new Position(2, 1), new Position(3, 1));
//'|'
graph.addEdge(new Position(2, 3), new Position(1, 3));
graph.addEdge(new Position(2, 3), new Position(3, 3));

//'L'
graph.addEdge(new Position(3, 1), new Position(2, 1));
graph.addEdge(new Position(3, 1), new Position(3, 2));
//'-'
graph.addEdge(new Position(3, 2), new Position(3, 1));
graph.addEdge(new Position(3, 2), new Position(3, 3));
//'J'
graph.addEdge(new Position(3, 3), new Position(2, 3));
graph.addEdge(new Position(3, 3), new Position(3, 2));

describe('file', () => {
  test('loadGraph', () => {
    expect(example).toEqual(graph);
  });
});
