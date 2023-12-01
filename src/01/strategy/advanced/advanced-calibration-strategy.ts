import { filterNonDigitsInString } from '../../common/string';
import { CalibrationStrategy } from '../calibration-strategy.interface';

const dictionary: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export class AdvancedCalibrationStrategy implements CalibrationStrategy {
  transformLine(line: string): string {
    const regex = new RegExp(Object.keys(dictionary).join('|'), 'g');
    const parsedLine = line.replace(regex, (match) => `${dictionary[match]}`);
    return filterNonDigitsInString(parsedLine);
  }
}
