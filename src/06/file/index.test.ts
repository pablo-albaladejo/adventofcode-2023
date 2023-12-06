import { loadRaces } from '.';
import path from 'path';
import { Race } from '../race';

const race1 = new Race(7, 9);
const race2 = new Race(15, 40);
const race3 = new Race(30, 200);

describe('file', () => {
  test('loadParts', () => {
    expect(loadRaces(path.join(__dirname, '../fixtures/example.txt'))).toEqual([
      race1,
      race2,
      race3,
    ]);
  });
});
