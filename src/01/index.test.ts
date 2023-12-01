import { readLinesFromTextFile } from '../helpers';
import { calibrationValue, findDigitsInString, solution } from '.';
import path from 'path';

describe('findDigitsInString', () => {
  it('returns an empty string for an empty string', () => {
    expect(findDigitsInString('')).toEqual('');
  });

  it('returns an empty string for an chars only string', () => {
    expect(findDigitsInString('abcdef')).toEqual('');
  });

  it('returns one number string for a one number string', () => {
    expect(findDigitsInString('123')).toEqual('123');
  });

  it('returns one number string for a one number string wrapper by chars', () => {
    expect(findDigitsInString('abc123def')).toEqual('123');
  });

  it('returns concatenated digits for multiple numbers string', () => {
    expect(findDigitsInString('abc123def456hij')).toEqual('123456');
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
    expect(calibrationValue('abc123def')).toEqual(13);
  });

  it('returns the concatenation of two numbers when it exists', () => {
    expect(calibrationValue('abc123def456ghi')).toEqual(16);
  });

  it('calculates calibration value correctly', () => {
    expect(calibrationValue('1abc2')).toBe(12);
    expect(calibrationValue('pqr3stu8vwx')).toBe(38);
    expect(calibrationValue('a1b2c3d4e5f')).toBe(15);
    expect(calibrationValue('treb7uchet')).toBe(77);

    expect(calibrationValue('khgdlljfjxt6sevenfour35pxone')).toBe(65);
    expect(calibrationValue('nine8msxvtnkzqhhnj128')).toBe(88);
    expect(calibrationValue('ntlznczfone7ninesixxtxbkvpkonebmbc')).toBe(77);
    expect(calibrationValue('3776')).toBe(36);
    expect(calibrationValue('qpj44nine3three5')).toBe(45);
  });
});

describe('solution', () => {
  it('calculates the example solution', () => {
    const filePath = path.join(__dirname, './fixtures/example.txt');
    const input = readLinesFromTextFile(filePath);
    expect(solution(input)).toBe(142);
  });

  it('calculates the input solution', () => {
    const filePath = path.join(__dirname, './fixtures/p1.txt');
    const input = readLinesFromTextFile(filePath);
    expect(solution(input)).toBe(54667);
  });
});