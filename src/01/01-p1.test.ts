import { readLinesFromTextFile } from '../helpers';
import {
  calibrationValue,
  findNumbersInString,
  findNumbersInStringAsNumber,
  solution,
} from './01-p1';
import path from 'path';

describe('findNumbersInString', () => {
  it('returns an empty array for an empty string', () => {
    expect(findNumbersInString('')).toEqual([]);
  });

  it('returns an empty array for an chars only string', () => {
    expect(findNumbersInString('abcdef')).toEqual([]);
  });

  it('returns one item array for a one number string', () => {
    expect(findNumbersInString('123')).toEqual(['123']);
  });

  it('returns one item array for a one number string wrapper by chars', () => {
    expect(findNumbersInString('abc123def')).toEqual(['123']);
  });

  it('returns multiple item array for multiple numbers string', () => {
    expect(findNumbersInString('abc123def456hij')).toEqual(['123', '456']);
  });
});

describe('findNumbersInStringAsInt', () => {
  it('returns multiple item array for multiple numbers string', () => {
    expect(findNumbersInStringAsNumber('abc123def456hij')).toEqual([123, 456]);
  });
});

describe('findNumbersInStringAsInt', () => {
  it('returns multiple item array for multiple numbers string', () => {
    expect(findNumbersInStringAsNumber('abc123def456hij')).toEqual([123, 456]);
  });
});

describe('calibrationValue', () => {
  it('returns 0 for empty string', () => {
    expect(calibrationValue('')).toEqual(0);
  });

  it('returns 0 for a line with no numbers', () => {
    expect(calibrationValue('abcdef')).toEqual(0);
  });

  it('returns the number for a line with only a number', () => {
    expect(calibrationValue('abc123def')).toEqual(123123);
  });

  it('returns the concatenation of two numbers when it exists', () => {
    expect(calibrationValue('abc123def456ghi')).toEqual(123456);
  });

  it('calculates calibration value correctly', () => {
    expect(calibrationValue('1abc2')).toBe(12);
    expect(calibrationValue('pqr3stu8vwx')).toBe(38);
    expect(calibrationValue('a1b2c3d4e5f')).toBe(15);
    expect(calibrationValue('treb7uchet')).toBe(77);
  });
});

describe('solution', () => {
  it('calculates the example solution', () => {
    const filePath = path.join(__dirname, './assets/example.txt');
    const input = readLinesFromTextFile(filePath);
    expect(solution(input)).toBe(142);
  });
});
