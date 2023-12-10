import { PipesGraph, PipePosition } from '.';
import { rayCasting } from '../../common/polygon';
import { loadGraph } from '../file';
import path from 'path';

const original: PipesGraph = loadGraph(
  path.join(__dirname, '../fixtures/example2a.txt')
);
const clean = loadGraph(path.join(__dirname, '../fixtures/example2b.txt'));

const gaps = loadGraph(path.join(__dirname, '../fixtures/example4.txt'));

describe('Graph', () => {
  test('clean', () => {
    original.clean();
    expect(original).toEqual(clean);
  });

  test('distances', () => {
    expect(original.calculateDistancesFromStart()).toBe(8);
  });

  describe('rayCasting', () => {
    const path = gaps.getPath(gaps.getStart()?.key!);
    test('out of the path', () => {
      expect(rayCasting(new PipePosition(0, 0), path)).toBe(false);
    });

    test('part of the path', () => {
      expect(rayCasting(new PipePosition(1, 1), path)).toBe(true);
    });

    test('false inside of the path', () => {
      expect(rayCasting(new PipePosition(3, 3), path)).toBe(false);
    });

    test('truly inside of the path', () => {
      expect(rayCasting(new PipePosition(6, 2), path)).toBe(true);
    });
  });
});
