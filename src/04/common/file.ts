import { readLinesFromTextFile } from '../../common/helpers';
import { Card } from '../card';

const parseValues = (str: string): number[] => {
  return str.trim().split(/\s+/).map(Number);
};

export const lineToCard = (line: string): Card => {
  const arrays = line.split(':');
  const values = arrays[1].split('|');
  const winning = parseValues(values[0]);
  const numbers = parseValues(values[1]);
  return new Card(winning, numbers);
};
export const loadCards = (filePath: string): Card[] => {
  const lines = readLinesFromTextFile(filePath);
  return lines.map((line) => lineToCard(line));
};
