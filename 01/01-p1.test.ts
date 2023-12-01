import { findNumbersInString, findNumbersInStringAsNumber } from './01-p1';

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
