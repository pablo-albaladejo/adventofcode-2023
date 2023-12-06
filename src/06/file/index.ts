import { readLinesFromTextFile } from '../../helpers';
import { Race } from '../race';

export const lineToPart = (line: string): Race => {
  return new Race();
};

export const loadRaces = (filePath: string): Race[] => {
  const lines = readLinesFromTextFile(filePath);
  return lines.map((line) => lineToPart(line));
};
