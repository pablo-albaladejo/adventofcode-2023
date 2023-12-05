import { AlmanacMap, loadParts } from '../../file';
import SeedMapKey from '../../seeds/maps/seed-map-key.enum';
import { SeedMap } from '../../seeds/maps/seed-maps';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: AlmanacMap = loadParts(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example solution', () => {
    expect(simpleStrategy.solve(example)).toBe(35);
  });
});
