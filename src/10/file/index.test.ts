import { loadGraph } from '.';
import path from 'path';
import { Graph } from '../graph';

const part1 = new Graph();

describe('file', () => {
  test('loadGraph', () => {
    expect(loadGraph(path.join(__dirname, '../fixtures/example1.txt'))).toEqual(
      new Graph()
    );
  });
});
