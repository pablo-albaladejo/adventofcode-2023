import { loadCosmos } from '../file';
import path from 'path';

const example = loadCosmos(path.join(__dirname, '../fixtures/example.txt'));
describe('Cosmos', () => {
  
  test('pairs', () => {
    expect(example.getGalaxyPairs().length).toBe(36);
  });
});
