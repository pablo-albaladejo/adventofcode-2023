import { AlmanacMap, loadParts } from '../../file';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: AlmanacMap = loadParts(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {
    expect(
      simpleStrategy.seedLocation(example.seeds[0], example.seedMaps)
    ).toBe(82);

    expect(
      simpleStrategy.seedLocation(example.seeds[1], example.seedMaps)
    ).toBe(43);

    expect(
      simpleStrategy.seedLocation(example.seeds[2], example.seedMaps)
    ).toBe(86);

    expect(
      simpleStrategy.seedLocation(example.seeds[3], example.seedMaps)
    ).toBe(35);
  });

  test('Example solution', () => {
    expect(simpleStrategy.solve(example)).toBe(35);
  });
});
