import { digitsCalibrationValue } from './common/digits';
import { CalibrationStrategy } from './strategy/calibration-strategy.interface';

export class Calibration {
  private strategy: CalibrationStrategy;

  constructor(strategy: CalibrationStrategy) {
    this.strategy = strategy;
  }

  lineCalibrationValue(line: string): number {
    const digits = this.strategy.transformLine(line);
    return digitsCalibrationValue(digits);
  }

  solution(lines: string[]): number {
    return lines.reduce(
      (acc, line) => acc + this.lineCalibrationValue(line),
      0
    );
  }
}
