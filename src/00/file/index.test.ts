import { lineToPart, loadParts } from '.';
import path from 'path';
import { Part } from '../part';

const part1 = new Part();

describe('file', () => {
  test('lineToPart', () => {
    expect(lineToPart('')).toEqual(part1);
  });
  test('loadParts', () => {
    expect(loadParts(path.join(__dirname, '../fixtures/example.txt'))).toEqual(
      []
    );
  });
});
