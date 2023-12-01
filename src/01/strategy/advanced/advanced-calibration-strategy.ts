import { replaceStringWithNumbers } from '../../common/string';
import { dictionary } from '../../constants';
import { CalibrationStrategy } from '../calibration-strategy.interface';

export class AdvancedCalibrationStrategy implements CalibrationStrategy {
  transformLine(line: string): string {
    return replaceStringWithNumbers(line, dictionary);
  }
}
