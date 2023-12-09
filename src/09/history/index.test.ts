import { ReportHistory } from '.';
import { loadHistories } from '../file';
import path from 'path';

const example: ReportHistory[] = loadHistories(
  path.join(__dirname, '../fixtures/example.txt')
);
describe('ReportHistory', () => {
  describe('extrapolate', () => {
    test('0 3 6 9 12 15 => 18', () => {
      expect(example[0].extrapolate()).toEqual(18);
    });
    test('1 3 6 10 15 21 => 28', () => {
      expect(example[1].extrapolate()).toEqual(28);
    });
    test('10 13 16 21 30 45 => 68', () => {
      expect(example[2].extrapolate()).toEqual(68);
    });
  });
});
