import { SeedMap, SeedMapRange } from './seed-maps';

describe('SeedMaps', () => {
  const seedToSoil: SeedMap = new SeedMap([
    new SeedMapRange(50, 98, 2),
    new SeedMapRange(52, 50, 48),
  ]);

  test('map', () => {
    expect(seedToSoil.map(79)).toBe(81);
    expect(seedToSoil.map(14)).toBe(14);
    expect(seedToSoil.map(55)).toBe(57);
    expect(seedToSoil.map(13)).toBe(13);
  });
});
