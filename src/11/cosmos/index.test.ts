import { loadCosmos } from '../file';
import path from 'path';

const example = loadCosmos(path.join(__dirname, '../fixtures/example.txt'));
console.log(JSON.stringify(example, null, 2));
describe('Cosmos', () => {
  test('pairs', () => {
    expect(example.getGalaxyPairs().length).toBe(36);
  });
});
