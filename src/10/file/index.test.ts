import { loadGraph } from '.';
import path from 'path';
import { PipesGraph, PipePosition } from '../graph';

const example = loadGraph(path.join(__dirname, '../fixtures/example1.txt'));

const graph = new PipesGraph(5, 5);

//'S'
graph.setStart(new PipePosition(1, 1));
//'-'
graph.addEdgeBidirectional(new PipePosition(1, 2), new PipePosition(1, 1));
graph.addEdgeBidirectional(new PipePosition(1, 2), new PipePosition(1, 3));
//'7'
graph.addEdgeBidirectional(new PipePosition(1, 3), new PipePosition(2, 3));
graph.addEdgeBidirectional(new PipePosition(1, 3), new PipePosition(1, 2));

//'|'
graph.addEdgeBidirectional(new PipePosition(2, 1), new PipePosition(1, 1));
graph.addEdgeBidirectional(new PipePosition(2, 1), new PipePosition(3, 1));
//'|'
graph.addEdgeBidirectional(new PipePosition(2, 3), new PipePosition(1, 3));
graph.addEdgeBidirectional(new PipePosition(2, 3), new PipePosition(3, 3));

//'L'
graph.addEdgeBidirectional(new PipePosition(3, 1), new PipePosition(2, 1));
graph.addEdgeBidirectional(new PipePosition(3, 1), new PipePosition(3, 2));
//'-'
graph.addEdgeBidirectional(new PipePosition(3, 2), new PipePosition(3, 1));
graph.addEdgeBidirectional(new PipePosition(3, 2), new PipePosition(3, 3));
//'J'
graph.addEdgeBidirectional(new PipePosition(3, 3), new PipePosition(2, 3));
graph.addEdgeBidirectional(new PipePosition(3, 3), new PipePosition(3, 2));

describe('file', () => {
  test('loadGraph', () => {
    expect(example).toEqual(graph);
  });
});
