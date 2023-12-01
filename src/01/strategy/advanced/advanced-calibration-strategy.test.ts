import { AdvancedCalibrationStrategy } from './advanced-calibration-strategy';

describe('Simple Calibration Strategy', () => {
  const advancedCalibrationStrategy = new AdvancedCalibrationStrategy();
  it('converts one string number into one digit', () => {
    expect(advancedCalibrationStrategy.transformLine('one')).toEqual('1');
    expect(advancedCalibrationStrategy.transformLine('two')).toEqual('2');
    expect(advancedCalibrationStrategy.transformLine('three')).toEqual('3');
    expect(advancedCalibrationStrategy.transformLine('four')).toEqual('4');
    expect(advancedCalibrationStrategy.transformLine('five')).toEqual('5');
    expect(advancedCalibrationStrategy.transformLine('six')).toEqual('6');
    expect(advancedCalibrationStrategy.transformLine('seven')).toEqual('7');
    expect(advancedCalibrationStrategy.transformLine('eight')).toEqual('8');
    expect(advancedCalibrationStrategy.transformLine('nine')).toEqual('9');
  });

  it('works with complex numbers', () => {
    expect(advancedCalibrationStrategy.transformLine('oneone')).toEqual('11');
    expect(advancedCalibrationStrategy.transformLine('seventeen')).toEqual('7');
    expect(advancedCalibrationStrategy.transformLine('ninetytwo')).toEqual(
      '92'
    );
  });

  it('works with overlapping numbers', () => {
    expect(advancedCalibrationStrategy.transformLine('twone')).toEqual('21');
    expect(advancedCalibrationStrategy.transformLine('threeight')).toEqual(
      '38'
    );
    expect(advancedCalibrationStrategy.transformLine('eightwo')).toEqual('82');
    expect(advancedCalibrationStrategy.transformLine('nineight')).toEqual('98');
  });
});
