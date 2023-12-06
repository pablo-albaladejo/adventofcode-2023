import { loadRaces } from '../../file';
import { Race, RaceStrategy } from '../../race';
import { SimpleStrategy, getWinnerStrategies } from './simple-strategy';
import path from 'path';

const example: Race[] = loadRaces(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  describe('getWinnerStrategies', () => {
    const raceStrategy3 = new RaceStrategy(2, 5);
    const raceStrategy4 = new RaceStrategy(3, 4);
    const raceStrategy5 = new RaceStrategy(4, 3);
    const raceStrategy6 = new RaceStrategy(5, 2);
    test('race 1', () => {
      expect(getWinnerStrategies(example[0])).toEqual([
        raceStrategy3,
        raceStrategy4,
        raceStrategy5,
        raceStrategy6,
      ]);
    });
  });

  test('Example values', () => {
    expect(simpleStrategy.solve(example)).toBe(288);
  });
});
