import { lineToPart, loadRaces } from '.';
import path from 'path';
import { Race } from '../race';

const part1 = new Race();

describe('file', () => {
  test('lineToPart', () => {
    expect(lineToPart('')).toEqual(part1);
  });
  test('loadParts', () => {
    expect(loadRaces(path.join(__dirname, '../fixtures/example.txt'))).toEqual(
      []
    );
  });
});
