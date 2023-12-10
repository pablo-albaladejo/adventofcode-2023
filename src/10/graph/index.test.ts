import { PipesGraph, Position } from '.';
import { loadGraph } from '../file';
import path from 'path';

const original: PipesGraph = loadGraph(
  path.join(__dirname, '../fixtures/example2a.txt')
);
const clean = loadGraph(path.join(__dirname, '../fixtures/example2b.txt'));

describe('Graph', () => {
  test('clean', () => {
    original.clean();
    expect(original).toEqual(clean);
  });

  test('distances', () => {
    expect(original.calculateDistancesFromStart()).toBe(8);
  });
});
