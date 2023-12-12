import { Point } from '../../common/polygon';
import { loadCosmos } from '../file';
import path from 'path';

const example = loadCosmos(path.join(__dirname, '../fixtures/example.txt'));

describe('Cosmos', () => {
  test('pairs', () => {
    expect(example.getGalaxyPairs().length).toBe(36);
  });

  test('emptyRowsAndColumns', () => {
    const { rows, columns } = example.emptyRowsAndColumns();
    expect(rows.length).toBe(2);
    expect(columns.length).toBe(3);
  });

  test('expand', () => {
    const source = new Point(2, 0);
    const destination = new Point(3, 0);
    expect(example.getNode(source)?.getEdgeTo(destination)?.getValue()).toBe(1);
    example.expand();
    expect(example.getNode(source)?.getEdgeTo(destination)?.getValue()).toBe(2);
  });
});
