import { readLinesFromTextFile } from '../helpers';

import path from 'path';
import { Calibration } from './calibration';
import { SimpleCalibrationStrategy } from './strategy/simple/simple-calibration-strategy';
import { AdvancedCalibrationStrategy } from './strategy/advanced/advanced-calibration-strategy';

describe('Simple Calibration', () => {
  const simpleCalibration = new Calibration(new SimpleCalibrationStrategy());

  describe('calibrationValue', () => {
    it('returns 0 for empty string', () => {
      expect(simpleCalibration.lineCalibrationValue('')).toEqual(0);
    });

    it('returns 0 for a line with no numbers', () => {
      expect(simpleCalibration.lineCalibrationValue('abcdef')).toEqual(0);
    });

    it('returns the number for a line with only a number', () => {
      expect(simpleCalibration.lineCalibrationValue('abc123def')).toEqual(13);
    });

    it('returns the concatenation of two numbers when it exists', () => {
      expect(simpleCalibration.lineCalibrationValue('abc123def456ghi')).toEqual(
        16
      );
    });

    it('calculates calibration value correctly', () => {
      expect(simpleCalibration.lineCalibrationValue('1abc2')).toBe(12);
      expect(simpleCalibration.lineCalibrationValue('pqr3stu8vwx')).toBe(38);
      expect(simpleCalibration.lineCalibrationValue('a1b2c3d4e5f')).toBe(15);
      expect(simpleCalibration.lineCalibrationValue('treb7uchet')).toBe(77);

      expect(
        simpleCalibration.lineCalibrationValue('khgdlljfjxt6sevenfour35pxone')
      ).toBe(65);
      expect(
        simpleCalibration.lineCalibrationValue('nine8msxvtnkzqhhnj128')
      ).toBe(88);
      expect(
        simpleCalibration.lineCalibrationValue(
          'ntlznczfone7ninesixxtxbkvpkonebmbc'
        )
      ).toBe(77);
      expect(simpleCalibration.lineCalibrationValue('3776')).toBe(36);
      expect(simpleCalibration.lineCalibrationValue('qpj44nine3three5')).toBe(
        45
      );
    });
  });

  it('calculates the example solution', () => {
    const filePath = path.join(__dirname, './fixtures/simple/example.txt');
    const input = readLinesFromTextFile(filePath);
    expect(simpleCalibration.solution(input)).toBe(142);
  });

  it('calculates the input solution', () => {
    const filePath = path.join(__dirname, './fixtures/simple/input.txt');
    const input = readLinesFromTextFile(filePath);
    expect(simpleCalibration.solution(input)).toBe(54667);
  });
});

describe('Advanced Calibration', () => {
  const advancedCalibration = new Calibration(
    new AdvancedCalibrationStrategy()
  );

  describe('calibrationValue', () => {
    it('returns 0 for empty string', () => {
      expect(advancedCalibration.lineCalibrationValue('')).toEqual(0);
    });

    it('returns 0 for a line with no numbers', () => {
      expect(advancedCalibration.lineCalibrationValue('abcdef')).toEqual(0);
    });

    it('returns the number for a line with only a number', () => {
      expect(advancedCalibration.lineCalibrationValue('abc123def')).toEqual(13);
    });

    it('returns the concatenation of two numbers when it exists', () => {
      expect(
        advancedCalibration.lineCalibrationValue('abc123def456ghi')
      ).toEqual(16);
    });

    it('returns the concatenation of two numbers when it exists as string', () => {
      expect(
        advancedCalibration.lineCalibrationValue('abctwodef123ghi456jkl')
      ).toEqual(26);
    });

    it('calculates calibration value correctly', () => {
      expect(advancedCalibration.lineCalibrationValue('two1nine')).toBe(29);
      expect(advancedCalibration.lineCalibrationValue('eightwothree')).toBe(83);
      expect(advancedCalibration.lineCalibrationValue('abcone2threexyz')).toBe(
        13
      );
      expect(advancedCalibration.lineCalibrationValue('xtwone3four')).toBe(24);
      expect(advancedCalibration.lineCalibrationValue('4nineeightseven2')).toBe(
        42
      );
      expect(advancedCalibration.lineCalibrationValue('zoneight234')).toBe(14);
      expect(advancedCalibration.lineCalibrationValue('7pqrstsixteen')).toBe(
        76
      );
    });
  });

  it('calculates the example solution', () => {
    const filePath = path.join(__dirname, './fixtures/advanced/example.txt');
    const input = readLinesFromTextFile(filePath);
    expect(advancedCalibration.solution(input)).toBe(281);
  });

  it('calculates the input solution', () => {
    const filePath = path.join(__dirname, './fixtures/advanced/input.txt');
    const input = readLinesFromTextFile(filePath);
    expect(advancedCalibration.solution(input)).toBe(54185);
  });
});
