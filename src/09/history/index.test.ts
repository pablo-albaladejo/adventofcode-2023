import { ReportHistory } from '.';
import { loadHistories } from '../file';
import path from 'path';

const example: ReportHistory[] = loadHistories(
  path.join(__dirname, '../fixtures/example.txt')
);
describe('ReportHistory', () => {
  describe('Right extrapolate', () => {
    test('0 3 6 9 12 15 => 18', () => {
      expect(example[0].rigthExtrapolate()).toEqual(18);
    });
    test('1 3 6 10 15 21 => 28', () => {
      expect(example[1].rigthExtrapolate()).toEqual(28);
    });
    test('10 13 16 21 30 45 => 68', () => {
      expect(example[2].rigthExtrapolate()).toEqual(68);
    });
  });

  describe('Left Extrapolate', () => {
    test('0 3 6 9 12 15 => -3', () => {
      expect(example[0].leftExtrapolate()).toEqual(-3);
    });
    test('1 3 6 10 15 21 => 0', () => {
      expect(example[1].leftExtrapolate()).toEqual(0);
    });
    test('10 13 16 21 30 45 => 5', () => {
      expect(example[2].leftExtrapolate()).toEqual(5);
    });
  });
});
