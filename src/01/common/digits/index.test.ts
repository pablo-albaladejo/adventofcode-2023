import { digitsCalibrationValue } from '.';

describe('digitsCalibrationValue', () => {
  it('returns 0 for empty string', () => {
    expect(digitsCalibrationValue('')).toEqual(0);
  });

  it('returns the digit twice if only one digit is provided', () => {
    expect(digitsCalibrationValue('1')).toEqual(11);
  });

  it('returns first and last digit as number', () => {
    expect(digitsCalibrationValue('123456789')).toEqual(19);
  });
});