import { AlmanacMap, loadParts } from '.';
import path from 'path';
import SeedMapKey from '../seeds/maps/seed-map-key.enum';
import { SeedMap, SeedMapRange } from '../seeds/maps/seed-maps';

describe('file', () => {
  const example: AlmanacMap = loadParts(
    path.join(__dirname, '../fixtures/example.txt')
  );

  test('seeds', () => {
    expect(example.seeds).toEqual([79, 14, 55, 13]);
  });

  test('SEED_TO_SOIL', () => {
    expect(example.seedMaps[SeedMapKey.SEED_TO_SOIL]).toStrictEqual(
      new SeedMap([new SeedMapRange(50, 98, 2), new SeedMapRange(52, 50, 48)])
    );
  });

  test('SOIL_TO_FERTILIZER', () => {
    expect(example.seedMaps[SeedMapKey.SOIL_TO_FERTILIZER]).toStrictEqual(
      new SeedMap([
        new SeedMapRange(0, 15, 37),
        new SeedMapRange(37, 52, 2),
        new SeedMapRange(39, 0, 15),
      ])
    );
  });
});
