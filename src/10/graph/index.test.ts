import { PipesGraph, PipePosition } from '.';
import { rayCasting } from '../../common/polygon';
import { loadGraph } from '../file';
import path from 'path';

const original: PipesGraph = loadGraph(
  path.join(__dirname, '../fixtures/example2a.txt')
);
const clean = loadGraph(path.join(__dirname, '../fixtures/example2b.txt'));

const example4 = loadGraph(path.join(__dirname, '../fixtures/example4.txt'));
const example5 = loadGraph(path.join(__dirname, '../fixtures/example5.txt'));
const example6 = loadGraph(path.join(__dirname, '../fixtures/example6.txt'));

describe('Graph', () => {
  test('clean', () => {
    original.clean();
    expect(original).toEqual(clean);
  });

  test('distances', () => {
    expect(original.calculateDistancesFromStart()).toBe(8);
  });

  describe('rayCasting', () => {
    const path = example4.getPath(example4.getStart()?.key!);
    test('out of the path', () => {
      expect(rayCasting(new PipePosition(0, 0), path)).toBe(false);
    });

    test('part of the path', () => {
      expect(rayCasting(new PipePosition(1, 1), path)).toBe(true);
    });

    test('false inside of the path', () => {
      expect(rayCasting(new PipePosition(3, 3), path)).toBe(false);
      expect(rayCasting(new PipePosition(6, 5), path)).toBe(false);
    });

    test('truly inside of the path', () => {
      expect(rayCasting(new PipePosition(6, 2), path)).toBe(true);
      expect(rayCasting(new PipePosition(6, 3), path)).toBe(true);
      expect(rayCasting(new PipePosition(6, 7), path)).toBe(true);
      expect(rayCasting(new PipePosition(6, 8), path)).toBe(true);
    });
  });

  describe('innerPoints', () => {
    test('example4', () => {
      expect(example4.calculateInnerPoints()).toEqual(4);
    })
    test('example5', () => {
      expect(example5.calculateInnerPoints()).toEqual(8);
    })
    test('example6', () => {
      expect(example6.calculateInnerPoints()).toEqual(10);
    })
  })
});
