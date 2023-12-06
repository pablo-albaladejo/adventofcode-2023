import { AlmanacMap, loadParts } from '../../file';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: AlmanacMap = loadParts(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Range function', () => {
    expect(advancedStrategy.getRange(1, 3)).toEqual([1, 2, 3]);
    expect(advancedStrategy.getRange(79, 14)).toEqual([79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92]);
    expect(advancedStrategy.getRange(55, 13)).toEqual([55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67]);
  });

  test('Example solution', () => {
    expect(advancedStrategy.solve(example)).toBe(46);
  });
});
