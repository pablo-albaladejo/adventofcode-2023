import { CalibrationStrategy } from '../calibration-strategy.interface';

export class SimpleCalibrationStrategy implements CalibrationStrategy {
  findDigitsInString(line: string): string {
    return line.replace(/\D/g, '');
  }
}
