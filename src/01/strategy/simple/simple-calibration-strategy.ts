import { filterNonDigitsInString } from '../../common/string';
import { CalibrationStrategy } from '../calibration-strategy.interface';

export class SimpleCalibrationStrategy implements CalibrationStrategy {
  transformLine(line: string): string {
    return filterNonDigitsInString(line);
  }
}
