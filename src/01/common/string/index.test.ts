import { filterNonDigitsInString, replaceStringWithNumbers } from '.';
import { dictionary } from '../../constants';

describe('filterNonDigitsInString', () => {
  it('returns an empty string for an empty string', () => {
    expect(filterNonDigitsInString('')).toEqual('');
  });

  it('returns an empty string for an chars only string', () => {
    expect(filterNonDigitsInString('abcdef')).toEqual('');
  });

  it('returns one number string for a one number string', () => {
    expect(filterNonDigitsInString('123')).toEqual('123');
  });

  it('returns one number string for a one number string wrapper by chars', () => {
    expect(filterNonDigitsInString('abc123def')).toEqual('123');
  });

  it('returns concatenated digits for multiple numbers string', () => {
    expect(filterNonDigitsInString('abc123def456hij')).toEqual('123456');
  });
});

describe('filterNonNumbersInString', () => {
  const list = Object.keys(dictionary);
  it('filter letters from digits', () => {
    expect(replaceStringWithNumbers('123', dictionary)).toEqual('123');
    expect(replaceStringWithNumbers('123abc123', dictionary)).toEqual('123123');
    expect(replaceStringWithNumbers('abc123abc123', dictionary)).toEqual(
      '123123'
    );
    expect(replaceStringWithNumbers('abc123abc123abc', dictionary)).toEqual(
      '123123'
    );
    expect(replaceStringWithNumbers('123abc123abc', dictionary)).toEqual(
      '123123'
    );
    expect(replaceStringWithNumbers('123abc123abc123', dictionary)).toEqual(
      '123123123'
    );
  });

  it('returns decoupled string numbers', () => {
    expect(replaceStringWithNumbers('twone', dictionary)).toEqual('21');
    expect(replaceStringWithNumbers('threeight', dictionary)).toEqual('38');
    expect(replaceStringWithNumbers('eightwo', dictionary)).toEqual('82');
    expect(replaceStringWithNumbers('nineight', dictionary)).toEqual('98');
  });

  it('works with mixing value types', () => {
    expect(replaceStringWithNumbers('twone1', dictionary)).toEqual('211');
    expect(replaceStringWithNumbers('3threeight8', dictionary)).toEqual('3388');
    expect(replaceStringWithNumbers('abc2twone1cdf', dictionary)).toEqual(
      '2211'
    );
  });
});
