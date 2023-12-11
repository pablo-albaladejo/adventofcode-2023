import { loadCosmos } from '.';
import path from 'path';

const example = loadCosmos(path.join(__dirname, '../fixtures/example.txt'));

describe('file', () => {
  test('loadCosmos', () => {
    expect(example.getNNodes()).toBe(example.getNRows() * example.getNCols());
    expect(example.getGalaxyNodeKeys().length).toBe(9);
    expect(example.getSpaceNodeKeys().length).toBe(91);
  });
});
