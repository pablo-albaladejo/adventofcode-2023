import { Race, RaceStrategy } from '.';
import { loadRaces } from '../file';
import path from 'path';

const example: Race[] = loadRaces(
  path.join(__dirname, '../fixtures/example.txt')
);

const raceStrategy1 = new RaceStrategy(0, 7);
const raceStrategy2 = new RaceStrategy(1, 6);
const raceStrategy3 = new RaceStrategy(2, 5);
const raceStrategy4 = new RaceStrategy(3, 4);
const raceStrategy5 = new RaceStrategy(4, 3);
const raceStrategy6 = new RaceStrategy(5, 2);
const raceStrategy7 = new RaceStrategy(6, 1);
const raceStrategy8 = new RaceStrategy(7, 0);

describe('Race', () => {

  test('getDistance', () => {
    expect(raceStrategy1.getDistance()).toBe(0)
    expect(raceStrategy2.getDistance()).toBe(6)
    expect(raceStrategy3.getDistance()).toBe(10)
    expect(raceStrategy4.getDistance()).toBe(12)
    expect(raceStrategy5.getDistance()).toBe(12)
    expect(raceStrategy6.getDistance()).toBe(10)
    expect(raceStrategy7.getDistance()).toBe(6)
    expect(raceStrategy8.getDistance()).toBe(0)
  })

  describe('getStrategies', () => {
    test('race 1', () => {
      expect(example[0].getStrategies()).toEqual([
        raceStrategy1,
        raceStrategy2,
        raceStrategy3,
        raceStrategy4,
        raceStrategy5,
        raceStrategy6,
        raceStrategy7,
        raceStrategy8,
      ]);
    });
  });
});
