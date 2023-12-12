import { loadCosmos } from '.';
import path from 'path';
import { Cosmos } from '../cosmos';

const example: Cosmos = loadCosmos(path.join(__dirname, '../fixtures/example.txt'));

describe('file', () => {
  test('loadCosmos', () => {
    expect(example.getNVertex()).toBe(example.getNRows() * example.getNCols());
    expect(example.getGalaxyPoints().length).toBe(9);
    expect(example.getSpacePoints().length).toBe(91);
  });
});
