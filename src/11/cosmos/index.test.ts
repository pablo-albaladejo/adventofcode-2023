import { Point } from '../../common/polygon';
import { loadCosmos } from '../file';
import path from 'path';

describe('Cosmos', () => {
  const example = loadCosmos(path.join(__dirname, '../fixtures/example.txt'));

  test('pairs', () => {
    expect(example.getGalaxyPairs().length).toBe(36);
  });

  test('emptyRowsAndColumns', () => {
    const { rows, columns } = example.emptyRowsAndColumns();
    expect(rows.length).toBe(2);
    expect(columns.length).toBe(3);
  });

  test('expand', () => {
    const source = example.getVertexByElement(new Point(3, 0))!;
    const destination = example.getVertexByElement(new Point(4, 0))!;

    expect(
      example.getEdge(source.getKey(), destination.getKey())?.getWeight()
    ).toBe(1);
    example.expand();
    expect(
      example.getEdge(source.getKey(), destination.getKey())?.getWeight()
    ).toBe(2);
  });

  describe('shortestPath', () => {
    const example = loadCosmos(path.join(__dirname, '../fixtures/example.txt'));
    example.expand();

    test('5 -> 9', () => {
      expect(example.shortestPath(new Point(5, 1), new Point(9, 4))).toBe(9);
    });

    test('8 -> 9', () => {
      expect(example.shortestPath(new Point(9, 0), new Point(9, 4))).toBe(5);
    });
  });
});
