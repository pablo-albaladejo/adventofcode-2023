import path from 'path';
import {
  NumberInfo,
  extractNumbersInfo,
  getAdjajectStrings,
  hasSymbols,
  isPartNumber,
  loadPartNumbers,
} from '.';
import { readLinesFromTextFile } from '../../helpers';

const lines = readLinesFromTextFile(
  path.join(__dirname, '../fixtures/example.txt')
);
const numberInfo1 = new NumberInfo(467, 0, 2);
const numberInfo2 = new NumberInfo(114, 5, 7);

describe('file', () => {
  test('extractNumbersInfo', () => {
    expect(extractNumbersInfo(lines[0])).toEqual([numberInfo1, numberInfo2]);
  });

  test('hasNoSymbols', () => {
    expect(hasSymbols('')).toBe(false);
    expect(hasSymbols('....')).toBe(false);
    expect(hasSymbols('467..114..')).toBe(false);
    expect(hasSymbols('..*..')).toBe(true);
    expect(hasSymbols('..#..')).toBe(true);
    expect(hasSymbols('..$..')).toBe(true);
  });

  test('getAdjajectStrings', () => {
    expect(getAdjajectStrings(0, 0, 2, lines)).toEqual(['.', '*', '...']);
    expect(getAdjajectStrings(0, 5, 7, lines)).toEqual(['.', '.', '.', '...', '.']);
    expect(getAdjajectStrings(2, 2, 3, lines)).toEqual(['.', '.', '.*', '.', '.', '.', '..', '.'])
  });

  test('isPartNumber', () => {
    expect(isPartNumber(0, numberInfo1.start, numberInfo1.end, lines)).toBe(
      true
    );
    expect(isPartNumber(0, numberInfo2.start, numberInfo2.end, lines)).toBe(
      false
    );
  });

  test('loadPartNumbers', () => {
    expect(
      loadPartNumbers(path.join(__dirname, '../fixtures/example.txt'))
    ).toEqual([467, 35, 633, 617, 592, 755, 664, 598]);
  });
});
