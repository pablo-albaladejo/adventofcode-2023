import { SimpleCalibrationStrategy } from './simple-calibration-strategy';

describe('Simple Calibration Strategy', () => {
  const simpleCalibrationStrategy = new SimpleCalibrationStrategy();
  it('returns an empty string for an empty string', () => {
    expect(simpleCalibrationStrategy.findDigitsInString('')).toEqual('');
  });

  it('returns an empty string for an chars only string', () => {
    expect(simpleCalibrationStrategy.findDigitsInString('abcdef')).toEqual('');
  });

  it('returns one number string for a one number string', () => {
    expect(simpleCalibrationStrategy.findDigitsInString('123')).toEqual('123');
  });

  it('returns one number string for a one number string wrapper by chars', () => {
    expect(simpleCalibrationStrategy.findDigitsInString('abc123def')).toEqual('123');
  });

  it('returns concatenated digits for multiple numbers string', () => {
    expect(simpleCalibrationStrategy.findDigitsInString('abc123def456hij')).toEqual('123456');
  });
});