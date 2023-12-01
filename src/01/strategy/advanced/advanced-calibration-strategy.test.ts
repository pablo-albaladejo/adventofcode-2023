import { AdvancedCalibrationStrategy } from './advanced-calibration-strategy';

describe('Simple Calibration Strategy', () => {
  const simpleCalibrationStrategy = new AdvancedCalibrationStrategy();
  it('returns an empty string for an empty string', () => {
    expect(simpleCalibrationStrategy.transformLine('')).toEqual('');
  });

  it('returns an empty string for an chars only string', () => {
    expect(simpleCalibrationStrategy.transformLine('abcdef')).toEqual('');
  });

  it('returns one number string for a one number string', () => {
    expect(simpleCalibrationStrategy.transformLine('123')).toEqual('123');
  });

  it('returns one number string for a one number string wrapper by chars', () => {
    expect(simpleCalibrationStrategy.transformLine('abc123def')).toEqual('123');
  });

  it('returns concatenated digits for multiple numbers string', () => {
    expect(simpleCalibrationStrategy.transformLine('abc123def456hij')).toEqual('123456');
  });
  
});