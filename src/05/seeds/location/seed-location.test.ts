import { AlmanacMap, loadParts } from '../../file';
import { seedLocation } from './seed-location';
import path from 'path';

const example: AlmanacMap = loadParts(
  path.join(__dirname, '../../fixtures/example.txt')
);

describe('seedLocation', () => {
  test('Void values', () => {
    expect(seedLocation(-1, {})).toBe(-1);
  });
  test('Example values', () => {
    expect(
      seedLocation(example.seeds[0], example.seedMaps)
    ).toBe(82);

    expect(
      seedLocation(example.seeds[1], example.seedMaps)
    ).toBe(43);

    expect(
      seedLocation(example.seeds[2], example.seedMaps)
    ).toBe(86);

    expect(
      seedLocation(example.seeds[3], example.seedMaps)
    ).toBe(35);
  });
});
